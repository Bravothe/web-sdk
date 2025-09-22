// src/InsufficientFundsModal.js
import React from 'react';
import { Modal, Typography } from 'antd';
import {
  CloseOutlined,
  PhoneOutlined,
  CreditCardOutlined,
  BankOutlined,
} from '@ant-design/icons';
import { BrandHeader } from './brand.js'; // unified brand image header

const { Title, Paragraph } = Typography;

// Local colors
const BRAND_ORANGE = '#FF9800';
const BRAND_RED = '#ff4d4f';

// A single, reusable tile for each payment option
function PayTile({ icon, label, onClick }) {
  if (!onClick) return null; // don’t render tiles you’re not wiring up
  return (
    <button
      onClick={onClick}
      style={{
        appearance: 'none',
        border: '1px solid #e5e7eb',
        borderRadius: 14,
        padding: 14,
        background: '#fff',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateRows: '56px auto',
        justifyItems: 'center',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        transition: 'transform .12s ease, box-shadow .12s ease, border-color .12s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
        e.currentTarget.style.borderColor = '#d1d5db';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#f5f7ff',
          display: 'grid',
          placeItems: 'center',
          boxShadow: 'inset 0 0 0 1px #e8eaf6',
        }}
        aria-hidden
      >
        {icon}
      </div>
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: '#344054',
          textAlign: 'center',
        }}
      >
        {label}
      </div>
    </button>
  );
}

export default function InsufficientFundsModal({
  open = true,
  onClose,            // close the whole flow
  onOpenAltMobile,    // start Mobile Money flow
  onOpenCard,         // optional: start Card flow
  onOpenBank,         // optional: start Bank/Transfer flow
  zIndex = 2000,
  width = 480,
}) {
  return (
    <Modal
      open={open}
      centered
      width={width}
      footer={null}
      closable
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
      onCancel={onClose}
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

      <div style={{ textAlign: 'center' }}>
        <Title level={3} style={{ margin: 0, color: BRAND_ORANGE }}>
          Insufficient Funds
        </Title>

        <Paragraph style={{ marginTop: 8, color: '#444' }}>
          Your wallet balance is lower than the total required for this payment.
          Choose an alternative payment method to continue.
        </Paragraph>
      </div>

      {/* Payment options grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
          marginTop: 12,
        }}
      >
        <PayTile
          label="Mobile Money"
          onClick={onOpenAltMobile}
          icon={<PhoneOutlined style={{ fontSize: 26, color: '#1677ff' }} />}
        />
        <PayTile
          label="Card"
          onClick={onOpenCard}
          icon={<CreditCardOutlined style={{ fontSize: 26, color: '#02CD8D' }} />}
        />
        <PayTile
          label="Bank"
          onClick={onOpenBank}
          icon={<BankOutlined style={{ fontSize: 26, color: '#ffb020' }} />}
        />
      </div>
    </Modal>
  );
}
