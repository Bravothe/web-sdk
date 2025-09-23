// src/WalletPaymentForm.js
import React, { useState } from 'react';
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
import BankPaymentModal from './BankPaymentModal.js';            // ← NEW

import useWalletPaymentFlow from './hooks/useWalletPaymentFlow.js';

const { Title, Text } = Typography;

const DEFAULT_PROCESSING_GIF =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif';

function WalletPaymentForm(props) {
  const {
    zIndex = 2000,
    processingSrc,
    supportEmail,
    supportPhone,
    onSuccess,
    minProcessingMs = 1500, // used for alternate-method transition overlay
  } = props;

  const {
    view,
    errorMsg,
    quote,
    submitting,
    processing,        // processing from the hook (quote/charge)
    details,
    accounts,
    selectAccount,
    handleConfirm,
    handleSubmit,
    closeAndReset,
    restart,
    goToSummary,
  } = useWalletPaymentFlow(props);

  const [passcode, setPasscode] = useState('');

  // Alternate-payment modals (independent of wallet flow)
  const [showMM, setShowMM] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showBank, setShowBank] = useState(false);              // ← NEW
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
      onSubmit={() => handleSubmit(passcode)}
      onBack={goToSummary}
      submitting={submitting}
      quote={quote}
    />
  );

  // Priority overlays
  if (view === 'loading') return renderLoading();

  if (processing || altProcessing) {
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
  const handleAltMobileSubmit = ({ msisdn, e164, country }) => {
    try { console.log('[EVZ SDK] alt mobile money:', { msisdn, e164, country }); } catch {}
    onSuccess?.({
      transactionId: 'ALT-MM-' + Math.floor(Math.random() * 1e9),
      sessionId: null,
      enterprise: null,
      user: null,
      amount: quote?.total ?? details.billedAmount,
      currency: quote?.currency || details.billedCurrency,
      type: details.type,
      particulars: details.particulars,
      paymentMethod: 'MOBILE_MONEY',
      paymentMeta: { msisdn, e164, country },
    });
    setShowMM(false);
    closeAndReset();
  };

  const handleCardSubmit = (card) => {
    try {
      console.log('[EVZ SDK] card payload (masked):', {
        ...card,
        cardNumber: String(card.cardNumber || '').slice(-4).padStart(12, '*'),
        cvv: '***',
      });
    } catch {}
    onSuccess?.({
      transactionId: 'CARD-' + Math.floor(Math.random() * 1e9),
      sessionId: null,
      enterprise: null,
      user: null,
      amount: quote?.total ?? details.billedAmount,
      currency: quote?.currency || details.billedCurrency,
      type: details.type,
      particulars: details.particulars,
      paymentMethod: 'CARD',
      paymentMeta: {
        brand: card.brand || null,
        last4: String(card.cardNumber || '').slice(-4),
        save: !!card.save,
        phone: card.phone || null,
        discountCode: card.discountCode || null,
      },
    });
    setShowCard(false);
    closeAndReset();
  };

  const handleBankSubmit = (bankPayload) => {
    try { console.log('[EVZ SDK] bank payload:', bankPayload); } catch {}
    onSuccess?.({
      transactionId: 'BANK-' + Math.floor(Math.random() * 1e9),
      sessionId: null,
      enterprise: null,
      user: null,
      amount: quote?.total ?? details.billedAmount,
      currency: quote?.currency || details.billedCurrency,
      type: details.type,
      particulars: details.particulars,
      paymentMethod: 'BANK',
      paymentMeta: bankPayload, // { country, bank, accountNumber, accountName, branch?, reference? }
    });
    setShowBank(false);
    closeAndReset();
  };

  // ---------- Single active modal ----------
  let content = null;

  if (showMM) {
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
    content = (
      <PaymentSuccessModal
        open
        amount={quote?.total ?? details.billedAmount}
        currency={quote?.currency || details.billedCurrency}
        zIndex={zIndex}
        onClose={closeAndReset}
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
