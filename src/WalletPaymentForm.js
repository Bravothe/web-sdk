// pay-sdk-kasese5/src/WalletPaymentForm.jsx
import React, { useState, useEffect, useCallback } from 'react';
import HasAccountSummary from './HasAccountSummary';
import TransactionDetailsSummary from './TransactionSummary';
import EnterPasscode from './EnterPasscode';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailed from './PaymentFailed';
import InsufficientFunds from './InsufficientFunds';
import LoadingOverlay from './LoadingOverlay';

// Sample customers for testing
const SAMPLE_CUSTOMERS = {
  customer123: { name: 'John Doe', balance: 1000, passcode: '123456' },
  customer456: { name: 'Jane Smith', balance: 500, passcode: '567856' },
  customer789: { name: 'Alice Brown', balance: 50, passcode: '901256' },
  admin: { name: 'Admin User', balance: 2000, passcode: 'admin123' },
};

const getStoredUserId = () => localStorage.getItem('wallet_user_id');
const getStoredAuthToken = () => localStorage.getItem('wallet_auth_token');

const generateTransactionDetails = (
  amount,
  transactionId,
  type,
  particulars,
  currency,
  merchantName,
  merchantLogo
) => ({
  type: type || 'Booking',
  id: transactionId,
  particulars: particulars || 'Hotel Booking',
  billedCurrency: currency || 'UGX',
  billedAmount: amount,
  totalBilling: amount,
  merchantName: merchantName || 'Unknown Merchant',
  merchantLogo: merchantLogo || '',
});

const validatePasscode = (customerId, passcode, amount) => {
  const customer = SAMPLE_CUSTOMERS[customerId];
  if (!customer) return { success: false, reason: 'no_account' };
  if (customer.passcode !== passcode) return { success: false, reason: 'invalid_passcode' };
  if (customer.balance < amount) return { success: false, reason: 'insufficient_funds' };
  SAMPLE_CUSTOMERS[customerId].balance -= amount;
  return { success: true };
};

const WalletPaymentForm = ({
  customerId: propCustomerId,
  amount,
  type,
  particulars,
  currency,
  merchantName,
  merchantLogo,
  onClose,
  onSuccess,
}) => {
  const [popup, setPopup] = useState('transactionSummary');
  const [passcode, setPasscode] = useState('');
  const [hasAccount, setHasAccount] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [showPasscode, setShowPasscode] = useState(false);
  const [transactionId] = useState(`W-${Math.floor(Math.random() * 1000000000)}`);
  const [loading, setLoading] = useState(true);
  const [effectiveCustomerId, setEffectiveCustomerId] = useState(propCustomerId);

  // Debounce onClose
  const debounceOnClose = useCallback(() => {
    let timeout;
    return () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          console.log('Executing debounced onClose');
          onClose();
          timeout = null;
        }, 300);
      }
    };
  }, [onClose]);

  const handleClose = debounceOnClose();

  const checkConditions = useCallback(async () => {
    console.log('Checking conditions, propCustomerId:', propCustomerId);
    let customerIdToUse = propCustomerId;

    if (!customerIdToUse || !SAMPLE_CUSTOMERS[customerIdToUse]) {
      let attempts = 0;
      const maxAttempts = 5;
      const tryCredentials = () => {
        attempts++;
        const storedUserId = getStoredUserId();
        const storedAuthToken = getStoredAuthToken();
        console.log(
          `Initial check, attempt ${attempts}, user_id:`,
          storedUserId,
          'auth_token:',
          storedAuthToken
        );
        if (storedUserId && SAMPLE_CUSTOMERS[storedUserId]) {
          customerIdToUse = storedUserId;
          setHasAccount(true);
          setEffectiveCustomerId(customerIdToUse);
          setPopup('transactionSummary');
          setLoading(false);
        } else if (attempts < maxAttempts) {
          setTimeout(tryCredentials, 2000);
        } else {
          setHasAccount(false);
          setEffectiveCustomerId(null);
          setPopup('hasAccountSummary');
          setLoading(false);
        }
      };
      tryCredentials();
    } else {
      setHasAccount(true);
      setEffectiveCustomerId(customerIdToUse);
      setPopup('transactionSummary');
      setLoading(false);
    }
  }, [propCustomerId]);

  useEffect(() => {
    checkConditions();
  }, [checkConditions]);

  const handleLoginSuccess = useCallback((muid, sid) => {
    console.log('Handling login success (from postMessage):', muid, sid);
  
    // Store the received credentials
    localStorage.setItem('wallet_user_id', muid);
    localStorage.setItem('wallet_auth_token', sid);
  
    if (muid && SAMPLE_CUSTOMERS[muid]) {
      setEffectiveCustomerId(muid);
      setHasAccount(true);
      setPopup('transactionSummary');
      setLoading(false);
      console.log('Transitioned to transactionSummary, customerId:', muid);
    } else {
      console.error('Invalid MUID or no test user found');
      setHasAccount(false);
      setPopup('hasAccountSummary');
      setLoading(false);
      alert('Login failed. Please try again.');
      handleClose();
    }
  }, [handleClose]);
  

  const handleConfirm = () => {
    console.log('Confirm clicked, hasAccount:', hasAccount, 'effectiveCustomerId:', effectiveCustomerId);
    if (hasAccount && effectiveCustomerId) {
      setPopup('enterPasscode');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting passcode:', passcode);
    setPaymentStatus('pending');
    const idToValidate = effectiveCustomerId;
    const result = await validatePasscode(idToValidate, passcode, amount);
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
        handleClose();
      }, 5000);
    }
  };

  const handleSuccessClose = () => {
    console.log('Success close clicked');
    setPopup('transactionSummary');
    setPasscode('');
    setPaymentStatus('idle');
    handleClose();
  };

  const transactionDetails = generateTransactionDetails(
    amount,
    transactionId,
    type,
    particulars,
    currency,
    merchantName,
    merchantLogo
  );

  const renderPopup = () => {
    console.log('Rendering popup:', popup, 'hasAccount:', hasAccount, 'effectiveCustomerId:', effectiveCustomerId);
    switch (popup) {
      case 'hasAccountSummary':
        return <HasAccountSummary onClose={handleClose} onLoginSuccess={handleLoginSuccess} />;
      case 'transactionSummary':
        if (hasAccount === false || !effectiveCustomerId) {
          return <HasAccountSummary onClose={handleClose} onLoginSuccess={handleLoginSuccess} />;
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
        return <PaymentFailed onClose={handleClose} />;
      case 'insufficientFunds':
        return <InsufficientFunds onClose={handleClose} />;
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
            <div className="overlay" onClick={handleClose}></div>
            {renderPopup()}
          </>
        )}
      </div>
      <style jsx>{`
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