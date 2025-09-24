// src/WalletPaymentForm.js
import React, { useRef, useState } from 'react';
import { Modal, Button, Typography, Space } from 'antd';

import TransactionSummary from './TransactionSummary.js';
import EnterPasscode from './EnterPasscode.js';
import PaymentSuccessModal from './PaymentSuccessModal.js';
import PaymentFailedModal from './PaymentFailedModal.js';
import InsufficientFundsModal from './InsufficientFundsModal.js';
import LoadingOverlay from './LoadingOverlay.js';
import ProcessingModal from './ProcessingModal.js';
import HasAccountSummary from './HasAccountSummary.js';
import AccountPickerModal from './AccountPickerModal.js';
import MobileMoneyFallbackModal from './MobileMoneyFallbackModal.js';
import CardPaymentModal from './CardPaymentModal.js';
import BankPaymentModal from './BankPaymentModal.js';

import useWalletPaymentFlow from './hooks/useWalletPaymentFlow.js';
import { createMobileMoneyDeposit } from './sdk/createMobileMoneyDeposit.js';

const { Title, Text } = Typography;

const DEFAULT_PROCESSING_GIF =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif';

function WalletPaymentForm(props) {
  const {
    zIndex = 2000,
    processingSrc,
    supportEmail,
    supportPhone,
    onSuccess: hostOnSuccess,   // host callback (deferred until success modal closes)
    minProcessingMs = 1500,

    publishableKey,             // if your hook uses it
    enterpriseWalletNo,         // passed back in payload
    transactionType,            // friendly label
  } = props;

  // ── Local success/failed override so modals always show ────────────────────
  const [forcedView, setForcedView] = useState(null); // 'success' | 'failed' | null
  const [forcedReason, setForcedReason] = useState('');
  const [forcedAmount, setForcedAmount] = useState(null);
  const [forcedCurrency, setForcedCurrency] = useState(null);
  const pendingSuccessPayloadRef = useRef(null); // call host after user closes success modal

  const resetForced = () => {
    setForcedView(null);
    setForcedReason('');
    setForcedAmount(null);
    setForcedCurrency(null);
    pendingSuccessPayloadRef.current = null;
  };

  // Intercept the hook's success: show modal first, then let host know on "Done"
  const handleHookSuccess = (payload) => {
    pendingSuccessPayloadRef.current = payload;
    setForcedAmount(Number(payload?.amount ?? 0));
    setForcedCurrency(payload?.currency || 'UGX');
    setForcedView('success');
  };

  // Map transactionType to what the hook expects + inject our onSuccess wrapper
  const hookProps = {
    ...props,
    onSuccess: handleHookSuccess,                // << we intercept here
    type: transactionType || props.type,
    particulars: transactionType || props.particulars,
    publishableKey,
    enterpriseWalletNo,
  };

  const {
    view,
    errorMsg,
    quote,
    submitting,
    processing,
    details,
    accounts,
    selectAccount,
    handleConfirm,
    handleSubmit,
    closeAndReset,
    restart,
    goToSummary,
  } = useWalletPaymentFlow(hookProps);

  const [passcode, setPasscode] = useState('');

  // Alternate methods
  const [showMM, setShowMM] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [altProcessing, setAltProcessing] = useState(false);

  const renderLoading = () => (
    <LoadingOverlay open zIndex={zIndex} brand="EVzone Pay" tip="Preparing secure checkout…" />
  );

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
            {contactLine ? (<><br />For help, please contact <b>{contactLine}</b>.</>) : null}
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
      onSubmit={async () => {
        // Hook will call handleHookSuccess on success (we don't close here)
        await handleSubmit(passcode);
      }}
      onBack={goToSummary}
      submitting={submitting}
      quote={quote}
    />
  );

  // ── Never let processing mask success/failed ───────────────────────────────
  if (view === 'loading') return renderLoading();
  const showProcessing =
    (processing || altProcessing) &&
    !['success', 'failed'].includes(view) &&
    !forcedView;

  if (showProcessing) {
    const procSrc = processingSrc || DEFAULT_PROCESSING_GIF;
    return <ProcessingModal open src={procSrc} message="Processing…" subText="Please wait" zIndex={zIndex} />;
  }

  // ── Alternate method transitions ───────────────────────────────────────────
  const delay = Math.max(0, Number(minProcessingMs) || 1500);
  const startMobileMoneyFlow = () => {
    setAltProcessing(true);
    setTimeout(() => {
      setAltProcessing(false);
      setShowMM(true);
      setShowCard(false);
      setShowBank(false);
    }, delay);
  };
  const startCardFlow = () => {
    setAltProcessing(true);
    setTimeout(() => {
      setAltProcessing(false);
      setShowCard(true);
      setShowMM(false);
      setShowBank(false);
    }, delay);
  };
  const startBankFlow = () => {
    setAltProcessing(true);
    setTimeout(() => {
      setAltProcessing(false);
      setShowBank(true);
      setShowMM(false);
      setShowCard(false);
    }, delay);
  };

  // ── Alternate: Mobile Money — show success/failed here too ─────────────────
  const handleAltMobileSubmit = async ({ msisdn, e164, country, provider }) => {
    const billedAmount = quote?.total ?? details.billedAmount;
    const billedCurrency = quote?.currency || details.billedCurrency || 'UGX';

    try {
      setAltProcessing(true);
      setShowMM(false);

      const resp = await createMobileMoneyDeposit({
        msisdn: e164 || msisdn,
        providerValue: provider,
        country: country || 'UG',
        amount: Number(billedAmount || 0),
        currency: billedCurrency,
        accountHolder: 'EVzone Customer',
        emailAssociated: '',
      });

      // Buffer host callback until user confirms success modal
      pendingSuccessPayloadRef.current = {
        transactionId:
          resp?.provider_txn_id ||
          resp?.transaction_id ||
          resp?.reference_id ||
          resp?.data?.provider_txn_id ||
          resp?.data?.reference_id ||
          'ALT-MM-' + Math.floor(Math.random() * 1e9),
        sessionId: null,
        enterprise: { walletNo: enterpriseWalletNo || null },
        user: null,
        amount: billedAmount,
        currency: billedCurrency,
        type: transactionType || details.type,
        particulars: transactionType || details.particulars,
        paymentMethod: 'MOBILE_MONEY',
        paymentMeta: {
          msisdn: e164 || msisdn,
          country,
          provider,
          upstream: resp,
        },
      };

      setForcedAmount(billedAmount);
      setForcedCurrency(billedCurrency);
      setForcedView('success');
    } catch (err) {
      const msg =
        err?.body?.error?.message ||
        err?.message ||
        'Could not start Mobile Money payment.';
      setForcedReason(msg);
      setForcedView('failed');
    } finally {
      setAltProcessing(false);
    }
  };

  // ── Other alts keep their original behavior ────────────────────────────────
  const handleCardSubmit = (card) => {
    try {
      hostOnSuccess?.({
        transactionId: 'CARD-' + Math.floor(Math.random() * 1e9),
        sessionId: null,
        enterprise: { walletNo: enterpriseWalletNo || null },
        user: null,
        amount: quote?.total ?? details.billedAmount,
        currency: quote?.currency || details.billedCurrency,
        type: transactionType || details.type,
        particulars: transactionType || details.particulars,
        paymentMethod: 'CARD',
        paymentMeta: {
          brand: card.brand || null,
          last4: String(card.cardNumber || '').slice(-4),
          save: !!card.save,
          phone: card.phone || null,
          discountCode: card.discountCode || null,
        },
      });
    } catch {}
    setShowCard(false);
    closeAndReset();
  };

  const handleBankSubmit = (bankPayload) => {
    try {
      hostOnSuccess?.({
        transactionId: 'BANK-' + Math.floor(Math.random() * 1e9),
        sessionId: null,
        enterprise: { walletNo: enterpriseWalletNo || null },
        user: null,
        amount: quote?.total ?? details.billedAmount,
        currency: quote?.currency || details?.billedCurrency,
        type: transactionType || details.type,
        particulars: transactionType || details.particulars,
        paymentMethod: 'BANK',
        paymentMeta: bankPayload,
      });
    } catch {}
    setShowBank(false);
    closeAndReset();
  };

  // ── Single active modal / view (success/failed take priority) ─────────────
  let content = null;

  if (forcedView === 'success') {
    content = (
      <PaymentSuccessModal
        open
        amount={forcedAmount ?? (quote?.total ?? details?.billedAmount)}
        currency={forcedCurrency ?? (quote?.currency || details?.billedCurrency)}
        zIndex={zIndex}
        onClose={() => {
          // now it is safe to notify host (they might close the parent)
          try { hostOnSuccess?.(pendingSuccessPayloadRef.current); } catch {}
          resetForced();
          closeAndReset();
        }}
      />
    );
  } else if (forcedView === 'failed') {
    content = (
      <PaymentFailedModal
        open
        zIndex={zIndex}
        reason={forcedReason || 'Payment failed'}
        onClose={() => {
          resetForced();
          // keep the form open after failure so user can retry
        }}
      />
    );
  } else if (showMM) {
    content = (
      <MobileMoneyFallbackModal
        open
        onCancel={() => setShowMM(false)}
        onSubmit={handleAltMobileSubmit}
        zIndex={zIndex}
      />
    );
  } else if (showCard) {
    content = (
      <CardPaymentModal
        open
        onCancel={() => setShowCard(false)}
        onSubmit={handleCardSubmit}
        zIndex={zIndex}
      />
    );
  } else if (showBank) {
    content = (
      <BankPaymentModal
        open
        onCancel={() => setShowBank(false)}
        onSubmit={handleBankSubmit}
        zIndex={zIndex}
      />
    );
  } else if (view === 'accountPicker') {
    content = (
      <AccountPickerModal
        open
        zIndex={zIndex}
        accounts={accounts || []}
        onSelect={(userNo) => { setPasscode(''); selectAccount?.(userNo); }}
        onClose={closeAndReset}
      />
    );
  } else if (view === 'signin') {
    content = (
      <HasAccountSummary
        open
        onLoginSuccess={(userNo) => { setPasscode(''); selectAccount?.(userNo); }}
        onClose={closeAndReset}
        zIndex={zIndex}
      />
    );
  } else if (view === 'invalid') {
    content = renderInvalid();
  } else if (view === 'summary') {
    content = renderSummary();
  } else if (view === 'passcode') {
    content = renderPasscode();
  } else if (view === 'success') {
    // In case the hook sets success (we still show it)
    content = (
      <PaymentSuccessModal
        open
        amount={quote?.total ?? details.billedAmount}
        currency={quote?.currency || details.billedCurrency}
        zIndex={zIndex}
        onClose={() => {
          try { hostOnSuccess?.(pendingSuccessPayloadRef.current); } catch {}
          closeAndReset();
        }}
      />
    );
  } else if (view === 'failed') {
    content = (
      <PaymentFailedModal
        open
        zIndex={zIndex}
        reason={errorMsg}
        onClose={() => {
          // keep open; user can go back / retry
        }}
      />
    );
  } else if (view === 'insufficient') {
    content = (
      <InsufficientFundsModal
        open
        zIndex={zIndex}
        onClose={closeAndReset}
        onOpenAltMobile={startMobileMoneyFlow} // Mobile Money
        onOpenCard={startCardFlow}            // Card
        onOpenBank={startBankFlow}            // Bank
      />
    );
  }

  return content;
}

export default WalletPaymentForm;
export { WalletPaymentForm };
