(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WalletPaymentForm = factory(global.React));
})(this, (function (React) { 'use strict';

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
  function FaCheckCircle (props) {
    return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},"child":[]}]})(props);
  }function FaExclamationCircle (props) {
    return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},"child":[]}]})(props);
  }function FaTimesCircle (props) {
    return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},"child":[]}]})(props);
  }function FaWallet (props) {
    return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},"child":[]}]})(props);
  }

  // Fake customer data for testing
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

  // Fake transaction details
  const generateTransactionDetails = amount => ({
    type: "Booking",
    id: `W-${Math.floor(Math.random() * 1000000000)}`,
    particulars: "Hotel Booking",
    billedCurrency: "UGX",
    billedAmount: amount,
    totalBilling: amount
  });

  // Check if customer has an account
  const checkAccountExists = customerId => Promise.resolve(!!SAMPLE_CUSTOMERS[customerId]);

  // Check sufficient funds
  const checkFunds = (customerId, amount) => {
    const customer = SAMPLE_CUSTOMERS[customerId];
    return Promise.resolve(customer && customer.balance >= amount);
  };

  // Validate passcode and process payment
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
    const transactionDetails = generateTransactionDetails(amount);
    React.useEffect(() => {
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
    const renderHeader = () => /*#__PURE__*/React.createElement("div", {
      className: "popup-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "logo"
    }, /*#__PURE__*/React.createElement(FaWallet, {
      className: "header-icon"
    })), /*#__PURE__*/React.createElement("h2", null, "EvZone Pay"));
    const renderPopup = () => {
      switch (popup) {
        case 'transactionSummary':
          if (!hasAccount) {
            return /*#__PURE__*/React.createElement("div", {
              className: "popup-content"
            }, renderHeader(), /*#__PURE__*/React.createElement("div", {
              className: "error-content"
            }, /*#__PURE__*/React.createElement(FaExclamationCircle, {
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
            }, /*#__PURE__*/React.createElement(FaExclamationCircle, {
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
            className: "details"
          }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Type:"), " ", transactionDetails.type), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "ID:"), " ", transactionDetails.id), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Particulars:"), " ", transactionDetails.particulars), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Billed Currency:"), " ", transactionDetails.billedCurrency), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Billed Amount:"), " UGX ", transactionDetails.billedAmount.toFixed(2)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Total Billing:"), " UGX ", transactionDetails.totalBilling.toFixed(2))), /*#__PURE__*/React.createElement("button", {
            onClick: handleConfirm,
            className: "confirm-button"
          }, "Confirm")));
        case 'enterPasscode':
          return /*#__PURE__*/React.createElement("div", {
            className: "popup-content"
          }, renderHeader(), /*#__PURE__*/React.createElement("div", {
            className: "transaction-summary"
          }, /*#__PURE__*/React.createElement("div", {
            className: "merchant-info"
          }, "Airbnb"), /*#__PURE__*/React.createElement("div", {
            className: "amount"
          }, "Amount"), /*#__PURE__*/React.createElement("div", {
            className: "total-billing"
          }, "UGX ", transactionDetails.totalBilling.toFixed(2)), /*#__PURE__*/React.createElement("div", {
            className: "passcode-section"
          }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
            type: "password",
            value: passcode,
            onChange: e => setPasscode(e.target.value),
            required: true,
            autoFocus: true,
            placeholder: "Enter Passcode",
            className: "passcode-input"
          })), /*#__PURE__*/React.createElement("p", {
            className: "info-text"
          }, "You are making a payment to Airbnb", /*#__PURE__*/React.createElement("br", null), "UGX ", transactionDetails.totalBilling.toFixed(2), " will be deducted off your wallet")), /*#__PURE__*/React.createElement("button", {
            onClick: handleSubmit,
            disabled: paymentStatus === 'pending' || !passcode,
            className: "confirm-button"
          }, paymentStatus === 'pending' ? 'Processing...' : 'Confirm')));
        case 'paymentSuccess':
          return /*#__PURE__*/React.createElement("div", {
            className: "popup-content"
          }, renderHeader(), /*#__PURE__*/React.createElement("div", {
            className: "success-content"
          }, /*#__PURE__*/React.createElement(FaCheckCircle, {
            className: "icon"
          }), /*#__PURE__*/React.createElement("h3", null, "Payment Successful"), /*#__PURE__*/React.createElement("p", null, "Your payment of UGX ", amount.toFixed(2), " was processed successfully!")));
        case 'paymentFailed':
          return /*#__PURE__*/React.createElement("div", {
            className: "popup-content"
          }, renderHeader(), /*#__PURE__*/React.createElement("div", {
            className: "error-content"
          }, /*#__PURE__*/React.createElement(FaTimesCircle, {
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
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay",
      onClick: onClose
    }), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, renderPopup()));
  };

  return WalletPaymentForm;

}));
