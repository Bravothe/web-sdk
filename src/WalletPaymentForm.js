// src/WalletPaymentForm.js
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, Button, Typography, Space } from 'antd';

import TransactionSummary from './TransactionSummary.js';
import EnterPasscode from './EnterPasscode.js';
import PaymentSuccessModal from './PaymentSuccessModal.js';
import PaymentFailedModal from './PaymentFailedModal.js';
import InsufficientFundsModal from './InsufficientFundsModal.js';
import LoadingOverlay from './LoadingOverlay.js'; // ✅ use the custom overlay

const { Title, Text } = Typography;

// Demo customers (unchanged)
const SAMPLE_CUSTOMERS = {
  customer123: { name: 'John Doe', balance: 1000, passcode: '123456' },
  customer456: { name: 'Jane Smith', balance: 500, passcode: '567856' },
  customer789: { name: 'Alice Brown', balance: 50, passcode: '901256' },
  admin:       { name: 'Admin User', balance: 2000, passcode: '234567' },
};

function validatePasscode(customerId, passcode) {
  const customer = SAMPLE_CUSTOMERS[customerId];
  if (!customer) return { success: false, reason: 'no_account' };
  if (customer.passcode !== passcode) return { success: false, reason: 'invalid_passcode' };
  return { success: true };
}

function buildTxnDetails(amount, id, type, particulars, currency, merchantName, merchantLogo) {
  return {
    type: type || 'Booking',
    id,
    particulars: particulars || 'Hotel Booking',
    billedCurrency: currency || 'UGX',
    billedAmount: amount,
    totalBilling: amount,
    merchantName: merchantName || 'Unknown Merchant',
    merchantLogo: merchantLogo || '',
  };
}

/**
 * Props:
 *  - skipAuth?: boolean (default true)
 *  - zIndex?: number (default 2000)
 *  - customerId?: string
 *  - amount (number), type, particulars, currency, merchantName, merchantLogo
 *  - onClose?: () => void
 *  - onSuccess?: (receipt) => void
 */
function WalletPaymentForm({
  skipAuth = true,
  zIndex = 2000,
  customerId: propCustomerId,
  amount,
  type,
  particulars,
  currency,
  merchantName,
  merchantLogo,
  onClose,
  onSuccess,
}) {
  const [view, setView] = useState('loading'); // 'loading' | 'summary' | 'passcode' | 'success' | 'failed' | 'insufficient' | 'invalid'
  const [passcode, setPasscode] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [txnId] = useState(() => `W-${Math.floor(Math.random() * 1_000_000_000)}`);
  const [effectiveCustomerId, setEffectiveCustomerId] = useState(propCustomerId);

  const amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;

  // 7s uniform loading (kept for parity with your flow)
  const boot = useCallback(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    await wait(7000);

    if (!amountValid) {
      setView('invalid');
      return;
    }

    const fallbackId =
      (propCustomerId && SAMPLE_CUSTOMERS[propCustomerId] && propCustomerId) || 'admin';

    if (skipAuth) {
      setEffectiveCustomerId(fallbackId);
      setView('summary');
    } else {
      // (hook auth/cookie checks here later)
      setEffectiveCustomerId(fallbackId);
      setView('summary');
    }
  }, [propCustomerId, skipAuth, amountValid]);

  useEffect(() => {
    setView('loading');
    boot();
  }, [boot]);

  const details = useMemo(
    () => buildTxnDetails(amount, txnId, type, particulars, currency, merchantName, merchantLogo),
    [amount, txnId, type, particulars, currency, merchantName, merchantLogo]
  );

  const handleConfirm = () => {
    const customer = SAMPLE_CUSTOMERS[effectiveCustomerId];
    if (customer && customer.balance < amount) {
      setView('insufficient');
    } else {
      setView('passcode');
    }
  };

  const handleSubmit = async () => {
    if (passcode.length !== 6) return;
    setSubmitting(true);
    try {
      const result = validatePasscode(effectiveCustomerId, passcode);
      if (result.success) {
        SAMPLE_CUSTOMERS[effectiveCustomerId].balance -= amount; // demo-only
        setView('success');
        onSuccess?.({
          transactionId: txnId,
          amount,
          currency: details.billedCurrency,
          type: details.type,
          particulars: details.particulars,
          customerId: effectiveCustomerId,
        });
      } else {
        setView('failed');
        setTimeout(() => {
          setView('summary');
          setPasscode('');
        }, 3000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const closeAndReset = () => {
    setPasscode('');
    setView('summary');
    onClose?.();
  };

  // ----------- Render helpers -----------
  // ✅ Use the premium LoadingOverlay instead of Ant Design <Spin/>
  const renderLoading = () => (
    <LoadingOverlay
      open
      zIndex={zIndex}
      brand="EVzone Pay"
      tip="Preparing secure checkout…"
    />
  );

  const renderInvalid = () => (
    <Modal open centered footer={null} onCancel={closeAndReset} zIndex={zIndex} maskClosable={false}>
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Title level={4} style={{ margin: 0 }}>Invalid Amount</Title>
        <Text type="secondary">The transaction amount is missing or invalid.</Text>
        <Button type="primary" onClick={closeAndReset}>Close</Button>
      </Space>
    </Modal>
  );

  // ⬇️ Transaction summary
  const renderSummary = () => (
    <TransactionSummary
      transactionDetails={details}
      onConfirm={handleConfirm}
      onCancel={closeAndReset}
    />
  );

  // ⬇️ Enter passcode
  const renderPasscode = () => (
    <EnterPasscode
      passcode={passcode}
      setPasscode={setPasscode}
      transactionDetails={details}
      onSubmit={handleSubmit}
      onBack={() => setView('summary')}
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
        amount={amount}
        currency={details.billedCurrency}
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
