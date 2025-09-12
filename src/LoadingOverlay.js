import React from 'react';
import { Modal, Space, Avatar, Typography } from 'antd';

const { Title, Text } = Typography;

const LoadingOverlay = ({
  open = true,
  tip = 'Preparing secure checkout…',
  logoSrc = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png',
  brand = 'EVzone Pay',
  zIndex = 2000,
  width = 420,
}) => {
  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      maskClosable={false}
      centered
      zIndex={zIndex}
      width={width}
      title={null}
      bodyStyle={{ padding: 24, textAlign: 'center' }}
    >
      <Space direction="vertical" align="center" size="large" style={{ width: '100%' }}>
        {/* pulsing logo */}
        <div className="evz-pulse">
          <Avatar src={logoSrc} size={96} style={{ background: '#fff' }} />
        </div>

        {/* brand: dark orange + smooth blink (INLINE style to win over Ant) */}
        <Title
          level={3}
          style={{
            margin: '6px 0 0',
            fontWeight: 800,
            letterSpacing: '.2px',
            color: 'darkorange',
            textShadow: '0 2px 12px rgba(217,119,6,.35)',
            animation: 'evzBlink 1.6s ease-in-out infinite',
          }}
        >
          {brand}
        </Title>

        {/* soft shimmering tip */}
        {tip ? <Text className="evz-tip">{tip}</Text> : null}
      </Space>

      <style>{`
        @keyframes evzBlink {
          0%,100% { opacity: 1; filter: drop-shadow(0 0 0 rgba(217,119,6,0)); }
          50%     { opacity: .72; filter: drop-shadow(0 0 6px rgba(217,119,6,.45)); }
        }

        .evz-pulse {
          display: inline-flex;
          padding: 6px;
          border-radius: 50%;
          background: radial-gradient(65% 65% at 50% 50%, rgba(2,205,141,.18), rgba(2,205,141,0) 70%);
          position: relative;
        }
        .evz-pulse::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid rgba(2,205,141,.35);
          animation: evzPulse 1.8s ease-out infinite;
        }
        @keyframes evzPulse {
          0%   { transform: scale(.85); opacity: .6; }
          70%  { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }

        .evz-tip {
          display: block;
          margin-top: 2px;
          font-size: 13px;
          letter-spacing: .2px;
          background: linear-gradient(90deg,#9aa6af 0%,#ccd3d8 50%,#9aa6af 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% 100%;
          animation: evzShimmer 2.2s linear infinite;
        }
        @keyframes evzShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </Modal>
  );
};

export default LoadingOverlay;
export { LoadingOverlay };
