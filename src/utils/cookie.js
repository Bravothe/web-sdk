// src/utils/cookie.js

// ──────────────────────────────────────────────────────────────────────────────
// Public API (stable) that other SDK files call:
//   - getUserNoFromCookie()
//   - getUserNosFromCookie()
//   - setUserNoCookie(), clearUserNoCookie()
//   - setPrimaryUserNoCookie(), addUserNoToList(), removeUserNoFromList()
//   - setUserNosCookie(), clearUserNosCookie()
//   - detectUserNoFromCookies()  ← alias for getUserNoFromCookie()
//   - getUserNo()                ← alias for getUserNoFromCookie()
//   - getDummyUsersFromCookies() ← NEW: return [{userNo,walletId,owner,email,photo}, ...]
//   - getUsersForPicker()        ← NEW: same as above; stable name for UI layer
// Teammates can later swap getDummyUsersFromCookies() with a real implementation.
// ──────────────────────────────────────────────────────────────────────────────

const DEFAULT_NAME = 'evz_user_no';     // primary/active user (used when user picks)
const LIST_NAME = 'evz_user_nos';       // JSON list of userNos (fallback to CSV)
const ENUM_PREFIX = 'evz_user';         // enumerated cookies => evz_user1, evz_user2, ...

/* ------------------------------------------------------------------ */
/*             Primary user cookie (active selection)                  */
/* ------------------------------------------------------------------ */

/**
 * Read the active user number cookie (default: "evz_user_no").
 * If not set, falls back to the FIRST enumerated cookie value (evz_user1, evz_user2, ...).
 */
export function getUserNoFromCookie(name = DEFAULT_NAME) {
  if (typeof document === 'undefined') return null;
  // 1) Try primary cookie
  const primary = readCookie(name);
  if (primary) return primary;

  // 2) Fallback: first enumerated user cookie by index (1,2,3…)
  const enumerated = listEnumeratedUserNos();
  return enumerated.length ? enumerated[0] : null;
}

/**
 * Set the active user number cookie.
 * Defaults: 7-day expiry, SameSite=Strict, Secure on HTTPS, Path=/.
 * Also keeps the multi-account list in sync.
 */
export function setUserNoCookie(userNo, opts = {}) {
  if (typeof document === 'undefined' || !userNo) return;

  const {
    name = DEFAULT_NAME,
    days = 7,
    path = '/',
    sameSite = 'Strict', // 'Strict' | 'Lax' | 'None' (if 'None', must be HTTPS)
    secure = isHttps(),
  } = opts;

  writeCookie(name, userNo, { days, path, sameSite, secure });

  // Keep the multi-account list in sync (idempotent)
  try { addUserNoToList(userNo, { days, path, sameSite, secure }); } catch {}
}

/**
 * Remove the active user cookie.
 */
export function clearUserNoCookie(name = DEFAULT_NAME, { path = '/' } = {}) {
  if (typeof document === 'undefined') return;
  document.cookie = `${encodeURIComponent(name)}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}`;
}

/**
 * Alias exports expected elsewhere in the SDK.
 */
export function detectUserNoFromCookies() { return getUserNoFromCookie(); }
export function getUserNo() { return getUserNoFromCookie(); }

/* ------------------------------------------------------------------ */
/*                      Multi-account helper API                      */
/* ------------------------------------------------------------------ */

/**
 * Return all known user numbers on this device.
 * Merges and de-dupes (primary first if present):
 *  - JSON/CSV list cookie (evz_user_nos)
 *  - enumerated cookies: evz_user1, evz_user2, ...
 *  - primary cookie (evz_user_no)
 */
export function getUserNosFromCookie(listName = LIST_NAME) {
  if (typeof document === 'undefined') return [];

  // Primary (may be null)
  const primary = readCookie(DEFAULT_NAME);

  // List cookie (JSON preferred, fallback CSV)
  const row = readCookie(listName);
  let fromList = [];
  if (row) {
    try {
      const parsed = JSON.parse(row);
      fromList = Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch {
      fromList = row.split(',').map((s) => s.trim()).filter(Boolean);
    }
  }

  // Enumerated cookies evz_user1, evz_user2, ... (ordered by index)
  const fromEnumerated = listEnumeratedUserNos();

  // Merge + de-dup
  const set = new Set([
    ...fromList,
    ...fromEnumerated,
    ...(primary ? [primary] : []),
  ]);
  const all = Array.from(set);

  // Put primary first if present
  if (primary) {
    const idx = all.indexOf(primary);
    if (idx > 0) {
      all.splice(idx, 1);
      all.unshift(primary);
    }
  }

  return all;
}

/**
 * Overwrite the entire userNos list cookie (JSON).
 */
export function setUserNosCookie(userNos, opts = {}) {
  if (typeof document === 'undefined') return;
  const unique = Array.from(new Set(Array.isArray(userNos) ? userNos.filter(Boolean) : []));
  const { listName = LIST_NAME, days = 365, path = '/', sameSite = 'Lax', secure = isHttps() } = opts;
  writeCookie(listName, JSON.stringify(unique), { days, path, sameSite, secure });
}

/**
 * Clear the userNos list cookie (useful for testing).
 */
export function clearUserNosCookie(listName = LIST_NAME, { path = '/' } = {}) {
  if (typeof document === 'undefined') return;
  document.cookie = `${encodeURIComponent(listName)}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}`;
}

/**
 * Add a userNo to the list cookie (idempotent).
 */
export function addUserNoToList(userNo, opts = {}) {
  if (!userNo) return;
  const list = new Set(getUserNosFromCookie(opts.listName || LIST_NAME));
  list.add(userNo);
  setUserNosCookie(Array.from(list), opts);
}

/**
 * Remove a userNo from the list cookie.
 * If you also want to clear the active user cookie, call clearUserNoCookie() separately.
 */
export function removeUserNoFromList(userNo, opts = {}) {
  if (!userNo) return;
  const list = new Set(getUserNosFromCookie(opts.listName || LIST_NAME));
  list.delete(userNo);
  setUserNosCookie(Array.from(list), opts);
}

/**
 * Set the primary/active userNo and ensure it exists in the list cookie.
 */
export function setPrimaryUserNoCookie(userNo, opts = {}) {
  if (!userNo) return;
  setUserNoCookie(userNo, opts); // also syncs list
}

/* ------------------------------------------------------------------ */
/*                  DUMMY USERS FOR PICKER (NO SERVER)                */
/* ------------------------------------------------------------------ */
/**
 * Return demo user profiles derived from cookie userNos.
 * Shape: { userNo, walletId, owner?, email?, photo? }
 *
 * Teammates can replace this logic with a real lookup while keeping
 * the same function signature and exports.
 */
export function getDummyUsersFromCookies() {
  const userNos = getUserNosFromCookie();

  // Known demo profiles (stable for your QA/storybook)
  const known = {
    'U-000123': {
      walletId: 'W-256-48392018',
      owner: 'John Doe',
      email: 'john@x.com',
      photo: 'https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe',
    },
    'U-000789': {
      walletId: 'W-256-74731323',
      owner: 'Jane Smith',
      email: 'jane@x.com',
      photo: 'https://api.dicebear.com/7.x/initials/svg?seed=Jane%20Smith',
    },
  };

  // Build output; unknown userNos get a safe default avatar
  const out = [];
  for (const no of userNos) {
    if (!no) continue;
    const prof = known[no] || makeFallbackProfile(no);
    out.push({ userNo: no, ...prof });
  }
  return dedupeByUserNo(out);
}

/**
 * Stable name used by UI layer to fetch accounts for the picker.
 * Today it returns the dummy set above; later your teammates can
 * redirect this to a real loader while preserving the signature.
 */
export function getUsersForPicker() {
  return getDummyUsersFromCookies();
}

/* ------------------------------------------------------------------ */
/*                               Internals                             */
/* ------------------------------------------------------------------ */

function isHttps() {
  return typeof location !== 'undefined' && location.protocol === 'https:';
}

function readCookie(name) {
  if (typeof document === 'undefined') return null;
  const escaped = escapeRe(name);
  const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + escaped + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

function writeCookie(name, value, {
  days = 365,
  path = '/',
  sameSite = 'Lax',
  secure = isHttps(),
} = {}) {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  const parts = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `Expires=${expires.toUTCString()}`,
    `Path=${path}`,
    `SameSite=${sameSite}`,
  ];
  if (secure) parts.push('Secure');
  document.cookie = parts.join('; ');
}

function escapeRe(s) {
  return String(s).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Return values from enumerated cookies in ascending order:
 *   evz_user1, evz_user2, evz_user3, ...
 */
function listEnumeratedUserNos(prefix = ENUM_PREFIX) {
  if (typeof document === 'undefined' || !document.cookie) return [];
  const items = document.cookie.split('; ');
  const found = [];

  const re = new RegExp(`^${escapeRe(prefix)}(\\d+)$`); // capture the index

  for (const raw of items) {
    const eq = raw.indexOf('=');
    if (eq === -1) continue;
    const name = decodeURIComponent(raw.slice(0, eq).trim());
    const value = decodeURIComponent(raw.slice(eq + 1));
    const m = name.match(re);
    if (m && value) {
      const idx = Number(m[1] || 0);
      found.push({ idx, value });
    }
  }

  // Sort by numeric suffix (1,2,3…)
  found.sort((a, b) => a.idx - b.idx);
  return found.map((x) => x.value);
}

function dedupeByUserNo(list) {
  const seen = new Set();
  const out = [];
  for (const u of list) {
    if (!u || !u.userNo) continue;
    if (seen.has(u.userNo)) continue;
    seen.add(u.userNo);
    out.push(u);
  }
  return out;
}

function makeFallbackProfile(userNo) {
  // Derive a readable label from userNo suffix
  const suffix = String(userNo).slice(-3);
  const owner = `User ${suffix}`;
  const photo = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(owner)}`;
  return {
    walletId: `W-256-${Math.floor(10_000_000 + Math.random() * 89_999_999)}`,
    owner,
    email: null,
    photo,
  };
}
