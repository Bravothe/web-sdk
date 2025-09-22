// src/hooks/flow/transitions.js

export const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Creates view/processing helpers that keep the ProcessingModal consistent.
 * - withMinProcessing(kind, task)
 * - transitionTo(nextView, reason='ui')
 */
export function createTransitions(minProcessingMs, setProcessing, setView) {
  async function withMinProcessing(kind, task) {
    setProcessing(kind); // 'quote' | 'charge' | 'ui'
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

  async function transitionTo(nextView, reason = 'ui') {
    setProcessing(reason);
    try {
      await wait(Number(minProcessingMs) || 0);
    } finally {
      setProcessing(null);
    }
    setView(nextView);
  }

  return { withMinProcessing, transitionTo };
}
