// src/hooks/useWalletPaymentFlow.js
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import createPaykitClient from '../sdk/paykitClient.js';
import {
  getUserNoFromCookie,
  getUserNosFromCookie,   // scans list + enumerated cookies
  setUserNoCookie,        // set the selected/active user
} from '../utils/cookie.js';

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
  // views: loading | accountPicker | signin | invalid | summary | passcode | success | failed | insufficient
  const [view, setView] = useState('loading');
  const [errorMsg, setErrorMsg] = useState('');
  const [session, setSession] = useState(null);
  const [quote, setQuote] = useState(null);
  const [accounts, setAccounts] = useState([]); // [{userNo, walletId, owner, email, photo}]

  const [submitting, setSubmitting] = useState(false);
  const [processing, setProcessing] = useState(null); // 'quote' | 'charge' | null

  // Remember a pick during this flow so we don't re-show the picker until the component is reopened
  const [pickedUserNoThisFlow, setPickedUserNoThisFlow] = useState(null);

  // A one-shot "force this user on next boot" flag to avoid double-click
  const forceUserNoRef = useRef(null);

  // ---------- Derived ----------
  const amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;

  const api = useMemo(() => {
    if (!key) return null;
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
  const boot = useCallback(async (opts = {}) => {
    setErrorMsg('');
    setQuote(null);
    setAccounts([]);

    const forceUserNo = opts.forceUserNo ?? forceUserNoRef.current;
    // consume the one-shot flag immediately so we don't reuse it accidentally
    forceUserNoRef.current = null;

    if (!api) {
      setErrorMsg('Missing publicKey/publishableKey');
      setView('invalid');
      return;
    }
    if (!ent) {
      setView('signin');
      return;
    }
    if (!amountValid) {
      setErrorMsg('Invalid amount');
      setView('invalid');
      return;
    }

    // If caller didn't force a userWalletId, check cookies/accounts first
    let cookieUserNo = !userWalletId ? (getUserNoFromCookie() || null) : null;

    if (!userWalletId) {
      // Combine all known sources: utils helper + fallback scan for evz_user1/evz_user2
      let userNos = dedupe([
        ...getUserNosFromCookie(),     // evz_user_no / evz_user_no_2 + list cookie
        ...scanAltEnumeratedCookies(), // evz_user1 / evz_user2
      ]).filter(Boolean);

      if (forceUserNo) {
        // If we were told to force a specific user, ensure cookie is set and skip the picker
        if (!cookieUserNo || cookieUserNo !== forceUserNo) {
          try { setUserNoCookie(forceUserNo); } catch {}
        }
        cookieUserNo = forceUserNo;
        // make sure the forced user exists in the list locally (helps when cookies are inconsistent)
        if (!userNos.includes(forceUserNo)) userNos.push(forceUserNo);
      }

      if (userNos.length === 0) {
        // 0 accounts -> signin
        setView('signin');
        return;
      }

      if (!forceUserNo) {
        if (userNos.length === 1) {
          // 1 account -> auto-select and proceed (ensure cookie set)
          const only = userNos[0];
          if (!cookieUserNo || cookieUserNo !== only) {
            try { setUserNoCookie(only); } catch {}
            cookieUserNo = only;
          }
        } else if (userNos.length > 1) {
          // 2+ accounts -> show picker *unless* we already picked one earlier in this flow
          if (!pickedUserNoThisFlow) {
            try {
              if (typeof api.lookupUsersByNo === 'function') {
                const res = await api.lookupUsersByNo(userNos);
                const list = Array.isArray(res?.users)
                  ? res.users
                  : (Array.isArray(res) ? res : []);
                setAccounts(list.length > 0 ? list : buildPlaceholderAccounts(userNos));
              } else {
                setAccounts(buildPlaceholderAccounts(userNos));
              }
            } catch {
              setAccounts(buildPlaceholderAccounts(userNos));
            }
            setView('accountPicker');
            return; // wait for user to pick, then restart({ forceUserNo })
          }
          // we already picked in this flow; continue with that
          cookieUserNo = pickedUserNoThisFlow || cookieUserNo || null;
        }
      }
    }

    // At this point we either have a forced userWalletId or a cookieUserNo
    if (!userWalletId && !cookieUserNo) {
      setView('signin');
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
        wait(7000), // keep existing overlay timing
      ]);

      setSession(initRes);
      setView('summary');
    } catch (e) {
      try { console.error('initSession failed:', e); } catch {}
      setErrorMsg(e?.message || 'Failed to initialize session.');
      setView('invalid');
    }
  }, [api, ent, userWalletId, amountValid, brandId, minProcessingMs, pickedUserNoThisFlow]);

  // Auto-boot on mount / when inputs change (each time the form is shown, this component mounts → checks cookies first)
  useEffect(() => {
    setView('loading');
    let cancelled = false;
    (async () => {
      if (!cancelled) await boot();
    })();
    return () => { cancelled = true; };
  }, [boot]);

  // Allow the UI to trigger a fresh boot; optionally force a specific userNo
  const restart = useCallback((forceUserNo) => {
    if (forceUserNo) {
      forceUserNoRef.current = forceUserNo; // one-shot
    }
    setView('loading');
    boot({ forceUserNo });
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

  // When user chooses an account from the picker: set primary cookie, remember pick, and restart *forcing* that user
  const selectAccount = useCallback((userNo) => {
    try { if (userNo) setUserNoCookie(userNo); } catch {}
    setPickedUserNoThisFlow(userNo);
    restart(userNo); // force next boot to use this user directly (prevents the second picker)
  }, [restart]);

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

    // multi-account
    accounts,
    selectAccount,

    // actions
    handleConfirm,
    handleSubmit,
    closeAndReset,
    restart,
    goToSummary,
  };
}

/* ---------- helpers (local to this file) ---------- */

// Read alternate enumerated cookies like: evz_user1=U-000123; evz_user2=U-000789
function scanAltEnumeratedCookies() {
  if (typeof document === 'undefined' || !document.cookie) return [];
  const items = document.cookie.split('; ');
  const out = [];
  const re = /^evz_user\d+$/i; // supports evz_user1, evz_user2, ...
  for (const raw of items) {
    const eq = raw.indexOf('=');
    if (eq === -1) continue;
    const name = decodeURIComponent(raw.slice(0, eq).trim());
    const value = decodeURIComponent(raw.slice(eq + 1));
    if (re.test(name) && value) out.push(value);
  }
  return out;
}

function dedupe(arr) {
  return Array.from(new Set(arr || []));
}

function buildPlaceholderAccounts(userNos) {
  return userNos.map((u) => ({
    userNo: u,
    walletId: null,
    owner: `User ${String(u).slice(-3)}`,
    email: `${String(u).toLowerCase().replace(/[^a-z0-9]+/g, '')}@example.com`,
    photo: `https://i.pravatar.cc/80?u=${encodeURIComponent(u)}`,
  }));
}
