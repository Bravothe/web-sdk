// src/InsufficientFundsModal.js
import React from 'react';
import { Modal, Button, Typography, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BrandHeader } from './brand.js'; // unified brand image header

const { Title, Paragraph } = Typography;

// Local colors
const BRAND_ORANGE = '#FF9800';
const BRAND_RED = '#ff4d4f';

export default function InsufficientFundsModal({
  open = true,
  onClose,            // ← parent should pass a handler that closes the entire flow
  onOpenAltMobile,    // ← trigger Mobile Money flow
  zIndex = 2000,
  width = 460,
}) {
  return (
    <Modal
      open={open}
      centered
      width={width}
      footer={null}
      closable           // show top-right close icon
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
      onCancel={onClose} // clicking the ✕ closes the flow (parent decides)
      maskClosable={false}
      title={null}
      zIndex={zIndex}
      bodyStyle={{ padding: 20 }}
    >
      {/* Brand header (image only, left-aligned) */}
      <BrandHeader size="sm" />

      {/* dashed separator */}
      <div
        style={{
          borderTop: '1px dashed #e5e7eb',
          margin: '12px -20px 16px',
        }}
      />

      {/* Big orange X icon in the center */}
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
        <CloseOutlined style={{ color: '#fff', fontSize: 34, fontWeight: 700 }} />
      </div>

      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Title level={3} style={{ margin: 0, color: BRAND_ORANGE }}>
          Insufficient Funds
        </Title>

        <Paragraph style={{ marginTop: 8, textAlign: 'center', color: '#444' }}>
          The account did not have sufficient funds to cover the transaction amount at the time of the transaction.
        </Paragraph>

        {/* Single primary action: Pay with Mobile Money */}
        <Button
          type="primary"
          shape="round"
          size="middle"
          onClick={onOpenAltMobile}
          style={{ width: 240, marginTop: 8 }}
        >
          Pay with Mobile Money
        </Button>
      </Space>
    </Modal>
  );
}
