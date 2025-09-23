// src/BankPaymentModal.js
import React, { useMemo, useState } from 'react';
import { Modal, Typography, Space, Button, Input, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BrandHeader } from './brand.js';

const { Title, Text } = Typography;
const BRAND_RED = '#ff4d4f';

/**
 * Dummy country → banks map (demo only).
 * Replace/extend with your gateway’s list later.
 */
const COUNTRIES = [
  { code: 'UG', name: 'Uganda' },
  { code: 'KE', name: 'Kenya' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'RW', name: 'Rwanda' },
];

const BANKS_BY_COUNTRY = {
  UG: [
    { code: 'STANBIC_UG', name: 'Stanbic Bank Uganda' },
    { code: 'ABSA_UG', name: 'Absa Bank Uganda' },
    { code: 'CENTENARY_UG', name: 'Centenary Bank' },
    { code: 'DTB_UG', name: 'Diamond Trust Bank Uganda' },
  ],
  KE: [
    { code: 'KCB_KE', name: 'KCB Bank Kenya' },
    { code: 'EQUITY_KE', name: 'Equity Bank' },
    { code: 'COOP_KE', name: 'Co-operative Bank of Kenya' },
    { code: 'ABSA_KE', name: 'Absa Bank Kenya' },
  ],
  NG: [
    { code: 'GTB_NG', name: 'Guaranty Trust Bank (GTB)' },
    { code: 'ACCESS_NG', name: 'Access Bank' },
    { code: 'FBN_NG', name: 'First Bank of Nigeria' },
    { code: 'UBA_NG', name: 'United Bank for Africa (UBA)' },
  ],
  RW: [
    { code: 'BK_RW', name: 'Bank of Kigali' },
    { code: 'IM_RW', name: 'I&M Bank Rwanda' },
    { code: 'EQUITY_RW', name: 'Equity Bank Rwanda' },
    { code: 'KCB_RW', name: 'KCB Bank Rwanda' },
  ],
};

export default function BankPaymentModal({
  open = false,
  onCancel,
  onSubmit, // (payload) => void
  zIndex = 2100,
  width = 520,
  defaultCountry = 'UG',
}) {
  const [country, setCountry] = useState(defaultCountry);
  const [bank, setBank] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [branch, setBranch] = useState('');
  const [reference, setReference] = useState('');

  const banks = useMemo(() => BANKS_BY_COUNTRY[country] || [], [country]);

  // very light client-side checks
  const canSubmit = useMemo(() => {
    const hasCountry = !!country;
    const hasBank = !!bank;
    const num = accountNumber.replace(/\s+/g, '');
    const hasAcctNum = num.length >= 6; // relax as needed
    const hasName = accountName.trim().length >= 2;
    return hasCountry && hasBank && hasAcctNum && hasName;
  }, [country, bank, accountNumber, accountName]);

  const handleSubmit = () => {
    if (!canSubmit) return;
    const payload = {
      country,
      bank,
      accountNumber: accountNumber.replace(/\s+/g, ''),
      accountName: accountName.trim(),
      branch: branch.trim() || null,
      reference: reference.trim() || null,
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
        <Title level={4} style={{ margin: 0 }}>Pay via Bank</Title>
        <Text type="secondary">
          Select your country and bank, then enter your account details.
        </Text>

        <div style={{ marginTop: 12 }}>
          <Text>Country</Text>
          <Select
            style={{ width: '100%', marginTop: 6 }}
            value={country}
            onChange={(val) => {
              setCountry(val);
              setBank(null); // reset bank when country changes
            }}
            options={COUNTRIES.map((c) => ({ label: c.name, value: c.code }))}
            showSearch
            optionFilterProp="label"
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Bank</Text>
          <Select
            style={{ width: '100%', marginTop: 6 }}
            placeholder="Select a bank"
            value={bank}
            onChange={setBank}
            options={banks.map((b) => ({ label: b.name, value: b.code }))}
            showSearch
            optionFilterProp="label"
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Account Number</Text>
          <Input
            size="large"
            placeholder="Enter account number"
            value={accountNumber}
            onChange={(e) =>
              setAccountNumber(
                e.target.value.replace(/[^\d\s]/g, '').slice(0, 24)
              )
            }
            inputMode="numeric"
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Account Name</Text>
          <Input
            size="large"
            placeholder="e.g. Jane A. Doe"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Branch (optional)</Text>
          <Input
            size="large"
            placeholder="Enter branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Text>Payment Reference (optional)</Text>
          <Input
            size="large"
            placeholder="e.g. Order #12345"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
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
