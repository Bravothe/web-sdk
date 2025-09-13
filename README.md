// Set/update to U-000123 for 7 days
document.cookie = 'evz_user_no=U-000123; Max-Age=604800; Path=/; SameSite=Strict; Secure';

// Verify
document.cookie

// Delete it (clear)
document.cookie = 'evz_user_no=; Max-Age=0; Path=/; SameSite=Strict; Secure';
