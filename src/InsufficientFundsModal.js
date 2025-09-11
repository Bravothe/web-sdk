import React from 'react';
import { Modal, Result, Button } from 'antd';
import { ExclamationCircleTwoTone } from '@ant-design/icons';

export default function InsufficientFundsModal({
  open = true,
  onClose,
  zIndex = 2000,
}) {
  return (
    <Modal open={open} centered footer={null} onCancel={onClose} zIndex={zIndex} maskClosable={false}>
      <Result
        status="warning"
        icon={<ExclamationCircleTwoTone twoToneColor="#faad14" />}
        title="Insufficient Funds"
        subTitle="The account doesn’t have enough balance for this transaction."
        extra={<Button type="primary" onClick={onClose}>Add Funds</Button>}
      />
    </Modal>
  );
}

