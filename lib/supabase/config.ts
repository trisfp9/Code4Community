export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '';
export const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY ?? '';

/**
 * Whether Supabase is configured. When false, the public site falls back to
 * the bundled default content so it never breaks.
 */
export const isSupabaseConfigured =
  SUPABASE_URL.startsWith('https://') &&
  !SUPABASE_URL.includes('YOUR-PROJECT-REF') &&
  SUPABASE_PUBLISHABLE_KEY.length > 0;

export const STORAGE_BUCKET = 'media';
