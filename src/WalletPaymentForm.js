import React, { useState, useEffect } from 'react';
import './WalletPaymentForm.css';
import TransactionSummary from './TransactionSummary';
import EnterPasscode from './EnterPasscode';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailed from './PaymentFailed';
import LoadingOverlay from './LoadingOverlay';

const SAMPLE_CUSTOMERS = {
  "customer123": { name: "John Doe", balance: 1000, passcode: "123456" },
  "customer456": { name: "Jane Smith", balance: 500, passcode: "567856" },
  "customer789": { name: "Alice Brown", balance: 50, passcode: "901256" },
};

const generateTransactionDetails = (amount, transactionId) => ({
  type: "Booking",
  id: transactionId,
  particulars: "Hotel Booking",
  billedCurrency: "UGX",
  billedAmount: amount,
  totalBilling: amount,
});

const checkAccountExists = (customerId) => Promise.resolve(!!SAMPLE_CUSTOMERS[customerId]);

const checkFunds = (customerId, amount) => {
  const customer = SAMPLE_CUSTOMERS[customerId];
  return Promise.resolve(customer && customer.balance >= amount);
};

const validatePasscode = (customerId, passcode, amount) => {
  const customer = SAMPLE_CUSTOMERS[customerId];
  if (customer && customer.passcode === passcode && customer.balance >= amount) {
    SAMPLE_CUSTOMERS[customerId].balance -= amount;
    return Promise.resolve(true);
  }
  return Promise.resolve(false);
};

const WalletPaymentForm = ({ customerId, amount, onClose, onSuccess }) => {
  const [popup, setPopup] = useState('transactionSummary');
  const [passcode, setPasscode] = useState('');
  const [hasAccount, setHasAccount] = useState(null);
  const [hasFunds, setHasFunds] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [showPasscode, setShowPasscode] = useState(false);
  const [transactionId] = useState(`W-${Math.floor(Math.random() * 1000000000)}`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    const checkConditions = async () => {
      if (!customerId) {
        setHasAccount(false);
        return;
      }
      const accountExists = await checkAccountExists(customerId);
      setHasAccount(accountExists);
      if (!accountExists) return;

      const fundsOk = await checkFunds(customerId, amount);
      setHasFunds(fundsOk);
    };

    checkConditions();

    return () => clearTimeout(timer);
  }, [customerId, amount]);

  const handleConfirm = () => {
    if (hasAccount && hasFunds) {
      setPopup('enterPasscode');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentStatus('pending');
    const success = await validatePasscode(customerId, passcode, amount);
    setPaymentStatus(success ? 'success' : 'failed');
    setPopup(success ? 'paymentSuccess' : 'paymentFailed');
    if (success && onSuccess) onSuccess();

    if (!success) {
      setTimeout(() => {
        setPopup('transactionSummary');
        setPasscode('');
        setPaymentStatus('idle');
        onClose();
      }, 5000);
    }
  };

  const handleSuccessClose = () => {
    setPopup('transactionSummary');
    setPasscode('');
    setPaymentStatus('idle');
    onClose();
  };

  const transactionDetails = generateTransactionDetails(amount, transactionId);

  const renderPopup = () => {
    switch (popup) {
      case 'transactionSummary':
        return (
          <TransactionSummary
            hasAccount={hasAccount}
            hasFunds={hasFunds}
            transactionDetails={transactionDetails}
            onClose={onClose}
            onConfirm={handleConfirm}
          />
        );
      case 'enterPasscode':
        return (
          <EnterPasscode
            passcode={passcode}
            setPasscode={setPasscode}
            showPasscode={showPasscode}
            setShowPasscode={setShowPasscode}
            transactionDetails={transactionDetails}
            onSubmit={handleSubmit}
            onBack={() => setPopup('transactionSummary')}
          />
        );
      case 'paymentSuccess':
        return <PaymentSuccess amount={amount} onClose={handleSuccessClose} />;
      case 'paymentFailed':
        return <PaymentFailed onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="wallet-payment-form">
      {loading ? <LoadingOverlay /> : (
        <>
          <div className="overlay" onClick={onClose}></div>
          <div className="content">{renderPopup()}</div>
        </>
      )}
    </div>
  );
};

export default WalletPaymentForm;