// src/ProcessingModal.js
import React from 'react';
import { Modal, Typography } from 'antd';
import { BRAND_MARK } from './brand.js';

const { Title, Text } = Typography;

const BLUE_START = '#2EA1FF';
const BLUE_END   = '#1B8CFF';

export default function ProcessingModal({
  open = true,
  onClose,
  src = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1757746859/processing_bugsoo.gif',
  message = 'Processing',
  subText = 'Please wait',
  width = 480,
  zIndex = 2000,
  roundedSize = 140,        // slightly smaller square
  loop = true,
  brandMaxWidth = 240,      // ↓ smaller brand by default
  brandMaxHeight = 54,
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
      closable={false}
      zIndex={zIndex}
      title={null}
      bodyStyle={{ padding: 0, textAlign: 'center' }}
      className="evz-modal"
    >
      {/* Brand header — LEFT aligned & smaller */}
      <div style={{ padding: '10px 16px 0', textAlign: 'left' }}>
        <img
          src={BRAND_MARK}
          alt=""
          style={{
            display: 'block',
            maxWidth: brandMaxWidth,
            maxHeight: brandMaxHeight,
            width: 'auto',
            height: 'auto',
            margin: 0,
            objectFit: 'contain',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          crossOrigin="anonymous"
          draggable={false}
        />
      </div>

      {/* thin dashed separator with tighter margins */}
      <div
        style={{
          borderTop: '1px dashed #e5e7eb',
          margin: '8px 16px 12px',
        }}
      />

      {/* Blue gradient square with media */}
      <div
        aria-hidden
        style={{
          margin: '0 auto 10px',
          width: roundedSize,
          height: roundedSize,
          borderRadius: 16,
          background: `linear-gradient(180deg, ${BLUE_START} 0%, ${BLUE_END} 100%)`,
          boxShadow: '0 10px 28px rgba(30,140,255,0.24)',
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

      <div style={{ padding: '0 16px 16px' }}>
        <Title level={5} style={{ margin: '0 0 2px' }}>{message}</Title>
        {subText ? (
          <Text type="secondary" style={{ display: 'block', fontSize: 12 }}>{subText}</Text>
        ) : null}
      </div>
    </Modal>
  );
}
