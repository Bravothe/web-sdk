// src/hooks/useWalletPaymentFlow.js
import { useCallback, useEffect, useMemo, useState } from 'react';
import createPaykitClient from '../sdk/paykitClient.js';
import { getUserNoFromCookie } from '../utils/cookie.js';

/**
 * Encapsulates all checkout/session/quote/charge logic.
 * UI components subscribe to this hook and render based on its state.
 */
export default function useWalletPaymentFlow({
  // preferred + legacy identifiers
  publicKey,
  publishableKey,
  brandId,
  enterpriseNo,
  enterpriseWalletNo,
  userWalletId,

  // transaction display fields
  amount,
  type,
  particulars,
  currency,
  merchantName,
  merchantLogo,

  // timings
  minProcessingMs = 5000,

  // callbacks
  onClose,
  onSuccess,
}) {
  // Resolve effective identifiers (prefer NEW names)
  const key = publicKey || publishableKey || null;
  const ent = enterpriseNo || enterpriseWalletNo || null;

  // ---------- State ----------
  const [view, setView] = useState('loading'); // loading | signin | invalid | summary | passcode | success | failed | insufficient
  const [errorMsg, setErrorMsg] = useState('');
  const [session, setSession] = useState(null);
  const [quote, setQuote] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [processing, setProcessing] = useState(null); // 'quote' | 'charge' | null

  // ---------- Derived ----------
  const amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;

  const api = useMemo(() => {
    if (!key) return null;
    // SDK prefers { publicKey }, stays backward compatible with publishableKey
    return createPaykitClient({ publicKey: key, brandId });
  }, [key, brandId]);

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  // Enforce minimum visible duration for the processing animation
  async function withMinProcessing(kind, task) {
    setProcessing(kind);
    const start = Date.now();
    try {
      return await task();
    } finally {
      const elapsed = Date.now() - start;
      const remain = Math.max(0, Number(minProcessingMs) - elapsed);
      if (remain > 0) await wait(remain);
      setProcessing(null);
    }
  }

  // ---------- Boot / init session ----------
  const boot = useCallback(async () => {
    setErrorMsg('');
    setQuote(null);

    if (!api) {
      setErrorMsg('Missing publicKey/publishableKey');
      setView('invalid');
      return;
    }

    const cookieUserNo = !userWalletId ? getUserNoFromCookie() : null;

    if (!ent || (!userWalletId && !cookieUserNo)) {
      setView('signin'); // ask user to sign in
      return;
    }
    if (!amountValid) {
      setErrorMsg('Invalid amount');
      setView('invalid');
      return;
    }

    try {
      // Send both NEW+legacy enterprise fields for maximum compatibility
      const initBody = {
        enterpriseNo: ent,
        enterpriseWalletNo: ent,
        ...(userWalletId ? { userWalletId } : { userNo: cookieUserNo }),
        ...(brandId ? { brandId } : {}),
      };

      const [initRes] = await Promise.all([
        api.initSession(initBody),
        wait(7000), // keep existing premium overlay timing
      ]);

      setSession(initRes);
      setView('summary');
    } catch (e) {
      try { console.error('initSession failed:', e); } catch {}
      setErrorMsg(e?.message || 'Failed to initialize session.');
      setView('invalid');
    }
  }, [api, ent, userWalletId, amountValid, brandId]);

  // Auto-boot on mount / when inputs change
  useEffect(() => {
    setView('loading');
    let cancelled = false;
    (async () => {
      if (!cancelled) await boot();
    })();
    return () => { cancelled = true; };
  }, [boot]);

  // Allow the UI to trigger a fresh boot (e.g., after login success)
  const restart = useCallback(() => {
    setView('loading');
    boot();
  }, [boot]);

  // ---------- Details for display ----------
  const details = useMemo(() => {
    const billingCurrency = session?.billingCurrency || currency || 'UGX';
    const mName = merchantName || session?.enterprise?.name || 'Unknown Merchant';
    const toId = session?.enterprise?.walletNo || '—';

    return {
      type: type || 'Booking',
      id: toId,
      particulars: particulars || 'Hotel Booking',
      billedCurrency: billingCurrency,
      billedAmount: amount,
      totalBilling: quote?.total ?? amount,
      merchantName: mName,
      merchantLogo: merchantLogo || '',
    };
  }, [
    amount,
    currency,
    merchantLogo,
    merchantName,
    particulars,
    quote?.total,
    session?.billingCurrency,
    session?.enterprise?.name,
    session?.enterprise?.walletNo,
    type,
  ]);

  // ---------- Actions ----------
  const handleConfirm = useCallback(async () => {
    if (!session || !api) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const q = await withMinProcessing('quote', () =>
        api.quote({ sessionId: session.sessionId, amount })
      );
      setQuote(q);

      const balance = Number(session?.user?.balance || 0);
      if (balance < Number(q.total || 0)) setView('insufficient');
      else setView('passcode');
    } catch (e) {
      try { console.error('quote failed:', e); } catch {}
      setErrorMsg('Could not fetch quote.');
      setView('failed');
    } finally {
      setSubmitting(false);
    }
  }, [api, session, amount]);

  const handleSubmit = useCallback(async (passcode) => {
    if (!session || !quote || !api) return;
    if (!passcode || String(passcode).length !== 6) return;

    setSubmitting(true);
    setErrorMsg('');
    try {
      const res = await withMinProcessing('charge', () =>
        api.charge({
          sessionId: session.sessionId,
          quoteId: quote.quoteId,
          passcode,
        })
      );

      setView('success');
      onSuccess?.({
        transactionId: res?.chargeId || quote?.quoteId,
        sessionId: session.sessionId,
        enterprise: session.enterprise,
        user: session.user,
        amount: quote.total,
        currency: quote.currency || details.billedCurrency,
        type: details.type,
        particulars: details.particulars,
        receipt: res?.receipt,
      });
    } catch (e) {
      if (e?.code === 'INSUFFICIENT_FUNDS') setView('insufficient');
      else {
        try { console.error('charge failed:', e); } catch {}
        setErrorMsg('Payment failed.');
        setView('failed');
      }
    } finally {
      setSubmitting(false);
    }
  }, [api, session, quote, details, onSuccess]);

  const closeAndReset = useCallback(() => {
    setQuote(null);
    setView('summary');
    onClose?.();
  }, [onClose]);

  const goToSummary = useCallback(() => setView('summary'), []);

  return {
    // state
    view,
    errorMsg,
    session,
    quote,
    submitting,
    processing,

    // derived
    details,

    // actions
    handleConfirm,
    handleSubmit,
    closeAndReset,
    restart,
    goToSummary,
  };
}
