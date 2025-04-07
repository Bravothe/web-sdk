import React from 'react';

const LoadingOverlay = () => {
  return (
    <>
      <div className="loading-overlay">
        <div className="loading-content">
          <img
            src="https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg"
            alt="EvZone Logo"
            className="loading-logo"
          />
          <p className="loading-text">
            <span className="evzone">EVzone</span>{' '}
            <span className="pay">Pay</span>
          </p>
        </div>
      </div>
      <style>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1001;
          pointer-events: auto;
        }

        .loading-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: white;
          padding: 30px; /* Increased from 20px to 30px for more space */
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .loading-logo {
          width: 120px;
          height: 120px;
          margin-bottom: 30px; /* Increased from 20px to 30px for more space */
          border-radius: 50%;
          overflow: hidden;
        }

        .loading-text {
          font-size: 40px; /* Increased from 36px to 40px */
          font-weight: bold;
          margin: 0;
          animation: blink 1.5s step-start infinite;
        }

        .loading-text .evzone {
          color: rgb(76, 184, 123);
        }

        .loading-text .pay {
          color: rgb(235, 182, 67);
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default LoadingOverlay;