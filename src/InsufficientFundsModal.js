// src/InsufficientFundsModal.js
import React from 'react';
import { Modal, Button, Typography, Space } from 'antd';
import { CloseOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { BrandHeader } from './brand.js'; // ← unified brand image header

const { Title, Paragraph, Text } = Typography;

// Local colors for this modal
const BRAND_ORANGE = '#FF9800';
const BRAND_RED = '#ff4d4f';
const PRIMARY_BLUE = '#1677ff';
const PRIMARY_BLUE_HOVER = '#0958d9';

export default function InsufficientFundsModal({
  open = true,
  onClose,
  onAddFunds,
  onRetry,
  zIndex = 2000,
  width = 460,
  currency = 'UGX',
  balance,
  requiredTotal,
}) {
  const num = (v) => (typeof v === 'number' && !Number.isNaN(v) ? v : null);
  const bal = num(balance);
  const req = num(requiredTotal);

  const hasNumbers = bal !== null && req !== null;
  const shortfall = hasNumbers ? Math.max(req - bal, 0) : null;

  const fmt = (n) =>
    Number(n || 0).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <Modal
      open={open}
      centered
      width={width}
      footer={null}
      onCancel={onClose}
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
      {/* Brand header (image only, left-aligned, consistent across modals) */}
      <BrandHeader size="sm" />

      {/* dashed separator */}
      <div
        style={{
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px',
        }}
      />

      {/* Big orange warning icon */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: BRAND_ORANGE,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px',
          boxShadow: '0 6px 16px rgba(255,152,0,0.28)',
        }}
        aria-hidden
      >
        <ExclamationCircleFilled style={{ color: '#fff', fontSize: 34 }} />
      </div>

      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Title level={3} style={{ margin: 0, color: BRAND_ORANGE }}>
          Insufficient Funds
        </Title>

        {!hasNumbers ? (
          <Paragraph style={{ marginTop: 8, textAlign: 'center', color: '#444' }}>
            The account did not have sufficient funds to cover the transaction amount.
          </Paragraph>
        ) : (
          <>
            <Paragraph style={{ marginTop: 8, textAlign: 'center', color: '#444' }}>
              Your wallet balance is lower than the total required for this payment.
            </Paragraph>

            <div
              style={{
                width: '100%',
                background: '#fffbe6',
                border: '1px dashed #ffe58f',
                borderRadius: 10,
                padding: 12,
              }}
            >
              <Row label="Balance" value={`${currency} ${fmt(bal)}`} />
              <Row label="Required" value={`${currency} ${fmt(req)}`} />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: 8,
                  paddingTop: 8,
                  marginTop: 6,
                  borderTop: '1px solid #fff0b3',
                }}
              >
                <Text strong>Shortfall</Text>
                <Text strong style={{ color: BRAND_ORANGE }}>
                  {currency} {fmt(shortfall)}
                </Text>
              </div>
            </div>
          </>
        )}

        {/* Actions */}
        <Space size="middle" style={{ marginTop: 12 }}>
          <Button
            type="primary"
            shape="round"
            size="middle"
            onClick={onAddFunds || onClose}
            style={{ width: 160 }}
          >
            Add Funds
          </Button>

          {/* Always-visible outlined primary */}
          <Button
            type="primary"
            ghost
            className="evz-try"
            shape="round"
            size="middle"
            onClick={onRetry || onClose}
            style={{ width: 160, color: PRIMARY_BLUE, borderColor: PRIMARY_BLUE }}
          >
            Try Again
          </Button>
        </Space>
      </Space>

      <style>{`
        /* keep ghost button readable even if global overrides exist */
        .evz-try.ant-btn {
          color: ${PRIMARY_BLUE};
          border-color: ${PRIMARY_BLUE};
          background: transparent;
        }
        .evz-try.ant-btn:hover,
        .evz-try.ant-btn:focus {
          color: ${PRIMARY_BLUE_HOVER};
          border-color: ${PRIMARY_BLUE_HOVER};
          background: rgba(9,88,217,0.06);
        }
        .evz-try.ant-btn:active {
          color: ${PRIMARY_BLUE_HOVER};
          border-color: ${PRIMARY_BLUE_HOVER};
          background: rgba(9,88,217,0.10);
        }
      `}</style>
    </Modal>
  );
}

function Row({ label, value }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 8,
        padding: '4px 0',
      }}
    >
      <Text type="secondary">{label}</Text>
      <Text>{value}</Text>
    </div>
  );
}
