import React from 'react';
import { Modal, Result, Button } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';

export default function PaymentFailedModal({
  open = true,
  onClose,
  zIndex = 2000,
}) {
  return (
    <Modal open={open} centered footer={null} onCancel={onClose} zIndex={zIndex} maskClosable={false}>
      <Result
        status="error"
        icon={<CloseCircleTwoTone twoToneColor="#ff4d4f" />}
        title="Payment Failed"
        subTitle="Please check your wallet for details."
        extra={<Button type="primary" onClick={onClose}>Details</Button>}
      />
    </Modal>
  );
}
