// src/utils/cookie.js

const DEFAULT_NAME = 'evz_user_no';

/**
 * Read the user number from cookies (default: "evz_user_no").
 * Returns null if not present or not in a browser.
 */
export function getUserNoFromCookie(name = DEFAULT_NAME) {
  if (typeof document === 'undefined') return null;
  const escaped = String(name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + escaped + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

/**
 * Set the user number cookie.
 * Defaults: 7-day expiry, SameSite=Strict, Secure when on HTTPS, Path=/.
 */
export function setUserNoCookie(userNo, opts = {}) {
  if (typeof document === 'undefined') return;
  if (!userNo) return;

  const {
    name = DEFAULT_NAME,
    days = 7,
    path = '/',
    sameSite = 'Strict', // 'Strict' | 'Lax' | 'None' (if 'None', you must be on HTTPS)
    secure = (typeof location !== 'undefined' && location.protocol === 'https:'),
  } = opts;

  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  const parts = [
    `${encodeURIComponent(name)}=${encodeURIComponent(userNo)}`,
    `Expires=${expires.toUTCString()}`,
    `Path=${path}`,
    `SameSite=${sameSite}`,
  ];
  if (secure) parts.push('Secure');

  document.cookie = parts.join('; ');
}

/**
 * Remove the user number cookie.
 */
export function clearUserNoCookie(name = DEFAULT_NAME, { path = '/' } = {}) {
  if (typeof document === 'undefined') return;
  document.cookie = `${encodeURIComponent(name)}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}`;
}
