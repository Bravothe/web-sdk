import React from 'react';
import Header from './Header';

const HasAccountSummary = ({ onLoginSuccess, onClose }) => {
  const handleSignIn = () => {
    const callbackUrl = `${window.location.origin}?wallet_callback=true`;
    const loginUrl = `https://efs-gp9p6.ondigitalocean.app?redirect_uri=${encodeURIComponent(callbackUrl)}`;
    const popup = window.open(loginUrl, 'Sign In', 'width=500,height=600');

    if (!popup) {
      alert('Popup blocked. Please allow popups for this site.');
      return;
    }

    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data.status === 'login_success') {
        console.log('Received login_success message');
        onLoginSuccess();
        window.removeEventListener('message', handleMessage);
      }
    };

    window.addEventListener('message', handleMessage);

    const checkPopup = setInterval(() => {
      if (popup.closed) {
        console.log('Popup closed manually');
        clearInterval(checkPopup);
        window.removeEventListener('message', handleMessage);
        onClose(); // Only call onClose if user closes popup manually
      } else {
        try {
          const popupUrl = popup.location.href;
          if (popupUrl.includes('wallet_callback=true')) {
            console.log('Detected callback URL, signaling success');
            popup.opener.postMessage({ status: 'login_success' }, window.location.origin);
            popup.close();
            clearInterval(checkPopup);
            window.removeEventListener('message', handleMessage);
          }
        } catch (e) {
          // Ignore cross-origin errors
        }
      }
    }, 500);
  };

  return (
    <>
      <div className="popup-content">
        <Header />
        <div className="error-content">
          <div className="message-container">
            <div className="info-icon">i</div>
            <div className="message-text">
              <h3>EVzone requires you to sign in to proceed with this transaction</h3>
            </div>
          </div>
          <button onClick={handleSignIn} className="submit-button">
            Sign in
          </button>
        </div>
      </div>
      <style jsx>{`
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