// src/MobileMoneyFallbackModal.js
import React, { useMemo, useState } from 'react';
import { Modal, Typography, Space, Button, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BrandHeader } from './brand.js';

// Phone input
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const { Title, Text } = Typography;
const BRAND_RED = '#ff4d4f';

/** Dummy country options (extend as needed) */
const COUNTRY_OPTIONS = [
  { label: 'Uganda', value: 'UG' },
  { label: 'Kenya', value: 'KE' },
  { label: 'Tanzania', value: 'TZ' },
  { label: 'Rwanda', value: 'RW' },
  { label: 'Nigeria', value: 'NG' },
  { label: 'Ghana', value: 'GH' },
  { label: 'South Africa', value: 'ZA' },
];

/** Demo provider catalog per country (extend as needed) */
const PROVIDERS_BY_COUNTRY = {
  UG: [
    { label: 'MTN Uganda', value: 'mtn_ug' },
    { label: 'Airtel Uganda', value: 'airtel_ug' },
  ],
  KE: [
    { label: 'M-Pesa (Safaricom)', value: 'mpesa_ke' },
    { label: 'Airtel Money Kenya', value: 'airtel_ke' },
  ],
  TZ: [
    { label: 'M-Pesa Tanzania', value: 'mpesa_tz' },
    { label: 'Tigo Pesa', value: 'tigo_tz' },
    { label: 'Airtel Money Tanzania', value: 'airtel_tz' },
  ],
  RW: [
    { label: 'MTN Rwanda', value: 'mtn_rw' },
    { label: 'Airtel Rwanda', value: 'airtel_rw' },
  ],
  NG: [
    { label: 'MTN Nigeria MoMo', value: 'mtn_ng' },
    { label: 'Airtel SmartCash', value: 'airtel_ng' },
    { label: 'Opay', value: 'opay_ng' },
    { label: 'PalmPay', value: 'palmpay_ng' },
  ],
  GH: [
    { label: 'MTN Mobile Money Ghana', value: 'mtn_gh' },
    { label: 'AirtelTigo Money', value: 'airteltigo_gh' },
    { label: 'Vodafone Cash', value: 'vodafone_gh' },
  ],
  ZA: [
    { label: 'MTN SA MoMo', value: 'mtn_za' },
    { label: 'Vodacom M-Pesa (legacy/limited)', value: 'mpesa_za' },
  ],
};

export default function MobileMoneyFallbackModal({
  open = false,
  onCancel,
  onSubmit,              // (payload) => void ; payload = { msisdn, e164, country, provider }
  zIndex = 2100,
  width = 520,
  defaultCountry = 'ug', // two-letter ISO (lowercase) e.g. 'ug', 'ke', 'ng'
}) {
  const [phone, setPhone] = useState(''); // E.164 string (e.g. "+256700000000")
  const [countryIso, setCountryIso] = useState(
    String(defaultCountry || 'ug').toUpperCase()
  ); // 'UG', 'KE', 'NG', ...
  const [provider, setProvider] = useState(null);

  // Limit countries to those we have providers for (optional)
  const supportedSet = useMemo(() => new Set(Object.keys(PROVIDERS_BY_COUNTRY)), []);
  const countrySelectOptions = useMemo(
    () => COUNTRY_OPTIONS.filter(c => supportedSet.has(c.value)),
    [supportedSet]
  );

  // Providers for the selected country
  const providerOptions = useMemo(
    () => PROVIDERS_BY_COUNTRY[countryIso] || [],
    [countryIso]
  );

  // very light validation: must start with '+' and have at least 8 digits total
  const isValidE164 = useMemo(() => {
    if (!phone || typeof phone !== 'string') return false;
    if (!phone.startsWith('+')) return false;
    const digits = (phone.match(/\d/g) || []).length;
    return digits >= 8;
  }, [phone]);

  const canSubmit = isValidE164 && !!provider;

  const handleCountryChange = (iso) => {
    setCountryIso(iso);
    setProvider(null); // reset provider when country changes
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit?.({
      msisdn: phone,
      e164: phone,
      country: countryIso, // 'UG', 'KE', 'NG'
      provider,            // e.g. 'mtn_ug'
    });
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
        <Text type="secondary">Choose country & provider, then enter the mobile number.</Text>

        {/* Country */}
        <div style={{ marginTop: 12 }}>
          <Text>Country</Text>
          <Select
            style={{ width: '100%', marginTop: 6 }}
            placeholder="Select a country"
            options={countrySelectOptions}
            value={countryIso}
            onChange={handleCountryChange}
            showSearch
            optionFilterProp="label"
          />
        </div>

        {/* Provider (depends on country) */}
        <div style={{ marginTop: 12 }}>
          <Text>Provider</Text>
          <Select
            style={{ width: '100%', marginTop: 6 }}
            placeholder={
              providerOptions.length ? 'Select a provider' : 'No providers for this country'
            }
            options={providerOptions}
            value={provider}
            onChange={setProvider}
            disabled={!providerOptions.length}
            showSearch
            optionFilterProp="label"
          />
        </div>

        {/* Phone */}
        <div style={{ marginTop: 12 }}>
          <Text>Mobile Number</Text>
          <div style={{ marginTop: 6 }}>
            <PhoneInput
              // Keep the dial code/country dropdown in sync:
              country={countryIso.toLowerCase()}
              defaultCountry={countryIso.toLowerCase()}
              value={phone}
              onChange={setPhone}
              onCountryChange={(iso) => setCountryIso(String(iso || '').toUpperCase())}
              forceDialCode
              hideDropdown={false}
              inputStyle={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Actions */}
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
