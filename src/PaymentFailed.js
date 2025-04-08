import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import Header from './Header';

const PaymentFailed = ({ onClose }) => {
  return (
    <>
      <div className="popup-content">
        <Header />
        <div className="error-content">
          <FaTimesCircle className="icon" />
          <h3>Payment Failed</h3>
          <p>Please check your wallet for details.</p>
          <button onClick={onClose} className="close-button">Details</button>
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

        .error-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
        }

        .error-content .icon {
          color: #ff5a5f;
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

export default PaymentFailed;