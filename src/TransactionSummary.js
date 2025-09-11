import React from 'react';
import {
  Modal,
  Typography,
  Space,
  Avatar,
  Button,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const BRAND_LOGO =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg';
const BRAND_GREEN = '#02CD8D'; // EVzone green

/**
 * Props:
 *  - transactionDetails: {
 *      merchantName, merchantLogo, billedCurrency, totalBilling, billedAmount, type, id, particulars
 *    }
 *  - onConfirm: () => void
 *  - onCancel?: () => void
 *  - width?: number (default 520)
 */
export default function TransactionSummary({
  transactionDetails,
  onConfirm,
  onCancel,
  width = 520,
}) {
  const d = transactionDetails || {};
  const currency = d.billedCurrency || 'UGX';

  const total =
    d.totalBilling ?? d.billedAmount ?? 0;

  const amountStr = (v) =>
    Number(v || 0).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <Modal
      open
      centered
      width={width}
      title={null}                 // custom header below
      footer={null}                // custom footer (full-width button)
      onCancel={onCancel}
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

      {/* Merchant block */}
      <Space
        direction="vertical"
        align="center"
        style={{ width: '100%', marginBottom: 8 }}
      >
        {d.merchantLogo ? (
          <Avatar src={d.merchantLogo} size={56} />
        ) : (
          <Avatar size={56}>{(d.merchantName || 'E')[0]}</Avatar>
        )}
        <Title level={4} style={{ margin: 0 }}>
          {d.merchantName || 'Unknown Merchant'}
        </Title>
        <Text type="secondary" style={{ marginTop: -4 }}>
          Total Billing
        </Text>
        <Title
          level={3}
          style={{ margin: 0, color: BRAND_GREEN }}
        >
          {currency} {amountStr(total)}
        </Title>
      </Space>

      {/* Details list */}
      <div style={{ marginTop: 8 }}>
        <Title level={5} style={{ marginBottom: 8 }}>
          Transaction Details
        </Title>

        <KV label="Type" value={d.type || 'Booking'} />
        <KV label="To" value={d.id} />
        <KV label="Particulars" value={d.particulars || 'Hotel Booking'} />
        <KV label="Billed Currency" value={currency} />
        <KV
          label="Billed Amount"
          value={`${currency} ${amountStr(d.billedAmount ?? total)}`}
        />

        {/* Total row (bold + green) */}
        <KV
          label={<strong>Total Billing</strong>}
          value={
            <strong style={{ color: BRAND_GREEN }}>
              {currency} {amountStr(total)}
            </strong>
          }
          withTopBorder
        />
      </div>

      {/* full-width rounded Confirm */}
      <Button
        type="primary"
        size="large"
        shape="round"
        block
        style={{ marginTop: 16 }}
        onClick={onConfirm}
      >
        Confirm
      </Button>
    </Modal>
  );
}

/** Left/right row used above */
function KV({ label, value, withTopBorder = false }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 12,
        padding: '8px 4px',
        borderTop: withTopBorder ? '1px solid #eee' : undefined,
      }}
    >
      <Text type="secondary">{label}</Text>
      <div style={{ textAlign: 'right' }}>
        <Text>{value}</Text>
      </div>
    </div>
  );
}
