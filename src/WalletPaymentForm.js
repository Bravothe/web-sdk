import React, { useState, useEffect, useCallback } from 'react';
// Auth/login intentionally removed for now
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
          onClose && onClose();
          timeout = null;
        }, 300);
      }
    };
  }, [onClose]);

  const handleClose = debounceOnClose();

  // 🔹 Skip cookie/auth checks entirely. After 7s overlay, go straight to summary.
  const checkConditions = useCallback(async () => {
    console.log('[EVZ] Skipping auth/cookie checks and proceeding to transaction summary.');
    const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 7000));

    // Prefer a valid passed-in customerId; otherwise fall back to 'admin'
    const fallbackId =
      (propCustomerId && SAMPLE_CUSTOMERS[propCustomerId] && propCustomerId) || 'admin';

    await minLoadingTime;
    setEffectiveCustomerId(fallbackId);
    setPopup('transactionSummary');
    setLoading(false);
  }, [propCustomerId]);

  useEffect(() => {
    setLoading(true);
    checkConditions();
  }, [checkConditions]);

  const handleConfirm = () => {
    console.log('Confirm clicked, effectiveCustomerId:', effectiveCustomerId);
    const customer = SAMPLE_CUSTOMERS[effectiveCustomerId];
    if (customer && customer.balance < amount) {
      console.log('Insufficient funds, balance:', customer.balance, 'amount:', amount);
      setPopup('insufficientFunds');
    } else {
      console.log('Sufficient funds, proceeding to enterPasscode');
      setPopup('enterPasscode');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentStatus('pending');
    const idToValidate = effectiveCustomerId;
    const result = await validatePasscode(idToValidate, passcode);
    setPaymentStatus(result.success ? 'success' : 'failed');

    if (result.success) {
      // Deduct balance after successful passcode validation (demo-only behavior)
      SAMPLE_CUSTOMERS[idToValidate].balance -= amount;
      setPopup('paymentSuccess');
      if (onSuccess) {
        onSuccess({
          transactionId,
          amount,
          currency: currency || 'UGX',
          type: type || 'Booking',
          particulars: particulars || 'Hotel Booking',
          customerId: idToValidate,
        });
      }
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
    setPopup('transactionSummary');
    setPasscode('');
    setPaymentStatus('idle');
    handleClose();
  };

  const handleInsufficientFundsClose = () => {
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
    switch (popup) {
      case 'transactionSummary':
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
            <div className="overlay" onClick={handleClose} />
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
