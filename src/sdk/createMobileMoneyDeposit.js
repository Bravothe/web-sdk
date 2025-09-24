// sdk/createMobileMoneyDeposit.js
import { getSdkConfig } from './internalConfig.js';

export function makeClientRef(prefix = 'ORDER') {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}-${Date.now().toString().slice(-6)}`;
}

const PROVIDER_CODE = {
  mtn_ug: 'MTN', airtel_ug: 'Airtel',
  mpesa_ke: 'M-Pesa', airtel_ke: 'Airtel',
  mpesa_tz: 'M-Pesa', tigo_tz: 'Tigo', airtel_tz: 'Airtel',
  mtn_rw: 'MTN', airtel_rw: 'Airtel',
  mtn_ng: 'MTN', airtel_ng: 'Airtel', opay_ng: 'Opay', palmpay_ng: 'PalmPay',
  mtn_gh: 'MTN', airteltigo_gh: 'AirtelTigo', vodafone_gh: 'Vodafone',
  mtn_za: 'MTN', mpesa_za: 'M-Pesa',
};

// Full-name labels your successful call used
const COUNTRY_LABEL = {
  UG: 'Uganda', KE: 'Kenya', TZ: 'Tanzania', RW: 'Rwanda',
  NG: 'Nigeria', GH: 'Ghana', ZA: 'South Africa',
};

// Pretty provider_name values (match the passing request style)
const PROVIDER_PRETTY = {
  airtel_ug: 'Airtel Uganda',
  mtn_ug: 'MTN Uganda',
  mpesa_ke: 'M-Pesa (Safaricom) Kenya',
  airtel_ke: 'Airtel Kenya',
  mpesa_tz: 'M-Pesa Tanzania',
  tigo_tz: 'Tigo Pesa',
  airtel_tz: 'Airtel Money Tanzania',
  mtn_rw: 'MTN Rwanda',
  airtel_rw: 'Airtel Rwanda',
  mtn_ng: 'MTN Nigeria MoMo',
  airtel_ng: 'Airtel SmartCash',
  opay_ng: 'Opay',
  palmpay_ng: 'PalmPay',
  mtn_gh: 'MTN Mobile Money Ghana',
  airteltigo_gh: 'AirtelTigo Money',
  vodafone_gh: 'Vodafone Cash',
  mtn_za: 'MTN SA MoMo',
  mpesa_za: 'Vodacom M-Pesa',
};

// Hard-lock currency for UG providers
const PROVIDER_CURRENCY = {
  airtel_ug: 'UGX',
  mtn_ug: 'UGX',
};

function toCountryLabel(input, fallback = 'UG') {
  if (!input) return COUNTRY_LABEL[fallback];
  const raw = String(input).trim();
  if (/^[A-Za-z]{2}$/.test(raw)) return COUNTRY_LABEL[raw.toUpperCase()] || raw;
  return raw; // already a full name like "Uganda"
}

export async function createMobileMoneyDeposit({
  msisdn,            // "+2567…"
  amount,            // number
  providerValue,     // e.g. "airtel_ug"
  country,           // "UG" or "Uganda" (we’ll send full name)
  // currency,       // <— ignored for UG; we force UGX
  accountHolder,     // default "EVzone Customer"
  emailAssociated,   // SDK will fallback if empty
  clientReference,   // optional
  idempotencyKey,    // optional
} = {}) {
  const cfg = getSdkConfig();

  const apiBaseUrl          = cfg.apiBaseUrl;
  const publishableKey      = cfg.publishableKey;
  const settlementAccountId = cfg.settlementAccountId;
  const walletId            = cfg.walletId;

  if (!apiBaseUrl)          throw new Error('SDK misconfigured: apiBaseUrl missing');
  if (!publishableKey)      throw new Error('SDK misconfigured: publishableKey missing');
  if (!settlementAccountId) throw new Error('SDK misconfigured: settlementAccountId missing');
  if (!walletId)            throw new Error('SDK misconfigured: walletId missing');

  const pval           = providerValue || cfg.defaultProvider || 'airtel_ug';
  const provider_code  = PROVIDER_CODE[pval] || pval || 'MTN';
  const provider_name  = PROVIDER_PRETTY[pval] || provider_code;

  // Force UGX for UG providers; default to UGX anyway
  const usedCurrency   = PROVIDER_CURRENCY[pval] || 'UGX';

  // Country label: use explicit “Uganda” for UG providers; otherwise map
  const isUG           = /_ug$/i.test(pval) || /^(ug|uganda)$/i.test(country || cfg.defaultCountry || 'UG');
  const countryLabel   = isUG ? 'Uganda' : toCountryLabel(country || cfg.defaultCountry || 'UG');

  const name = accountHolder || 'EVzone Customer';

  // Always provide initiator.email (server requires it)
  const digits = String(msisdn || '').replace(/\D/g, '').slice(-10) || 'guest';
  const initEmail =
    (emailAssociated && String(emailAssociated).trim()) ||
    `guest-${digits}@noemail.evzone.app`;

  const amt  = Number(amount || 0);
  const txId = clientReference || makeClientRef('ORDER');
  const idem = idempotencyKey || txId;

  // 🔒 EXACT shape as the successful request (no extra keys)
  const payload = {
    settlement_account_id: settlementAccountId,
    wallet_id: walletId,

    initiator: {
      type: 'individual',
      name,
      mobile: msisdn,
      email: initEmail,
      DOB: '1990-01-01',
      address: {
        country: countryLabel, // e.g. "Uganda"
        city: '—',
        street_address: '—',
        zip_code: '—',
        state: '—',
      },
    },

    provider: {
      channel: 'Mobile Money',
      channel_info: {
        provider_name,
        provider_code,
        account_number: msisdn,
        currency: usedCurrency,        // ← UGX
        registered_name: name,
      },
      account_info: {
        account_holder: name,
        mobile_associated: msisdn,
        email_associated: initEmail,
      },
    },

    transaction: {
      transaction_id: txId,
      original_currency: usedCurrency,   // ← UGX
      destination_currency: usedCurrency,// ← UGX
      country: countryLabel,             // e.g. "Uganda"
      amount: { base: amt, tax: 0, fees: 0, total: amt },
      transaction_date: new Date().toISOString(),
    },
  };

  const r = await fetch(`${String(apiBaseUrl).replace(/\/+$/, '')}/v1/efcx/incoming`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Publishable-Key': publishableKey,
      'Idempotency-Key': idem,
    },
    body: JSON.stringify({ payload }),
  });

  const text = await r.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text }; }
  if (!r.ok) {
    const msg = json?.error?.message || json?.error || `Request failed (${r.status})`;
    const err = new Error(msg);
    err.status = r.status;
    err.body = json;
    throw err;
  }
  return json;
}
