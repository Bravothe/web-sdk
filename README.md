---

# Evzone Pay

<img src="https://github.com/Bravothe/payment-library/blob/main/src/assets/logo.jpg?raw=true" alt="Evzone Pay Logo" width="200" />

**EVzone Africa** is a React-based library designed to simplify the integration of a digital wallet payment system into e-commerce platforms. It enables seamless payments using the Evzone Africa digital wallet, with a lightweight, customizable, and secure payment form. Ideal for developers building modern checkout experiences.

## Table of Contents
- [Evzone Pay](#evzone-pay)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Usage](#usage)
    - [Frontend (React)](#frontend-react)
    - [Authentication Callback](#authentication-callback)
    - [Notes](#notes)
  - [API Reference](#api-reference)
    - [WalletPaymentForm Props](#walletpaymentform-props)
  - [Examples](#examples)
    - [Shopping Cart Integration](#shopping-cart-integration)
  - [Configuration](#configuration)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [License](#license)
  - [Support](#support)
    - [Key Changes from Previous README](#key-changes-from-previous-readme)
    - [Notes](#notes-1)
    - [Testing Instructions](#testing-instructions)
    - [Next Steps](#next-steps)

## Features

- Seamless integration with React-based e-commerce platforms.
- Secure payment processing via the Evzone Africa digital wallet.
- Cookie-based authentication for persistent user sessions.
- Uniform 7-second loading overlay for a consistent experience.
- Customizable transaction details and merchant branding.
- Robust error handling and validation.
- Lightweight and optimized for performance.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher) or [yarn](https://yarnpkg.com/)
- A React project with [React Router](https://reactrouter.com/) for callback routes.
- A registered Evzone Africa merchant account for authentication credentials.
- HTTPS-enabled app (required for secure cookies in production).

## Installation

Install the `pay-sdk-kad8` library in your project:

```bash
npm install pay-sdk-kad8
```

## Setup

The library requires a `/wallet-callback` route in your project to handle authentication responses from the Evzone Africa server. Follow these steps:

1. **Create the `WalletCallback` Component**:
   Create `src/components/WalletCallback.jsx`:

   ```jsx
   import React, { useEffect } from 'react';
   import { useLocation } from 'react-router-dom';

   const WalletCallback = () => {
     const location = useLocation();

     useEffect(() => {
       const params = new URLSearchParams(location.search);
       const walletCallback = params.get('wallet_callback');
       const user_id = params.get('user_id');
       const auth_token = params.get('auth_token');

       console.log('WalletCallback, query params:', {
         walletCallback,
         user_id,
         auth_token,
       });

       if (walletCallback === 'true' && user_id) {
         console.log('Storing credentials in cookies');
         document.cookie = `wallet_user_id=${encodeURIComponent(user_id)}; Max-Age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`;
         if (auth_token) {
           document.cookie = `wallet_auth_token=${encodeURIComponent(auth_token)}; Max-Age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`;
         }

         console.log('Posting message back to opener:', {
           user_id,
           auth_token,
         });

         if (window.opener && !window.opener.closed) {
           window.opener.postMessage(
             {
               user_id,
               auth_token,
             },
             window.location.origin
           );
         }

         window.close();
       } else {
         console.error('Invalid callback, missing user_id or wallet_callback');
         alert('Login failed. Please try again.');
         window.close();
       }
     }, [location]);

     return <div>Processing login...</div>;
   };

   export default WalletCallback;
   ```

2. **Add the Callback Route**:
   In your React Router setup (e.g., `App.jsx`):

   ```jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import Cart from './components/Cart';
   import WalletCallback from './components/WalletCallback';

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Cart />} />
           <Route path="/wallet-callback" element={<WalletCallback />} />
         </Routes>
       </BrowserRouter>
     );
   }

   export default App;
   ```

3. **Enable HTTPS**:
   Ensure your app runs over HTTPS in production to support `Secure` cookies.

## Usage

### Frontend (React)

1. Import `WalletPaymentForm` from `pay-sdk-kad8`.
2. Render it conditionally (e.g., in a modal) when the user clicks "Make Payments."
3. Pass required props: `amount`, `onClose`, `onSuccess`.
4. Optionally pass `customerId`, `type`, `particulars`, `currency`, `merchantName`, `merchantLogo`.
5. Ensure the `/wallet-callback` route is configured.

### Authentication Callback

`WalletPaymentForm` checks for credentials in cookies (`wallet_user_id`, `wallet_auth_token`) or the `customerId` prop. If neither is valid, it prompts the user to sign in via a popup to `https://efs-gp9p6.ondigitalocean.app`. The flow:

1. User signs in, and the auth server redirects to `/wallet-callback` with `wallet_callback`, `user_id`, and `auth_token`.
2. `WalletCallback` stores credentials in cookies (7-day expiry, `Secure`, `SameSite=Strict`) and sends them to the parent window via `postMessage`.
3. `WalletPaymentForm` receives the credentials and proceeds to the transaction.

A **7-second loading overlay** is displayed during initialization in all cases (with/without credentials) for consistency.

### Notes

- **Cookies**: Credentials are stored in cookies for security. Ensure HTTPS and cookie support.
- **Callback Route**: `/wallet-callback` is required for authentication.
- **Loading Overlay**: Fixed at 7 seconds. Customize styling in `LoadingOverlay.jsx` if needed.
- **Auth Server**: Uses `https://efs-gp9p6.ondigitalocean.app`. Contact support for production URLs.

## API Reference

### WalletPaymentForm Props

| Prop            | Type       | Required | Description                                                                 |
|-----------------|------------|----------|-----------------------------------------------------------------------------|
| `customerId`    | string     | No       | Customer ID for authenticated users. Falls back to cookies if omitted.      |
| `amount`        | number     | Yes      | Transaction amount (e.g., `99.99`).                                         |
| `type`          | string     | No       | Transaction type (e.g., `"Purchase"`). Defaults to `"Booking"`.             |
| `particulars`   | string     | No       | Transaction details (e.g., `"Purchase of Shirt, Pants"`). Defaults to `"Hotel Booking"`. |
| `currency`      | string     | No       | Currency code (e.g., `"UGX"`). Defaults to `"UGX"`.                         |
| `merchantName`  | string     | No       | Merchant name (e.g., `"Xtrymz Tech"`). Defaults to `"Unknown Merchant"`.    |
| `merchantLogo`  | string     | No       | URL to merchant logo. Defaults to empty string.                             |
| `onClose`       | function   | Yes      | Callback when the payment form closes.                                      |
| `onSuccess`     | function   | Yes      | Callback when payment succeeds.                                            |

## Examples

### Shopping Cart Integration

Below is an example integrating `WalletPaymentForm` into a Redux-based cart:

```jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import WalletPaymentForm from 'pay-sdk-kad8/dist/WalletPaymentForm.esm';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../slices/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleShowPopup = useCallback(() => {
    if (cart.cartTotalAmount > 0) {
      setShowPopup(true);
    } else {
      alert('Cart is empty. Add items before proceeding to payment.');
    }
  }, [cart.cartTotalAmount]);

  const handlePaymentSuccess = useCallback(() => {
    dispatch(clearCart());
    setShowPopup(false);
  }, [dispatch]);

  const handlePaymentClose = useCallback(() => {
    setShowPopup(false);
  }, []);

  const transactionType = 'Purchase';
  const transactionParticulars =
    cart.cartItems.length > 0
      ? `Purchase of ${cart.cartItems.map((item) => item.name).join(', ')}`
      : 'Cart Transaction';
  const transactionCurrency = 'UGX';
  const merchantName = 'Xtrymz Tech';
  const merchantLogo =
    'https://res.cloudinary.com/dlfa42ans/image/upload/v1743854843/logo5_ljusns.png';

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.desc}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button onClick={handleShowPopup}>Make Payments</button>
              {showPopup && (
                <WalletPaymentForm
                  customerId={auth?.customerId}
                  amount={cart.cartTotalAmount}
                  type={transactionType}
                  particulars={transactionParticulars}
                  currency={transactionCurrency}
                  merchantName={merchantName}
                  merchantLogo={merchantLogo}
                  onClose={handlePaymentClose}
                  onSuccess={handlePaymentSuccess}
                />
              )}
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
```

## Configuration

- **Transaction Details**: Use `type`, `particulars`, `currency`, `merchantName`, and `merchantLogo` to customize the payment form.
- **Cookies**: Credentials are stored for 7 days. Clear manually for testing:
  ```javascript
  document.cookie = 'wallet_user_id=; Max-Age=0';
  document.cookie = 'wallet_auth_token=; Max-Age=0';
  ```
- **Styling**: Default styles apply. Override via CSS or modify `LoadingOverlay.jsx` if you have library source access.

## Troubleshooting

- **Popup Blocked**: Enable popups in your browser for the auth server.
- **Callback Errors**: Ensure `/wallet-callback` is routed correctly and matches the `redirect_uri`.
- **Cookies Not Working**: Verify HTTPS and check `document.cookie` in dev tools.
- **Loading Overlay**: Fixed at 7 seconds. If it’s inconsistent, check for parent component delays.
- **Auth Server**: Contact support if `https://efs-gp9p6.ondigitalocean.app` is unreachable.

## Contributing

1. Fork the repository.
2. Create a branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

- Open an issue on [GitHub](https://github.com/yourusername/pay-sdk-kad8/issues).
- Email: support@evzoneafrica.com.

---

### Key Changes from Previous README

1. **Package Name**: Updated to `pay-sdk-kad8` per your example (not `pay-sdk-tx5` or `evzone-alb`).
2. **Example**: Replaced the basic example with your Redux-based `Cart` component, trimmed slightly for brevity but kept all functionality (e.g., `transactionParticulars` generation).
3. **Authentication Flow**: Clarified the cookie-based flow and `WalletCallback`’s role, emphasizing `postMessage` and 7-day cookie expiry.
4. **Loading Overlay**: Explicitly noted the 7-second duration in multiple sections.
5. **Setup**: Kept detailed `WalletCallback` and routing instructions, tailored to React Router.
6. **Notes**: Added practical tips (e.g., HTTPS, cookie clearing) and aligned with your example’s `merchantName`, `currency`, etc.

### Notes

- **Package Name**: You mentioned `pay-sdk-kad4` as “the super one” but used `pay-sdk-kad8` in the example. I went with `kad8`—please confirm if it’s `kad4` or another.
- **Auth Server**: Kept `https://efs-gp9p6.ondigitalocean.app`. If this is a test URL, I can add a note about contacting support for production.
- **Redux**: The example uses Redux, but the README is generic to support non-Redux users. I can add a Redux-specific note if needed.
- **Files**: You mentioned sharing all required files, but I have the README, `WalletPaymentForm.jsx`, `HasAccountSummary.jsx`, and now the `Cart` example. If you’ve shared others (e.g., `LoadingOverlay.jsx`), I can refine the README further.

### Testing Instructions

To validate the README:
1. Set up a React project:
   ```bash
   npx create-react-app evzone-test
   cd evzone-test
   npm install pay-sdk-kad8 react-router-dom redux react-redux
   ```
2. Add `WalletCallback.jsx` and update `App.jsx` per the README.
3. Implement the `Cart` example, mocking Redux slices (`cartSlice`).
4. Test:
   - With cookies: `document.cookie = 'wallet_user_id=customer123; ...'`.
   - Without cookies: Should show sign-in popup.
   - With `auth.customerId`: Should skip sign-in.
   - Verify 7-second `LoadingOverlay` in all cases.
5. Check `/wallet-callback` route and cookie storage.

If `pay-sdk-kad8` is published, share the npm link, and I can test directly.

### Next Steps

- **Confirmation**: Verify the package name (`kad8` vs. `kad4`) and auth URL.
- **Additional Files**: If you have more files (e.g., `LoadingOverlay.jsx`, Redux setup), share them to refine styling or configuration notes.
- **Tweaks**: Let me know if the 7-second overlay needs mention elsewhere or if the example needs more/less detail.
- **Consumer Needs**: If consumers use Next.js or other frameworks, I can add framework-specific routes.

