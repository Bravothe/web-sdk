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

import useWalletPaymentFlow from './hooks/useWalletPaymentFlow.js';

const { Title, Text } = Typography;

const DEFAULT_PROCESSING_GIF =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif';

/**
 * Props:
 *  - publicKey? | publishableKey?
 *  - brandId?
 *  - enterpriseNo? | enterpriseWalletNo?
 *  - userWalletId?
 *
 *  - amount, type?, particulars?/transactionType?, currency?, merchantName?, merchantLogo?
 *  - processingSrc?: string
 *  - minProcessingMs?: number
 *  - zIndex?: number
 *  - onClose?: () => void
 *  - onSuccess?: (payload) => void
 *  - supportEmail?: string
 *  - supportPhone?: string
 */
function WalletPaymentForm(props) {
  const {
    zIndex = 2000,
    processingSrc,
    supportEmail,
    supportPhone,
    onSuccess,
    minProcessingMs = 1500, // used for MM transition overlay
  } = props;

  const {
    view,
    errorMsg,
    quote,
    submitting,
    processing,        // processing from the hook (quote/charge)
    details,

    // from the hook
    accounts,
    selectAccount,

    handleConfirm,
    handleSubmit,
    closeAndReset,
    restart,
    goToSummary,
  } = useWalletPaymentFlow(props);

  const [passcode, setPasscode] = useState('');
  const [showMM, setShowMM] = useState(false);
  const [mmProcessing, setMmProcessing] = useState(false); // local processing only for MM transition

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
      onSubmit={() => handleSubmit(passcode)}
      onBack={goToSummary}
      submitting={submitting}
      quote={quote}
    />
  );

  // 1) ALWAYS give priority to the initial loading overlay
  if (view === 'loading') {
    return renderLoading();
  }

  // 2) Show Processing overlay when the hook is processing (quote/charge) OR during MM transition
  if (processing || mmProcessing) {
    const procSrc = processingSrc || DEFAULT_PROCESSING_GIF;
    return (
      <ProcessingModal
        open
        src={procSrc}
        message="Processing…"
        subText="Please wait"
        zIndex={zIndex}
      />
    );
  }

  // Triggered by InsufficientFundsModal -> Pay with another Mobile Money
  const startMobileMoneyFlow = () => {
    // show processing first
    setMmProcessing(true);
    // small delay to show the animation, then open MM modal independently
    setTimeout(() => {
      setMmProcessing(false);
      setShowMM(true);
    }, Math.max(0, Number(minProcessingMs) || 1500));
  };

  // After user submits provider + msisdn in the MM modal
  const handleAltMobileSubmit = ({ provider, msisdn }) => {
    try {
      console.log('[EVZ SDK] alt mobile money:', { provider, msisdn });
    } catch {}
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
      paymentMeta: { provider, msisdn },
    });
    setShowMM(false);
    closeAndReset();
  };

  // Decide a single modal to show (never stack Insufficient + Mobile Money)
  let content = null;

  if (showMM) {
    // Show Mobile Money modal independently
    content = (
      <MobileMoneyFallbackModal
        open
        onCancel={() => setShowMM(false)}
        onSubmit={handleAltMobileSubmit}
        zIndex={zIndex}
        onClose={closeAndReset}
      />
    );
  } else if (view === 'accountPicker') {
    content = (
      <AccountPickerModal
        open
        zIndex={zIndex}
        accounts={accounts || []}
        onSelect={(userNo) => {
          setPasscode('');
          selectAccount?.(userNo);
        }}
        onClose={closeAndReset}
      />
    );
  } else if (view === 'signin') {
    content = (
      <HasAccountSummary
        open
        onLoginSuccess={(userNo) => {
          setPasscode('');
          selectAccount?.(userNo);
        }}
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
        onOpenAltMobile={startMobileMoneyFlow} // show processing, then MM modal
      />
    );
  }

  return content;
}

export default WalletPaymentForm;
export { WalletPaymentForm };
