import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, Button, Typography, Descriptions, Input, Space, Avatar, Spin } from 'antd';

import PaymentSuccessModal from './PaymentSuccessModal';
import PaymentFailedModal from './PaymentFailedModal';
import InsufficientFundsModal from './InsufficientFundsModal';

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
 * Ant Design edition — login skipped for now (controlled by skipAuth, default true).
 *
 * Props:
 *  - skipAuth?: boolean (default true)  -> when false, you can re-wire your original auth flow
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

  // 7s uniform loading (kept from your design)
  const boot = useCallback(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    await wait(7000);

    if (!amountValid) {
      setView('invalid');
      return;
    }

    const fallbackId = (propCustomerId && SAMPLE_CUSTOMERS[propCustomerId] && propCustomerId) || 'admin';

    if (skipAuth) {
      setEffectiveCustomerId(fallbackId);
      setView('summary');
    } else {
      // (When you reintroduce auth later, place cookie/customer checks here.)
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

  // ----------- Render helpers (Ant Design) -----------
  const renderLoading = () => (
    <Modal open centered footer={null} closable={false} maskClosable={false} zIndex={zIndex}>
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Avatar src="https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg" size={96} />
        <Title level={3} style={{ margin: 0 }}>EVzone Pay</Title>
        <Spin tip="Preparing secure checkout…" />
      </Space>
    </Modal>
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

  const renderSummary = () => (
    <Modal
      open
      centered
      zIndex={zIndex}
      maskClosable={false}
      title={
        <Space align="center">
          {details.merchantLogo ? (
            <Avatar src={details.merchantLogo} />
          ) : (
            <Avatar>{(details.merchantName || 'E')[0]}</Avatar>
          )}
          <span>{details.merchantName}</span>
        </Space>
      }
      onCancel={closeAndReset}
      footer={
        <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
          <Button onClick={closeAndReset}>Cancel</Button>
          <Button type="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Space>
      }
    >
      <Title level={4} style={{ marginTop: 8 }}>Total Billing</Title>
      <Title level={2} style={{ marginTop: 0 }}>
        {details.billedCurrency} {Number(details.totalBilling).toFixed(2)}
      </Title>

      <Descriptions
        bordered
        size="small"
        column={1}
        items={[
          { key: 'type', label: 'Type', children: details.type },
          { key: 'to', label: 'To', children: details.id },
          { key: 'particulars', label: 'Particulars', children: details.particulars },
          { key: 'currency', label: 'Billed Currency', children: details.billedCurrency },
          { key: 'amount', label: 'Billed Amount', children: `${details.billedCurrency} ${Number(details.billedAmount).toFixed(2)}` },
          { key: 'total', label: 'Total Billing', children: `${details.billedCurrency} ${Number(details.totalBilling).toFixed(2)}` },
        ]}
      />
    </Modal>
  );

  const renderPasscode = () => (
    <Modal
      open
      centered
      zIndex={zIndex}
      maskClosable={false}
      title="Enter Passcode"
      onCancel={() => setView('summary')}
      footer={
        <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
          <Button onClick={() => setView('summary')}>Back</Button>
          <Button
            type="primary"
            disabled={passcode.length !== 6}
            onClick={handleSubmit}
            loading={submitting}
          >
            Confirm
          </Button>
        </Space>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Space align="center" style={{ width: '100%', justifyContent: 'space-between' }}>
          <div>
            <Text type="secondary">Merchant</Text>
            <div><Text strong>{details.merchantName}</Text></div>
            <div><Text type="secondary">{details.id}</Text></div>
          </div>
          <Title level={4} style={{ margin: 0 }}>
            {details.billedCurrency} {Number(details.totalBilling).toFixed(2)}
          </Title>
        </Space>

        <Input.Password
          value={passcode}
          onChange={(e) => setPasscode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          onPressEnter={() => passcode.length === 6 && !submitting && handleSubmit()}
          placeholder="6-digit passcode"
          maxLength={6}
          inputMode="numeric"
          autoComplete="one-time-code"
        />

        <div style={{ background: '#e6f4ff', padding: 12, borderRadius: 8 }}>
          <Text>
            You are paying <Text strong>{details.merchantName}</Text>. Amount to be deducted:
            <Text strong> {details.billedCurrency} {Number(details.totalBilling).toFixed(2)}</Text>
            , including:
          </Text>
          <br />
          <Text>2.5% Tax: {details.billedCurrency} {(details.totalBilling * 0.025).toFixed(2)}</Text>
          <br />
          <Text>1.5% Wallet Fee: {details.billedCurrency} {(details.totalBilling * 0.015).toFixed(2)}</Text>
        </div>
      </Space>
    </Modal>
  );

  // ---------- Router ----------
  if (view === 'loading') return renderLoading();
  if (view === 'invalid') return renderInvalid();
  if (view === 'summary') return renderSummary();
  if (view === 'passcode') return renderPasscode();

  // Result screens (kept as separate components, still part of the flow)
  if (view === 'success') {
    return (
      <PaymentSuccessModal
        open
        amount={amount}
        currency={details.billedCurrency}
        zIndex={zIndex}
        onClose={() => {
          setView('summary');
          onClose?.(); // optionally close the whole flow after success
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
