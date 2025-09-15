// src/sdk/paykitClient.js
// Lightweight client for your Paykit SDK API.
// Uses a single, central API base from src/sdk/constants.js
// Works in browser or Node (fetch must be available).

import { API_BASE_URL, DEFAULT_TIMEOUT_MS } from './constants.js';

// Try to load any helpers the project exported.
// (Works whether you exported detectUserNoFromCookies, getUserNo, etc.)
import * as cookieUtil from '../utils/cookie.js';

/**
 * Create a Paykit API client.
 * Usage:
 *   const api = createPaykitClient({ publishableKey: 'pk_test_123', brandId: 'brand_xtr_001' });
 *   const sess = await api.initSession({ enterpriseWalletNo }); // <-- no user id prop
 */
export default function createPaykitClient({
  publishableKey,
  brandId,                  // NEW (optional)
  timeoutMs = DEFAULT_TIMEOUT_MS,
  fetchImpl,
} = {}) {
  if (!API_BASE_URL) throw new Error('paykitClient: API_BASE_URL is not set');
  if (!publishableKey) throw new Error('paykitClient: publishableKey is required');

  const _fetch =
    fetchImpl || (typeof fetch !== 'undefined' ? fetch.bind(globalThis) : null);
  if (!_fetch) throw new Error('paykitClient: fetch is not available in this environment');

  const jsonHeaders = { 'Content-Type': 'application/json' };

  async function request(
    path,
    { method = 'POST', headers = {}, body, idempotencyKey } = {}
  ) {
    const url = joinUrl(API_BASE_URL, path);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);

    let res;
    try {
      res = await _fetch(url, {
        method,
        headers: {
          ...jsonHeaders,
          ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : null),
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: ctrl.signal,
      });
    } catch (err) {
      clearTimeout(timer);
      throw decorateError(err, { code: 'NETWORK_ERROR', url: path });
    }
    clearTimeout(timer);

    let data;
    try {
      data = await res.json();
    } catch {
      throw decorateError(new Error('Invalid JSON response'), {
        code: 'BAD_RESPONSE',
        status: res.status,
        url: path,
      });
    }

    if (!res.ok || data?.ok === false) {
      const code = data?.code || `HTTP_${res.status}`;
      const msg = data?.message || 'Request failed';
      throw decorateError(new Error(msg), { code, status: res.status, url: path, data });
    }

    return data;
  }

  // ---------- Public API ----------

  /**
   * Initialize a checkout session.
   * @param {{enterpriseWalletNo:string, userNo?:string, userWalletId?:string, brandId?:string}} p
   *  - You SHOULD pass only { enterpriseWalletNo }.
   *  - SDK will read userNo from cookies; falls back to legacy userWalletId if provided.
   *  - brandId is OPTIONAL (can be set here or at client creation).
   */
  async function initSession(p) {
    if (!p?.enterpriseWalletNo) {
      throw new Error('paykitClient:initSession requires enterpriseWalletNo');
    }

    const userNo = p.userNo ?? detectUserNo();

    // Allow brandId per-call override; else use the client-level brandId.
    const brandToSend = p.brandId ?? brandId;

    const payload = {
      publishableKey,
      enterpriseWalletNo: p.enterpriseWalletNo,
      ...(brandToSend ? { brandId: brandToSend } : {}), // NEW: pass brandId when provided
      // prefer userNo if present, else fall back to legacy userWalletId
      ...(userNo ? { userNo } : (p.userWalletId ? { userWalletId: p.userWalletId } : {})),
      ...(p.billingCurrency ? { billingCurrency: p.billingCurrency } : {}),
    };

    if (!payload.userNo && !payload.userWalletId) {
      // No cookie & no legacy id supplied
      throw decorateError(
        new Error('Not signed in: missing user identifier'),
        { code: 'MISSING_USER_ID' }
      );
    }

    return request('/api/v1/paykit/sdk/session/init', { body: payload });
  }

  /**
   * Get a quote for the amount.
   * @param {{sessionId:string, amount:number}} p
   */
  async function quote(p) {
    return request('/api/v1/paykit/sdk/tx/quote', {
      body: { sessionId: p.sessionId, amount: p.amount },
    });
  }

  /**
   * Confirm the charge using a quote and passcode.
   * @param {{sessionId:string, quoteId:string, passcode:string, idempotencyKey?:string}} p
   */
  async function charge(p) {
    return request('/api/v1/paykit/sdk/tx/charge', {
      idempotencyKey: p.idempotencyKey || genIdempotencyKey(),
      body: {
        sessionId: p.sessionId,
        quoteId: p.quoteId,
        passcode: p.passcode,
      },
    });
  }

  return {
    initSession,
    quote,
    charge,
    genIdempotencyKey,
  };
}

// ---------- helpers ----------
function joinUrl(base, path) {
  if (!base.endsWith('/') && !path.startsWith('/')) return `${base}/${path}`;
  if (base.endsWith('/') && path.startsWith('/')) return `${base}${path.slice(1)}`;
  return `${base}${path}`;
}

function genIdempotencyKey() {
  const r = Math.random().toString(36).slice(2, 8);
  return `idmp_${Date.now()}_${r}`;
}

function decorateError(err, extra) {
  const e = err instanceof Error ? err : new Error(String(err));
  Object.assign(e, extra || {});
  return e;
}

// Prefer project helper; otherwise read cookies locally
function detectUserNo() {
  try {
    // Try commonly-used export names first
    for (const fnName of [
      'detectUserNoFromCookies',
      'getUserNo',
      'getUserNoFromCookies',
    ]) {
      const fn = cookieUtil?.[fnName];
      if (typeof fn === 'function') {
        const v = fn();
        if (v) return v;
      }
    }
  } catch {}
  return localDetectUserNo();
}

function localDetectUserNo() {
  if (typeof document === 'undefined') return null;
  const keys = [
    'evz_user_no',    // preferred
    'wallet_user_id', // legacy
    'user_id',        // legacy
    'evz_user_id',    // legacy
  ];
  for (const k of keys) {
    const row = document.cookie.split('; ').find((s) => s.startsWith(`${k}=`));
    if (row) {
      try {
        return decodeURIComponent(row.split('=')[1] || '');
      } catch {
        return row.split('=')[1] || '';
      }
    }
  }
  return null;
}
