'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { seedDatabase } from '../actions';

export default function SeedButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  async function run() {
    setBusy(true);
    const res = await seedDatabase();
    setBusy(false);
    if (res?.results) setLog(res.results);
    router.refresh();
  }

  return (
    <div>
      <button className="btn btn-outline" onClick={run} disabled={busy}>
        {busy ? 'Seeding…' : 'Seed database with current content'}
      </button>
      {log.length > 0 && (
        <ul style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
          {log.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      )}
    </div>
  );
}
