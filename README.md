
# Evzone Pay

**Evzone Africa** is a library designed to simplify the integration of a digital wallet payment system into e-commerce platforms. Built with **React** and **Node.js**, it provides a seamless way for developers to enable their customers to make payments using the Evzone Africa digital wallet. This package is lightweight, customizable, and developer-friendly.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features

- Easy integration with e-commerce platforms.
- Support for React-based frontends.
- Secure payment processing with Evzone Africa digital wallet.
- Customizable payment form component.
- Comprehensive error handling and validation.
- Lightweight and optimized for performance.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher) or [yarn](https://yarnpkg.com/)
- A registered Evzone Africa merchant account (to obtain necessary credentials).

## Installation
To install the `evzone-africa` library, run the following command in your project directory:

```bash

npm install evzone-africa

```

Or, if you're using Yarn:

```bash
yarn add evzone-africa
```

Additionally, import the CSS file for styling the payment form:

```jsx
import "evzone-africa/dist/WalletPaymentForm.css";
```

## Usage
### Frontend (React)
1. Import the `WalletPaymentForm` component into your React application.
2. Use it within a conditional render to show the payment form when needed.
3. Pass the required props, such as `customerId`, `amount`, `onClose`, and `onSuccess`.

Here’s an example usage in a shopping cart component:

```jsx
import React, { useState } from "react";
import WalletPaymentForm from "evzone-africa/dist/WalletPaymentForm";
import "evzone-africa/dist/WalletPaymentForm.css";

const Cart = () => {
  const [showPopup, setShowPopup] = useState(false);
  const cartTotalAmount = 99.99; // Example amount (replace with your cart logic)
  const customerId = "customer123"; // Example customer ID (replace with your auth logic)

  const handlePaymentSuccess = () => {
    console.log("Payment successful");
    // Add logic to clear cart or update order status
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
          onClose={() => setShowPopup(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default Cart;
```

### Notes
- The `WalletPaymentForm` component is rendered conditionally (e.g., in a popup or modal).
- The `customerId` should be obtained from your authentication system or merchant account.
- The `amount` should reflect the total amount to be paid (e.g., from your cart).

## API Reference
### Frontend (React)
- **`WalletPaymentForm` Component**
  - `customerId` (string, required): The unique identifier for the customer making the payment.
  - `amount` (number, required): The payment amount in the default currency.
  - `onClose` (function, required): Callback triggered when the payment form is closed.
  - `onSuccess` (function, required): Callback triggered on successful payment.

## Examples
### Complete Checkout Flow
1. User adds items to the cart.
2. User clicks "Make Payments" to trigger the payment form.
3. The `WalletPaymentForm` component is displayed.
4. Upon successful payment, the `onSuccess` callback is triggered, and the form is closed via `onClose`.

See the [examples folder](examples/) for more detailed sample code.

## Configuration
The `WalletPaymentForm` component currently supports the props listed in the API Reference. Additional customization (e.g., theming, currency) may be added in future updates. Check the latest documentation or release notes for updates.

## Troubleshooting
- **Payment Form Not Displaying**: Ensure the CSS file is correctly imported (`evzone-africa/dist/WalletPaymentForm.css`) and that the `showPopup` state (or equivalent) is toggled correctly.
- **"Invalid Customer ID" Error**: Verify that the `customerId` is valid and matches your Evzone Africa merchant account records.
- **Payment Not Processing**: Ensure your network connection is stable and that the Evzone Africa servers are reachable.

## Contributing
We welcome contributions to improve `evzone-africa`! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Support
For questions, issues, or feature requests, please:
- Open an issue on our [GitHub Issues page](https://github.com/yourusername/evzone-africa/issues).
- Contact our support team at support@evzoneafrica.com.
```

---

### Instructions:
1. **Copy and Paste**: Copy the entire content above (including the ```markdown tags) and paste it directly into your Markdown editor (e.g., in a `README.md` file).
2. **Replace Placeholders**:
   - Replace `yourusername` in the GitHub link with your actual GitHub username or organization.
   - Replace `support@evzoneafrica.com` with your actual support email.
3. **Adjust Paths**: 
   - If your package name is different (e.g., `evzone-africa8` instead of `evzone-africa`), update the import statements and installation commands accordingly.
   - If you don’t have `examples/`, `CONTRIBUTING.md`, or `LICENSE` files in your repository, either create them or remove the corresponding links.
4. **Verify CSS Path**: Your code uses `evzone-africa8/dist/dist/WalletPaymentForm.css`, which I corrected to `evzone-africa/dist/WalletPaymentForm.css` in the README. Ensure the path matches your actual package structure.
5. **Test**: Preview the README in your Markdown editor or GitHub to ensure formatting looks correct.

### Notes:
- **Backend Section Removed**: Your provided code only shows frontend usage with `WalletPaymentForm`. If you have a backend component (e.g., for verification or webhooks), please share it, and I’ll add a backend section.
- **SVG Namespace**: The SVG namespace document you shared seems unrelated to the `evzone-africa` library. I’ve excluded it from the README, but let me know if you want it included for some reason.
- **Props Extracted**: The `WalletPaymentForm` props (`customerId`, `amount`, `onClose`, `onSuccess`) are based on your `Cart` component usage.

Let me know if you need further adjustments or additional sections!
