import React from 'react';
import Header from './Header';

const TransactionSummary = ({ transactionDetails, onConfirm }) => {
  return (
    <>
      <div className="popup-content">
        <Header />
        <div className="transaction-summary">
          <div className="merchant-info">
            <strong>Airbnb</strong>
          </div>
          <div className="total-billing">
            UGX {transactionDetails.totalBilling.toFixed(2)}
          </div>
          <div className="transaction-details">
            <h4>Transaction Details</h4>
            <div className="detail">
              <span>Type</span>
              <strong>{transactionDetails.type}</strong>
            </div>
            <div className="detail">
              <span>ID</span>
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
              <strong>UGX {transactionDetails.billedAmount.toFixed(2)}</strong>
            </div>
            <div className="detail total-billing-detail">
              <span>Total Billing</span>
              <strong>UGX {transactionDetails.totalBilling.toFixed(2)}</strong>
            </div>
          </div>
          <button onClick={onConfirm} className="confirm-button">Confirm</button><br/>
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

        .merchant-info {
          font-size: 1.2em;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .total-billing {
          font-size: 1.5em;
          font-weight: bold;
          color: #02CD8D;
          text-align: center;
          padding: 10px 0;
          margin-bottom: 15px;
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
          border-radius: 5px;
          font-size: 1.1em;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
        }

        .confirm-button:hover {
          background: #0056b3;
        }
      `}</style>
    </>
  );
};

export default TransactionSummary;