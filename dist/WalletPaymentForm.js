(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-icons/fa'), require('react-icons/io5')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-icons/fa', 'react-icons/io5'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WalletPaymentForm = factory(global.React, global.fa, global.io5));
})(this, (function (React, fa, io5) { 'use strict';

  const SAMPLE_CUSTOMERS = {
    "customer123": {
      name: "John Doe",
      balance: 1000,
      passcode: "1234"
    },
    "customer456": {
      name: "Jane Smith",
      balance: 500,
      passcode: "5678"
    },
    "customer789": {
      name: "Alice Brown",
      balance: 50,
      passcode: "9012"
    }
  };
  const generateTransactionDetails = (amount, transactionId) => ({
    type: "Booking",
    id: transactionId,
    particulars: "Hotel Booking",
    billedCurrency: "UGX",
    billedAmount: amount,
    totalBilling: amount
  });
  const checkAccountExists = customerId => Promise.resolve(!!SAMPLE_CUSTOMERS[customerId]);
  const checkFunds = (customerId, amount) => {
    const customer = SAMPLE_CUSTOMERS[customerId];
    return Promise.resolve(customer && customer.balance >= amount);
  };
  const validatePasscode = (customerId, passcode, amount) => {
    const customer = SAMPLE_CUSTOMERS[customerId];
    if (customer && customer.passcode === passcode && customer.balance >= amount) {
      SAMPLE_CUSTOMERS[customerId].balance -= amount;
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  };
  const WalletPaymentForm = ({
    customerId,
    amount,
    onClose,
    onSuccess
  }) => {
    const [popup, setPopup] = React.useState('transactionSummary');
    const [passcode, setPasscode] = React.useState('');
    const [hasAccount, setHasAccount] = React.useState(null);
    const [hasFunds, setHasFunds] = React.useState(null);
    const [paymentStatus, setPaymentStatus] = React.useState('idle');
    const [showPasscode, setShowPasscode] = React.useState(false);
    const [transactionId] = React.useState(`W-${Math.floor(Math.random() * 1000000000)}`);
    const [loading, setLoading] = React.useState(true); // New loading state

    React.useEffect(() => {
      // Show loading animation for 5 seconds
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);
      const checkConditions = async () => {
        if (!customerId) {
          setHasAccount(false);
          return;
        }
        const accountExists = await checkAccountExists(customerId);
        setHasAccount(accountExists);
        if (!accountExists) return;
        const fundsOk = await checkFunds(customerId, amount);
        setHasFunds(fundsOk);
      };
      checkConditions();

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }, [customerId, amount]);
    const handleConfirm = () => {
      if (hasAccount && hasFunds) {
        setPopup('enterPasscode');
      }
    };
    const handleSubmit = async e => {
      e.preventDefault();
      setPaymentStatus('pending');
      const success = await validatePasscode(customerId, passcode, amount);
      setPaymentStatus(success ? 'success' : 'failed');
      setPopup(success ? 'paymentSuccess' : 'paymentFailed');
      if (success && onSuccess) onSuccess();
      setTimeout(() => {
        setPopup('transactionSummary');
        setPasscode('');
        setPaymentStatus('idle');
        onClose();
      }, 5000);
    };
    const transactionDetails = generateTransactionDetails(amount, transactionId);
    const renderHeader = () => /*#__PURE__*/React.createElement("div", {
      className: "popup-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://github.com/Bravothe/payment-library/blob/main/images/logo.jpg?raw=true",
      alt: "EvZone Logo",
      className: "header-icon"
    })), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
      className: "evzone"
    }, "EvZone"), /*#__PURE__*/React.createElement("span", {
      className: "pay"
    }, " Pay")));
    const renderPopup = () => {
      switch (popup) {
        case 'transactionSummary':
          if (!hasAccount) {
            return /*#__PURE__*/React.createElement("div", {
              className: "popup-content"
            }, renderHeader(), /*#__PURE__*/React.createElement("div", {
              className: "error-content"
            }, /*#__PURE__*/React.createElement(fa.FaExclamationCircle, {
              className: "icon"
            }), /*#__PURE__*/React.createElement("h3", null, "Account Not Found"), /*#__PURE__*/React.createElement("p", null, "No wallet account matches the provided credentials."), /*#__PURE__*/React.createElement("button", {
              onClick: onClose,
              className: "close-button"
            }, "Close")));
          }
          if (!hasFunds) {
            return /*#__PURE__*/React.createElement("div", {
              className: "popup-content"
            }, renderHeader(), /*#__PURE__*/React.createElement("div", {
              className: "error-content"
            }, /*#__PURE__*/React.createElement(fa.FaExclamationCircle, {
              className: "icon"
            }), /*#__PURE__*/React.createElement("h3", null, "Insufficient Funds"), /*#__PURE__*/React.createElement("p", null, "The account did not have sufficient funds to cover the transaction amount."), /*#__PURE__*/React.createElement("button", {
              onClick: onClose,
              className: "close-button"
            }, "Add Amount")));
          }
          return /*#__PURE__*/React.createElement("div", {
            className: "popup-content"
          }, renderHeader(), /*#__PURE__*/React.createElement("div", {
            className: "transaction-summary"
          }, /*#__PURE__*/React.createElement("div", {
            className: "merchant-info"
          }, "Airbnb"), /*#__PURE__*/React.createElement("div", {
            className: "total-billing"
          }, "UGX ", transactionDetails.totalBilling.toFixed(2)), /*#__PURE__*/React.createElement("div", {
            className: "transaction-details"
          }, /*#__PURE__*/React.createElement("div", {
            className: "detail"
          }, /*#__PURE__*/React.createElement("span", null, "Transaction Type:"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.type)), /*#__PURE__*/React.createElement("div", {
            className: "detail"
          }, /*#__PURE__*/React.createElement("span", null, "Transaction ID:"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.id)), /*#__PURE__*/React.createElement("div", {
            className: "detail"
          }, /*#__PURE__*/React.createElement("span", null, "Particulars:"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.particulars)), /*#__PURE__*/React.createElement("div", {
            className: "detail"
          }, /*#__PURE__*/React.createElement("span", null, "Billed Currency:"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.billedCurrency)), /*#__PURE__*/React.createElement("div", {
            className: "detail"
          }, /*#__PURE__*/React.createElement("span", null, "Billed Amount:"), /*#__PURE__*/React.createElement("strong", null, "UGX ", transactionDetails.billedAmount.toFixed(2)))), /*#__PURE__*/React.createElement("button", {
            onClick: handleConfirm,
            className: "confirm-button"
          }, "Confirm")));
        case 'enterPasscode':
          return /*#__PURE__*/React.createElement("div", {
            className: "passcode-popup"
          }, renderHeader(), /*#__PURE__*/React.createElement("div", {
            className: "merchant-header"
          }, "Merchant Info :"), /*#__PURE__*/React.createElement("div", {
            className: "merchant-details"
          }, /*#__PURE__*/React.createElement("div", {
            className: "merchant-left"
          }, /*#__PURE__*/React.createElement("div", {
            className: "merchant-info"
          }, /*#__PURE__*/React.createElement("div", {
            className: "merchant-name"
          }, "Airbnb"), /*#__PURE__*/React.createElement("div", {
            className: "merchant-id"
          }, "W-123456789"))), /*#__PURE__*/React.createElement("div", {
            className: "merchant-amount"
          }, /*#__PURE__*/React.createElement("strong", null, "UGX ", transactionDetails.totalBilling.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
            className: "passcode-section"
          }, /*#__PURE__*/React.createElement("label", {
            htmlFor: "passcode"
          }, "Enter Passcode"), /*#__PURE__*/React.createElement("div", {
            className: "passcode-input"
          }, /*#__PURE__*/React.createElement("input", {
            type: showPasscode ? "text" : "password",
            id: "passcode",
            value: passcode,
            onChange: e => setPasscode(e.target.value),
            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
            maxLength: "6"
          }), /*#__PURE__*/React.createElement("span", {
            className: "toggle-visibility",
            onClick: () => setShowPasscode(!showPasscode)
          }, showPasscode ? /*#__PURE__*/React.createElement(io5.IoEye, null) : /*#__PURE__*/React.createElement(io5.IoEyeOff, null)))), /*#__PURE__*/React.createElement("div", {
            className: "transaction-details"
          }, /*#__PURE__*/React.createElement("p", null, "You are making a payment to ", /*#__PURE__*/React.createElement("strong", null, "Acorn International School"), " and an amount of", /*#__PURE__*/React.createElement("strong", null, " UGX ", transactionDetails.totalBilling.toFixed(2)), " will be deducted off your wallet, including:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "0.5% Tax:"), " UGX ", (transactionDetails.totalBilling * 0.005).toFixed(2), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "0.5% Wallet Fee:"), " UGX ", (transactionDetails.totalBilling * 0.005).toFixed(2))), /*#__PURE__*/React.createElement("div", {
            className: "buttons-container"
          }, /*#__PURE__*/React.createElement("button", {
            onClick: handleSubmit,
            className: "confirm-button",
            disabled: !passcode
          }, "Confirm Payment"), /*#__PURE__*/React.createElement("button", {
            onClick: () => setPopup('transactionSummary'),
            className: "back-button",
            style: {
              marginTop: '15px'
            } // Adds space above the Back button
          }, "Back")));
        case 'paymentSuccess':
          return /*#__PURE__*/React.createElement("div", {
            className: "popup-content"
          }, renderHeader(), /*#__PURE__*/React.createElement("div", {
            className: "success-content"
          }, /*#__PURE__*/React.createElement(fa.FaCheckCircle, {
            className: "icon"
          }), /*#__PURE__*/React.createElement("h3", null, "Payment Successful"), /*#__PURE__*/React.createElement("p", null, "Your payment of UGX ", amount.toFixed(2), " was processed successfully!")));
        case 'paymentFailed':
          return /*#__PURE__*/React.createElement("div", {
            className: "popup-content"
          }, renderHeader(), /*#__PURE__*/React.createElement("div", {
            className: "error-content"
          }, /*#__PURE__*/React.createElement(fa.FaTimesCircle, {
            className: "icon"
          }), /*#__PURE__*/React.createElement("h3", null, "Payment Failed"), /*#__PURE__*/React.createElement("p", null, "Please check your wallet for details."), /*#__PURE__*/React.createElement("button", {
            onClick: onClose,
            className: "close-button"
          }, "Details")));
        default:
          return null;
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "wallet-payment-form"
    }, loading ? /*#__PURE__*/React.createElement("div", {
      class: "loading-overlay"
    }, /*#__PURE__*/React.createElement("div", {
      class: "loading-content"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://github.com/Bravothe/payment-library/blob/main/images/logo.jpg?raw=true",
      alt: "EvZone Logo",
      class: "logo"
    }), /*#__PURE__*/React.createElement("img", {
      src: "/payment-library/blob/main/images/logo.jpg?raw=true",
      alt: "EvZone Logo",
      class: "logo"
    }), /*#__PURE__*/React.createElement("p", {
      class: "loading-text"
    }, "Evzone Wallet Pay"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "overlay",
      onClick: onClose
    }), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, renderPopup())));
  };

  return WalletPaymentForm;

}));
