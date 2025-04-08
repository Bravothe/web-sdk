import React from 'react';
import Header from './Header';

const HasAccountSummary = ({ onClose }) => {
  return (
    <>
      <div className="popup-content">
        <Header onClose={onClose} />
        <div className="error-content">
          <div className="message-container">
            <div className="info-icon">i</div>
            <div className="message-text">
              <h3>EVzone requires you to sign in to proceed with this transaction</h3>
            </div>
          </div>
          <button onClick={onClose} className="submit-button">Sign in</button>
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

        .message-container {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 20px;
          background-color: #e0f7fa;
          border-radius: 10px;
          padding: 10px 15px;
        }

        .info-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: #b3e5fc;
          color: #0288d1;
          border-radius: 50%;
          font-size: 24px;
          font-weight: bold;
          margin-right: 15px;
        }

        .message-text {
          flex: 1;
        }

        .message-text h3 {
          font-size: 1.2em;
          margin: 0;
          color: #333;
          font-weight: 500;
        }

        .submit-button {
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

        .submit-button:hover {
          background-color: #0277bd;
        }
      `}</style>
    </>
  );
};

export default HasAccountSummary;