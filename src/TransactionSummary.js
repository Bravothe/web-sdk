import React from 'react';
import Header from './Header';

const TransactionSummary = ({ transactionDetails, onConfirm }) => {
  return (
    <>
      <div className="popup-content">
        <Header />
        <div className="transaction-summary">
          {transactionDetails.merchantLogo && (
            <img
              src={transactionDetails.merchantLogo}
              alt="Merchant Logo"
              className="merchant-logo"
            />
          )}
          <div className="merchant-info">
            <strong>{transactionDetails.merchantName}</strong>
          </div>
          <div className="total-billing">
            <span>Total Billing</span>
            <strong>{transactionDetails.billedCurrency} {transactionDetails.totalBilling.toFixed(2)}</strong>
          </div>
          <div className="transaction-details">
            <h4>Transaction Details</h4>
            <div className="detail">
              <span>Type</span>
              <strong>{transactionDetails.type}</strong>
            </div>
            <div className="detail">
              <span>To</span>
              <strong>{transactionDetails.id}</strong>
            </div>
            <div className="detail">
              <span>Particulars</span>
              <strong>{transactionDetails.particulars}</strong>
            </div>
            <div className="detail">
              <span>Billed Currency</span>
              <strong>{transactionDetails.billedCurrency}</strong>
            </div>
            <div className="detail">
              <span>Billed Amount</span>
              <strong>{transactionDetails.billedCurrency} {transactionDetails.billedAmount.toFixed(2)}</strong>
            </div>
            <div className="detail total-billing-detail">
              <span>Total Billing</span>
              <strong>{transactionDetails.billedCurrency} {transactionDetails.totalBilling.toFixed(2)}</strong>
            </div>
          </div>
          <button onClick={onConfirm} className="confirm-button">Confirm</button>
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

        .transaction-summary {
          text-align: center;
          width: 100%;
          padding: 0 15px;
        }

        .merchant-logo {
          width: 60px;
          height: 60px;
          margin: 10px auto;
          border-radius: 50%;
          object-fit: contain;
        }

        .merchant-info {
          font-size: 1.2em;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }

        .total-billing {
          margin-bottom: 15px;
        }

        .total-billing span {
          display: block;
          font-size: 1em;
          color: #666;
          margin-bottom: 5px;
        }

        .total-billing strong {
          font-size: 1.5em;
          font-weight: bold;
          color: #000;
        }

        .transaction-details {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .transaction-details h4 {
          font-size: 1.1em;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .transaction-details .detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 0;
          width: 100%;
        }

        .transaction-details span {
          color: #666;
          font-size: 0.9em;
          flex-shrink: 0;
        }

        .transaction-details strong {
          color: #000;
          font-size: 0.9em;
          text-align: right;
          flex-shrink: 0;
        }

        .transaction-details .total-billing-detail {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid #ddd;
        }

        .confirm-button {
          width: 100%;
          background: #007bff;
          color: #fff;
          padding: 12px;
          border-radius: 10px;
          font-size: 1.1em;
          font-weight: bold;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
          margin-bottom: 15px;
        }

        .confirm-button:hover {
          background: #0056b3;
        }
      `}</style>
    </>
  );
};

export default TransactionSummary;