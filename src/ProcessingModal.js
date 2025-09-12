import React from 'react';
import { Modal, Typography } from 'antd';
const { Text } = Typography;

export default function ProcessingModal({
  open,
  src,
  message = 'Processing payment…',
  width = 420,
  zIndex = 2000,
  loop = true,
}) {
  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      maskClosable={false}
      centered
      width={width}
      zIndex={zIndex}
      title={null}
      bodyStyle={{ padding: 24, textAlign: 'center' }}
      className="evz-processing-modal"
    >
      <div className="evz-video-wrap">
        <video
          src={src}
          autoPlay
          muted
          playsInline
          loop={loop}
          preload="auto"
          width="160"
          height="160"
          style={{ display: 'block', margin: '0 auto', borderRadius: 12, objectFit: 'contain' }}
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      <Text type="secondary" style={{ display: 'block', marginTop: 12, fontWeight: 600 }}>
        {message}
      </Text>

      <style>{`
        .evz-processing-modal .ant-modal-content { border-radius: 14px; }
        .evz-video-wrap {
          display: inline-flex;
          padding: 8px;
          border-radius: 14px;
          background: radial-gradient(100% 100% at 50% 0%, #5CB9FC 0%, #179CFC 100%);
          box-shadow: 0 10px 28px rgba(23,156,252,.28);
        }
      `}</style>
    </Modal>
  );
}
