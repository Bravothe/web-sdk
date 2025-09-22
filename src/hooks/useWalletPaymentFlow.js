// src/hooks/useWalletPaymentFlow.js
// OFFLINE / DUMMY MODE — tiny hook that wires state to the core.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  getUserNoFromCookie,
  getUserNosFromCookie,
  setUserNoCookie,
  getUsersForPicker,
} from '../utils/cookie.js';

import { createTransitions } from './flow/transitions.js';
import { createBoot, createActions } from './flow/core.js';

export default function useWalletPaymentFlow({
  publicKey,
  publishableKey,
  brandId,               // reserved
  enterpriseNo,
  enterpriseWalletNo,
  userWalletId,

  amount,
  type,
  particulars,
  currency,
  merchantName,
  merchantLogo,

  minProcessingMs = 5000,

  onClose,
  onSuccess,
}) {
  const key = publicKey || publishableKey || null;
  const ent = enterpriseNo || enterpriseWalletNo || null;

  // views: loading | accountPicker | signin | invalid | summary | passcode | success | failed | insufficient
  const [view, setView] = useState('loading');
  const [errorMsg, setErrorMsg] = useState('');

  const [session, setSession] = useState(null);
  const [quote, setQuote] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const [submitting, setSubmitting] = useState(false);
  const [processing, setProcessing] = useState(null); // 'quote' | 'charge' | 'ui' | null

  const [pickedUserNoThisFlow, setPickedUserNoThisFlow] = useState(null);
  const forceUserNoRef = useRef(null);

  const amountValid = typeof amount === 'number' && isFinite(amount) && amount > 0;

  const { withMinProcessing, transitionTo } = useMemo(
    () => createTransitions(minProcessingMs, setProcessing, setView),
    [minProcessingMs]
  );

  // Build the boot function from the core (inject deps/setters)
  const boot = useMemo(
    () =>
      createBoot({
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
      }),
    [
      key,
      ent,
      amountValid,
      userWalletId,
      pickedUserNoThisFlow,
      transitionTo,
      currency,
      merchantName,
    ]
  );

  // Compose details (kept here—small and UI-friendly)
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

  // Action handlers from core (inject lightweight getters)
  const {
    handleConfirm,
    handleSubmit,
    selectAccount,
    closeAndReset: _closeAndReset,
    goToSummary,
  } = useMemo(
    () =>
      createActions({
        amount,
        sessionRef: () => session,
        quoteRef: () => quote,
        setSession,
        setQuote,
        setErrorMsg,
        setPickedUserNoThisFlow,
        withMinProcessing,
        transitionTo,
        onSuccess,
        detailsRef: () => details,
        setUserNoCookie,
        restart: (forceUserNo) => {
          if (forceUserNo) forceUserNoRef.current = forceUserNo;
          setView('loading');
          boot({ forceUserNo });
        },
      }),
    [
      amount,
      session,
      quote,
      withMinProcessing,
      transitionTo,
      onSuccess,
      details,
      boot,
    ]
  );

  // Public wrapper to close and notify parent
  const closeAndReset = useCallback(() => {
    _closeAndReset(onClose);
  }, [_closeAndReset, onClose]);

  // Auto-boot
  useEffect(() => {
    setView('loading');
    let cancelled = false;
    (async () => {
      if (!cancelled) await boot({});
    })();
    return () => {
      cancelled = true;
    };
  }, [boot]);

  // External restart (optional)
  const restart = useCallback(
    (forceUserNo) => {
      if (forceUserNo) forceUserNoRef.current = forceUserNo;
      setView('loading');
      boot({ forceUserNo });
    },
    [boot]
  );

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
