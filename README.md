Short answer: it’s safest to clear the old cookies first so you don’t end up with a mixed state. Then set your new `evz_user1`, `evz_user2`, … cookies. Leave `evz_user_no` **unset** if you want the account picker to appear whenever there are 2+ accounts.

Here are copy-paste snippets:

### 1) Clear legacy cookies

> (If you’re on `http://localhost`, remove `; Secure`.)

```js
// Clear primary + list + any previously set enumerated cookies you used
document.cookie = 'evz_user_no=; Max-Age=0; Path=/; SameSite=Strict; Secure';
document.cookie = 'evz_user_nos=; Max-Age=0; Path=/; SameSite=Lax; Secure';

// If you had older names, clear them too (optional)
document.cookie = 'evz_user_no_2=; Max-Age=0; Path=/; SameSite=Strict; Secure';
document.cookie = 'evz_user_no_3=; Max-Age=0; Path=/; SameSite=Strict; Secure';

// Clear any previous enumerated format if you used it already
document.cookie = 'evz_user1=; Max-Age=0; Path=/; SameSite=Strict; Secure';
document.cookie = 'evz_user2=; Max-Age=0; Path=/; SameSite=Strict; Secure';
```

### 2) Set the new enumerated cookies

```js
// 7 days = 604800 seconds  (remove "; Secure" on http)
document.cookie = 'evz_user1=U-000123; Max-Age=604800; Path=/; SameSite=Strict; Secure';
document.cookie = 'evz_user2=U-000789; Max-Age=604800; Path=/; SameSite=Strict; Secure';
```

That’s it.

* With **one** `evz_userX`, the SDK will auto-use it.
* With **2+** `evz_userX`, the Account Picker will show.
* If you ever want to force a default without showing the picker, also set:

  ```js
  document.cookie = 'evz_user_no=U-000123; Max-Age=604800; Path=/; SameSite=Strict; Secure';
  ```

  (Our hook still shows the picker when there are 2+ accounts, but it’s fine to leave `evz_user_no` unset to keep behavior obvious.)
