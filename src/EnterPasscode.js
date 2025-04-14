import React from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Header from './Header';

const EnterPasscode = ({ passcode, setPasscode, showPasscode, setShowPasscode, transactionDetails, onSubmit, onBack }) => {
  return (
    <>
      <div className="passcode-popup">
        <Header />
        <div className="merchant-header">Merchant Info :</div>
        <div className="merchant-details">
          <div className="merchant-left">
            <div className="merchant-info">
              <div className="merchant-name">{transactionDetails.merchantName}</div>
              <div className="merchant-id">{transactionDetails.id}</div>
            </div>
          </div>
          <div className="merchant-amount">
            <strong>{transactionDetails.billedCurrency} {transactionDetails.totalBilling.toFixed(2)}</strong>
          </div>
        </div>
        <div className="passcode-section">
          <label htmlFor="passcode">Enter Passcode</label>
          <div className="passcode-input">
            <input
              type={showPasscode ? "text" : "password"}
              id="passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="••••••"
              maxLength="6"
            />
            <span className="toggle-visibility" onClick={() => setShowPasscode(!showPasscode)}>
              {showPasscode ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
        </div>
        <div className="transaction-details">
          <p>
            You are making a payment to <strong>{transactionDetails.merchantName}</strong> and an amount of
            <strong> {transactionDetails.billedCurrency} {transactionDetails.totalBilling.toFixed(2)}</strong> will be deducted off your wallet, including:
            <br />
            <strong>2.5% Tax:</strong> {transactionDetails.billedCurrency} {(transactionDetails.totalBilling * 0.005).toFixed(2)}
            <br />
            <strong>1.5% Wallet Fee:</strong> {transactionDetails.billedCurrency} {(transactionDetails.totalBilling * 0.005).toFixed(2)}
          </p>
        </div>
        <div className="buttons-container">
          <button onClick={onSubmit} className="confirm-button" disabled={!passcode}>
            Confirm
          </button>
          <button onClick={onBack} className="back-button" style={{ marginTop: '15px' }}>
            Back
          </button>
        </div>
      </div>
      <style>{`
        .passcode-popup {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: white;
          padding: 20px;
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

        .merchant-header {
          font-size: 1.2em;
          font-weight: bold;
          color: #02CD8D;
          text-align: left;
          margin-bottom: 10px;
          width: 100%;
        }

        .merchant-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f9f9f9;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 15px;
          width: 100%;
        }

        .merchant-left {
          display: flex;
          align-items: center;
        }

        .merchant-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .merchant-name {
          font-size: 1em;
          font-weight: bold;
        }

        .merchant-id {
          font-size: 0.9em;
          color: #666;
        }

        .merchant-amount {
          text-align: right;
        }

        .merchant-amount strong {
          font-size: 1.2em;
          font-weight: bold;
          color: #000;
        }

        .passcode-section {
          text-align: left;
          margin-bottom: 20px;
          width: 100%;
        }

        .passcode-section label {
          font-size: 1em;
          font-weight: bold;
          color: #000;
        }

        .passcode-input {
          position: relative;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 12px;
          font-size: 1.1em;
          text-align: center;
          letter-spacing: 5px;
          background: transparent;
          display: flex;
          align-items: center;
        }

        .passcode-input input {
          flex: 1;
          border: none;
          outline: none;
          text-align: center;
          font-size: 1.4em;
          letter-spacing: 5px;
          background: transparent;
          color: #000;
          font-weight: bold;
        }

        .passcode-input .toggle-visibility {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 1.5em;
          color: #000;
        }

        .transaction-details {
          display: flex;
          align-items: flex-start;
          background: #e0f0ff;
          padding: 12px;
          border-radius: 8px;
          text-align: left;
          width: 100%;
          margin-bottom: 20px;
        }

        .transaction-details p {
          font-size: 1em;
          color: #000;
          line-height: 1.5;
          margin: 0;
        }

        .buttons-container {
          width: 100%;
        }

        .confirm-button {
          width: 100%;
          background: #007bff;
          color: #fff;
          padding: 12px;
          border-radius: 5px;
          font-size: 1.1em;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
        }

        .confirm-button:disabled {
          background: #ddd;
          cursor: not-allowed;
        }

        .confirm-button:hover:not(:disabled) {
          background: #0056b3;
        }

        .back-button {
          width: 100%;
          background: white;
          border: 2px solid red;
          color: red;
          padding: 10px 15px;
          border-radius: 5px;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: white;
          color: red;
          border-color: red;
        }
      `}</style>
    </>
  );
};

export default EnterPasscode;