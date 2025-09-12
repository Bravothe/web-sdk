// src/PaymentSuccessModal.js
import React from 'react';
import { Modal, Button, Typography } from 'antd';

const { Title } = Typography;

export default function PaymentSuccessModal({
  open = true,
  onClose,
  amount,                // optional
  currency = 'UGX',      // optional
  zIndex = 2000,
  width = 480,
  showAmount = false,    // set true if you want to display the amount
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
      bodyStyle={{ padding: 24, textAlign: 'center' }}
    >
      {/* Big blue check in a circle */}
      <div className="evz-success-circle" aria-hidden>
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <path
            d="M20 6L9 17l-5-5"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Title level={4} style={{ marginTop: 12, marginBottom: 16 }}>
        Payment Successful
      </Title>

      {showAmount && typeof amount === 'number' && (
        <div style={{ marginBottom: 12, color: '#667085' }}>
          {currency} {Number(amount).toLocaleString(undefined, { minimumFractionDigits: 0 })}
        </div>
      )}

      <Button
        type="primary"
        size="large"
        shape="round"
        block
        onClick={onClose}
        style={{ fontWeight: 600 }}
      >
        Done
      </Button>

      <style>{`
        .evz-success-circle {
          margin: 4px auto 8px;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #2F80ED 0%, #56CCF2 100%);
          box-shadow: 0 8px 30px rgba(47,128,237,0.35);
          animation: evzPop .28s ease-out;
        }
        @keyframes evzPop {
          0% { transform: scale(.9); opacity: .6; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </Modal>
  );
}
