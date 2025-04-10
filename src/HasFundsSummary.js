import React from 'react';

const HasAccountSummary = ({ onClose }) => {
  return (
    <>
      <div className="popup-content">
        <div className="popup-header">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg"
              alt="EvZone Logo"
              className="header-icon"
            />
          </div>
          <h2>
            <span className="evzone">EVzone</span>
            <span className="pay"> Pay</span>
          </h2>
        </div>
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
        }

        .popup-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          text-align: left;
          flex-grow: 1;
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