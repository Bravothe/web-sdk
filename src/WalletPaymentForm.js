import React, { useState, useEffect } from 'react';
import './WalletPaymentForm.css';
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SAMPLE_CUSTOMERS = {
  "customer123": { name: "John Doe", balance: 1000, passcode: "1234" },
  "customer456": { name: "Jane Smith", balance: 500, passcode: "5678" },
  "customer789": { name: "Alice Brown", balance: 50, passcode: "9012" },
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
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Show loading animation for 5 seconds
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

    // Cleanup timer on unmount
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
    setTimeout(() => {
      setPopup('transactionSummary');
      setPasscode('');
      setPaymentStatus('idle');
      onClose();
    }, 5000);
  };

  const transactionDetails = generateTransactionDetails(amount, transactionId);

  const logoImage = '/logo.jpg';

  const renderHeader = () => (
    <div className="popup-header">
      <div className="logo">
        <img src={logoImage} alt="EvZone Logo" className="header-icon" />
      </div>
      <h2>
        <span className="evzone">EvZone</span><span className="pay"> Pay</span>
      </h2>
    </div>
  );

  const renderPopup = () => {
    switch (popup) {
      case 'transactionSummary':
        if (!hasAccount) {
          return (
            <div className="popup-content">
              {renderHeader()}
              <div className="error-content">
                <FaExclamationCircle className="icon" />
                <h3>Account Not Found</h3>
                <p>No wallet account matches the provided credentials.</p>
                <button onClick={onClose} className="close-button">Close</button>
              </div>
            </div>
          );
        }
        if (!hasFunds) {
          return (
            <div className="popup-content">
              {renderHeader()}
              <div className="error-content">
                <FaExclamationCircle className="icon" />
                <h3>Insufficient Funds</h3>
                <p>The account did not have sufficient funds to cover the transaction amount.</p>
                <button onClick={onClose} className="close-button">Add Amount</button>
              </div>
            </div>
          );
        }
        return (
          <div className="popup-content">
            {renderHeader()}
            <div className="transaction-summary">
              <div className="merchant-info">Airbnb</div>
              <div className="total-billing">UGX {transactionDetails.totalBilling.toFixed(2)}</div>
              <div className="transaction-details">
                  <div className="detail">
                    <span>Transaction Type:</span>
                    <strong>{transactionDetails.type}</strong>
                  </div>
                  <div className="detail">
                    <span>Transaction ID:</span>
                    <strong>{transactionDetails.id}</strong>
                  </div>
                  <div className="detail">
                    <span>Particulars:</span>
                    <strong>{transactionDetails.particulars}</strong>
                  </div>
                  <div className="detail">
                    <span>Billed Currency:</span>
                    <strong>{transactionDetails.billedCurrency}</strong>
                  </div>
                  <div className="detail">
                    <span>Billed Amount:</span>
                    <strong>UGX {transactionDetails.billedAmount.toFixed(2)}</strong>
                  </div>
                </div>
              <button onClick={handleConfirm} className="confirm-button">Confirm</button>
            </div>
          </div>
        );
      case 'enterPasscode':
        return (
          <div className="passcode-popup">
            {renderHeader()}
            <div className="merchant-header">Merchant Info :</div>
            <div className="merchant-details">
              <div className="merchant-left">
                <div className="merchant-info">
                  <div className="merchant-name">Airbnb</div>
                  <div className="merchant-id">W-123456789</div>
                </div>
              </div>
              <div className="merchant-amount">
                <strong>UGX {transactionDetails.totalBilling.toFixed(2)}</strong>
              </div>
            </div>
            <div className="passcode-section">
              <label htmlFor="passcode">Enter Passcode</label>
              <div className="passcode-input">
                <input
                  type={showPasscode ? "text" : "password"}
                  id="passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••"
                  maxLength="6"
                />
                <span className="toggle-visibility" onClick={() => setShowPasscode(!showPasscode)}>
                  {showPasscode ? <IoEye /> : <IoEyeOff />}
                </span>
              </div>
            </div>
            <div className="transaction-details">
              <p>
                You are making a payment to <strong>Acorn International School</strong> and an amount of
                <strong> UGX {transactionDetails.totalBilling.toFixed(2)}</strong> will be deducted off your wallet, including:
                <br />
                <strong>0.5% Tax:</strong> UGX {(transactionDetails.totalBilling * 0.005).toFixed(2)}
                <br />
                <strong>0.5% Wallet Fee:</strong> UGX {(transactionDetails.totalBilling * 0.005).toFixed(2)}
              </p>
            </div>
            <div className="buttons-container">
              <button onClick={handleSubmit} className="confirm-button" disabled={!passcode}>
                Confirm Payment
              </button>
              <br />
              <button onClick={() => setPopup('transactionSummary')} className="back-button">
                Back
              </button>
            </div>
          </div>
        );
      case 'paymentSuccess':
        return (
          <div className="popup-content">
            {renderHeader()}
            <div className="success-content">
              <FaCheckCircle className="icon" />
              <h3>Payment Successful</h3>
              <p>Your payment of UGX {amount.toFixed(2)} was processed successfully!</p>
            </div>
          </div>
        );
      case 'paymentFailed':
        return (
          <div className="popup-content">
            {renderHeader()}
            <div className="error-content">
              <FaTimesCircle className="icon" />
              <h3>Payment Failed</h3>
              <p>Please check your wallet for details.</p>
              <button onClick={onClose} className="close-button">Details</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="wallet-payment-form">
      {loading ? (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="overlay" onClick={onClose}></div>
          <div className="content">{renderPopup()}</div>
        </>
      )}
    </div>
  );
};

export default WalletPaymentForm;