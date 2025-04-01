import React from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const EnterPasscode = ({ passcode, setPasscode, showPasscode, setShowPasscode, transactionDetails, onSubmit, onBack }) => {
  const renderHeader = () => (
    <div className="popup-header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg"
          alt="EvZone Logo"
          className="header-icon"
        />
      </div>
      <h2>
        <span className="evzone">EvZone</span><span className="pay"> Pay</span>
      </h2>
    </div>
  );

  return (
    <div className="passcode-popup">
      {renderHeader()}
      <div className="merchant-header">Merchant Info :</div>
      <div className="merchant-details">
        <div className="merchant-left">
          <div className="merchant-info">
            <div className="merchant-name">Airbnb</div>
            <div className="merchant-id">W-123456789</div>
          </div>
        </div>
        <div className="merchant-amount">
          <strong>UGX {transactionDetails.totalBilling.toFixed(2)}</strong>
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
          You are making a payment to <strong>Acorn International School</strong> and an amount of
          <strong> UGX {transactionDetails.totalBilling.toFixed(2)}</strong> will be deducted off your wallet, including:
          <br />
          <strong>0.5% Tax:</strong> UGX {(transactionDetails.totalBilling * 0.005).toFixed(2)}
          <br />
          <strong>0.5% Wallet Fee:</strong> UGX {(transactionDetails.totalBilling * 0.005).toFixed(2)}
        </p>
      </div>
      <div className="buttons-container">
        <button onClick={onSubmit} className="confirm-button" disabled={!passcode}>
          Confirm Payment
        </button>
        <button onClick={onBack} className="back-button" style={{ marginTop: '15px' }}>
          Back
        </button>
      </div>
    </div>
  );
};

export default EnterPasscode;