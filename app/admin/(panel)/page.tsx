import Link from 'next/link';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import SeedButton from './SeedButton';

const CARDS = [
  { href: '/admin/homepage', label: 'Homepage', desc: 'Hero, initiatives, mission & vision' },
  { href: '/admin/team', label: 'Team', desc: 'Members, roles, photos' },
  { href: '/admin/curriculum', label: 'Curriculum', desc: 'Curriculum 1 & 2 modules' },
  { href: '/admin/impact-stats', label: 'Impact Stats', desc: 'The number cards' },
  { href: '/admin/sessions', label: 'Past Sessions', desc: 'Event history + photos' },
  { href: '/admin/awards', label: 'Awards', desc: 'Recognition & article links' },
  { href: '/admin/sponsors', label: 'Sponsors', desc: 'Sponsor logos' },
  { href: '/admin/workshops', label: 'Workshops', desc: 'Upcoming workshop cards' },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Content Dashboard</h1>
      <p className="text-muted" style={{ marginBottom: '2rem' }}>Edit any section below. Changes appear on the live site within ~30 seconds.</p>

      {!isSupabaseConfigured && (
        <div className="donate-secure" style={{ marginBottom: '2rem' }}>
          <div className="donate-secure-inner">
            <div>
              <h4>Supabase not connected yet</h4>
              <p>Add your Supabase Project URL to <code>.env.local</code> and run the schema. Until then the site shows the built-in default content and editing is disabled.</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid-3">
        {CARDS.map((c) => (
          <Link key={c.href} href={c.href} className="card card-hover-lift" style={{ display: 'block' }}>
            <h3>{c.label}</h3>
            <p>{c.desc}</p>
          </Link>
        ))}
      </div>

      {isSupabaseConfigured && (
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>First-time setup</h3>
          <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
            Load the site&apos;s current content into the database. Run this once after connecting Supabase. It only fills empty tables, so it won&apos;t create duplicates.
          </p>
          <SeedButton />
        </div>
      )}
    </div>
  );
}
