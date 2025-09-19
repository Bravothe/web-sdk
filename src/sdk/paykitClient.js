// src/sdk/paykitClient.js
import { API_BASE_URL, DEFAULT_TIMEOUT_MS } from './constants.js';
import * as cookieUtil from '../utils/cookie.js';

export default function createPaykitClient({
  publicKey,
  brandId,
  publishableKey,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  fetchImpl,
  mode = 'live',               // ← NEW: 'mock' | 'live'
} = {}) {
  const key = publicKey || publishableKey;
  if (!key) throw new Error('paykitClient: publicKey (or publishableKey) is required');

  // ---------- MOCK MODE (no network, dummy data) ----------
  if (mode === 'mock') {
    const charges = { taxPct: 0.025, walletFeePct: 0.015 };
    const FX = {
      'UGX->UGX': 1,
      'UGX->USD': 0.00026,
      'USD->UGX': 3850,
      'USD->USD': 1,
    };

    const mockUserDirectory = (userNos = []) =>
      (userNos || []).filter(Boolean).map((no, i) => ({
        userNo: String(no),
        walletId: `W-256-${String(10000000 + i * 137).slice(0, 8)}`,
        owner: i % 2 ? 'Jane Smith' : 'John Doe',
        email: i % 2 ? 'jane@example.com' : 'john@example.com',
        photo:
          i % 2
            ? 'https://res.cloudinary.com/dlfa42ans/image/upload/v1748862195/my_app_uploads/wanfawdxt67329ut6pij.jpg'
            : 'https://res.cloudinary.com/dlfa42ans/image/upload/v1749634822/my_app_uploads/ddolgjxphdylyyexueq5.jpg',
      }));

    const mockState = {
      // balances by userNo (just for demo math)
      balances: new Map(),
    };

    const delay = (ms = 350) => new Promise(r => setTimeout(r, ms));
    const rndId = (p) => `${p}_${Math.random().toString(36).slice(2)}`;

    function detectUserNo() {
      try {
        for (const fnName of ['detectUserNoFromCookies','getUserNo','getUserNoFromCookies','getUserNoFromCookie']) {
          const fn = cookieUtil?.[fnName];
          if (typeof fn === 'function') {
            const v = fn();
            if (v) return v;
          }
        }
      } catch {}
      // fallback: light local read
      if (typeof document !== 'undefined') {
        const m = document.cookie.match(/(?:^|;\s*)evz_user_no=([^;]*)/);
        if (m) try { return decodeURIComponent(m[1]); } catch { return m[1]; }
      }
      return null;
    }

    function conv(amount, from, to) {
      const k = `${from}->${to}`;
      const rate = FX[k];
      if (rate == null) throw Object.assign(new Error(`FX path ${k} missing`), { code: 'FX_UNAVAILABLE' });
      return Math.round(Number(amount) * rate);
    }

    // --------- MOCK API surface ---------
    async function initSession(p = {}) {
      const ent = p?.enterpriseNo || p?.enterpriseWalletNo;
      if (!ent) throw Object.assign(new Error('enterpriseNo required'), { code: 'MISSING_ENTERPRISE_NO' });

      const userNo = p.userNo ?? detectUserNo();
      // (what you asked for) — log it so your teammate can wire auth later
      console.log('[Paykit MOCK] userNo detected:', userNo);

      if (!userNo && !p.userWalletId) {
        throw Object.assign(new Error('Not signed in: missing user identifier'), { code: 'MISSING_USER_ID' });
      }

      // pretend these are valid and belong together
      const user = {
        userNo: userNo || 'U-000123',
        walletId: 'W-256-48392018',
        name: 'John Doe',
        email: 'john@example.com',
        currency: p.billingCurrency || 'UGX',
      };

      // seed demo balance (if new)
      if (!mockState.balances.has(user.userNo)) mockState.balances.set(user.userNo, 500_000);

      await delay();

      const sessionId = rndId('sess');
      const billingCurrency = p.billingCurrency || user.currency;
      const enterprise = { walletNo: ent, name: 'Your Enterprise Wallet', currency: 'UGX' };

      return {
        ok: true,
        sessionId,
        enterprise,
        user: {
          walletId: user.walletId,
          name: user.name,
          email: user.email,
          balance: mockState.balances.get(user.userNo),
          currency: user.currency,
        },
        billingCurrency,
        rates: { charges },
        expiresAt: new Date(Date.now() + 15 * 60_000).toISOString(),
      };
    }

    async function quote(p = {}) {
      const amount = Math.round(Number(p.amount || 0));
      if (amount <= 0) throw Object.assign(new Error('Amount must be positive'), { code: 'INVALID_AMOUNT' });

      await delay();

      // keep math simple (fees are informational)
      const subtotal = amount;
      const tax = Math.round(subtotal * charges.taxPct);
      const walletFee = Math.round(subtotal * charges.walletFeePct);
      const breakdown = {
        subtotal,
        taxPct: charges.taxPct,
        tax,
        walletFeePct: charges.walletFeePct,
        walletFee,
        total: subtotal,
      };

      return {
        ok: true,
        quoteId: rndId('qt'),
        billingCurrency: 'UGX',
        userCurrency: 'UGX',
        enterpriseCurrency: 'UGX',
        fx: { userToBilling: 1, billingToEnterprise: 1, lockedForSec: 300 },
        breakdown,
        expiresAt: new Date(Date.now() + 5 * 60_000).toISOString(),
      };
    }

    async function charge(p = {}) {
      const { passcode = '', amount, quoteId } = p || {};
      if (!quoteId) throw Object.assign(new Error('Missing quoteId'), { code: 'BAD_REQUEST' });

      await delay(650);

      if (String(passcode) !== '123456') {
        throw Object.assign(new Error('Incorrect passcode'), { code: 'INVALID_PASSCODE', status: 403 });
      }

      // For demo we take amount from last quote-like step if provided by caller,
      // otherwise assume 10,000 UGX
      const billAmt = Math.round(Number(amount || 10_000));

      // pick an arbitrary active userNo for balance math
      const userNo = cookieUtil.getUserNoFromCookie?.() || 'U-000123';
      const bal = mockState.balances.get(userNo) ?? 500_000;
      const userDebit = conv(billAmt, 'UGX', 'UGX');

      if (bal < userDebit) {
        throw Object.assign(new Error('Not enough balance'), { code: 'INSUFFICIENT_FUNDS', status: 402 });
      }

      mockState.balances.set(userNo, Math.round(bal - userDebit));

      return {
        ok: true,
        receipt: {
          transactionId: rndId('W'),
          timestamp: new Date().toISOString(),
          billing: { amount: billAmt, currency: 'UGX' },
          user: {
            walletId: 'W-256-48392018',
            debited: userDebit,
            currency: 'UGX',
            newBalance: mockState.balances.get(userNo),
          },
          enterprise: {
            walletNo: 'EVZ-123456',
            credited: userDebit,
            currency: 'UGX',
          },
          fx: { userToBilling: 1, billingToEnterprise: 1 },
        },
      };
    }

    async function lookupUsersByNo(userNos) {
      await delay(250);
      return { ok: true, users: mockUserDirectory(userNos) };
    }

    return { initSession, quote, charge, lookupUsersByNo, genIdempotencyKey };
  }

  // ---------- LIVE MODE (original) ----------
  if (!API_BASE_URL) throw new Error('paykitClient: API_BASE_URL is not set');
  const _fetch = fetchImpl || (typeof fetch !== 'undefined' ? fetch.bind(globalThis) : null);
  if (!_fetch) throw new Error('paykitClient: fetch is not available in this environment');

  const jsonHeaders = { 'Content-Type': 'application/json' };

  async function request(path, { method = 'POST', headers = {}, body, idempotencyKey } = {}) {
    const url = joinUrl(API_BASE_URL, path);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);

    let res;
    try {
      res = await _fetch(url, {
        method,
        headers: { ...jsonHeaders, ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : null), ...headers },
        body: body ? JSON.stringify(body) : undefined,
        signal: ctrl.signal,
      });
    } catch (err) {
      clearTimeout(timer);
      throw decorateError(err, { code: 'NETWORK_ERROR', url: path });
    }
    clearTimeout(timer);

    let data;
    try { data = await res.json(); } catch {
      throw decorateError(new Error('Invalid JSON response'), { code: 'BAD_RESPONSE', status: res.status, url: path });
    }
    if (!res.ok || data?.ok === false) {
      const code = data?.code || `HTTP_${res.status}`;
      const msg = data?.message || 'Request failed';
      throw decorateError(new Error(msg), { code, status: res.status, url: path, data });
    }
    return data;
  }

  async function initSession(p) {
    const ent = p?.enterpriseNo || p?.enterpriseWalletNo;
    if (!ent) throw new Error('paykitClient:initSession requires enterpriseNo (or enterpriseWalletNo)');
    const userNo = p.userNo ?? detectUserNo();
    const payload = {
      publicKey: key,
      publishableKey: key,
      enterpriseNo: ent,
      enterpriseWalletNo: ent,
      ...(p.brandId ?? brandId ? { brandId: p.brandId ?? brandId } : {}),
      ...(userNo ? { userNo } : (p.userWalletId ? { userWalletId: p.userWalletId } : {})),
      ...(p.billingCurrency ? { billingCurrency: p.billingCurrency } : {}),
    };
    if (!payload.userNo && !payload.userWalletId) {
      throw decorateError(new Error('Not signed in: missing user identifier'), { code: 'MISSING_USER_ID' });
    }
    return request('/api/v1/paykit/sdk/session/init', { body: payload });
  }
  async function quote(p) {
    return request('/api/v1/paykit/sdk/tx/quote', { body: { sessionId: p.sessionId, amount: p.amount } });
  }
  async function charge(p) {
    return request('/api/v1/paykit/sdk/tx/charge', {
      idempotencyKey: p.idempotencyKey || genIdempotencyKey(),
      body: { sessionId: p.sessionId, quoteId: p.quoteId, passcode: p.passcode },
    });
  }
  async function lookupUsersByNo(userNos) {
    const arr = Array.isArray(userNos) ? userNos.filter(Boolean) : [];
    if (arr.length === 0) return { users: [] };
    const payload = { publicKey: key, publishableKey: key, ...(brandId ? { brandId } : {}), userNos: Array.from(new Set(arr)) };
    const res = await request('/api/v1/paykit/sdk/users/by-no', { body: payload });
    if (Array.isArray(res)) return { users: res };
    if (Array.isArray(res?.users)) return { users: res.users };
    return { users: [] };
  }

  return { initSession, quote, charge, lookupUsersByNo, genIdempotencyKey };
}

// ---------- helpers ----------
function joinUrl(base, path) {
  if (!base.endsWith('/') && !path.startsWith('/')) return `${base}/${path}`;
  if (base.endsWith('/') && path.startsWith('/')) return `${base}${path.slice(1)}`;
  return `${base}${path}`;
}
function genIdempotencyKey() { const r = Math.random().toString(36).slice(2, 8); return `idmp_${Date.now()}_${r}`; }
function decorateError(err, extra) { const e = err instanceof Error ? err : new Error(String(err)); Object.assign(e, extra || {}); return e; }

function detectUserNo() {
  try {
    for (const fnName of ['detectUserNoFromCookies','getUserNo','getUserNoFromCookies','getUserNoFromCookie']) {
      const fn = cookieUtil?.[fnName];
      if (typeof fn === 'function') {
        const v = fn();
        if (v) return v;
      }
    }
  } catch {}
  if (typeof document !== 'undefined') {
    const m = document.cookie.match(/(?:^|;\s*)evz_user_no=([^;]*)/);
    if (m) { try { return decodeURIComponent(m[1]); } catch { return m[1]; } }
  }
  return null;
}
