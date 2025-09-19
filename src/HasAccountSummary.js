// src/HasAccountSummary.js
import React, { useEffect, useRef } from 'react';
import { Modal, Typography, Space, Button } from 'antd';
import { CloseOutlined, InfoCircleFilled } from '@ant-design/icons';
import { BRAND_MARK } from './brand.js';

const { Title, Text } = Typography;
const BRAND_RED = '#ff4d4f';

export default function HasAccountSummary({
  open = true,
  onLoginSuccess,
  onClose,
  zIndex = 2000,
  width = 520,
  authOrigin = 'https://accounts.dev.evzone.app',
  authUrl = 'https://accounts.dev.evzone.app',
  // keep header sizing consistent with ProcessingModal
  brandMaxWidth = 240,
  brandMaxHeight = 54,
}) {
  const popupRef = useRef(null);
  const checkRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== authOrigin) return;

      const data = event.data || {};
      const userNo = data.user_no || data.user_id; // accept either key
      const authToken = data.auth_token;

      if (userNo) {
        try { popupRef.current?.close(); } catch {}
        clearInterval(checkRef.current);
        clearTimeout(timeoutRef.current);
        onLoginSuccess?.(userNo, authToken);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      try { popupRef.current?.close(); } catch {}
      clearInterval(checkRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [authOrigin, onLoginSuccess]);

  const handleSignIn = () => {
    const callbackUrl = `${window.location.origin}/wallet-callback`;
    const url = `${authUrl}?redirect_uri=${encodeURIComponent(callbackUrl)}`;
    const win = window.open(url, 'EVzone Sign In', 'width=520,height=640');

    if (!win) {
      alert('Popup blocked. Please allow popups for this site.');
      return;
    }

    popupRef.current = win;

    checkRef.current = setInterval(() => {
      if (win.closed) {
        clearInterval(checkRef.current);
        clearTimeout(timeoutRef.current);
        onClose?.();
      }
    }, 500);

    timeoutRef.current = setTimeout(() => {
      if (!win.closed) win.close();
      clearInterval(checkRef.current);
      onClose?.();
      alert('Login timed out. Please try again.');
    }, 60000);
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
      bodyStyle={{ padding: 0 }}              // match ProcessingModal
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
      {/* Brand header — LEFT aligned & same sizing controls as ProcessingModal */}
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

      {/* thin dashed separator (same spacing as ProcessingModal) */}
      <div
        style={{
          borderTop: '1px dashed #e5e7eb',
          margin: '8px 16px 12px',
        }}
      />

      {/* Body */}
      <div style={{ padding: '0 16px 16px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title level={4} style={{ margin: 0 }}>Sign in required</Title>

          {/* Info box */}
          <div
            style={{
              background: '#e6f4ff',
              borderRadius: 8,
              padding: 12,
              display: 'grid',
              gridTemplateColumns: '20px 1fr',
              gap: 8,
            }}
          >
            <InfoCircleFilled style={{ color: '#1677ff', fontSize: 18, lineHeight: '20px' }} />
            <Text>
              EVzone needs you to sign in to continue with this payment.
            </Text>
          </div>

          {/* Right-aligned Sign in button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={handleSignIn}
              style={{ width: 160 }}
            >
              Sign in
            </Button>
          </div>
        </Space>
      </div>
    </Modal>
  );
}
