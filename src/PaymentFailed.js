import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const PaymentFailed = ({ onClose }) => {
  const renderHeader = () => (
    <div className="popup-header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg"
          alt="EVzone Logo"
          className="header-icon"
        />
      </div>
      <h2>
        <span className="evzone">EvZone</span><span className="pay"> Pay</span>
      </h2>
    </div>
  );

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
};

export default PaymentFailed;