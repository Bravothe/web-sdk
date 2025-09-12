// EnterPasscode.jsx
import React from 'react';
import { Modal, Typography, Space, Avatar, Input, Button } from 'antd';
import {
  CloseOutlined,
  InfoCircleFilled,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const BRAND_LOGO =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';
const BRAND_GREEN = '#02CD8D';

// tweak if needed to match copy in the mock
const TAX_RATE = 0.005;  // 0.5%
const FEE_RATE = 0.005;  // 0.5%

/**
 * Props:
 *  - passcode: string
 *  - setPasscode: (s: string) => void
 *  - transactionDetails: { merchantName, merchantLogo, id, billedCurrency, totalBilling }
 *  - onSubmit: () => void
 *  - onBack: () => void
 *  - width?: number (default 520)
 */
export default function EnterPasscode({
  passcode,
  setPasscode,
  transactionDetails,
  onSubmit,
  onBack,
  width = 520,
}) {
  const d = transactionDetails || {};
  const currency = d.billedCurrency || 'UGX';
  const total = Number(d.totalBilling ?? 0);

  const tax = total * TAX_RATE;
  const fee = total * FEE_RATE;

  const onChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 6);
    setPasscode(digitsOnly);
  };

  return (
    <Modal
      open
      centered
      width={width}
      title={null}
      footer={null}
      onCancel={onBack}
      maskClosable={false}
      bodyStyle={{ padding: 20 }}
      closeIcon={
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#ff4d4f',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar src={BRAND_LOGO} size={28} />
        <Text strong style={{ fontSize: 16 }}>EVzone Pay</Text>
      </div>

      {/* dashed separator (edge-to-edge) */}
      <div
        style={{
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px',
        }}
      />

      {/* "Merchant Info :" title */}
      <Title level={4} style={{ marginTop: 0, color: BRAND_GREEN }}>
        Merchant Info :
      </Title>

      {/* Merchant + Amount row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: 12,
          marginBottom: 12,
        }}
      >
        <Space align="center">
          {d.merchantLogo ? (
            <Avatar src={d.merchantLogo} size={40} />
          ) : (
            <Avatar size={40}>{(d.merchantName || 'E')[0]}</Avatar>
          )}
          <div>
            <div style={{ fontWeight: 600 }}>{d.merchantName || 'Unknown Merchant'}</div>
            <Text type="secondary" style={{ fontSize: 12 }}>{d.id}</Text>
          </div>
        </Space>

        <div style={{ textAlign: 'right' }}>
          <Text type="secondary" style={{ display: 'block', fontSize: 12 }}>Amount</Text>
          <div style={{ fontWeight: 700 }}>
            {currency} {total.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Enter Passcode label */}
      <div style={{ margin: '6px 0 6px' }}>
        <Text>Enter Passcode</Text>
      </div>

      {/* Passcode input */}
      <Input.Password
        value={passcode}
        onChange={onChange}
        placeholder="••••••"
        maxLength={6}
        inputMode="numeric"
        autoComplete="one-time-code"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        style={{
          height: 40,
          letterSpacing: 4,
          fontWeight: 600,
        }}
        onPressEnter={() => passcode.length === 6 && onSubmit()}
      />

      {/* Info box */}
      <div
        style={{
          background: '#e6f4ff',
          borderRadius: 8,
          padding: 12,
          marginTop: 12,
          display: 'grid',
          gridTemplateColumns: '20px 1fr',
          alignItems: 'flex-start',
          gap: 8,
        }}
      >
        <InfoCircleFilled style={{ color: '#1677ff', fontSize: 18, lineHeight: '20px' }} />
        <Text style={{ color: '#1f1f1f' }}>
          You are making a payment to <b>{d.merchantName || 'Unknown Merchant'}</b> and amount{' '}
          <b>{currency} {total.toLocaleString()}</b> will be deducted off your wallet, including{' '}
          <b>{(TAX_RATE * 100).toFixed(1)}% tax</b> ({currency} {tax.toFixed(0)}) and{' '}
          <b>{(FEE_RATE * 100).toFixed(1)}% wallet fee</b> ({currency} {fee.toFixed(0)}).
        </Text>
      </div>

      {/* Buttons */}
      <Button
        type="primary"
        size="large"
        shape="round"
        block
        style={{ marginTop: 14 }}
        disabled={passcode.length !== 6}
        onClick={onSubmit}
      >
        Confirm
      </Button>

      <Button
        size="large"
        shape="round"
        block
        danger
        ghost
        style={{ marginTop: 10 }}
        onClick={onBack}
      >
        Back
      </Button>
    </Modal>
  );
}
