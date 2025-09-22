// src/CardPaymentModal.js
import React, { useMemo, useState } from 'react';
import { Modal, Typography, Space, Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BrandHeader } from './brand.js';

// Reuse the same phone input component used in Mobile Money
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const { Title, Text } = Typography;
const BRAND_RED = '#ff4d4f';

export default function CardPaymentModal({
  open = false,
  onCancel,
  onSubmit,           // (payload) => void
  zIndex = 2100,
  width = 520,
  defaultCountry = 'ug',
}) {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');  // MM/YY or MM/YYYY
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const sanitizedCard = useMemo(
    () => cardNumber.replace(/[^\d]/g, ''),
    [cardNumber]
  );

  const canSubmit = useMemo(() => {
    const hasName = cardHolder.trim().length >= 2;
    const hasNum = sanitizedCard.length >= 12; // light check only
    const hasExpiry = /^\d{2}\/\d{2,4}$/.test(expiry.trim());
    const hasCvv = /^\d{3,4}$/.test(cvv.trim());
    return hasName && hasNum && hasExpiry && hasCvv;
  }, [cardHolder, sanitizedCard, expiry, cvv]);

  const handleSubmit = () => {
    if (!canSubmit) return;
    const payload = {
      cardHolder: cardHolder.trim(),
      cardNumber: sanitizedCard, // parent can mask before logging
      expiry: expiry.trim(),
      cvv: cvv.trim(),           // parent MUST NOT log this
      address: address.trim() || null,
      phone: phone || null,
      brand: guessBrand(sanitizedCard), // simple brand guess
    };
    onSubmit?.(payload);
  };

  return (
    <Modal
      open={open}
      centered
      width={width}
      footer={null}
      onCancel={onCancel}
      zIndex={zIndex}
      maskClosable={false}
      title={null}
      bodyStyle={{ padding: 20 }}
      closeIcon={
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: BRAND_RED,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          }}
        >
          <CloseOutlined />
        </span>
      }
    >
      <BrandHeader size="sm" />

      <div
        style={{
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px',
        }}
      />

      <Space direction="vertical" style={{ width: '100%' }}>
        <Title level={4} style={{ margin: 0 }}>Pay with Card</Title>
        <Text type="secondary">Enter your card details to continue.</Text>

        <div style={{ marginTop: 12 }}>
          <Text>Card Holder’s Name</Text>
          <Input
            size="large"
            placeholder="e.g. Jane Doe"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Card Number</Text>
          <Input
            size="large"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCard(e.target.value))}
            inputMode="numeric"
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
          <div>
            <Text>Expiry</Text>
            <Input
              size="large"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              inputMode="numeric"
            />
          </div>
          <div>
            <Text>CVV</Text>
            <Input.Password
              size="large"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/[^\d]/g, '').slice(0, 4))}
              inputMode="numeric"
            />
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Address (optional)</Text>
          <Input
            size="large"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Phone number (optional)</Text>
          <PhoneInput
            defaultCountry={defaultCountry}
            value={phone}
            onChange={setPhone}
            forceDialCode
            inputStyle={{ width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
          <Button onClick={onCancel} shape="round">
            Cancel
          </Button>
          <Button type="primary" shape="round" onClick={handleSubmit} disabled={!canSubmit}>
            Pay
          </Button>
        </div>
      </Space>
    </Modal>
  );
}

function formatCard(v) {
  return v
    .replace(/[^\d]/g, '')
    .slice(0, 19)
    .replace(/(\d{4})(?=\d)/g, '$1 ')
    .trim();
}

function formatExpiry(v) {
  const digits = v.replace(/[^\d]/g, '').slice(0, 4);
  if (digits.length <= 2) return digits;
  return digits.slice(0, 2) + '/' + digits.slice(2);
}

function guessBrand(num) {
  const n = num || '';
  if (/^4/.test(n)) return 'visa';
  if (/^5[1-5]/.test(n)) return 'mastercard';
  if (/^3[47]/.test(n)) return 'amex';
  if (/^6/.test(n)) return 'discover';
  return null;
}
