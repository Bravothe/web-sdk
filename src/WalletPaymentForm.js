// src/WalletPaymentForm.js
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, Button, Typography, Space } from 'antd';

import TransactionSummary from './TransactionSummary.js';
import EnterPasscode from './EnterPasscode.js';
import PaymentSuccessModal from './PaymentSuccessModal.js';
import PaymentFailedModal from './PaymentFailedModal.js';
import InsufficientFundsModal from './InsufficientFundsModal.js';
import LoadingOverlay from './LoadingOverlay.js';
import ProcessingModal from './ProcessingModal.js';

import HasAccountSummary from './HasAccountSummary.js'; // sign-in modal
import { getUserNoFromCookie, setUserNoCookie } from './utils/cookie.js';

import createPaykitClient from './sdk/paykitClient.js';

const { Title, Text } = Typography;

const DEFAULT_PROCESSING_GIF =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif';

/**
 * Props:
 *  - publishableKey, enterpriseWalletNo, userWalletId
 *  - amount, type?, particulars?, currency?, merchantName?, merchantLogo?
 *  - processingSrc?: string
 *  - minProcessingMs?: number
 *  - zIndex?: number
 *  - onClose?: () => void
 *  - onSuccess?: (payload) => void
 *  - supportEmail?: string         // ← NEW (shown in Cannot Continue modal)
 *  - supportPhone?: string         // ← NEW (shown in Cannot Continue modal)
 */
function WalletPaymentForm({
  publishableKey,
  enterpriseWalletNo,
  userWalletId,

  zIndex = 2000,

  amount,
  type,
  particulars,
  currency,
  merchantName,
  merchantLogo,

  processingSrc,
  minProcessingMs = 5000,

  onClose,
  onSuccess,

  // NEW
  supportEmail,
  supportPhone,
}) {
  const [view, setView] = useState('loading'); // 'loading' | 'signin' | 'invalid' | 'summary' | 'passcode' | 'success' | 'failed' | 'insufficient'
  const [errorMsg, setErrorMsg] = useState(''); // kept for logging only
  const [session, setSession] = useState(null);
  const [quote, setQuote] = useState(null);

  const [passcode, setPasscode] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [processing, setProcessing] = useState(null); // 'quote' | 'charge' | null

  const amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;

  const api = useMemo(() => {
    if (!publishableKey) return null;
    return createPaykitClient({ publishableKey });
  }, [publishableKey]);

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

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

  const boot = useCallback(
    async (signal) => {
      setErrorMsg('');
      setQuote(null);
      setPasscode('');

      if (!api) {
        if (!signal?.aborted) {
          // Don’t expose server-y message to user; just route to invalid
          setErrorMsg('Missing publishableKey');
          setView('invalid');
        }
        return;
      }

      const cookieUserNo = !userWalletId ? getUserNoFromCookie() : null;

      if (!enterpriseWalletNo || (!userWalletId && !cookieUserNo)) {
        if (!signal?.aborted) setView('signin'); // ask user to sign in
        return;
      }
      if (!amountValid) {
        if (!signal?.aborted) {
          setErrorMsg('Invalid amount');
          setView('invalid');
        }
        return;
      }

      try {
        const initBody = {
          enterpriseWalletNo,
          ...(userWalletId ? { userWalletId } : { userNo: cookieUserNo }),
        };

        const [initRes] = await Promise.all([
          api.initSession(initBody),
          wait(7000),
        ]);

        if (signal?.aborted) return;
        setSession(initRes);
        setView('summary');
      } catch (e) {
        // Log internally but DO NOT show raw server error to end user
        try { console.error('initSession failed:', e); } catch {}
        if (signal?.aborted) return;
        setErrorMsg(e?.message || 'Failed to initialize session.');
        setView('invalid');
      }
    },
    [api, enterpriseWalletNo, userWalletId, amountValid]
  );

  useEffect(() => {
    setView('loading');
    const ctrl = new AbortController();
    boot(ctrl.signal);
    return () => ctrl.abort();
  }, [boot]);

  const handleLoginSuccess = (userNo /*, authToken */) => {
    try { if (userNo) setUserNoCookie(userNo); } catch {}
    setView('loading');
    const ctrl = new AbortController();
    boot(ctrl.signal);
  };

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

  const handleConfirm = async () => {
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
  };

  const handleSubmit = async () => {
    if (!session || !quote || !api) return;
    if (passcode.length !== 6) return;

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
  };

  const closeAndReset = () => {
    setPasscode('');
    setQuote(null);
    setView('summary');
    onClose?.();
  };

  const renderLoading = () => (
    <LoadingOverlay open zIndex={zIndex} brand="EVzone Pay" tip="Preparing secure checkout…" />
  );

  // FRIENDLY: do not leak server error; show platform contact instead
  const renderInvalid = () => {
    const contactLine =
      supportEmail && supportPhone
        ? `${supportEmail} or ${supportPhone}`
        : (supportEmail || supportPhone || '');

    return (
      <Modal open centered footer={null} onCancel={closeAndReset} zIndex={zIndex} maskClosable={false}>
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <Title level={4} style={{ margin: 0 }}>Cannot Continue</Title>
          <Text type="secondary" style={{ textAlign: 'center' }}>
            We couldn’t start the checkout right now. No charge was made.
            {contactLine ? (
              <>
                <br />
                For help, please contact <b>{contactLine}</b>.
              </>
            ) : null}
          </Text>
          <Button type="primary" onClick={closeAndReset}>Close</Button>
        </Space>
      </Modal>
    );
  };

  const renderSummary = () => (
    <TransactionSummary
      transactionDetails={details}
      onConfirm={handleConfirm}
      onCancel={closeAndReset}
      confirmDisabled={submitting}
      confirmLoading={submitting}
    />
  );

  const renderPasscode = () => (
    <EnterPasscode
      passcode={passcode}
      setPasscode={setPasscode}
      transactionDetails={details}
      onSubmit={handleSubmit}
      onBack={() => setView('summary')}
      submitting={submitting}
      quote={quote}
    />
  );

  let content = null;
  if (view === 'loading')       content = renderLoading();
  else if (view === 'signin')   content = (
    <HasAccountSummary
      open
      onLoginSuccess={handleLoginSuccess}
      onClose={closeAndReset}
      zIndex={zIndex}
    />
  );
  else if (view === 'invalid')  content = renderInvalid();
  else if (view === 'summary')  content = renderSummary();
  else if (view === 'passcode') content = renderPasscode();
  else if (view === 'success') {
    content = (
      <PaymentSuccessModal
        open
        amount={quote?.total ?? amount}
        currency={quote?.currency || details.billedCurrency}
        zIndex={zIndex}
        onClose={() => {
          setView('summary');
          onClose?.();
        }}
      />
    );
  } else if (view === 'failed') {
    content = (
      <PaymentFailedModal
        open
        zIndex={zIndex}
        reason={errorMsg}
        onClose={() => setView('summary')}
      />
    );
  } else if (view === 'insufficient') {
    content = (
      <InsufficientFundsModal
        open
        zIndex={zIndex}
        onClose={() => setView('summary')}
      />
    );
  }

  if (processing) {
    const procSrc = processingSrc || DEFAULT_PROCESSING_GIF;
    return (
      <ProcessingModal
        open
        src={procSrc}
        message={processing === 'quote' ? 'Hang tight—almost ready…' : 'Processing payment…'}
        subText="Please wait"
        zIndex={zIndex}
      />
    );
  }

  return content;
}

export default WalletPaymentForm;
export { WalletPaymentForm };
