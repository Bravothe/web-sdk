import React, { useState } from 'react';
import { Modal, Typography, Space, Avatar, Button, List } from 'antd';
import { CloseOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import { BrandHeader } from './brand.js';

const { Title, Text } = Typography;
const BRAND_GREEN = '#02CD8D';

/**
 * AccountPickerModal
 * Props:
 *  - open: boolean
 *  - zIndex?: number
 *  - width?: number (default 560)
 *  - accounts: Array<{ userNo, walletId?, owner?, email?, photo? }>
 *  - onSelect: (userNo: string) => void | Promise<void>
 *  - onClose: () => void
 *  - activeUserNo?: string
 *  - ctaLabel?: string
 */
function AccountPickerModal({
  open,
  zIndex = 2000,
  width = 560,
  accounts = [],
  onSelect,
  onClose,
  activeUserNo,
  ctaLabel = 'Use this account',
}) {
  const [selectingNo, setSelectingNo] = useState(null);

  const handleChoose = async (userNo) => {
    if (!userNo || selectingNo) return;
    setSelectingNo(userNo);
    try {
      await Promise.resolve(onSelect?.(userNo));
    } finally {
      setSelectingNo(null);
    }
  };

  return (
    <Modal
      open={open}
      centered
      width={width}
      title={null}
      footer={null}
      onCancel={onClose}
      maskClosable={false}
      zIndex={zIndex}
      bodyStyle={{ padding: 20 }}
      closeIcon={
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#ff4d4f',
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
      <BrandHeader size="sm" />
      <div style={{ borderTop: '1px dashed #e5e7eb', margin: '12px -20px 16px' }} />

      <Title level={4} style={{ marginTop: 0, color: BRAND_GREEN }}>
        Choose an account
      </Title>

      <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
        Select the EVzone account you’d like to use for this payment.
      </Text>

      <List
        itemLayout="horizontal"
        rowKey={(acct) => acct.walletId || acct.userNo || Math.random().toString(36)}
        dataSource={accounts}
        locale={{ emptyText: 'No saved accounts found on this device.' }}
        renderItem={(acct) => {
          const isActive = activeUserNo && acct.userNo === activeUserNo;
          const isSelecting = selectingNo === acct.userNo;

          return (
            <List.Item
              onClick={() => handleChoose(acct.userNo)}
              style={{
                padding: 12,
                border: '1px solid #f0f0f0',
                borderRadius: 10,
                marginBottom: 10,
                cursor: 'pointer',
                transition: 'box-shadow 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              actions={[
                <Button
                  key="use"
                  type="primary"
                  shape="round"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChoose(acct.userNo);
                  }}
                  loading={isSelecting}
                >
                  {ctaLabel}
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar size={48} src={acct.photo}>
                    {(acct.owner || acct.email || 'U')[0].toUpperCase()}
                  </Avatar>
                }
                title={
                  <Space align="center">
                    <span style={{ fontWeight: 600 }}>
                      {acct.owner || 'EVzone user'}
                    </span>
                    {isActive ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}
                  </Space>
                }
                description={
                  <div style={{ lineHeight: 1.4 }}>
                    <div>
                      <Text type="secondary">Email:</Text> {acct.email || '—'}
                    </div>
                    <div>
                      <Text type="secondary">Wallet ID:</Text>{' '}
                      <span style={{ fontFamily: 'monospace' }}>
                        {acct.walletId || '—'}
                      </span>
                    </div>
                  </div>
                }
              />
            </List.Item>
          );
        }}
      />

      <div style={{ marginTop: 8 }}>
        <Button block shape="round" danger ghost onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}

export default AccountPickerModal;
export { AccountPickerModal };
