// Lightweight client for your Paykit SDK API.
// Works in browser or Node (fetch is required in env).

/**
 * @typedef {Object} PaykitClientOptions
 * @property {string} baseURL              Base URL for your server, e.g. "http://localhost:4000"
 * @property {string} publishableKey       Public key (sent on init)
 * @property {number} [timeoutMs=12000]    Request timeout in ms
 * @property {typeof fetch} [fetchImpl]    Custom fetch (optional)
 */

/**
 * Create a Paykit API client.
 * Usage:
 *   const api = createPaykitClient({ baseURL, publishableKey });
 *   const sess = await api.initSession({ enterpriseWalletNo, userWalletId });
 */
export default function createPaykitClient({
  baseURL,
  publishableKey,
  timeoutMs = 12000,
  fetchImpl,
} = {}) {
  if (!baseURL) throw new Error('paykitClient: baseURL is required');
  if (!publishableKey) throw new Error('paykitClient: publishableKey is required');

  const _fetch = fetchImpl || (typeof fetch !== 'undefined' ? fetch.bind(globalThis) : null);
  if (!_fetch) throw new Error('paykitClient: fetch is not available in this environment');

  const jsonHeaders = { 'Content-Type': 'application/json' };

  async function request(path, { method = 'GET', headers = {}, body, idempotencyKey } = {}) {
    const url = joinUrl(baseURL, path);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);

    const res = await _fetch(url, {
      method,
      headers: {
        ...jsonHeaders,
        ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : null),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    }).catch((err) => {
      clearTimeout(timer);
      throw decorateError(err, { code: 'NETWORK_ERROR', url: path });
    });

    clearTimeout(timer);

    let data;
    try {
      data = await res.json();
    } catch (e) {
      // non-JSON response
      throw decorateError(new Error('Invalid JSON response'), {
        code: 'BAD_RESPONSE',
        status: res.status,
        url: path,
      });
    }

    if (!res.ok || data?.ok === false) {
      // prefer server’s code/message when present
      const code = data?.code || `HTTP_${res.status}`;
      const msg = data?.message || 'Request failed';
      throw decorateError(new Error(msg), { code, status: res.status, url: path, data });
    }

    return data;
  }

  // ---------- Public API ----------

  /**
   * Initialize a checkout session.
   * @param {{enterpriseWalletNo:string, userWalletId:string}} p
   * @returns {Promise<{
   *   ok:boolean,
   *   sessionId:string,
   *   enterprise:{walletNo:string,name:string,currency:string},
   *   user:{walletId:string,name:string,email?:string,balance:number,currency:string},
   *   billingCurrency:string,
   *   rates:{charges:{taxPct:number,walletFeePct:number}},
   *   expiresAt:string
   * }>}
   */
  async function initSession(p) {
    return request('/api/v1/paykit/sdk/session/init', {
      method: 'POST',
      body: {
        publishableKey,
        enterpriseWalletNo: p.enterpriseWalletNo,
        userWalletId: p.userWalletId,
      },
    });
  }

  /**
   * Get a quote for the amount.
   * @param {{sessionId:string, amount:number}} p
   * @returns {Promise<{ok:boolean, quoteId:string, amount:number, currency:string, tax:number, fee:number, total:number, expiresAt:string}>}
   */
  async function quote(p) {
    return request('/api/v1/paykit/sdk/tx/quote', {
      method: 'POST',
      body: { sessionId: p.sessionId, amount: p.amount },
    });
  }

  /**
   * Confirm the charge using a quote and passcode.
   * @param {{sessionId:string, quoteId:string, passcode:string, idempotencyKey?:string}} p
   * @returns {Promise<{ok:boolean, chargeId:string, status:string, receipt:any}>}
   */
  async function charge(p) {
    return request('/api/v1/paykit/sdk/tx/charge', {
      method: 'POST',
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
    // small helpers exposed (optional)
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
  // simple, readable idem key: idmp_<timestamp>_<rand>
  const r = Math.random().toString(36).slice(2, 8);
  return `idmp_${Date.now()}_${r}`;
}

function decorateError(err, extra) {
  const e = err instanceof Error ? err : new Error(String(err));
  Object.assign(e, extra || {});
  return e;
}
