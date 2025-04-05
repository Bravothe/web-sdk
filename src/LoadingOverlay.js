import React from 'react';

const LoadingOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg"
          alt="EvZone Logo"
          style={{
            width: '120px', // Increased size
            height: '120px', // Increased size
            marginBottom: '20px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        />
        <p
          style={{
            fontSize: '36px', // Increased to 36px
            fontWeight: 'bold', // Bold text
            margin: 0,
            animation: 'blink 1.5s step-start infinite', // Animation (requires CSS)
          }}
          className="loading-text" // Keep class for animation
        >
          <span
            style={{
              color: 'rgb(82, 190, 128)', // Smooth green for "Evzone"
            }}
          >
            EVzone
          </span>{' '}
          <span
            style={{
              color: ' #f39c12 ', // Orange for "Pay"
            }}
          >
            Pay
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;