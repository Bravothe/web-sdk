// src/PaymentSuccessModal.js
import React from 'react';
import { Modal, Button, Typography } from 'antd';

const { Title, Text } = Typography;

// Smooth blue palette
const BLUE_BASE = '#179CFC';
const BLUE_LIGHT = '#5CB9FC';
const BLUE_DARK = '#127CC9';

export default function PaymentSuccessModal({
  open = true,
  onClose,
  // keep these props for backwards-compat, but we won't render them:
  amount,                 // unused (intentionally hidden)
  currency = 'UGX',       // unused (intentionally hidden)
  showAmount = false,     // unused (intentionally hidden)
  zIndex = 2000,
  width = 440,
  title = 'Payment Successful',
  subtitle,               // optional small line under the title
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
      bodyStyle={{ padding: 28, textAlign: 'center' }}
      className="evz-success-modal"
    >
      {/* Blue success badge */}
      <div className="evz-badge" aria-hidden>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <path
            d="M20 6L9 17l-5-5"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Title
        level={3}
        style={{ marginTop: 14, marginBottom: 10, color: '#111827', fontWeight: 700 }}
      >
        {title}
      </Title>

      {/* Amount intentionally removed — always hidden */}

      {subtitle ? (
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          {subtitle}
        </Text>
      ) : null}

      <Button
        className="evz-primary"
        type="primary"
        size="large"
        shape="round"
        block
        onClick={onClose}
      >
        Done
      </Button>

      <style>{`
        .evz-success-modal .ant-modal-content {
          border-radius: 14px;
        }
        .evz-badge {
          margin: 0 auto 8px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justifyContent: center;
          background: radial-gradient(100% 100% at 50% 0%, ${BLUE_LIGHT} 0%, ${BLUE_BASE} 100%);
          box-shadow: 0 10px 28px rgba(23, 156, 252, 0.32);
          animation: evzPop .26s ease-out;
        }
        .evz-success-modal .evz-primary.ant-btn-primary {
          background: ${BLUE_BASE};
          border-color: ${BLUE_BASE};
          font-weight: 600;
          height: 40px;
        }
        .evz-success-modal .evz-primary.ant-btn-primary:hover,
        .evz-success-modal .evz-primary.ant-btn-primary:focus {
          background: ${BLUE_DARK};
          border-color: ${BLUE_DARK};
        }
        .evz-success-modal .evz-primary.ant-btn-primary:active {
          background: ${BLUE_DARK};
          border-color: ${BLUE_DARK};
          filter: saturate(1.05);
        }
        @keyframes evzPop {
          0%   { transform: scale(.92); opacity: .65; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .evz-badge { animation: none !important; }
        }
      `}</style>
    </Modal>
  );
}
