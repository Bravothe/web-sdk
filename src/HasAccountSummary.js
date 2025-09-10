import React, { useEffect } from 'react';
import Header from './Header';

const HasAccountSummary = ({ onLoginSuccess, onClose }) => {
  useEffect(() => {
    let checkPopup;
    let timeout;

    const handleMessage = (event) => {
      // Restrict origin for security (update to your auth server's origin)
      if (event.origin !== 'https://allan-sxqyu.ondigitalocean.app') {
        console.log('Message from untrusted origin:', event.origin);
        return;
      }

      if (!event.data || typeof event.data !== 'object') {
        console.log('Invalid event data');
        return;
      }

      const { user_id, auth_token } = event.data;
      if (user_id && auth_token) {
        console.log('Received user_id:', user_id, 'auth_token:', auth_token);
        onLoginSuccess(user_id, auth_token);
        window.removeEventListener('message', handleMessage);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      clearInterval(checkPopup);
      clearTimeout(timeout);
      window.removeEventListener('message', handleMessage);
      console.log('HasAccountSummary unmounted');
    };
  }, [onLoginSuccess]);

  const handleSignIn = () => {
    const callbackUrl = `${window.location.origin}/wallet-callback`;
    const loginUrl = `https://allan-sxqyu.ondigitalocean.app?redirect_uri=${encodeURIComponent(callbackUrl)}`;
    const popup = window.open(loginUrl, 'Sign In', 'width=500,height=600');

    if (!popup) {
      console.error('Popup blocked');
      alert('Popup blocked. Please allow popups for this site.');
      return;
    }

    checkPopup = setInterval(() => {
      if (popup.closed) {
        console.log('Popup closed');
        clearInterval(checkPopup);
        onClose();
      }
    }, 500);

    timeout = setTimeout(() => {
      if (popup && !popup.closed) {
        popup.close();
      }
      clearInterval(checkPopup);
      onClose();
      alert('Login timed out. Please try again.');
    }, 60000);
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