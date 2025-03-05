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
  const [popup, setPopup] = useState('transactionSummary');
  const [passcode, setPasscode] = useState('');
  const [hasAccount, setHasAccount] = useState(null);
  const [hasFunds, setHasFunds] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const transactionDetails = generateTransactionDetails(amount);

  useEffect(() => {
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

  const renderHeader = () => (
    <div className="popup-header">
      <div className="logo">
        <FaWallet className="header-icon" />
      </div>
      <h2>EvZone Pay</h2>
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
              <div className="details">
                <p><strong>Type:</strong> {transactionDetails.type}</p>
                <p><strong>ID:</strong> {transactionDetails.id}</p>
                <p><strong>Particulars:</strong> {transactionDetails.particulars}</p>
                <p><strong>Billed Currency:</strong> {transactionDetails.billedCurrency}</p>
                <p><strong>Billed Amount:</strong> UGX {transactionDetails.billedAmount.toFixed(2)}</p>
                <p><strong>Total Billing:</strong> UGX {transactionDetails.totalBilling.toFixed(2)}</p>
              </div>
              <button onClick={handleConfirm} className="confirm-button">Confirm</button>
            </div>
          </div>
        );
      case 'enterPasscode':
        return (
          <div className="popup-content">
            {renderHeader()}
            <div className="transaction-summary">
              <div className="merchant-info">Airbnb</div>
              <div className="amount">Amount</div>
              <div className="total-billing">UGX {transactionDetails.totalBilling.toFixed(2)}</div>
              <div className="passcode-section">
                <label>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    required
                    autoFocus
                    placeholder="Enter Passcode"
                    className="passcode-input"
                  />
                </label>
                <p className="info-text">
                  You are making a payment to Airbnb<br />
                  UGX {transactionDetails.totalBilling.toFixed(2)} will be deducted off your wallet
                </p>
              </div>
              <button
                onClick={handleSubmit}
                disabled={paymentStatus === 'pending' || !passcode}
                className="confirm-button"
              >
                {paymentStatus === 'pending' ? 'Processing...' : 'Confirm'}
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
      <div className="overlay" onClick={onClose}></div>
      <div className="content">{renderPopup()}</div>
    </div>
  );
};

export default WalletPaymentForm;