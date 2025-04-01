import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const TransactionSummary = ({ hasAccount, hasFunds, transactionDetails, onClose, onConfirm }) => {
  const renderHeader = () => (
    <div className="popup-header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg"
          alt="EvZone Logo"
          className="header-icon"
        />
      </div>
      <h2>
        <span className="evzone">EvZone</span><span className="pay"> Pay</span>
      </h2>
    </div>
  );

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
        <button onClick={onConfirm} className="confirm-button">Confirm</button>
      </div>
    </div>
  );
};

export default TransactionSummary;