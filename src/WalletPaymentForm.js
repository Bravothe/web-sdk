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

import useWalletPaymentFlow from './hooks/useWalletPaymentFlow.js';

const { Title, Text } = Typography;

const DEFAULT_PROCESSING_GIF =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif';

/**
 * Props (NEW names preferred; legacy still supported):
 *  - publicKey? (NEW) | publishableKey? (legacy)
 *  - brandId?
 *  - enterpriseNo? (NEW) | enterpriseWalletNo? (legacy)
 *  - userWalletId?
 *
 *  - amount, type?, particulars?, currency?, merchantName?, merchantLogo?
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
  } = props;

  const {
    view,
    errorMsg,
    quote,
    submitting,
    processing,
    details,

    // from the upgraded hook
    accounts,
    selectAccount,

    handleConfirm,
    handleSubmit,
    closeAndReset,
    restart,       // kept if you want to trigger a manual reboot elsewhere
    goToSummary,
  } = useWalletPaymentFlow(props);

  const [passcode, setPasscode] = useState('');

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

  // If we're processing, show ONLY the processing modal (no stacking)
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

  // Otherwise, render the selected flow modal
  let content = null;
  if (view === 'loading')       content = renderLoading();
  else if (view === 'accountPicker') {
    // Multi-account chooser (Google-style) when multiple userNos are in cookies
    content = (
      <AccountPickerModal
        open
        zIndex={zIndex}
        accounts={accounts || []}
        onSelect={(userNo) => {
          setPasscode('');
          // Hook writes the cookie and restarts the flow
          selectAccount?.(userNo);
        }}
        onClose={closeAndReset}
      />
    );
  }
  else if (view === 'signin')   content = (
    <HasAccountSummary
      open
      onLoginSuccess={(userNo) => {
        setPasscode('');
        // Use hook’s helper so it stays the single source of truth
        selectAccount?.(userNo);
      }}
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
        onClose={goToSummary}
      />
    );
  } else if (view === 'insufficient') {
    content = (
      <InsufficientFundsModal
        open
        zIndex={zIndex}
        onClose={goToSummary}
      />
    );
  }

  return content;
}

export default WalletPaymentForm;
export { WalletPaymentForm };
