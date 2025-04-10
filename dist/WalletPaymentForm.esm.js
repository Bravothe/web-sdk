import React, { useState, useEffect } from 'react';

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function IoClose (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},"child":[]}]})(props);
}function IoEyeOff (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zM248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39zm16-119.7L315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39z"},"child":[]},{"tag":"path","attr":{"d":"M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.81 343.81 0 0 0 67.24-77.4zM256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352z"},"child":[]}]})(props);
}function IoEye (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"256","cy":"256","r":"64"},"child":[]},{"tag":"path","attr":{"d":"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"},"child":[]}]})(props);
}

const Header = _ref => {
  let {
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg",
    alt: "EVzone Logo",
    className: "header-icon"
  })), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "evzone"
  }, "EVzone"), /*#__PURE__*/React.createElement("span", {
    className: "pay"
  }, " Pay"))), onClose && /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(IoClose, null))), /*#__PURE__*/React.createElement("style", null, `
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
      `));
};

const HasAccountSummary = _ref => {
  let {
    onClose,
    onLoginSuccess
  } = _ref;
  const handleSignIn = () => {
    const redirectUri = 'http://localhost:3002/callback';
    const loginUrl = `http://localhost:3000?redirect_uri=${encodeURIComponent(redirectUri)}`;
    const popup = window.open(loginUrl, 'Sign In', 'width=500,height=600');
    const handleMessage = event => {
      if (event.origin !== 'http://localhost:3000') return;
      console.log('Received login data:', event.data);
      onLoginSuccess(event.data); // Pass data to WalletPaymentForm
      window.removeEventListener('message', handleMessage);
    };
    window.addEventListener('message', handleMessage);
    const checkPopup = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopup);
        window.removeEventListener('message', handleMessage);
      }
    }, 500);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, {
    onClose: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "error-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-icon"
  }, "i"), /*#__PURE__*/React.createElement("div", {
    className: "message-text"
  }, /*#__PURE__*/React.createElement("h3", null, "EVzone requires you to sign in to proceed with this transaction"))), /*#__PURE__*/React.createElement("button", {
    onClick: handleSignIn,
    className: "submit-button"
  }, "Sign in"))), /*#__PURE__*/React.createElement("style", null, `
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
      `));
};

const TransactionSummary = _ref => {
  let {
    transactionDetails,
    onConfirm
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "transaction-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "merchant-info"
  }, /*#__PURE__*/React.createElement("strong", null, "Airbnb")), /*#__PURE__*/React.createElement("div", {
    className: "total-billing"
  }, "UGX ", transactionDetails.totalBilling.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    className: "transaction-details"
  }, /*#__PURE__*/React.createElement("h4", null, "Transaction Details"), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "Type"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.type)), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "ID"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.id)), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "Particulars"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.particulars)), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "Billed Currency"), /*#__PURE__*/React.createElement("strong", null, transactionDetails.billedCurrency)), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("span", null, "Billed Amount"), /*#__PURE__*/React.createElement("strong", null, "UGX ", transactionDetails.billedAmount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "detail total-billing-detail"
  }, /*#__PURE__*/React.createElement("span", null, "Total Billing"), /*#__PURE__*/React.createElement("strong", null, "UGX ", transactionDetails.totalBilling.toFixed(2)))), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    className: "confirm-button"
  }, "Confirm"))), /*#__PURE__*/React.createElement("style", null, `
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

        .transaction-summary {
          text-align: center;
          width: 100%;
          padding: 0 15px;
        }

        .merchant-info {
          font-size: 1.2em;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .total-billing {
          font-size: 1.5em;
          font-weight: bold;
          color: #02CD8D;
          text-align: center;
          padding: 10px 0;
          margin-bottom: 15px;
        }

        .transaction-details {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .transaction-details h4 {
          font-size: 1.1em;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .transaction-details .detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 0;
          width: 100%;
        }

        .transaction-details span {
          color: #666;
          font-size: 0.9em;
          flex-shrink: 0;
        }

        .transaction-details strong {
          color: #000;
          font-size: 0.9em;
          text-align: right;
          flex-shrink: 0;
        }

        .transaction-details .total-billing-detail {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid #ddd;
        }

        .confirm-button {
          width: 100%;
          background: #007bff;
          color: #fff;
          padding: 12px;
          border-radius: 5px;
          font-size: 1.1em;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
        }

        .confirm-button:hover {
          background: #0056b3;
        }
      `));
};

const EnterPasscode = _ref => {
  let {
    passcode,
    setPasscode,
    showPasscode,
    setShowPasscode,
    transactionDetails,
    onSubmit,
    onBack
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "passcode-popup"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "merchant-header"
  }, "Merchant Info :"), /*#__PURE__*/React.createElement("div", {
    className: "merchant-details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "merchant-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "merchant-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "merchant-name"
  }, transactionDetails.merchantName), /*#__PURE__*/React.createElement("div", {
    className: "merchant-id"
  }, transactionDetails.id))), /*#__PURE__*/React.createElement("div", {
    className: "merchant-amount"
  }, /*#__PURE__*/React.createElement("strong", null, transactionDetails.billedCurrency, " ", transactionDetails.totalBilling.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
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
  }, showPasscode ? /*#__PURE__*/React.createElement(IoEye, null) : /*#__PURE__*/React.createElement(IoEyeOff, null)))), /*#__PURE__*/React.createElement("div", {
    className: "transaction-details"
  }, /*#__PURE__*/React.createElement("p", null, "You are making a payment to ", /*#__PURE__*/React.createElement("strong", null, transactionDetails.merchantName), " and an amount of", /*#__PURE__*/React.createElement("strong", null, " ", transactionDetails.billedCurrency, " ", transactionDetails.totalBilling.toFixed(2)), " will be deducted off your wallet, including:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "0.5% Tax:"), " ", transactionDetails.billedCurrency, " ", (transactionDetails.totalBilling * 0.005).toFixed(2), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "0.5% Wallet Fee:"), " ", transactionDetails.billedCurrency, " ", (transactionDetails.totalBilling * 0.005).toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSubmit,
    className: "confirm-button",
    disabled: !passcode
  }, "Confirm Payment"), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "back-button",
    style: {
      marginTop: '15px'
    }
  }, "Back"))), /*#__PURE__*/React.createElement("style", null, `
        .passcode-popup {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: white;
          padding: 20px;
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

        .merchant-header {
          font-size: 1.2em;
          font-weight: bold;
          color: #02CD8D;
          text-align: left;
          margin-bottom: 10px;
          width: 100%;
        }

        .merchant-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f9f9f9;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 15px;
          width: 100%;
        }

        .merchant-left {
          display: flex;
          align-items: center;
        }

        .merchant-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .merchant-name {
          font-size: 1em;
          font-weight: bold;
        }

        .merchant-id {
          font-size: 0.9em;
          color: #666;
        }

        .merchant-amount {
          text-align: right;
        }

        .merchant-amount strong {
          font-size: 1.2em;
          font-weight: bold;
          color: #000;
        }

        .passcode-section {
          text-align: left;
          margin-bottom: 20px;
          width: 100%;
        }

        .passcode-section label {
          font-size: 1em;
          font-weight: bold;
          color: #000;
        }

        .passcode-input {
          position: relative;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 12px;
          font-size: 1.1em;
          text-align: center;
          letter-spacing: 5px;
          background: transparent;
          display: flex;
          align-items: center;
        }

        .passcode-input input {
          flex: 1;
          border: none;
          outline: none;
          text-align: center;
          font-size: 1.4em;
          letter-spacing: 5px;
          background: transparent;
          color: #000;
          font-weight: bold;
        }

        .passcode-input .toggle-visibility {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 1.5em;
          color: #000;
        }

        .transaction-details {
          display: flex;
          align-items: flex-start;
          background: #e0f0ff;
          padding: 12px;
          border-radius: 8px;
          text-align: left;
          width: 100%;
          margin-bottom: 20px;
        }

        .transaction-details p {
          font-size: 1em;
          color: #000;
          line-height: 1.5;
          margin: 0;
        }

        .buttons-container {
          width: 100%;
        }

        .confirm-button {
          width: 100%;
          background: #007bff;
          color: #fff;
          padding: 12px;
          border-radius: 5px;
          font-size: 1.1em;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
        }

        .confirm-button:disabled {
          background: #ddd;
          cursor: not-allowed;
        }

        .confirm-button:hover:not(:disabled) {
          background: #0056b3;
        }

        .back-button {
          width: 100%;
          background: white;
          border: 2px solid red;
          color: red;
          padding: 10px 15px;
          border-radius: 5px;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: white;
          color: red;
          border-color: red;
        }
      `));
};

// THIS FILE IS AUTO GENERATED
function FaCheckCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},"child":[]}]})(props);
}function FaExclamationCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},"child":[]}]})(props);
}function FaTimesCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},"child":[]}]})(props);
}

const PaymentSuccess = _ref => {
  let {
    amount,
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "success-content"
  }, /*#__PURE__*/React.createElement(FaCheckCircle, {
    className: "icon"
  }), /*#__PURE__*/React.createElement("h3", null, "Payment Successful"), /*#__PURE__*/React.createElement("p", null, "Your payment of UGX ", amount.toFixed(2), " was processed successfully!"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "close-button"
  }, "Close"))), /*#__PURE__*/React.createElement("style", null, `
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

        .success-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
        }

        .success-content .icon {
          color: #02CD8D;
          font-size: 40px;
          margin-bottom: 10px;
        }

        .success-content h3 {
          font-size: 1.2em;
          margin: 0 0 15px;
          color: #333;
          font-weight: 500;
        }

        .success-content p {
          font-size: 1em;
          color: #666;
          margin-bottom: 15px;
        }

        .close-button {
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

        .close-button:hover {
          background-color: #0277bd;
        }
      `));
};

const PaymentFailed = _ref => {
  let {
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "error-content"
  }, /*#__PURE__*/React.createElement(FaTimesCircle, {
    className: "icon"
  }), /*#__PURE__*/React.createElement("h3", null, "Payment Failed"), /*#__PURE__*/React.createElement("p", null, "Please check your wallet for details."), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "close-button"
  }, "Details"))), /*#__PURE__*/React.createElement("style", null, `
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

        .error-content .icon {
          color: #ff5a5f;
          font-size: 40px;
          margin-bottom: 10px;
        }

        .error-content h3 {
          font-size: 1.2em;
          margin: 0 0 15px;
          color: #333;
          font-weight: 500;
        }

        .error-content p {
          font-size: 1em;
          color: #666;
          margin-bottom: 15px;
        }

        .close-button {
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

        .close-button:hover {
          background-color: #0277bd;
        }
      `));
};

const InsufficientFunds = _ref => {
  let {
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "error-content"
  }, /*#__PURE__*/React.createElement(FaExclamationCircle, {
    className: "icon"
  }), /*#__PURE__*/React.createElement("h3", null, "Insufficient Funds"), /*#__PURE__*/React.createElement("p", null, "Please add funds to your wallet to proceed."), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "close-button"
  }, "Close"))), /*#__PURE__*/React.createElement("style", null, `
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

        .error-content .icon {
          color: #ff9800;
          font-size: 40px;
          margin-bottom: 10px;
        }

        .error-content h3 {
          font-size: 1.2em;
          margin: 0 0 15px;
          color: #333;
          font-weight: 500;
        }

        .error-content p {
          font-size: 1em;
          color: #666;
          margin-bottom: 15px;
        }

        .close-button {
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

        .close-button:hover {
          background-color: #0277bd;
        }
      `));
};

const LoadingOverlay = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "loading-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loading-content"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://res.cloudinary.com/dlfa42ans/image/upload/v1741686201/logo_n7vrsf.jpg",
    alt: "EvZone Logo",
    className: "loading-logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "loading-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "evzone"
  }, "EVzone"), ' ', /*#__PURE__*/React.createElement("span", {
    className: "pay"
  }, "Pay")))), /*#__PURE__*/React.createElement("style", null, `
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
      `));
};

// Sample customers for testing
const SAMPLE_CUSTOMERS = {
  "customer123": {
    name: "John Doe",
    balance: 1000,
    passcode: "123456"
  },
  "customer456": {
    name: "Jane Smith",
    balance: 500,
    passcode: "567856"
  },
  "customer789": {
    name: "Alice Brown",
    balance: 50,
    passcode: "901256"
  },
  "admin": {
    name: "Admin User",
    balance: 2000,
    passcode: "admin123"
  }
};

// Function to get a cookie by name
const getCookie = name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};
const generateTransactionDetails = (amount, transactionId, type, particulars, currency, merchantName) => ({
  type: type || "Booking",
  id: transactionId,
  particulars: particulars || "Hotel Booking",
  billedCurrency: currency || "UGX",
  billedAmount: amount,
  totalBilling: amount,
  merchantName: merchantName || "Unknown Merchant" // Fallback if not provided
});
const checkAccountExists = customerId => Promise.resolve(!!SAMPLE_CUSTOMERS[customerId]);
const validatePasscode = (customerId, passcode, amount) => {
  const customer = SAMPLE_CUSTOMERS[customerId];
  if (!customer) return {
    success: false,
    reason: 'no_account'
  };
  if (customer.passcode !== passcode) return {
    success: false,
    reason: 'invalid_passcode'
  };
  if (customer.balance < amount) return {
    success: false,
    reason: 'insufficient_funds'
  };
  SAMPLE_CUSTOMERS[customerId].balance -= amount;
  return {
    success: true
  };
};
const WalletPaymentForm = _ref => {
  let {
    customerId: propCustomerId,
    amount,
    type,
    particulars,
    currency,
    merchantName,
    onClose,
    onSuccess
  } = _ref;
  const [popup, setPopup] = useState('transactionSummary');
  const [passcode, setPasscode] = useState('');
  const [hasAccount, setHasAccount] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [showPasscode, setShowPasscode] = useState(false);
  const [transactionId] = useState(`W-${Math.floor(Math.random() * 1000000000)}`);
  const [loading, setLoading] = useState(true);
  const [effectiveCustomerId, setEffectiveCustomerId] = useState(propCustomerId);
  useEffect(() => {
    console.log('useEffect running, propCustomerId:', propCustomerId, 'amount:', amount);
    const timer = setTimeout(() => {
      console.log('Loading finished');
      setLoading(false);
    }, 5000);
    const checkConditions = async () => {
      let customerIdToUse = propCustomerId;
      if (!customerIdToUse || !SAMPLE_CUSTOMERS[customerIdToUse]) {
        console.log(`Invalid or missing customerId: ${customerIdToUse}, checking cookies...`);
        const cookieUserId = getCookie('user_id');
        if (cookieUserId && SAMPLE_CUSTOMERS[cookieUserId]) {
          console.log('Valid user_id found in cookies:', cookieUserId);
          customerIdToUse = cookieUserId;
          setHasAccount(true);
        } else {
          console.log('No valid customerId or cookie found, prompting login');
          setHasAccount(false);
          setEffectiveCustomerId(null);
          return;
        }
      } else {
        setHasAccount(true);
      }
      const accountExists = await checkAccountExists(customerIdToUse);
      console.log('Account exists:', accountExists, 'for customerId:', customerIdToUse);
      setEffectiveCustomerId(customerIdToUse);
    };
    checkConditions();
    return () => clearTimeout(timer);
  }, [propCustomerId, amount]);
  const handleLoginSuccess = _ref2 => {
    let {
      user_id
    } = _ref2;
    console.log('Login success, user_id:', user_id);
    setEffectiveCustomerId(user_id);
    setHasAccount(true);
    setPopup('transactionSummary');
  };
  const handleConfirm = () => {
    console.log('Confirm clicked, hasAccount:', hasAccount);
    if (hasAccount === null) return;
    if (hasAccount) {
      setPopup('enterPasscode');
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submitting passcode:', passcode);
    setPaymentStatus('pending');
    const idToValidate = effectiveCustomerId;
    const result = await validatePasscode(idToValidate, passcode, amount);
    console.log('Validation result:', result);
    setPaymentStatus(result.success ? 'success' : 'failed');
    if (result.success) {
      setPopup('paymentSuccess');
      if (onSuccess) onSuccess();
    } else {
      if (result.reason === 'insufficient_funds') {
        setPopup('insufficientFunds');
      } else {
        setPopup('paymentFailed');
      }
      setTimeout(() => {
        setPopup('transactionSummary');
        setPasscode('');
        setPaymentStatus('idle');
        onClose();
      }, 5000);
    }
  };
  const handleSuccessClose = () => {
    console.log('Success close clicked');
    setPopup('transactionSummary');
    setPasscode('');
    setPaymentStatus('idle');
    onClose();
  };
  const transactionDetails = generateTransactionDetails(amount, transactionId, type, particulars, currency, merchantName);
  const renderPopup = () => {
    console.log('Rendering popup, current popup:', popup, 'hasAccount:', hasAccount);
    switch (popup) {
      case 'transactionSummary':
        if (hasAccount === false) {
          return /*#__PURE__*/React.createElement(HasAccountSummary, {
            onClose: onClose,
            onLoginSuccess: handleLoginSuccess
          });
        }
        return /*#__PURE__*/React.createElement(TransactionSummary, {
          transactionDetails: transactionDetails,
          onConfirm: handleConfirm
        });
      case 'enterPasscode':
        return /*#__PURE__*/React.createElement(EnterPasscode, {
          passcode: passcode,
          setPasscode: setPasscode,
          showPasscode: showPasscode,
          setShowPasscode: setShowPasscode,
          transactionDetails: transactionDetails,
          onSubmit: handleSubmit,
          onBack: () => setPopup('transactionSummary')
        });
      case 'paymentSuccess':
        return /*#__PURE__*/React.createElement(PaymentSuccess, {
          amount: amount,
          onClose: handleSuccessClose
        });
      case 'paymentFailed':
        return /*#__PURE__*/React.createElement(PaymentFailed, {
          onClose: onClose
        });
      case 'insufficientFunds':
        return /*#__PURE__*/React.createElement(InsufficientFunds, {
          onClose: onClose
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wallet-payment-form"
  }, loading ? /*#__PURE__*/React.createElement(LoadingOverlay, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "overlay",
    onClick: () => {
      console.log('Overlay clicked, closing');
      onClose();
    }
  }), renderPopup())), /*#__PURE__*/React.createElement("style", null, `
        .wallet-payment-form {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          pointer-events: auto;
        }
      `));
};

export { WalletPaymentForm as default };
//# sourceMappingURL=WalletPaymentForm.esm.js.map
