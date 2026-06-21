-- Code4Community admin schema
-- Run this in Supabase → SQL Editor. Safe to run more than once.

-- ---------- Tables ----------
create table if not exists team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null default '',
  photo_url text,
  instagram_url text,
  linkedin_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists curriculum_modules (
  id uuid primary key default gen_random_uuid(),
  curriculum text not null check (curriculum in ('c1','c2')),
  title text not null,
  description text not null default '',
  image_url text,
  icon text not null default 'code',
  features jsonb not null default '[]'::jsonb,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists impact_stats (
  id uuid primary key default gen_random_uuid(),
  icon text not null default 'globe',
  value text not null,
  label text not null,
  sort_order int not null default 0
);

create table if not exists impact_sessions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  year text not null default '2025',
  attendees text not null default '',
  image_url text,
  description text not null default '',
  highlights jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  sort_order int not null default 0
);

create table if not exists awards (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  org text not null default '',
  description text not null default '',
  links jsonb not null default '[]'::jsonb,
  sort_order int not null default 0
);

create table if not exists sponsors (
  id uuid primary key default gen_random_uuid(),
  name text not null default '',
  logo_url text,
  sort_order int not null default 0
);

create table if not exists workshops (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  badge text not null default '',
  tags jsonb not null default '[]'::jsonb,
  description text not null default '',
  date text not null default '',
  time text not null default '',
  location text not null default '',
  attendee_count text not null default '',
  image_url text,
  register_url text not null default '#',
  published boolean not null default true,
  sort_order int not null default 0
);

create table if not exists site_content (
  key text primary key,
  value jsonb not null
);

-- ---------- Enable Row Level Security (static, so the checker can verify it) ----------
alter table team_members        enable row level security;
alter table curriculum_modules  enable row level security;
alter table impact_stats        enable row level security;
alter table impact_sessions     enable row level security;
alter table awards              enable row level security;
alter table sponsors            enable row level security;
alter table workshops           enable row level security;
alter table site_content        enable row level security;

-- ---------- Public read policies (idempotent, no destructive drops) ----------
-- Public can READ. Writes happen server-side with the secret key, which bypasses
-- RLS, so there are intentionally no public insert/update/delete policies.
do $$
declare t text;
begin
  foreach t in array array[
    'team_members','curriculum_modules','impact_stats','impact_sessions',
    'awards','sponsors','workshops','site_content'
  ] loop
    if not exists (
      select 1 from pg_policies where schemaname = 'public' and tablename = t and policyname = 'public read'
    ) then
      execute format('create policy "public read" on %I for select using (true);', t);
    end if;
  end loop;
end $$;

-- ---------- Storage bucket for uploaded images ----------
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

do $$
begin
  if not exists (
    select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'media public read'
  ) then
    create policy "media public read" on storage.objects for select using (bucket_id = 'media');
  end if;
end $$;
