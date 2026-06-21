import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

/** Returns the authenticated admin user, or redirects to login. */
export async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');
  return user;
}
