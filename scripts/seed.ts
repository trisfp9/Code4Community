import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';
import {
  defaultTeam, defaultCurriculum, defaultStats, defaultSessions,
  defaultAwards, defaultSponsors, defaultWorkshops, defaultSiteContent,
} from '../lib/content/defaults';

// Load .env.local manually (no framework runtime here).
const envText = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
for (const line of envText.split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m) process.env[m[1]] = m[2].trim();
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SECRET_KEY!;
const sb = createClient(url, key, { auth: { persistSession: false } });

async function seed(table: string, rows: unknown[]) {
  const { count } = await sb.from(table).select('*', { count: 'exact', head: true });
  if ((count ?? 0) > 0) { console.log(`• ${table}: skipped (${count} rows already)`); return; }
  const { error } = await sb.from(table).insert(rows);
  console.log(error ? `✗ ${table}: ${error.message}` : `✓ ${table}: seeded ${rows.length}`);
}

async function main() {
  await seed('team_members', defaultTeam);
  await seed('curriculum_modules', defaultCurriculum);
  await seed('impact_stats', defaultStats);
  await seed('impact_sessions', defaultSessions);
  await seed('awards', defaultAwards);
  await seed('sponsors', defaultSponsors);
  await seed('workshops', defaultWorkshops);

  const { count } = await sb.from('site_content').select('*', { count: 'exact', head: true });
  if ((count ?? 0) === 0) {
    const rows = Object.entries(defaultSiteContent).map(([k, v]) => ({ key: k, value: v }));
    const { error } = await sb.from('site_content').upsert(rows);
    console.log(error ? `✗ site_content: ${error.message}` : `✓ site_content: seeded ${rows.length} keys`);
  } else {
    console.log(`• site_content: skipped (${count} keys already)`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
