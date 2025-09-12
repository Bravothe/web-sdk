// src/PaymentFailedModal.js
import React from 'react';
import { Modal, Typography, Space, Avatar, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const BRAND_LOGO =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';
const BRAND_RED = '#ff4d4f';

export default function PaymentFailedModal({
  open = true,
  onClose,
  onDetails,          // optional: custom handler for the "Details" button
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
      >
        <CloseOutlined style={{ color: '#fff', fontSize: 34, fontWeight: 700 }} />
      </div>

      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Title level={4} style={{ margin: 0, color: BRAND_RED }}>
          Transaction Failed
        </Title>
        <Paragraph style={{ marginTop: 8, textAlign: 'center', color: '#444' }}>
          We couldn’t complete the payment. Please check your wallet for more details
          and try again.
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
