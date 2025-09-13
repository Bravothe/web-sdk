// src/ProcessingModal.js
import React from 'react';
import { Modal, Typography, Avatar } from 'antd';

const { Title, Text } = Typography;

const BRAND_LOGO =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png';

// Smooth Airbnb-style blue gradient
const BLUE_START = '#2EA1FF';
const BLUE_END   = '#1B8CFF';

/**
 * Props:
 *  - open?: boolean
 *  - onClose?: () => void   // usually not closable while processing
 *  - src?: string           // GIF/MP4/IMG URL (defaults to your Cloudinary GIF)
 *  - message?: string       // big heading (default: "Processing")
 *  - subText?: string       // small line below
 *  - width?: number         // default 480
 *  - zIndex?: number        // default 2000
 *  - roundedSize?: number   // square preview size (default 160)
 *  - loop?: boolean         // if a <video> is used
 *
 * Notes:
 *  - File extension decides whether to render <img> (gif/png/jpg/svg) or <video>.
 */
export default function ProcessingModal({
  open = true,
  onClose,
  src = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif',
  message = 'Processing',
  subText = '',
  width = 480,
  zIndex = 2000,
  roundedSize = 160,
  loop = true,
}) {
  const isGif =
    typeof src === 'string' &&
    /\.(gif|png|jpe?g|svg)(\?.*)?$/i.test(src);

  return (
    <Modal
      open={open}
      centered
      width={width}
      footer={null}
      onCancel={onClose}
      maskClosable={false}
      closable={false}          // processing should not be dismissible
      zIndex={zIndex}
      title={null}
      bodyStyle={{ padding: 20, textAlign: 'center' }}
      className="evz-modal"
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

      {/* Blue gradient square with media */}
      <div
        aria-hidden
        style={{
          margin: '8px auto 12px',
          width: roundedSize,
          height: roundedSize,
          borderRadius: 16,
          background: `linear-gradient(180deg, ${BLUE_START} 0%, ${BLUE_END} 100%)`,
          boxShadow: '0 12px 34px rgba(30,140,255,0.28)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isGif ? (
          <img
            src={src}
            alt=""
            style={{
              maxWidth: '82%',
              maxHeight: '82%',
              borderRadius: 12,
              objectFit: 'contain',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
            crossOrigin="anonymous"
            draggable={false}
          />
        ) : (
          <video
            src={src}
            autoPlay
            muted
            playsInline
            loop={loop}
            preload="auto"
            style={{
              maxWidth: '82%',
              maxHeight: '82%',
              borderRadius: 12,
              objectFit: 'contain',
            }}
          />
        )}
      </div>

      <Title level={4} style={{ margin: '0 0 4px' }}>{message}</Title>
      {subText ? (
        <Text type="secondary" style={{ display: 'block' }}>{subText}</Text>
      ) : null}
    </Modal>
  );
}
