// src/utils/cookie.js
export function getUserNoFromCookie(name = 'evz_user_no') {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}
