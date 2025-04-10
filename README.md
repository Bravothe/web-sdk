---

# Evzone Pay

<img src="https://github.com/Bravothe/payment-library/blob/main/src/assets/logo.jpg?raw=true" alt="Evzone Pay Logo" width="200" />

**EVzone Africa** is a library designed to simplify the integration of a digital wallet payment system into e-commerce platforms. Built with **React** and **Node.js**, it provides a seamless way for developers to enable their customers to make payments using the Evzone Africa digital wallet. This package is lightweight, customizable, and developer-friendly.

## Table of Contents
- [Evzone Pay](#evzone-pay)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Frontend (React)](#frontend-react)
    - [Notes](#notes)
  - [API Reference](#api-reference)
    - [Frontend (React)](#frontend-react-1)
  - [Examples](#examples)
    - [Complete Checkout Flow](#complete-checkout-flow)
  - [Configuration](#configuration)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [License](#license)
  - [Support](#support)
    - [Key Changes Made](#key-changes-made)

## Features

- Easy integration with e-commerce platforms.
- Support for React-based frontends.
- Secure payment processing with EVzone digital wallet.
- Customizable payment form component with support for transaction details and merchant branding.
- Comprehensive error handling and validation.
- Lightweight and optimized for performance.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher) or [yarn](https://yarnpkg.com/)
- A registered Evzone Africa merchant account (to obtain necessary credentials).

## Installation
To install the `evzone-alb` library, run the following command in your project directory:

```bash
npm install pay-sdk-tx5
```
## Usage

### Frontend (React)

1. Import the `WalletPaymentForm` component into your React application.
2. Use it within a conditional render to show the payment form when needed (e.g., in a popup or modal).
3. Pass the required props: `customerId`, `amount`, `onClose`, and `onSuccess`.
4. Pass additional props to customize the transaction: `type`, `particulars`, `currency`, `merchantName`, and `merchantLogo`.

Here’s an example usage in a shopping cart component:

```jsx
import React, { useState } from "react";
import WalletPaymentForm from "pay-sdk-tx5/dist/WalletPaymentForm.esm";

const Cart = () => {
  const [showPopup, setShowPopup] = useState(false);
  const cartTotalAmount = 99.99; // Example amount (replace with your cart logic)
  const customerId = "customer123"; // Example customer ID (replace with your auth logic)

  // Transaction details to pass to WalletPaymentForm
  const transactionType = "Cart Purchase";
  const transactionParticulars = "Purchase of Shirt, Pants"; // Example: Dynamically generate based on cart items
  const transactionCurrency = "USD";
  const merchantName = "My Awesome Store";
  const merchantLogo = "https://example.com/merchant-logo.png"; // Replace with your merchant logo URL

  const handlePaymentSuccess = () => {
    console.log("Payment successful");
    // Add logic to clear cart or update order status
    setShowPopup(false);
  };

  const handlePaymentClose = () => {
    console.log("Payment popup closed");
    setShowPopup(false);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <button onClick={() => setShowPopup(true)}>Make Payments</button>
      {showPopup && (
        <WalletPaymentForm
          customerId={customerId}
          amount={cartTotalAmount}
          type={transactionType}
          particulars={transactionParticulars}
          currency={transactionCurrency}
          merchantName={merchantName}
          merchantLogo={merchantLogo}
          onClose={handlePaymentClose}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default Cart;
```
## Configuration

The `WalletPaymentForm` component supports the props listed in the API Reference. You can customize the transaction details and merchant branding by passing the optional props (`type`, `particulars`, `currency`, `merchantName`, `merchantLogo`). Additional customization (e.g., theming, additional fees) may be added in future updates. Check the latest documentation or release notes for updates.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Support

For questions, issues, or feature requests, please:
- Open an issue on our [GitHub Issues page](https://github.com/yourusername/evzone-alb/issues).
- Contact our support team at support@evzoneafrica.com.

---
