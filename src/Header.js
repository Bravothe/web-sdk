import React from 'react';
import { IoClose } from 'react-icons/io5'; // Import the close icon

const Header = ({ onClose }) => {
  return (
    <>
      <div className="popup-header">
        <div className="header-content">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dlfa42ans/image/upload/v1743601557/logo1_ypujra.png"
              alt="EVzone Logo"
              className="header-icon"
            />
          </div>
          <h2>
            <span className="evzone">EVzone</span>
            <span className="pay"> Pay</span>
          </h2>
        </div>
        {onClose && (
          <button className="close-btn" onClick={onClose}>
            <IoClose />
          </button>
        )}
      </div>
      <style>{`
        .popup-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          width: 100%;
          padding: 10px 15px;
          border-bottom: 1px solid #ddd;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 5px;
        }

        .logo {
          width: 36px;
          height: 36px;
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
          font-size: 1.1em;
          color: #080808;
          margin: 0;
          font-weight: 600;
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
          padding: 0; /* Remove padding to keep it minimal */
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn svg {
          font-size: 1.2em; /* Smaller icon size */
          color: #ff5a5f; /* Same color as before */
          transition: color 0.3s ease;
        }

        .close-btn:hover svg {
          color: #e04f53; /* Slightly darker on hover */
        }
      `}</style>
    </>
  );
};

export default Header;