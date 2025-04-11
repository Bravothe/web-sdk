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
  customer123: { name: 'John Doe', balance: 1000, passcode: '123456' },
  customer456: { name: 'Jane Smith', balance: 500, passcode: '567856' },
  customer789: { name: 'Alice Brown', balance: 50, passcode: '901256' },
  admin: { name: 'Admin User', balance: 2000, passcode: 'admin123' },
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

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

  useEffect(() => {
    const checkConditions = async () => {
      let customerIdToUse = propCustomerId;

      console.log('Checking conditions, propCustomerId:', propCustomerId);

      if (!customerIdToUse || !SAMPLE_CUSTOMERS[customerIdToUse]) {
        const cookieUserId = getCookie('wallet_session');
        console.log('Cookie wallet_session:', cookieUserId);
        if (cookieUserId && SAMPLE_CUSTOMERS[cookieUserId]) {
          customerIdToUse = cookieUserId;
          setHasAccount(true);
          setEffectiveCustomerId(customerIdToUse);
          setPopup('transactionSummary');
        } else {
          setHasAccount(false);
          setEffectiveCustomerId(null);
          setPopup('hasAccountSummary');
        }
      } else {
        setHasAccount(true);
        setEffectiveCustomerId(customerIdToUse);
        setPopup('transactionSummary');
      }
      setLoading(false);
    };

    checkConditions();
  }, [propCustomerId]);

  const handleLoginSuccess = () => {
    console.log('Handling login success');
    const cookieUserId = getCookie('wallet_session');
    console.log('Post-login cookie wallet_session:', cookieUserId);
    if (cookieUserId && SAMPLE_CUSTOMERS[cookieUserId]) {
      setEffectiveCustomerId(cookieUserId);
      setHasAccount(true);
      setPopup('transactionSummary');
      console.log('Set to transactionSummary, customerId:', cookieUserId);
    } else {
      console.error('No wallet_session cookie found after login');
      setHasAccount(false);
      setPopup('hasAccountSummary');
      alert('Login failed. Please try again.');
    }
  };

  const handleConfirm = () => {
    if (hasAccount === null) return;
    if (hasAccount) {
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
    console.log('Rendering popup:', popup, 'hasAccount:', hasAccount);
    switch (popup) {
      case 'hasAccountSummary':
        return <HasAccountSummary onClose={onClose} onLoginSuccess={handleLoginSuccess} />;
      case 'transactionSummary':
        if (hasAccount === false) {
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
            <div
              className="overlay"
              onClick={() => {
                console.log('Overlay clicked, closing');
                onClose();
              }}
            ></div>
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