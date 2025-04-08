import React, { useState, useEffect } from 'react';
import HasAccountSummary from './HasAccountSummary';
import TransactionDetailsSummary from './TransactionSummary';
import EnterPasscode from './EnterPasscode';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailed from './PaymentFailed';
import InsufficientFunds from './InsufficientFunds';
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

const validatePasscode = (customerId, passcode, amount) => {
  const customer = SAMPLE_CUSTOMERS[customerId];
  if (!customer) return { success: false, reason: 'no_account' };
  if (customer.passcode !== passcode) return { success: false, reason: 'invalid_passcode' };
  if (customer.balance < amount) return { success: false, reason: 'insufficient_funds' };
  
  SAMPLE_CUSTOMERS[customerId].balance -= amount;
  return { success: true };
};

const WalletPaymentForm = ({ customerId, amount, onClose, onSuccess }) => {
  const [popup, setPopup] = useState('transactionSummary');
  const [passcode, setPasscode] = useState('');
  const [hasAccount, setHasAccount] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [showPasscode, setShowPasscode] = useState(false);
  const [transactionId] = useState(`W-${Math.floor(Math.random() * 1000000000)}`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect running, customerId:', customerId, 'amount:', amount);
    const timer = setTimeout(() => {
      console.log('Loading finished');
      setLoading(false);
    }, 5000);

    const checkConditions = async () => {
      if (!customerId) {
        console.log('No customerId provided, setting hasAccount to false');
        setHasAccount(false);
        return;
      }
      if (!SAMPLE_CUSTOMERS[customerId]) {
        console.log(`Invalid customerId: ${customerId}, setting hasAccount to false`);
        setHasAccount(false);
        return;
      }
      const accountExists = await checkAccountExists(customerId);
      console.log('Account exists:', accountExists);
      setHasAccount(accountExists);
    };

    checkConditions();

    return () => clearTimeout(timer);
  }, [customerId, amount]);

  const handleConfirm = () => {
    console.log('Confirm clicked, hasAccount:', hasAccount);
    if (hasAccount === null) {
      console.log('hasAccount is null, cannot proceed');
      return;
    }
    if (hasAccount) {
      setPopup('enterPasscode');
    } else {
      console.log('No account, showing HasAccountSummary');
      setPopup('transactionSummary');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting passcode:', passcode);
    setPaymentStatus('pending');
    const result = await validatePasscode(customerId, passcode, amount);
    console.log('Validation result:', result);
    setPaymentStatus(result.success ? 'success' : 'failed');
    
    if (result.success) {
      setPopup('paymentSuccess');
      if (onSuccess) onSuccess();
    } else {
      if (result.reason === 'insufficient_funds') {
        setPopup('insufficientFunds');
      } else {
        setPopup('paymentFailed');
      }
      setTimeout(() => {
        setPopup('transactionSummary');
        setPasscode('');
        setPaymentStatus('idle');
        onClose();
      }, 5000);
    }
  };

  const handleSuccessClose = () => {
    console.log('Success close clicked');
    setPopup('transactionSummary');
    setPasscode('');
    setPaymentStatus('idle');
    onClose();
  };

  const transactionDetails = generateTransactionDetails(amount, transactionId);

  const renderPopup = () => {
    console.log('Rendering popup, current popup:', popup, 'hasAccount:', hasAccount);
    switch (popup) {
      case 'transactionSummary':
        if (!hasAccount) {
          return <HasAccountSummary onClose={onClose} />;
        }
        return (
          <TransactionDetailsSummary
            transactionDetails={transactionDetails}
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
      case 'insufficientFunds':
        return <InsufficientFunds onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="wallet-payment-form">
        {loading ? (
          <LoadingOverlay />
        ) : (
          <>
            <div className="overlay" onClick={() => {
              console.log('Overlay clicked, closing');
              onClose();
            }}></div>
            {renderPopup()}
          </>
        )}
      </div>
      <style>{`
        .wallet-payment-form {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          pointer-events: auto;
        }
      `}</style>
    </>
  );
};

export default WalletPaymentForm;