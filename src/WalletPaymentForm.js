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
  admin: { name: 'Admin User', balance: 2000, passcode: '234567' },
};

// Helper to get cookie by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const getStoredUserId = () => getCookie('wallet_user_id');
const getStoredAuthToken = () => getCookie('wallet_auth_token');

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

const validatePasscode = (customerId, passcode) => {
  const customer = SAMPLE_CUSTOMERS[customerId];
  if (!customer) return { success: false, reason: 'no_account' };
  if (customer.passcode !== passcode) return { success: false, reason: 'invalid_passcode' };
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
  const [popup, setPopup] = useState('loading'); // Start with loading state
  const [passcode, setPasscode] = useState('');
  const [hasAccount, setHasAccount] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [showPasscode, setShowPasscode] = useState(false);
  const [transactionId] = useState(`W-${Math.floor(Math.random() * 1000000000)}`);
  const [loading, setLoading] = useState(true); // Always start loading
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

    // Ensure minimum loading time of 7 seconds
    const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 7000));

    if (!customerIdToUse || !SAMPLE_CUSTOMERS[customerIdToUse]) {
      let attempts = 0;
      const maxAttempts = 5;
      const tryCredentials = async () => {
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
          await minLoadingTime; // Wait for 7 seconds
          setHasAccount(true);
          setEffectiveCustomerId(customerIdToUse);
          setPopup('transactionSummary');
          setLoading(false);
        } else if (attempts < maxAttempts) {
          setTimeout(tryCredentials, 2000);
        } else {
          await minLoadingTime; // Wait for 7 seconds
          setHasAccount(false);
          setEffectiveCustomerId(null);
          setPopup('hasAccountSummary');
          setLoading(false);
        }
      };
      tryCredentials();
    } else {
      await minLoadingTime; // Wait for 7 seconds
      setHasAccount(true);
      setEffectiveCustomerId(customerIdToUse);
      setPopup('transactionSummary');
      setLoading(false);
    }
  }, [propCustomerId]);

  useEffect(() => {
    setLoading(true); // Ensure loading starts true
    checkConditions();
  }, [checkConditions]);

  const handleLoginSuccess = useCallback((muid, sid) => {
    console.log('Handling login success (from postMessage):', muid, sid);

    // Store the received credentials in cookies
    document.cookie = `wallet_user_id=${encodeURIComponent(muid)}; Max-Age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`;
    document.cookie = `wallet_auth_token=${encodeURIComponent(sid)}; Max-Age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`;

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
      const customer = SAMPLE_CUSTOMERS[effectiveCustomerId];
      if (customer && customer.balance < amount) {
        console.log('Insufficient funds, balance:', customer.balance, 'amount:', amount);
        setPopup('insufficientFunds');
      } else {
        console.log('Sufficient funds, proceeding to enterPasscode');
        setPopup('enterPasscode');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting passcode:', passcode);
    setPaymentStatus('pending');
    const idToValidate = effectiveCustomerId;
    const result = await validatePasscode(idToValidate, passcode);
    console.log('Validation result:', result);
    setPaymentStatus(result.success ? 'success' : 'failed');

    if (result.success) {
      // Deduct balance after successful passcode validation
      SAMPLE_CUSTOMERS[idToValidate].balance -= amount;
      setPopup('paymentSuccess');
      if (onSuccess) onSuccess();
    } else {
      setPopup('paymentFailed');
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

  const handleInsufficientFundsClose = () => {
    console.log('Insufficient funds close clicked');
    setPopup('transactionSummary');
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
        return <InsufficientFunds onClose={handleInsufficientFundsClose} />;
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