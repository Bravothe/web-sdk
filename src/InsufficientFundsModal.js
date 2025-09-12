// src/InsufficientFundsModal.js
import React from 'react';
import { Modal, Button, Typography, Space, Avatar } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const BRAND_LOGO =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';
const BRAND_ORANGE = '#FF9800';   // icon + heading
const BRAND_RED = '#ff4d4f';      // top-right close

export default function InsufficientFundsModal({
  open = true,
  onClose,
  onAddFunds,            // optional custom handler; falls back to onClose
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

      {/* Title + copy */}
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Title level={3} style={{ margin: 0, color: BRAND_ORANGE }}>
          Insufficient Funds
        </Title>
        <Paragraph style={{ marginTop: 8, textAlign: 'center', color: '#444' }}>
          The account did not have sufficient funds to cover the transaction
          amount at the time of the transaction
        </Paragraph>

        <Button
          type="primary"
          shape="round"
          size="middle"
          onClick={onAddFunds || onClose}
          style={{ width: 160 }}
        >
          Add Funds
        </Button>
      </Space>
    </Modal>
  );
}
