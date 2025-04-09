import React, { useState, useEffect } from 'react';
import HasAccountSummary from './HasAccountSummary';
import TransactionDetailsSummary from './TransactionSummary';
import EnterPasscode from './EnterPasscode';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailed from './PaymentFailed';
import InsufficientFunds from './InsufficientFunds';
import LoadingOverlay from './LoadingOverlay';

// Sample customers for testing
const SAMPLE_CUSTOMERS = {
  "customer123": { name: "John Doe", balance: 1000, passcode: "123456" },
  "customer456": { name: "Jane Smith", balance: 500, passcode: "567856" },
  "customer789": { name: "Alice Brown", balance: 50, passcode: "901256" },
  "admin": { name: "Admin User", balance: 2000, passcode: "admin123" }, // Added for cookie user
};

// Function to get a cookie by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
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

const WalletPaymentForm = ({ customerId: propCustomerId, amount, onClose, onSuccess }) => {
  const [popup, setPopup] = useState('transactionSummary');
  const [passcode, setPasscode] = useState('');
  const [hasAccount, setHasAccount] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [showPasscode, setShowPasscode] = useState(false);
  const [transactionId] = useState(`W-${Math.floor(Math.random() * 1000000000)}`);
  const [loading, setLoading] = useState(true);
  const [authData, setAuthData] = useState(null);
  const [effectiveCustomerId, setEffectiveCustomerId] = useState(propCustomerId);

  useEffect(() => {
    console.log('useEffect running, propCustomerId:', propCustomerId, 'amount:', amount);
    const timer = setTimeout(() => {
      console.log('Loading finished');
      setLoading(false);
    }, 5000);

    const checkConditions = async () => {
      let customerIdToUse = propCustomerId;

      // Check if propCustomerId exists in SAMPLE_CUSTOMERS
      if (!customerIdToUse || !SAMPLE_CUSTOMERS[customerIdToUse]) {
        console.log(`Invalid or missing customerId: ${customerIdToUse}, checking cookies...`);
        const cookieUserId = getCookie('user_id');
        if (cookieUserId) {
          console.log('Found user_id in cookies:', cookieUserId);
          customerIdToUse = cookieUserId; // Use cookie user_id (e.g., "admin")
        } else {
          console.log('No valid customerId or cookie found, prompting login');
          setHasAccount(false); // No account, show login
          setEffectiveCustomerId(null);
          return;
        }
      }

      const accountExists = await checkAccountExists(customerIdToUse);
      console.log('Account exists:', accountExists, 'for customerId:', customerIdToUse);
      setHasAccount(accountExists);
      setEffectiveCustomerId(customerIdToUse);

      // If cookies indicate a logged-in user but no SAMPLE_CUSTOMERS match, simulate authData
      if (!accountExists && getCookie('user_id')) {
        setAuthData({ name: '_EV_DEV_MUID', value: getCookie('user_id') });
        setHasAccount(true); // Treat as authenticated
        setPopup('transactionSummary');
      }
    };

    checkConditions();

    return () => clearTimeout(timer);
  }, [propCustomerId, amount]);

  const handleLoginSuccess = ({ name, value }) => {
    console.log('Login success, name:', name, 'value:', value);
    setAuthData({ name, value });
    setHasAccount(true);
    setEffectiveCustomerId(value); // Use the value from login (e.g., _EV_DEV_MUID)
    setPopup('transactionSummary');
  };

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
    const idToValidate = effectiveCustomerId || authData?.value;
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
          return <HasAccountSummary onClose={onClose} onLoginSuccess={handleLoginSuccess} />;
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