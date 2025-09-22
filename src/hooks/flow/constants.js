// src/hooks/flow/constants.js

// Dummy platform knobs (match your server-ish math)
export const CHARGES = { taxPct: 0.025, walletFeePct: 0.015 };

// Local demo user state (balance, currency, passcode)
export const DUMMY_USER_STATE = {
  'U-000789': { balance: 50000, currency: 'UGX', passcode: '123456' }, // Jane
  'U-000123': { balance: 1200,  currency: 'USD', passcode: '123456' }, // John
};

// Fallback defaults for unknown users
export const DEFAULT_USER_STATE = { balance: 100000, currency: 'UGX', passcode: '123456' };

// Quick helpers
export const rnd = (n) => Math.round(Number(n) || 0);

export function buildBreakdown(subtotal) {
  const tax = rnd(subtotal * CHARGES.taxPct);
  const walletFee = rnd(subtotal * CHARGES.walletFeePct);
  const total = subtotal; // fees are informational in this demo
  return {
    subtotal,
    taxPct: CHARGES.taxPct,
    tax,
    walletFeePct: CHARGES.walletFeePct,
    walletFee,
    total,
  };
}

export function nowIso() {
  return new Date().toISOString();
}
