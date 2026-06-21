import Link from 'next/link';
import { requireAdmin } from '@/lib/admin/auth';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import { signOut } from '../actions';

const NAV = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/homepage', label: 'Homepage' },
  { href: '/admin/team', label: 'Team' },
  { href: '/admin/curriculum', label: 'Curriculum' },
  { href: '/admin/impact-stats', label: 'Impact Stats' },
  { href: '/admin/sessions', label: 'Past Sessions' },
  { href: '/admin/awards', label: 'Awards' },
  { href: '/admin/sponsors', label: 'Sponsors' },
  { href: '/admin/workshops', label: 'Workshops' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (isSupabaseConfigured) {
    await requireAdmin();
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 240, flexShrink: 0, borderRight: '1px solid var(--border)', background: 'var(--muted)', padding: '1.5rem 1rem', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
        <Link href="/admin" className="logo" style={{ marginBottom: '2rem' }}>
          <div className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
          </div>
          <span className="logo-text" style={{ fontSize: '1rem' }}>Admin</span>
        </Link>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '1rem' }}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="mobile-nav-link" style={{ fontSize: '0.9rem' }}>{n.label}</Link>
          ))}
        </nav>
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/" className="mobile-nav-link" style={{ fontSize: '0.85rem' }} target="_blank">↗ View site</Link>
          <form action={signOut}>
            <button type="submit" className="btn btn-outline" style={{ width: '100%', padding: '0.5rem' }}>Sign out</button>
          </form>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '2.5rem', maxWidth: 900 }}>{children}</main>
    </div>
  );
}
