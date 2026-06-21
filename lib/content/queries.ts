import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, isSupabaseConfigured } from '@/lib/supabase/config';
import type {
  TeamMember, CurriculumModule, ImpactStat, ImpactSession,
  Award, Sponsor, Workshop, SiteContent,
} from '@/lib/types';
import {
  defaultTeam, defaultCurriculum, defaultStats, defaultSessions,
  defaultAwards, defaultSponsors, defaultWorkshops, defaultSiteContent,
} from './defaults';

// Read-only client (publishable key, RLS public-read). Server-side use only here.
function readClient() {
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false },
  });
}

const withIds = <T>(rows: Omit<T, 'id'>[]): T[] =>
  rows.map((r, i) => ({ id: `default-${i}`, ...r }) as T);

async function fetchTable<T>(table: string, order: string, fallback: Omit<T, 'id'>[]): Promise<T[]> {
  if (!isSupabaseConfigured) return withIds<T>(fallback);
  try {
    const { data, error } = await readClient().from(table).select('*').order(order, { ascending: true });
    if (error || !data || data.length === 0) return withIds<T>(fallback);
    return data as T[];
  } catch {
    return withIds<T>(fallback);
  }
}

export const getTeam = () => fetchTable<TeamMember>('team_members', 'sort_order', defaultTeam);
export const getCurriculum = () => fetchTable<CurriculumModule>('curriculum_modules', 'sort_order', defaultCurriculum);
export const getStats = () => fetchTable<ImpactStat>('impact_stats', 'sort_order', defaultStats);
export const getSessions = () => fetchTable<ImpactSession>('impact_sessions', 'sort_order', defaultSessions);
export const getAwards = () => fetchTable<Award>('awards', 'sort_order', defaultAwards);
export const getSponsors = () => fetchTable<Sponsor>('sponsors', 'sort_order', defaultSponsors);

export async function getWorkshops(): Promise<Workshop[]> {
  const all = await fetchTable<Workshop>('workshops', 'sort_order', defaultWorkshops);
  return all.filter((w) => w.published);
}

export async function getSiteContent(): Promise<SiteContent> {
  if (!isSupabaseConfigured) return defaultSiteContent;
  try {
    const { data, error } = await readClient().from('site_content').select('key, value');
    if (error || !data) return defaultSiteContent;
    const merged = { ...defaultSiteContent } as Record<string, unknown>;
    for (const row of data) merged[row.key] = row.value;
    return merged as unknown as SiteContent;
  } catch {
    return defaultSiteContent;
  }
}
