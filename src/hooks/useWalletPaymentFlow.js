// src/hooks/useWalletPaymentFlow.js
// OFFLINE / DUMMY MODE:
// - No network calls. No import of createPaykitClient.
// - Uses cookie helpers to discover userNos and builds dummy user profiles
//   (email + photo) for the account picker.
// - Creates a local "session", computes a dummy quote, and simulates a charge.
// - Logs the selected userNo so your teammate can hook their auth later.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  getUserNoFromCookie,
  getUserNosFromCookie,   // scans list + enumerated cookies
  setUserNoCookie,       // set the selected/active user
  getUsersForPicker,     // returns [{userNo,walletId,owner,email,photo}]
} from '../utils/cookie.js';

// Dummy platform knobs (match your server-ish math)
const CHARGES = { taxPct: 0.025, walletFeePct: 0.015 };

// Local demo user state (balance, currency, passcode)
// You can tweak these safely; UI will reflect them.
const DUMMY_USER_STATE = {
  'U-000789': { balance: 50000, currency: 'UGX', passcode: '123456' }, // Jane
  'U-000123': { balance: 1200,  currency: 'USD', passcode: '123456' }, // John
};

// Fallback defaults for unknown users
const DEFAULT_USER_STATE = { balance: 100000, currency: 'UGX', passcode: '123456' };

// Quick helpers
const rnd = (n) => Math.round(Number(n) || 0);

function buildBreakdown(subtotal) {
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

function nowIso() { return new Date().toISOString(); }

/**
 * Encapsulates all checkout/session/quote/charge logic (OFFLINE).
 * UI components subscribe to this hook and render based on its state.
 */
export default function useWalletPaymentFlow({
  // preferred + legacy identifiers (still required by your UI)
  publicKey,
  publishableKey,
  brandId,
  enterpriseNo,
  enterpriseWalletNo,
  userWalletId,        // if you force it, we skip cookie flow

  // transaction display fields
  amount,
  type,
  particulars,
  currency,
  merchantName,
  merchantLogo,

  // timings
  minProcessingMs = 5000,

  // callbacks
  onClose,
  onSuccess,
}) {
  // Resolve effective identifiers (prefer NEW names)
  const key = publicKey || publishableKey || null;              // still validated for UX messages
  const ent = enterpriseNo || enterpriseWalletNo || null;       // used to display enterpriseNo

  // ---------- State ----------
  // views: loading | accountPicker | signin | invalid | summary | passcode | success | failed | insufficient
  const [view, setView] = useState('loading');
  const [errorMsg, setErrorMsg] = useState('');

  // Local "session"
  const [session, setSession] = useState(null); // { sessionId, enterprise:{...}, user:{...}, billingCurrency, expiresAt }
  const [quote, setQuote] = useState(null);     // { quoteId, total, currency, breakdown, ... }
  const [accounts, setAccounts] = useState([]); // [{userNo, walletId, owner, email, photo}]

  const [submitting, setSubmitting] = useState(false);
  const [processing, setProcessing] = useState(null); // 'quote' | 'charge' | null

  // Remember a pick during this flow so we don't re-show the picker until the component is reopened
  const [pickedUserNoThisFlow, setPickedUserNoThisFlow] = useState(null);

  // A one-shot "force this user on next boot" flag to avoid double-click
  const forceUserNoRef = useRef(null);

  // ---------- Derived ----------
  const amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  // Enforce minimum visible duration for the processing animation
  async function withMinProcessing(kind, task) {
    setProcessing(kind);
    const start = Date.now();
    try {
      return await task();
    } finally {
      const elapsed = Date.now() - start;
      const remain = Math.max(0, Number(minProcessingMs) - elapsed);
      if (remain > 0) await wait(remain);
      setProcessing(null);
    }
  }

  // Build a local "session" object from a chosen userNo (no server calls)
  function makeLocalSession(entNo, chosenUserNo) {
    const userState = DUMMY_USER_STATE[chosenUserNo] || DEFAULT_USER_STATE;

    // find a display profile (email/photo/owner) from cookie utils fallback
    const pool = getUsersForPicker();
    const prof = Array.isArray(pool)
      ? (pool.find(u => u.userNo === chosenUserNo) || {})
      : {};

    return {
      sessionId: 'sess_' + Math.random().toString(36).slice(2),
      enterprise: {
        walletNo: entNo,
        name: merchantName || 'Demo Enterprise', // prefer the merchantName prop if present
        currency: 'UGX',                         // demo enterprise currency
      },
      user: {
        walletId: prof.walletId || ('W-256-' + Math.floor(10_000_00 + Math.random()*89_999_99)),
        name: prof.owner || ('User ' + String(chosenUserNo).slice(-3)),
        email: prof.email || null,
        balance: userState.balance,
        currency: userState.currency,
        userNo: chosenUserNo, // keep locally
      },
      billingCurrency: currency || userState.currency || 'UGX',
      rates: { CHARGES },
      expiresAt: new Date(Date.now() + 15 * 60_000).toISOString(), // 15 min
      createdAt: nowIso(),
    };
  }

  // ---------- Boot / init session (OFFLINE) ----------
  const boot = useCallback(async (opts = {}) => {
    setErrorMsg('');
    setQuote(null);
    setAccounts([]);

    const forceUserNo = opts.forceUserNo ?? forceUserNoRef.current;
    // consume the one-shot flag immediately so we don't reuse it accidentally
    forceUserNoRef.current = null;

    if (!key) {
      setErrorMsg('Missing publicKey/publishableKey');
      setView('invalid');
      return;
    }
    if (!ent) {
      setView('signin'); // enterpriseNo missing → show "Has account?" modal
      return;
    }
    if (!amountValid) {
      setErrorMsg('Invalid amount');
      setView('invalid');
      return;
    }

    // If caller didn't force a specific wallet, check cookies/accounts first
    let cookieUserNo = !userWalletId ? (getUserNoFromCookie() || null) : null;

    if (!userWalletId) {
      // Merge all known sources (primary/list/enumerated)
      let userNos = dedupe([
        ...getUserNosFromCookie(),
      ]).filter(Boolean);

      if (forceUserNo) {
        // If we were told to force a specific user, ensure cookie is set and skip the picker
        if (!cookieUserNo || cookieUserNo !== forceUserNo) {
          try { setUserNoCookie(forceUserNo); } catch {}
        }
        cookieUserNo = forceUserNo;
        if (!userNos.includes(forceUserNo)) userNos.push(forceUserNo);
      }

      if (userNos.length === 0) {
        setView('signin');
        return;
      }

      if (!forceUserNo) {
        if (userNos.length === 1) {
          // 1 account -> auto-select and proceed (ensure cookie set)
          const only = userNos[0];
          if (!cookieUserNo || cookieUserNo !== only) {
            try { setUserNoCookie(only); } catch {}
            cookieUserNo = only;
          }
        } else if (userNos.length > 1) {
          // 2+ accounts -> show picker *unless* we already picked earlier in this flow
          if (!pickedUserNoThisFlow) {
            try {
              const list = getUsersForPicker();
              setAccounts(Array.isArray(list) && list.length ? list : buildPlaceholderAccounts(userNos));
            } catch {
              setAccounts(buildPlaceholderAccounts(userNos));
            }
            setView('accountPicker');
            return; // wait for user to pick, then restart({ forceUserNo })
          }
          cookieUserNo = pickedUserNoThisFlow || cookieUserNo || null;
        }
      }
    }

    // At this point we either have a forced userWalletId or a cookieUserNo
    if (!userWalletId && !cookieUserNo) {
      setView('signin');
      return;
    }

    // Simulate a little prep time (keeps UI parity)
    await wait(700);

    // Build local session immediately (no server)
    const chosen = userWalletId ? null : cookieUserNo;
    if (chosen) {
      try { console.log('[evzone-sdk] selected userNo:', chosen); } catch {}
    }
    const sess = makeLocalSession(ent, chosen || 'U-LOCAL');
    setSession(sess);
    setView('summary');
  }, [key, ent, userWalletId, amountValid, pickedUserNoThisFlow, currency, merchantName]);

  // Auto-boot on mount / when inputs change
  useEffect(() => {
    setView('loading');
    let cancelled = false;
    (async () => {
      if (!cancelled) await boot();
    })();
    return () => { cancelled = true; };
  }, [boot]);

  // Allow the UI to trigger a fresh boot; optionally force a specific userNo
  const restart = useCallback((forceUserNo) => {
    if (forceUserNo) {
      forceUserNoRef.current = forceUserNo; // one-shot
    }
    setView('loading');
    boot({ forceUserNo });
  }, [boot]);

  // ---------- Details for display ----------
  const details = useMemo(() => {
    const billingCurrency = session?.billingCurrency || currency || 'UGX';
    const mName = merchantName || session?.enterprise?.name || 'Unknown Merchant';
    const toId = session?.enterprise?.walletNo || '—';

    return {
      type: type || 'Booking',
      id: toId,
      particulars: particulars || 'Payment',
      billedCurrency: billingCurrency,
      billedAmount: amount,
      totalBilling: quote?.total ?? amount,
      merchantName: mName,
      merchantLogo: merchantLogo || '',
    };
  }, [
    amount,
    currency,
    merchantLogo,
    merchantName,
    particulars,
    quote?.total,
    session?.billingCurrency,
    session?.enterprise?.name,
    session?.enterprise?.walletNo,
    type,
  ]);

  // ---------- Actions (OFFLINE) ----------
  const handleConfirm = useCallback(async () => {
    if (!session) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const q = await withMinProcessing('quote', async () => {
        // local "quote"
        const subtotal = rnd(amount);
        const breakdown = buildBreakdown(subtotal);
        const q = {
          quoteId: 'qt_' + Math.random().toString(36).slice(2),
          total: subtotal,
          currency: session.billingCurrency || 'UGX',
          breakdown,
          createdAt: nowIso(),
          expiresAt: new Date(Date.now() + 5 * 60_000).toISOString(),
        };
        return q;
      });

      setQuote(q);

      const balance = Number(session?.user?.balance || 0);
      if (balance < Number(q.total || 0)) setView('insufficient');
      else setView('passcode');
    } catch (e) {
      try { console.error('quote failed (offline):', e); } catch {}
      setErrorMsg('Could not prepare quote.');
      setView('failed');
    } finally {
      setSubmitting(false);
    }
  }, [session, amount]);

  const handleSubmit = useCallback(async (passcode) => {
    if (!session || !quote) return;
    if (!passcode || String(passcode).length !== 6) return;

    setSubmitting(true);
    setErrorMsg('');
    try {
      const res = await withMinProcessing('charge', async () => {
        // validate passcode against our local dummy state
        const uNo = session?.user?.userNo;
        const state = (uNo && DUMMY_USER_STATE[uNo]) || DEFAULT_USER_STATE;
        if (String(passcode) !== String(state.passcode)) {
          const err = new Error('Incorrect passcode');
          err.code = 'INVALID_PASSCODE';
          throw err;
        }

        const total = Number(quote.total || 0);
        const currBalance = Number(session.user.balance || 0);
        if (currBalance < total) {
          const err = new Error('Not enough balance');
          err.code = 'INSUFFICIENT_FUNDS';
          throw err;
        }

        // "post" it locally: reduce balance, build receipt
        const newBal = rnd(currBalance - total);

        // reflect it in session for UI
        const nextSess = {
          ...session,
          user: { ...session.user, balance: newBal },
        };
        setSession(nextSess);

        return {
          chargeId: 'ch_' + Math.random().toString(36).slice(2),
          receipt: {
            transactionId: 'W-' + Math.floor(Math.random() * 1e9),
            timestamp: nowIso(),
            billing: { amount: total, currency: quote.currency },
            user: {
              walletId: session.user.walletId,
              debited: total,
              currency: session.user.currency,
              newBalance: newBal,
            },
            enterprise: {
              walletNo: session.enterprise.walletNo,
              credited: total,
              currency: session.enterprise.currency || 'UGX',
            },
            breakdown: quote.breakdown,
          },
        };
      });

      setView('success');
      onSuccess?.({
        transactionId: res?.chargeId || quote?.quoteId,
        sessionId: session.sessionId,
        enterprise: session.enterprise,
        user: session.user,
        amount: quote.total,
        currency: quote.currency || details.billedCurrency,
        type: details.type,
        particulars: details.particulars,
        receipt: res?.receipt,
      });
    } catch (e) {
      if (e?.code === 'INSUFFICIENT_FUNDS') setView('insufficient');
      else {
        try { console.error('charge failed (offline):', e); } catch {}
        setErrorMsg(e?.message || 'Payment failed.');
        setView('failed');
      }
    } finally {
      setSubmitting(false);
    }
  }, [session, quote, details, onSuccess]);

  const closeAndReset = useCallback(() => {
    setQuote(null);
    setView('summary');
    onClose?.();
  }, [onClose]);

  const goToSummary = useCallback(() => setView('summary'), []);

  // When user chooses an account from the picker: set primary cookie, remember pick, and restart *forcing* that user
  const selectAccount = useCallback((userNo) => {
    try { if (userNo) setUserNoCookie(userNo); } catch {}
    setPickedUserNoThisFlow(userNo);
    // Important: LOG the userNo so your teammate can capture it in their flow.
    try { console.log('[evzone-sdk] user picked (cookie primary):', userNo); } catch {}
    restart(userNo); // force next boot to use this user directly (prevents the second picker)
  }, [restart]);

  return {
    // state
    view,
    errorMsg,
    session,
    quote,
    submitting,
    processing,

    // derived
    details,

    // multi-account
    accounts,
    selectAccount,

    // actions
    handleConfirm,
    handleSubmit,
    closeAndReset,
    restart,
    goToSummary,
  };
}

/* ---------- helpers (local to this file) ---------- */

function dedupe(arr) {
  return Array.from(new Set(arr || []));
}

function buildPlaceholderAccounts(userNos) {
  return userNos.map((u) => ({
    userNo: u,
    walletId: null,
    owner: `User ${String(u).slice(-3)}`,
    email: `${String(u).toLowerCase().replace(/[^a-z0-9]+/g, '')}@example.com`,
    photo: `https://i.pravatar.cc/80?u=${encodeURIComponent(u)}`,
  }));
}
