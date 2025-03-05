// src/WalletPaymentForm.js
import React, { useState, useEffect } from 'react';
import './WalletPaymentForm.css';
import { FaCheckCircle, FaExclamationCircle, FaLock, FaWallet, FaTimesCircle } from 'react-icons/fa';

// Fake customer data for testing
const SAMPLE_CUSTOMERS = {
  "customer123": { name: "John Doe", balance: 1000, passcode: "1234" },
  "customer456": { name: "Jane Smith", balance: 500, passcode: "5678" },
  "customer789": { name: "Alice Brown", balance: 50, passcode: "9012" },
};

// Fake transaction details
const generateTransactionDetails = (amount) => ({
  type: "Booking",
  id: `W-${Math.floor(Math.random() * 1000000000)}`,
  particulars: "Hotel Booking",
  billedCurrency: "UGX",
  billedAmount: amount,
  totalBilling: amount,
});

// Check if customer has an account
const checkAccountExists = (customerId) => Promise.resolve(!!SAMPLE_CUSTOMERS[customerId]);

// Check sufficient funds
const checkFunds = (customerId, amount) => {
  const customer = SAMPLE_CUSTOMERS[customerId];
  return Promise.resolve(customer && customer.balance >= amount);
};

// Validate passcode and process payment
const validatePasscode = (customerId, passcode, amount) => {
  const customer = SAMPLE_CUSTOMERS[customerId];
  if (customer && customer.passcode === passcode && customer.balance >= amount) {
    SAMPLE_CUSTOMERS[customerId].balance -= amount;
    return Promise.resolve(true);
  }
  return Promise.resolve(false);
};

const WalletPaymentForm = ({ customerId, amount, onClose, onSuccess }) => {
  const [popup, setPopup] = useState('orderDetails'); // Tracks current popup
  const [passcode, setPasscode] = useState('');
  const [hasAccount, setHasAccount] = useState(null);
  const [hasFunds, setHasFunds] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const transactionDetails = generateTransactionDetails(amount);

  useEffect(() => {
    const checkConditions = async () => {
      if (!customerId) {
        setPopup('accountNotFound');
        return;
      }
      const accountExists = await checkAccountExists(customerId);
      setHasAccount(accountExists);
      if (!accountExists) {
        setPopup('accountNotFound');
        return;
      }
      const fundsOk = await checkFunds(customerId, amount);
      setHasFunds(fundsOk);
      if (!fundsOk) {
        setPopup('insufficientFunds');
      }
    };
    checkConditions();
  }, [customerId, amount]);

  const handleContinue = () => {
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
    setTimeout(() => onClose(), 2000);
  };

  const renderPopup = () => {
    switch (popup) {
      case 'orderDetails':
        return (
          <div className="popup-content">
            <FaWallet className="icon" />
            <h2>Order Details</h2>
            <div className="transaction-details">
              <p><strong>Total Billing:</strong> UGX {transactionDetails.totalBilling.toFixed(2)}</p>
              <p>Type: {transactionDetails.type}</p>
              <p>ID: {transactionDetails.id}</p>
              <p>Particulars: {transactionDetails.particulars}</p>
              <p>Currency: {transactionDetails.billedCurrency}</p>
              <p>Amount: UGX {transactionDetails.billedAmount.toFixed(2)}</p>
            </div>
            <button onClick={handleContinue} disabled={!hasFunds || !hasAccount}>
              Continue
            </button>
            <button onClick={onClose}>Cancel</button>
          </div>
        );
      case 'enterPasscode':
        return (
          <div className="popup-content">
            <FaLock className="icon" />
            <h2>Enter Passcode</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Wallet Passcode
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  required
                  autoFocus
                  placeholder="Enter passcode"
                />
              </label>
              <button type="submit" disabled={paymentStatus === 'pending'}>
                {paymentStatus === 'pending' ? 'Processing...' : 'Pay Now'}
              </button>
              <button type="button" onClick={() => setPopup('orderDetails')}>
                Back
              </button>
            </form>
          </div>
        );
      case 'insufficientFunds':
        return (
          <div className="popup-content error">
            <FaExclamationCircle className="icon" />
            <h2>Insufficient Funds</h2>
            <p>Your wallet balance is not enough to cover this transaction.</p>
            <button onClick={onClose}>Close</button>
          </div>
        );
      case 'accountNotFound':
        return (
          <div className="popup-content error">
            <FaExclamationCircle className="icon" />
            <h2>Account Not Found</h2>
            <p>No wallet account matches the provided credentials.</p>
            <button onClick={onClose}>Close</button>
          </div>
        );
      case 'paymentSuccess':
        return (
          <div className="popup-content success">
            <FaCheckCircle className="icon" />
            <h2>Payment Successful</h2>
            <p>Your payment of UGX {amount.toFixed(2)} was processed successfully!</p>
          </div>
        );
      case 'paymentFailed':
        return (
          <div className="popup-content error">
            <FaTimesCircle className="icon" />
            <h2>Payment Failed</h2>
            <p>Invalid passcode or transaction could not be completed.</p>
            <button onClick={onClose}>Close</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="wallet-payment-form">
      <div className="overlay" onClick={onClose}></div>
      <div className="content">{renderPopup()}</div>
    </div>
  );
};

export default WalletPaymentForm;