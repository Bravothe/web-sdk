import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = ({ amount, onClose }) => {
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
        <span className="evzone">EVzone</span><span className="pay"> Pay</span>
      </h2>
    </div>
  );

  return (
    <div className="popup-content">
      {renderHeader()}
      <div className="success-content">
        <FaCheckCircle className="icon" />
        <h3>Payment Successful</h3>
        <p>Your payment of UGX {amount.toFixed(2)} was processed successfully!</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;