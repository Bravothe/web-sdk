import React from 'react';
import Header from './Header';

const InsufficientFunds = ({ onClose }) => {

  return (
    <>
      <div className="popup-content">
        <Header />
        <div className="error-content">
          <div className="error-icon">
            <span className="x-mark">✕</span>
          </div>
          <h3>Insufficient Funds</h3>
          <p>
            The account did not have sufficient funds to cover the transaction
            amount at the time of the transaction
          </p>
          <button onClick={onClose} className="add-funds-button">
            Add Funds
          </button>
        </div>
      </div>
      <style jsx>{`
        .popup-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          max-width: 400px;
          width: 90%;
          text-align: center;
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
          border-radius: 0 0 16px 16px; /* Match bottom corners of popup */
        }

        .error-icon {
          width: 40px;
          height: 40px;
          background-color: #ff9800;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
        }

        .x-mark {
          color: #fff;
          font-size: 24px;
          font-weight: bold;
        }

        .error-content h3 {
          font-size: 1.5em;
          margin: 0 0 10px;
          color: #ff9800; /* Orange to match the icon background */
          font-weight: 600;
        }

        .error-content p {
          font-size: 1em;
          color: #000; /* Black instead of gray */
          margin: 0 0 20px;
          line-height: 1.5;
        }

        .add-funds-button {
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px;
          font-size: 1em;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
          max-width: 300px;
        }

        .add-funds-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
};

export default InsufficientFunds;