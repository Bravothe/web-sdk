import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const InsufficientFunds = ({ onClose }) => {
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
        <span className="evzone">EVzone</span><span className="pay"> Pay</span>
      </h2>
    </div>
  );

  return (
    <>
      <div className="popup-content">
        {renderHeader()}
        <div className="error-content">
          <FaExclamationCircle className="icon" />
          <h3>Insufficient Funds</h3>
          <p>Please add funds to your wallet to proceed.</p>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
      <style>{`
        .popup-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 90%;
          text-align: center;
          border: 1px solid #ddd;
          font-family: Arial, sans-serif;
          z-index: 1001;
          position: relative;
          pointer-events: auto;
        }

        .popup-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          width: 100%;
          padding: 10px 15px;
          border-bottom: 1px solid #ddd;
        }

        .logo {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          border-radius: 50%;
          overflow: hidden;
        }

        .header-icon {
          width: 100%;
          height: auto;
        }

        .popup-header h2 {
          font-size: 1.2em;
          color: #080808;
          margin: 0;
          font-weight: bold;
        }

        .popup-header .evzone {
          color: #0a0a0a;
        }

        .popup-header .pay {
          color: #0a0a0a;
        }

        .error-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
        }

        .error-content .icon {
          color: #ff9800;
          font-size: 40px;
          margin-bottom: 10px;
        }

        .error-content h3 {
          font-size: 1.2em;
          margin: 0 0 15px;
          color: #333;
          font-weight: 500;
        }

        .error-content p {
          font-size: 1em;
          color: #666;
          margin-bottom: 15px;
        }

        .close-button {
          background-color: #0288d1;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 1em;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
          max-width: 200px;
        }

        .close-button:hover {
          background-color: #0277bd;
        }
      `}</style>
    </>
  );
};

export default InsufficientFunds;