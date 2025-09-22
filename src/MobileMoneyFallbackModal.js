// src/MobileMoneyFallbackModal.js
import React, { useMemo, useState } from 'react';
import { Modal, Typography, Space, Button } from 'antd';
import { CloseOutlined} from '@ant-design/icons';
import { BrandHeader } from './brand.js';

// 👉 phone input (component only)
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const { Title, Text } = Typography;
const BRAND_RED = '#ff4d4f';

export default function MobileMoneyFallbackModal({
  open = false,
  onCancel,
  onSubmit,              // (payload) => void ; payload = { msisdn, e164, country }
  zIndex = 2100,
  width = 520,
  defaultCountry = 'ug', // two-letter ISO for initial country (e.g., 'ug', 'ke', 'ng')
}) {
  const [phone, setPhone] = useState('');     // E.164 string returned by PhoneInput (e.g., "+256700000000")
  const [countryIso, setCountryIso] = useState(defaultCountry);

  // very light validation: must start with '+' and have at least 8 digits total
  const isValidE164 = useMemo(() => {
    if (!phone || typeof phone !== 'string') return false;
    if (!phone.startsWith('+')) return false;
    // count digits
    const digits = (phone.match(/\d/g) || []).length;
    return digits >= 8;
  }, [phone]);

  const handleSubmit = () => {
    if (!isValidE164) return;
    const payload = {
      msisdn: phone,                 // raw E.164 as typed/normalized by the component
      e164: phone,                   // duplicate for clarity
      country: (countryIso || '').toUpperCase(), // e.g. 'UG', 'KE', 'NG'
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
      {/* Brand header */}
      <BrandHeader size="sm" />

      {/* dashed separator */}
      <div
        style={{
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px',
        }}
      />

      <Space direction="vertical" style={{ width: '100%' }}>
        <Title level={4} style={{ margin: 0 }}>Pay with Mobile Money</Title>
        <Text type="secondary">
          Enter the mobile number to proceed with the payment.
        </Text>

        <div style={{ marginTop: 12 }}>
          <Text>Mobile Number</Text>
          <div
            style={{
              marginTop: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{ flex: 1 }}>
              <PhoneInput
                defaultCountry={defaultCountry}
                value={phone}
                onChange={setPhone}
                onCountryChange={(iso) => setCountryIso(iso)}
                forceDialCode
                hideDropdown={false}
                inputStyle={{ width: '100%' }} // ensure it fills the modal width
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
          <Button onClick={onCancel} shape="round">
            Cancel
          </Button>
          <Button type="primary" shape="round" onClick={handleSubmit} disabled={!isValidE164}>
            Continue
          </Button>
        </div>
      </Space>
    </Modal>
  );
}
