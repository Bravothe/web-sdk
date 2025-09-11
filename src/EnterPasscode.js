// EnterPasscode.jsx (Ant Design)
import React from 'react';
import { Modal, Typography, Space, Input, Descriptions, Button, Alert } from 'antd';

const { Title, Text } = Typography;

/**
 * Props:
 *  - passcode: string
 *  - setPasscode: (s: string) => void
 *  - transactionDetails: { merchantName, id, billedCurrency, totalBilling }
 *  - onSubmit: () => void
 *  - onBack: () => void
 */
export default function EnterPasscode({
  passcode,
  setPasscode,
  transactionDetails,
  onSubmit,
  onBack,
}) {
  const d = transactionDetails || {};
  const currency = d.billedCurrency || 'UGX';
  const total = Number(d.totalBilling || 0);

  const tax = total * 0.025;   // 2.5%
  const fee = total * 0.015;   // 1.5%

  const onChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 6);
    setPasscode(digitsOnly);
  };

  return (
    <Modal
      open
      centered
      title="Enter Passcode"
      onCancel={onBack}
      footer={
        <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
          <Button onClick={onBack}>Back</Button>
          <Button type="primary" disabled={passcode.length !== 6} onClick={onSubmit}>
            Confirm
          </Button>
        </Space>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Space align="center" style={{ width: '100%', justifyContent: 'space-between' }}>
          <div>
            <Text type="secondary">Merchant</Text>
            <div><Text strong>{d.merchantName || 'Unknown Merchant'}</Text></div>
            <div><Text type="secondary">{d.id}</Text></div>
          </div>
          <Title level={4} style={{ margin: 0 }}>
            {currency} {total.toFixed(2)}
          </Title>
        </Space>

        <Input.Password
          value={passcode}
          onChange={onChange}
          placeholder="6-digit passcode"
          maxLength={6}
          inputMode="numeric"
          autoComplete="one-time-code"
        />

        <Descriptions bordered size="small" column={1} title="Breakdown">
          <Descriptions.Item label="Subtotal">
            {currency} {total.toFixed(2)}
          </Descriptions.Item>
          <Descriptions.Item label="Tax (2.5%)">
            {currency} {tax.toFixed(2)}
          </Descriptions.Item>
          <Descriptions.Item label="Wallet Fee (1.5%)">
            {currency} {fee.toFixed(2)}
          </Descriptions.Item>
          <Descriptions.Item label="Estimated Total">
            {currency} {(total + tax + fee).toFixed(2)}
          </Descriptions.Item>
        </Descriptions>

        <Alert
          type="info"
          message={
            <span>
              You are paying <b>{d.merchantName || 'Unknown Merchant'}</b>. The amount{' '}
              <b>{currency} {total.toFixed(2)}</b> will be deducted from your wallet.
            </span>
          }
          showIcon
        />
      </Space>
    </Modal>
  );
}
