import React from 'react';

const Header = ({ onClose }) => {
  return (
    <>
      <div className="popup-header">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg"
            alt="EVzone Logo"
            className="header-icon"
          />
        </div>
        <h2>
          <span className="evzone">EVzone</span>
          <span className="pay"> Pay</span>
        </h2>
      </div>
      <style>{`
        .popup-header {
          display: flex;
          align-items: center;
          justify-content: ${onClose ? 'space-between' : 'center'};
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
          ${onClose ? 'text-align: left; flex-grow: 1;' : ''}
        }

        .popup-header .evzone {
          color: #0a0a0a;
        }

        .popup-header .pay {
          color: #0a0a0a;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5em;
          color: #ff5a5f;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Header;