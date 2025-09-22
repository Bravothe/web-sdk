// src/MobileMoneyFallbackModal.js
import React, { useMemo, useState } from 'react';
import { Modal, Typography, Space, Button, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BrandHeader } from './brand.js';

// 👉 use ONLY PhoneInput from this package
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const { Title, Text } = Typography;
const BRAND_RED = '#ff4d4f';

const PROVIDERS = [
  { label: 'MTN', value: 'MTN' },
  { label: 'Airtel', value: 'Airtel' },
  { label: 'M-Pesa', value: 'M-Pesa' },
];

export default function MobileMoneyFallbackModal({
  open = false,
  onCancel,
  onSubmit,              // (payload) => void ; payload = { provider, msisdn }
  zIndex = 2100,
  width = 520,
  defaultCountry = 'ug', // ← use ISO-2 country for PhoneInput default
}) {
  const [provider, setProvider] = useState(null);
  const [phone, setPhone] = useState(''); // E.164 like +2567...

  const canSubmit = useMemo(() => {
    // very light validation: must have a provider + at least 8 digits
    const digits = (phone || '').replace(/\D+/g, '');
    return !!provider && digits.length >= 8;
  }, [provider, phone]);

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit?.({ provider, msisdn: phone.trim() });
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
        <Title level={4} style={{ margin: 0 }}>Pay with Mobile Money</Title>
        <Text type="secondary">
          Choose a provider and enter the mobile number to continue.
        </Text>

        <div style={{ marginTop: 12 }}>
          <Text>Provider</Text>
          <Select
            style={{ width: '100%', marginTop: 6 }}
            placeholder="Select a provider"
            options={PROVIDERS}
            value={provider}
            onChange={setProvider}
            showSearch
            optionFilterProp="label"
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Mobile Number</Text>
          <div style={{ marginTop: 6 }}>
            <PhoneInput
              defaultCountry={defaultCountry} // e.g. 'ug'
              value={phone}
              onChange={setPhone}
              // allow editing with country selector & formatting
              inputStyle={{ width: '100%' }}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
          <Button onClick={onCancel} shape="round">
            Cancel
          </Button>
          <Button type="primary" shape="round" onClick={handleSubmit} disabled={!canSubmit}>
            Continue
          </Button>
        </div>
      </Space>
    </Modal>
  );
}
