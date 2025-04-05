// InsufficientFunds.jsx
import React from 'react';

const InsufficientFunds = ({ onClose }) => {
  return (
    <>
      <div className="insufficient-funds-container">
        <div className="insufficient-funds-content">
          <h2>Insufficient Funds</h2>
          <p>Sorry, your account balance is not sufficient to complete this transaction.</p>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <style jsx>{`
        .insufficient-funds-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .insufficient-funds-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          max-width: 400px;
          width: 90%;
        }

        .insufficient-funds-content h2 {
          color: #d9534f;
          margin-bottom: 10px;
        }

        .insufficient-funds-content p {
          margin-bottom: 20px;
          color: #333;
        }

        .close-btn {
          background: #d9534f;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        .close-btn:hover {
          background: #c9302c;
        }
      `}</style>
    </>
  );
};

export default InsufficientFunds;