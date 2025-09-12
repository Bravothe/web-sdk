// src/WalletPaymentForm.js
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, Button, Typography, Space } from 'antd';

import TransactionSummary from './TransactionSummary.js';
import EnterPasscode from './EnterPasscode.js';
import PaymentSuccessModal from './PaymentSuccessModal.js';
import PaymentFailedModal from './PaymentFailedModal.js';
import InsufficientFundsModal from './InsufficientFundsModal.js';
import LoadingOverlay from './LoadingOverlay.js';

import createPaykitClient from './sdk/paykitClient.js'; // uses API_BASE_URL from constants.js

const { Title, Text } = Typography;

/**
 * Props:
 *  - publishableKey: string              // e.g. "pk_test_123"
 *  - enterpriseWalletNo: string          // enterprise wallet number
 *  - userWalletId: string                // paying user's wallet id
 *
 *  - amount: number
 *  - type?: string
 *  - particulars?: string
 *  - currency?: string                   // optional; server billingCurrency will override
 *  - merchantName?: string               // optional; server enterprise.name will override if missing
 *  - merchantLogo?: string
 *
 *  - zIndex?: number (default 2000)
 *  - onClose?: () => void
 *  - onSuccess?: (receipt) => void
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

  onClose,
  onSuccess,
}) {
  // ---------- Server-driven state ----------
  const [view, setView] = useState('loading'); // 'loading' | 'invalid' | 'summary' | 'passcode' | 'success' | 'failed' | 'insufficient'
  const [errorMsg, setErrorMsg] = useState('');
  const [session, setSession] = useState(null); // { sessionId, enterprise, user, billingCurrency, rates, ...}
  const [quote, setQuote] = useState(null);     // { quoteId, total, amount, tax, fee, currency, expiresAt }

  // UI state
  const [passcode, setPasscode] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;

  // ---------- API client (base URL is taken from src/sdk/constants.js) ----------
  const api = useMemo(() => {
    if (!publishableKey) return null;
    return createPaykitClient({ publishableKey });
  }, [publishableKey]);

  // ---------- Boot: initSession (keeps your ~7s overlay) with unmount guard ----------
  const boot = useCallback(
    async (signal) => {
      setErrorMsg('');
      setQuote(null);
      setPasscode('');

      // basic param checks
      if (!api) {
        if (!signal?.aborted) {
          setErrorMsg('SDK not configured: missing publishableKey.');
          setView('invalid');
        }
        return;
      }
      if (!enterpriseWalletNo || !userWalletId) {
        if (!signal?.aborted) {
          setErrorMsg('Missing enterpriseWalletNo or userWalletId.');
          setView('invalid');
        }
        return;
      }
      if (!amountValid) {
        if (!signal?.aborted) {
          setErrorMsg('The transaction amount is missing or invalid.');
          setView('invalid');
        }
        return;
      }

      const wait = (ms) => new Promise((r) => setTimeout(r, ms));

      try {
        const [initRes] = await Promise.all([
          api.initSession({ enterpriseWalletNo, userWalletId }),
          wait(7000), // keep your premium overlay timing
        ]);

        if (signal?.aborted) return;
        setSession(initRes);
        setView('summary');
      } catch (e) {
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

  // ---------- Build display details for your components ----------
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
      // Prefer server quote.total (includes fees/taxes). Fallback to amount until quote exists.
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
  const handleConfirm = async () => {
    if (!session || !api) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const q = await api.quote({ sessionId: session.sessionId, amount });
      setQuote(q);

      // client-side balance check with server total
      const balance = Number(session?.user?.balance || 0);
      if (balance < Number(q.total || 0)) {
        setView('insufficient');
      } else {
        setView('passcode');
      }
    } catch (e) {
      setErrorMsg(e?.message || 'Could not fetch quote.');
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
      const res = await api.charge({
        sessionId: session.sessionId,
        quoteId: quote.quoteId,
        passcode,
      });

      // success
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
      if (e?.code === 'INSUFFICIENT_FUNDS') {
        setView('insufficient');
      } else {
        setErrorMsg(e?.message || 'Payment failed.');
        setView('failed');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const closeAndReset = () => {
    setPasscode('');
    setQuote(null);
    setView('summary'); // keep flow open; host app may also close wrapper
    onClose?.();
  };

  // ---------- Render helpers ----------
  const renderLoading = () => (
    <LoadingOverlay open zIndex={zIndex} brand="EVzone Pay" tip="Preparing secure checkout…" />
  );

  const renderInvalid = () => (
    <Modal open centered footer={null} onCancel={closeAndReset} zIndex={zIndex} maskClosable={false}>
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Title level={4} style={{ margin: 0 }}>Cannot Continue</Title>
        <Text type="secondary">{errorMsg || 'Invalid configuration.'}</Text>
        <Button type="primary" onClick={closeAndReset}>Close</Button>
      </Space>
    </Modal>
  );

  // ⬇️ Summary (server enterprise/currency + live total when quote exists)
  const renderSummary = () => (
    <TransactionSummary
      transactionDetails={details}
      onConfirm={handleConfirm}
      onCancel={closeAndReset}
      // If your TransactionSummary supports these, it’ll show spinner/disable:
      confirmDisabled={submitting}
      confirmLoading={submitting}
    />
  );

  // ⬇️ Passcode (shows server totals through details.totalBilling)
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

  // ---------- Router ----------
  if (view === 'loading') return renderLoading();
  if (view === 'invalid') return renderInvalid();
  if (view === 'summary') return renderSummary();
  if (view === 'passcode') return renderPasscode();

  if (view === 'success') {
    return (
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
  }

  if (view === 'failed') {
    return (
      <PaymentFailedModal
        open
        zIndex={zIndex}
        reason={errorMsg}     // safe if component ignores it
        onClose={() => setView('summary')}
      />
    );
  }

  if (view === 'insufficient') {
    return (
      <InsufficientFundsModal
        open
        zIndex={zIndex}
        onClose={() => setView('summary')}
      />
    );
  }

  return null;
}

export default WalletPaymentForm;
export { WalletPaymentForm };
