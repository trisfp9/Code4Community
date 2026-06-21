'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { SiteContent, HeroStat, Initiative } from '@/lib/types';
import { saveSiteContent } from '../../actions';

export default function HomepageEditor({ content }: { content: SiteContent }) {
  const router = useRouter();
  const [c, setC] = useState<SiteContent>(content);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  function set<K extends keyof SiteContent>(key: K, value: SiteContent[K]) {
    setC({ ...c, [key]: value });
  }

  async function saveAll() {
    setSaving(true);
    setMsg('');
    // Persist each key individually so the public site merges cleanly.
    for (const key of Object.keys(c) as (keyof SiteContent)[]) {
      const res = await saveSiteContent(key, c[key]);
      if (res?.error) { setMsg(`Error: ${res.error}`); setSaving(false); return; }
    }
    setSaving(false);
    setMsg('Saved!');
    router.refresh();
  }

  // Render functions (not components) so inputs don't remount / lose focus.
  const Text = (label: string, k: keyof SiteContent) => (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" value={String(c[k] ?? '')} onChange={(e) => set(k, e.target.value as never)} />
    </div>
  );
  const Area = (label: string, k: keyof SiteContent) => (
    <div className="form-group">
      <label>{label}</label>
      <textarea value={String(c[k] ?? '')} onChange={(e) => set(k, e.target.value as never)} style={{ minHeight: 90 }} />
    </div>
  );

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Homepage Content</h1>

      <Section title="Hero">
        {Text('Title (highlighted part)', 'hero_title_lead')}
        {Text('Title (rest)', 'hero_title_rest')}
        {Area('Description', 'hero_description')}
        <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Hero stats</label>
        {c.hero_stats.map((s: HeroStat, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input type="text" placeholder="Value" value={s.value} onChange={(e) => { const n = [...c.hero_stats]; n[i] = { ...s, value: e.target.value }; set('hero_stats', n); }} />
            <input type="text" placeholder="Label" value={s.label} onChange={(e) => { const n = [...c.hero_stats]; n[i] = { ...s, label: e.target.value }; set('hero_stats', n); }} />
          </div>
        ))}
      </Section>

      <Section title="Initiatives">
        {Text('Heading', 'initiatives_heading')}
        {Area('Subheading', 'initiatives_subheading')}
        {c.initiatives.map((it: Initiative, i) => (
          <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input type="text" placeholder="Title" value={it.title} onChange={(e) => { const n = [...c.initiatives]; n[i] = { ...it, title: e.target.value }; set('initiatives', n); }} />
              <input type="text" placeholder="Icon" value={it.icon} onChange={(e) => { const n = [...c.initiatives]; n[i] = { ...it, icon: e.target.value }; set('initiatives', n); }} style={{ maxWidth: 120 }} />
              <input type="text" placeholder="Color" value={it.color} onChange={(e) => { const n = [...c.initiatives]; n[i] = { ...it, color: e.target.value }; set('initiatives', n); }} style={{ maxWidth: 110 }} />
            </div>
            <textarea placeholder="Description" value={it.description} onChange={(e) => { const n = [...c.initiatives]; n[i] = { ...it, description: e.target.value }; set('initiatives', n); }} style={{ minHeight: 60 }} />
          </div>
        ))}
      </Section>

      <Section title="About / Mission / Vision">
        {Area('About Us', 'about')}
        {Area('History', 'history')}
        {Area('Our Mission', 'mission')}
        {Area('Our Vision', 'vision')}
      </Section>

      <Section title="Call to Action">
        {Text('Heading', 'cta_heading')}
        {Area('Text', 'cta_text')}
      </Section>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'sticky', bottom: 0, background: 'var(--background)', padding: '1rem 0', borderTop: '1px solid var(--border)' }}>
        <button className="btn btn-primary" onClick={saveAll} disabled={saving}>{saving ? 'Saving…' : 'Save all'}</button>
        {msg && <span className="text-muted">{msg}</span>}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--primary)' }}>{title}</h2>
      {children}
    </div>
  );
}
