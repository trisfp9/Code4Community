import { notFound } from 'next/navigation';
import ResourceEditor from '../../ResourceEditor';
import { RESOURCES } from '@/lib/admin/resources';
import { createAdminClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';

export const dynamic = 'force-dynamic';

export default async function ResourcePage({ params }: { params: Promise<{ resource: string }> }) {
  const { resource } = await params;
  const config = RESOURCES[resource];
  if (!config) notFound();

  let rows: Record<string, unknown>[] = [];
  if (isSupabaseConfigured) {
    const admin = createAdminClient();
    const { data } = await admin.from(config.table).select('*').order('sort_order', { ascending: true });
    rows = data ?? [];
  }

  return <ResourceEditor config={config} rows={rows} />;
}
