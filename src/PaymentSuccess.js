import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Header from './Header';

const PaymentSuccess = ({ amount, onClose }) => {
  return (
    <>
      <div className="popup-content">
        <Header />
        <div className="success-content">
          <FaCheckCircle className="icon" />
          <h3>Payment Successful</h3>
          <p>Your payment of UGX {amount.toFixed(2)} was processed successfully!</p>
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

        .success-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
        }

        .success-content .icon {
          color: #02CD8D;
          font-size: 40px;
          margin-bottom: 10px;
        }

        .success-content h3 {
          font-size: 1.2em;
          margin: 0 0 15px;
          color: #333;
          font-weight: 500;
        }

        .success-content p {
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

export default PaymentSuccess;