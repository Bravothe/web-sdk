// src/hooks/flow/core.js
// Heavy logic extracted from the hook to keep the hook tiny.

import { wait } from './transitions.js';
import { CHARGES, DUMMY_USER_STATE, DEFAULT_USER_STATE, rnd, buildBreakdown, nowIso } from './constants.js';

function dedupe(arr) {
  return Array.from(new Set(arr || []));
}

export function buildPlaceholderAccounts(userNos) {
  return userNos.map((u) => ({
    userNo: u,
    walletId: null,
    owner: `User ${String(u).slice(-3)}`,
    email: `${String(u).toLowerCase().replace(/[^a-z0-9]+/g, '')}@example.com`,
    photo: `https://i.pravatar.cc/80?u=${encodeURIComponent(u)}`,
  }));
}

export function makeLocalSession({
  entNo,
  chosenUserNo,
  merchantName,
  currency,
  getUsersForPicker,
}) {
  const userState = DUMMY_USER_STATE[chosenUserNo] || DEFAULT_USER_STATE;

  const pool = getUsersForPicker();
  const prof = Array.isArray(pool)
    ? (pool.find((u) => u.userNo === chosenUserNo) || {})
    : {};

  return {
    sessionId: 'sess_' + Math.random().toString(36).slice(2),
    enterprise: {
      walletNo: entNo,
      name: merchantName || 'Demo Enterprise',
      currency: 'UGX',
    },
    user: {
      walletId: prof.walletId || 'W-256-' + Math.floor(10_000_00 + Math.random() * 89_999_99),
      name: prof.owner || 'User ' + String(chosenUserNo).slice(-3),
      email: prof.email || null,
      balance: userState.balance,
      currency: userState.currency,
      userNo: chosenUserNo,
    },
    billingCurrency: currency || userState.currency || 'UGX',
    rates: { CHARGES },
    expiresAt: new Date(Date.now() + 15 * 60_000).toISOString(),
    createdAt: nowIso(),
  };
}

/**
 * Build the boot function (kept pure here; setters + utils are injected).
 */
export function createBoot({
  key,
  ent,
  amountValid,
  userWalletId,
  pickedUserNoThisFlow,
  getUserNoFromCookie,
  getUserNosFromCookie,
  setUserNoCookie,
  getUsersForPicker,
  setErrorMsg,
  setQuote,
  setAccounts,
  setSession,
  transitionTo,
  currency,
  merchantName,
}) {
  return async function boot({ forceUserNo } = {}) {
    setErrorMsg('');
    setQuote(null);
    setAccounts([]);

    if (!key) {
      setErrorMsg('Missing publicKey/publishableKey');
      await transitionTo('invalid');
      return;
    }
    if (!ent) {
      await transitionTo('signin');
      return;
    }
    if (!amountValid) {
      setErrorMsg('Invalid amount');
      await transitionTo('invalid');
      return;
    }

    let cookieUserNo = !userWalletId ? (getUserNoFromCookie() || null) : null;

    if (!userWalletId) {
      // Merge all known sources (primary/list/enumerated)
      let userNos = dedupe([...getUserNosFromCookie()]).filter(Boolean);

      if (forceUserNo) {
        if (!cookieUserNo || cookieUserNo !== forceUserNo) {
          try { setUserNoCookie(forceUserNo); } catch {}
        }
        cookieUserNo = forceUserNo;
        if (!userNos.includes(forceUserNo)) userNos.push(forceUserNo);
      }

      if (userNos.length === 0) {
        await transitionTo('signin');
        return;
      }

      if (!forceUserNo) {
        if (userNos.length === 1) {
          const only = userNos[0];
          if (!cookieUserNo || cookieUserNo !== only) {
            try { setUserNoCookie(only); } catch {}
            cookieUserNo = only;
          }
        } else if (userNos.length > 1) {
          if (!pickedUserNoThisFlow) {
            try {
              const list = getUsersForPicker();
              setAccounts(Array.isArray(list) && list.length ? list : buildPlaceholderAccounts(userNos));
            } catch {
              setAccounts(buildPlaceholderAccounts(userNos));
            }
            await transitionTo('accountPicker');
            return;
          }
          cookieUserNo = pickedUserNoThisFlow || cookieUserNo || null;
        }
      }
    }

    if (!userWalletId && !cookieUserNo) {
      await transitionTo('signin');
      return;
    }

    await wait(700);

    const chosen = userWalletId ? null : cookieUserNo;
    if (chosen) {
      try { console.log('[evzone-sdk] selected userNo:', chosen); } catch {}
    }
    const sess = makeLocalSession({
      entNo: ent,
      chosenUserNo: chosen || 'U-LOCAL',
      merchantName,
      currency,
      getUsersForPicker,
    });
    setSession(sess);
    await transitionTo('summary');
  };
}

/**
 * Build action handlers (confirm, submit, selectAccount, etc.)
 */
export function createActions({
  amount,
  sessionRef,       // getter: () => session
  quoteRef,         // getter: () => quote
  setSession,
  setQuote,
  setErrorMsg,
  setPickedUserNoThisFlow,
  withMinProcessing,
  transitionTo,
  onSuccess,
  detailsRef,       // getter: () => details
  setUserNoCookie,
  restart,
}) {
  const handleConfirm = async () => {
    const session = sessionRef();
    if (!session) return;
    setErrorMsg('');
    try {
      const q = await withMinProcessing('quote', async () => {
        const subtotal = rnd(amount);
        const breakdown = buildBreakdown(subtotal);
        return {
          quoteId: 'qt_' + Math.random().toString(36).slice(2),
          total: subtotal,
          currency: session.billingCurrency || 'UGX',
          breakdown,
          createdAt: nowIso(),
          expiresAt: new Date(Date.now() + 5 * 60_000).toISOString(),
        };
      });

      setQuote(q);

      const balance = Number(session?.user?.balance || 0);
      if (balance < Number(q.total || 0)) await transitionTo('insufficient');
      else await transitionTo('passcode');
    } catch (e) {
      try { console.error('quote failed (offline):', e); } catch {}
      setErrorMsg('Could not prepare quote.');
      await transitionTo('failed');
    }
  };

  const handleSubmit = async (passcode) => {
    const session = sessionRef();
    const quote = quoteRef();
    if (!session || !quote) return;
    if (!passcode || String(passcode).length !== 6) return;

    setErrorMsg('');
    try {
      const res = await withMinProcessing('charge', async () => {
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

        const newBal = rnd(currBalance - total);
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

      await transitionTo('success');
      const details = detailsRef();
      onSuccess?.({
        transactionId: res?.chargeId || quote?.quoteId,
        sessionId: sessionRef().sessionId,
        enterprise: sessionRef().enterprise,
        user: sessionRef().user,
        amount: quote.total,
        currency: quote.currency || details.billedCurrency,
        type: details.type,
        particulars: details.particulars,
        receipt: res?.receipt,
      });
    } catch (e) {
      if (e?.code === 'INSUFFICIENT_FUNDS') await transitionTo('insufficient');
      else {
        try { console.error('charge failed (offline):', e); } catch {}
        setErrorMsg(e?.message || 'Payment failed.');
        await transitionTo('failed');
      }
    }
  };

  const selectAccount = (userNo) => {
    try { if (userNo) setUserNoCookie(userNo); } catch {}
    setPickedUserNoThisFlow(userNo);
    try { console.log('[evzone-sdk] user picked (cookie primary):', userNo); } catch {}
    restart(userNo);
  };

  const closeAndReset = (onClose) => {
    setQuote(null);
    // Don’t spin here—close immediately; parent usually unmounts the form.
    onClose?.();
  };

  const goToSummary = () => transitionTo('summary');

  return {
    handleConfirm,
    handleSubmit,
    selectAccount,
    closeAndReset,
    goToSummary,
  };
}
