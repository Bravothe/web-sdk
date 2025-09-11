// LoadingOverlay.jsx
import React from 'react';
import { Modal, Spin, Space, Avatar, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title } = Typography;

/**
 * Ant Design loading overlay
 *
 * Props:
 * - open?: boolean         (default: true)
 * - tip?: string           (default: 'Preparing secure checkout…')
 * - logoSrc?: string       (default: EVzone logo)
 * - brand?: string         (default: 'EVzone Pay')
 * - zIndex?: number        (default: 2000)
 */
const LoadingOverlay = ({
  open = true,
  tip = 'Preparing secure checkout…',
  logoSrc = 'https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg',
  brand = 'EVzone Pay',
  zIndex = 2000,
}) => {
  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      maskClosable={false}
      centered
      zIndex={zIndex}
      styles={{ body: { padding: 24, textAlign: 'center' } }}
    >
      <Space direction="vertical" align="center" size="large" style={{ width: '100%' }}>
        <Avatar src={logoSrc} size={96} />
        <Title level={3} style={{ margin: 0 }}>{brand}</Title>
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 28 }} spin />}
          tip={tip}
        />
      </Space>
    </Modal>
  );
};

export default LoadingOverlay;
export { LoadingOverlay };
