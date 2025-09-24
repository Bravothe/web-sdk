// src/WalletPaymentForm.js
import React, { useState, useRef } from 'react';
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

// ✅ Use the SDK client that already matches server schema (no extra params)
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
    onSuccess,               // parent callback
    minProcessingMs = 1500,

    // passthrough for wallet flow UI (not used by MoMo SDK client)
    publishableKey,
    enterpriseWalletNo,

    // human-friendly label
    transactionType,
  } = props;

  // Map transactionType to hook’s expected fields (no other flow changes)
  const hookProps = {
    ...props,
    type: transactionType || props.type,
    particulars: transactionType || props.particulars,
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

  // Alt methods
  const [showMM, setShowMM] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [altProcessing, setAltProcessing] = useState(false);
  const [altError, setAltError] = useState(null);

  // ✅ Local, guaranteed Success modal (works for BOTH wallet and MoMo)
  const [showSuccess, setShowSuccess] = useState(false);
  const successAmountRef = useRef(null);
  const successCurrencyRef = useRef('UGX');
  const pendingSuccessPayloadRef = useRef(null); // delivered to parent after user clicks Done

  // Wrap success: show success modal first, then call parent onSuccess on close
  const presentSuccess = (amount, currency, payload) => {
    // stop any processing overlays
    setAltProcessing(false);
    successAmountRef.current = Number(amount || 0);
    successCurrencyRef.current = currency || 'UGX';
    pendingSuccessPayloadRef.current = payload || null;
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    const payload = pendingSuccessPayloadRef.current;
    // Call parent's onSuccess AFTER the user acknowledges Success
    try {
      if (payload) onSuccess?.(payload);
    } finally {
      // clean up & close the whole flow
      setShowSuccess(false);
      pendingSuccessPayloadRef.current = null;
      closeAndReset();
    }
  };

  // ★★ Wallet-to-wallet path:
  // If your internal hook already triggers a 'success' view AND calls props.onSuccess,
  // we still ensure our Success modal shows by checking for that view below.
  // If you prefer to intercept earlier, pass a wrapped onSuccess down to the hook:
  // const walletFlowOnSuccess = (payload) => {
  //   const billedAmount   = quote?.total ?? details.billedAmount;
  //   const billedCurrency = quote?.currency || details.billedCurrency || 'UGX';
  //   presentSuccess(billedAmount, billedCurrency, payload);
  // };
  // and then pass: useWalletPaymentFlow({ ...hookProps, onSuccess: walletFlowOnSuccess });

  // ---------- Priority overlays ----------
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
      onSubmit={() => handleSubmit(passcode)}
      onBack={goToSummary}
      submitting={submitting}
      quote={quote}
    />
  );

  // IMPORTANT: don’t let the "Processing…" overlay cover a success modal
  if (view === 'loading') return renderLoading();
  if ((processing || altProcessing) && !showSuccess && !altError) {
    const procSrc = processingSrc || DEFAULT_PROCESSING_GIF;
    return <ProcessingModal open src={procSrc} message="Processing…" subText="Please wait" zIndex={zIndex} />;
  }

  // ---------- Alternate method transitions ----------
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

  // ---------- Alt method submit handlers ----------
  // Uses ONLY amount + user-entered number (SDK fills defaults correctly).
  const handleAltMobileSubmit = async ({ msisdn, e164, country, provider }) => {
    const billedAmount   = quote?.total ?? details.billedAmount;
    const billedCurrency = quote?.currency || details.billedCurrency || 'UGX';

    try {
      setAltProcessing(true);
      setShowMM(false);

      const resp = await createMobileMoneyDeposit({
        msisdn: e164 || msisdn,      // payer
        providerValue: provider,
        country: country || 'UG',
        amount: Number(billedAmount || 0),
        currency: billedCurrency,
        accountHolder: 'EVzone Customer',
        emailAssociated: '',         // SDK auto-falls back
      });

      // Build a uniform payload for parent (but don't call parent yet)
      const payload = {
        transactionId:
          resp?.transaction_result?.transaction_id ||
          resp?.provider_txn_id ||
          resp?.transaction_id ||
          resp?.reference_id ||
          resp?.data?.provider_txn_id ||
          resp?.data?.reference_id ||
          `ALT-MM-${Math.floor(Math.random() * 1e9)}`,
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

      // Show success first, then on Done -> parent onSuccess, then close
      presentSuccess(billedAmount, billedCurrency, payload);
    } catch (err) {
      const msg =
        err?.body?.error?.message ||
        err?.message ||
        'Could not start Mobile Money payment.';
      setAltError(msg);
    } finally {
      setAltProcessing(false);
    }
  };

  const handleCardSubmit = (card) => {
    try {
      console.log('[EVZ SDK] card payload (masked):', {
        ...card,
        cardNumber: String(card.cardNumber || '').slice(-4).padStart(12, '*'),
        cvv: '***',
      });
    } catch {}
    const payload = {
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
    };
    presentSuccess(payload.amount, payload.currency, payload);
  };

  const handleBankSubmit = (bankPayload) => {
    const payload = {
      transactionId: 'BANK-' + Math.floor(Math.random() * 1e9),
      sessionId: null,
      enterprise: { walletNo: enterpriseWalletNo || null },
      user: null,
      amount: quote?.total ?? details.billedAmount,
      currency: quote?.currency || details.billedCurrency,
      type: transactionType || details.type,
      particulars: transactionType || details.particulars,
      paymentMethod: 'BANK',
      paymentMeta: bankPayload,
    };
    presentSuccess(payload.amount, payload.currency, payload);
  };

  // ---------- Single active modal / view ----------
  let content = null;

  // ✅ Our guaranteed Success modal takes absolute priority
  if (showSuccess) {
    content = (
      <PaymentSuccessModal
        open
        amount={successAmountRef.current}
        currency={successCurrencyRef.current}
        zIndex={zIndex}
        onClose={handleSuccessClose}
        showAmount
      />
    );
  } else if (altError) {
    content = (
      <PaymentFailedModal
        open
        zIndex={zIndex}
        reason={altError}
        onClose={() => {
          setAltError(null);
          closeAndReset();
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
    // Fallback: if your hook explicitly sends 'success', still show it
    content = (
      <PaymentSuccessModal
        open
        amount={quote?.total ?? details.billedAmount}
        currency={quote?.currency || details.billedCurrency}
        zIndex={zIndex}
        onClose={handleSuccessClose}
        showAmount
      />
    );
  } else if (view === 'failed') {
    content = (
      <PaymentFailedModal
        open
        zIndex={zIndex}
        reason={errorMsg}
        onClose={closeAndReset}
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
