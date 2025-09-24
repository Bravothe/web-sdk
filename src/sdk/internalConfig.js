// sdk/internalConfig.js
// ⚠️ Publishable key is safe to expose. Do NOT put secrets here.
const EVZ_SDK_CONFIG = {
  // Your server base (hidden from consumers)
  apiBaseUrl: 'http://localhost:4000/api',

  // Public key for the /v1/efcx/incoming header (safe to expose)
  publishableKey: 'pk_nVUU8-kP-frns1vAEgTTxipOvZos4Twg',

  // “Deposit to” targets for your enterprise (not secrets)
  settlementAccountId: '476fea77-b845-49ae-8851-cdd71da5cae5',
  walletId: '3a164195-945e-45b0-bd66-f022833781f9',

  // Sensible defaults
  defaultCountry: 'UG',
  defaultProvider: 'airtel_ug',
  defaultCurrency: 'UGX',
};

export function getSdkConfig() {
  return { ...EVZ_SDK_CONFIG };
}

// Optional (useful for tests or different builds)
export function __setSdkConfig(patch = {}) {
  Object.assign(EVZ_SDK_CONFIG, patch);
}
