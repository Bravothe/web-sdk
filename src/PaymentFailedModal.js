// src/PaymentFailedModal.js
import React from 'react';
import { Modal, Typography, Space, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BrandHeader } from './brand.js'; // ← unified brand image header

const { Title, Paragraph, Text } = Typography;

const BRAND_RED = '#ff4d4f';

export default function PaymentFailedModal({
  open = true,
  onClose,
  onDetails,            // optional: custom handler for the "Details" button
  reason,               // optional: server/client error summary to display
  zIndex = 2000,
  width = 460,
}) {
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
      className="evz-modal"
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
          aria-label="Close"
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

      {/* Big red icon */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: BRAND_RED,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px',
          boxShadow: '0 6px 16px rgba(255,77,79,0.28)',
        }}
        aria-hidden
      >
        <CloseOutlined style={{ color: '#fff', fontSize: 34, fontWeight: 700 }} />
      </div>

      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Title level={3} style={{ margin: 0, color: BRAND_RED }}>
          Payment Failed
        </Title>

        <Paragraph style={{ marginTop: 8, textAlign: 'center', color: '#444' }}>
          We couldn’t complete the payment. Please check your wallet for more details
          and try again.
          {reason ? (
            <>
              <br />
              <Text type="secondary" style={{ fontSize: 12 }}>
                Reason: {reason}
              </Text>
            </>
          ) : null}
        </Paragraph>

        <Button
          type="primary"
          danger
          shape="round"
          size="middle"
          onClick={onDetails || onClose}
          style={{ width: 140 }}
        >
          Details
        </Button>
      </Space>
    </Modal>
  );
}
