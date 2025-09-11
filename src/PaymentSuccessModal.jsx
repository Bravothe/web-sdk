import React from 'react';
import { Modal, Result, Button } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

export default function PaymentSuccessModal({
  open = true,
  amount,
  currency = 'UGX',
  onClose,
  zIndex = 2000,
}) {
  return (
    <Modal open={open} centered footer={null} onCancel={onClose} zIndex={zIndex} maskClosable={false}>
      <Result
        status="success"
        icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
        title="Payment Successful"
        subTitle={`Your payment of ${currency} ${Number(amount).toFixed(2)} was processed.`}
        extra={<Button type="primary" onClick={onClose}>Close</Button>}
      />
    </Modal>
  );
}
