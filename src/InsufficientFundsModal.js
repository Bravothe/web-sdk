// src/InsufficientFundsModal.js
import React from 'react';
import { Modal, Button, Typography, Space, Avatar } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const BRAND_LOGO =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';
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
  const hasNumbers =
    typeof balance === 'number' && !Number.isNaN(balance) &&
    typeof requiredTotal === 'number' && !Number.isNaN(requiredTotal);

  const shortfall = hasNumbers ? Math.max(requiredTotal - balance, 0) : null;

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
      {/* Brand header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar src={BRAND_LOGO} size={28} />
        <Text strong style={{ fontSize: 16 }}>EVzone Pay</Text>
      </div>

      {/* dashed separator */}
      <div
        style={{
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px',
        }}
      />

      {/* Big orange icon */}
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
      >
        <CloseOutlined style={{ color: '#fff', fontSize: 34, fontWeight: 700 }} />
      </div>

      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Title level={3} style={{ margin: 0, color: BRAND_ORANGE }}>
          Insufficient Funds
        </Title>

        {!hasNumbers ? (
          <Paragraph style={{ marginTop: 8, textAlign: 'center', color: '#444' }}>
            The account did not have sufficient funds to cover the transaction
            amount at the time of the transaction.
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
              <Row label="Balance" value={`${currency} ${fmt(balance)}`} />
              <Row label="Required" value={`${currency} ${fmt(requiredTotal)}`} />
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
        /* ensure ghost button text/border stay visible even if a global .ant-btn { color:#fff } exists */
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
