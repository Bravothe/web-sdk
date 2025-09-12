// src/PaymentSuccessModal.js
import React from 'react';
import { Modal, Button, Typography } from 'antd';

const { Title, Text } = Typography;

// Smooth blue palette (sampled from your reference)
const BLUE_BASE = '#179CFC';   // main
const BLUE_LIGHT = '#5CB9FC';  // top of badge gradient
const BLUE_DARK = '#127CC9';   // hover/active accent

export default function PaymentSuccessModal({
  open = true,
  onClose,
  amount,                 // optional
  currency = 'UGX',       // optional
  zIndex = 2000,
  width = 440,            // slightly smaller like the reference
  showAmount = false,
  title = 'Payment Successful',
  subtitle,               // optional: small line under amount (e.g., “Thanks for using EVzone Pay”)
}) {
  const fmtAmount = (v, cur) => {
    const n = Number(v ?? 0);
    try {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: cur,
        maximumFractionDigits: 0,
      }).format(n);
    } catch {
      return `${cur} ${n.toLocaleString()}`;
    }
  };

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
      {/* Smooth blue success badge (slightly smaller than before) */}
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

      {showAmount && typeof amount === 'number' && (
        <div style={{ marginTop: -2, marginBottom: 12, color: '#4B5563', fontWeight: 600 }}>
          {fmtAmount(amount, currency)}
        </div>
      )}

      {subtitle ? (
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          {subtitle}
        </Text>
      ) : null}

      <Button className="evz-primary" type="primary" size="large" shape="round" block onClick={onClose}>
        Done
      </Button>

      <style>{`
        .evz-success-modal .ant-modal-content {
          border-radius: 14px;
        }

        /* Blue circular badge */
        .evz-badge {
          margin: 0 auto 8px;
          width: 72px;               /* ↓ slightly reduced from 84px */
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(100% 100% at 50% 0%, ${BLUE_LIGHT} 0%, ${BLUE_BASE} 100%);
          box-shadow: 0 10px 28px rgba(23, 156, 252, 0.32);
          animation: evzPop .26s ease-out;
        }

        /* Primary button in the smooth blue tone */
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

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .evz-badge { animation: none !important; }
        }
      `}</style>
    </Modal>
  );
}
