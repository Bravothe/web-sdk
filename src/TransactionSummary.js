import React from 'react';
import { Modal, Typography, Space, Avatar, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BrandHeader } from './brand.js'; // ← unified brand image header

const { Title, Text } = Typography;

const BRAND_GREEN = '#02CD8D'; // EVzone green

/**
 * Props:
 *  - transactionDetails: {
 *      merchantName, merchantLogo, billedCurrency, totalBilling, billedAmount,
 *      id,
 *      // NEW
 *      transactionType,
 *      // Back-compat fallbacks (no need to pass these going forward):
 *      type, particulars
 *    }
 *  - onConfirm: () => void
 *  - onCancel?: () => void
 *  - width?: number (default 520)
 *  - confirmDisabled?: boolean
 *  - confirmLoading?: boolean
 */
export default function TransactionSummary({
  transactionDetails,
  onConfirm,
  onCancel,
  width = 520,
  confirmDisabled = false,
  confirmLoading = false,
}) {
  const d = transactionDetails || {};
  const currency = d.billedCurrency || 'UGX';
  const total = d.totalBilling ?? d.billedAmount ?? 0;

  // Prefer the new field; fall back to old props for compatibility
  const txType =
    d.transactionType || d.type || d.particulars || 'Purchase';

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
      {/* Brand header (image only) */}
      <BrandHeader size="sm" />

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
        <Title level={3} style={{ margin: 0, color: BRAND_GREEN }}>
          {currency} {amountStr(total)}
        </Title>
      </Space>

      {/* Details list */}
      <div style={{ marginTop: 8 }}>
        <Title level={5} style={{ marginBottom: 8 }}>
          Transaction Details
        </Title>

        {/* Single, clear field now */}
        <KV label="Transaction Type" value={txType} />
        <KV label="To" value={d.id} />
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
        disabled={confirmDisabled}
        loading={confirmLoading}
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
