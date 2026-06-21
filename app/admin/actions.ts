'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { requireAdmin } from '@/lib/admin/auth';
import { STORAGE_BUCKET } from '@/lib/supabase/config';
import {
  defaultTeam, defaultCurriculum, defaultStats, defaultSessions,
  defaultAwards, defaultSponsors, defaultWorkshops, defaultSiteContent,
} from '@/lib/content/defaults';

// Which public routes to refresh when a given table changes.
const REVALIDATE: Record<string, string[]> = {
  team_members: ['/team'],
  curriculum_modules: ['/program'],
  impact_stats: ['/impact'],
  impact_sessions: ['/impact'],
  awards: ['/impact'],
  sponsors: ['/', '/team', '/program', '/impact', '/workshops', '/donate', '/get-involved'],
  workshops: ['/workshops'],
  site_content: ['/'],
};

function refresh(table: string) {
  (REVALIDATE[table] ?? []).forEach((p) => revalidatePath(p));
  revalidatePath('/admin', 'layout');
}

export async function upsertRow(table: string, row: Record<string, unknown>) {
  await requireAdmin();
  const admin = createAdminClient();

  const id = row.id as string | undefined;
  const isNew = !id || id.startsWith('default-');
  const payload = { ...row };
  if (isNew) delete payload.id;

  const query = isNew
    ? admin.from(table).insert(payload)
    : admin.from(table).update(payload).eq('id', id);

  const { error } = await query;
  if (error) return { error: error.message };
  refresh(table);
  return { ok: true };
}

export async function deleteRow(table: string, id: string) {
  await requireAdmin();
  const admin = createAdminClient();
  const { error } = await admin.from(table).delete().eq('id', id);
  if (error) return { error: error.message };
  refresh(table);
  return { ok: true };
}

export async function saveSiteContent(key: string, value: unknown) {
  await requireAdmin();
  const admin = createAdminClient();
  const { error } = await admin.from('site_content').upsert({ key, value });
  if (error) return { error: error.message };
  refresh('site_content');
  return { ok: true };
}

export async function uploadImage(formData: FormData) {
  await requireAdmin();
  const file = formData.get('file') as File | null;
  if (!file || file.size === 0) return { error: 'No file provided' };

  const admin = createAdminClient();
  const ext = file.name.split('.').pop() || 'jpg';
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await admin.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) return { error: error.message };

  const { data } = admin.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  return { url: data.publicUrl };
}

/**
 * Populates empty tables with the current site's default content.
 * Only seeds tables that are empty, so it's safe to run more than once.
 */
export async function seedDatabase() {
  await requireAdmin();
  const admin = createAdminClient();

  const seeds: Record<string, unknown[]> = {
    team_members: defaultTeam,
    curriculum_modules: defaultCurriculum,
    impact_stats: defaultStats,
    impact_sessions: defaultSessions,
    awards: defaultAwards,
    sponsors: defaultSponsors,
    workshops: defaultWorkshops,
  };

  const results: string[] = [];
  for (const [table, rows] of Object.entries(seeds)) {
    const { count } = await admin.from(table).select('*', { count: 'exact', head: true });
    if ((count ?? 0) > 0) { results.push(`${table}: skipped (${count} rows)`); continue; }
    const { error } = await admin.from(table).insert(rows);
    results.push(error ? `${table}: ERROR ${error.message}` : `${table}: seeded ${rows.length}`);
  }

  // site_content: upsert each key (safe to overwrite defaults).
  const { count: scCount } = await admin.from('site_content').select('*', { count: 'exact', head: true });
  if ((scCount ?? 0) === 0) {
    const rows = Object.entries(defaultSiteContent).map(([key, value]) => ({ key, value }));
    const { error } = await admin.from('site_content').upsert(rows);
    results.push(error ? `site_content: ERROR ${error.message}` : `site_content: seeded ${rows.length} keys`);
  } else {
    results.push(`site_content: skipped (${scCount} keys)`);
  }

  revalidatePath('/', 'layout');
  return { ok: true, results };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}
