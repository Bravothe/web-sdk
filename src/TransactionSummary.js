// TransactionSummary.jsx (Ant Design)
import React from 'react';
import { Modal, Typography, Space, Avatar, Descriptions, Button } from 'antd';

const { Title } = Typography;

/**
 * Props:
 *  - transactionDetails: { merchantName, merchantLogo, billedCurrency, totalBilling, billedAmount, type, id, particulars }
 *  - onConfirm: () => void
 *  - onCancel?: () => void   // optional; if omitted, modal X will do nothing
 */
export default function TransactionSummary({ transactionDetails, onConfirm, onCancel }) {
  const d = transactionDetails || {};
  const currency = d.billedCurrency || 'UGX';

  return (
    <Modal
      open
      centered
      title={
        <Space align="center">
          {d.merchantLogo ? (
            <Avatar src={d.merchantLogo} />
          ) : (
            <Avatar>{(d.merchantName || 'E')[0]}</Avatar>
          )}
          <span>{d.merchantName || 'Unknown Merchant'}</span>
        </Space>
      }
      onCancel={onCancel}
      footer={
        <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
          {onCancel && <Button onClick={onCancel}>Cancel</Button>}
          <Button type="primary" onClick={onConfirm}>Confirm</Button>
        </Space>
      }
    >
      <Title level={4} style={{ marginTop: 8 }}>Total Billing</Title>
      <Title level={2} style={{ marginTop: 0 }}>
        {currency} {Number(d.totalBilling || d.billedAmount || 0).toFixed(2)}
      </Title>

      <Descriptions
        bordered
        size="small"
        column={1}
        items={[
          { key: 'type', label: 'Type', children: d.type || 'Booking' },
          { key: 'to', label: 'To', children: d.id },
          { key: 'particulars', label: 'Particulars', children: d.particulars || 'Hotel Booking' },
          { key: 'currency', label: 'Billed Currency', children: currency },
          { key: 'amount', label: 'Billed Amount', children: `${currency} ${Number(d.billedAmount || 0).toFixed(2)}` },
          { key: 'total', label: 'Total Billing', children: `${currency} ${Number(d.totalBilling || d.billedAmount || 0).toFixed(2)}` },
        ]}
      />
    </Modal>
  );
}
