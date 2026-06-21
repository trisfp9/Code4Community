'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Field, ResourceConfig } from '@/lib/admin/resources';
import type { AwardLink } from '@/lib/types';
import { upsertRow, deleteRow, uploadImage } from './actions';

type Row = Record<string, unknown>;

export default function ResourceEditor({ config, rows }: { config: ResourceConfig; rows: Row[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<Row | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function startNew() {
    setError('');
    setEditing({ ...config.newRow });
  }

  async function save() {
    if (!editing) return;
    setSaving(true);
    setError('');
    const res = await upsertRow(config.table, editing);
    setSaving(false);
    if (res?.error) { setError(res.error); return; }
    setEditing(null);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm('Delete this item?')) return;
    const res = await deleteRow(config.table, id);
    if (res?.error) { alert(res.error); return; }
    router.refresh();
  }

  const titleField = config.fields.find((f) => ['title', 'name', 'value', 'label'].includes(f.key))?.key ?? config.fields[0].key;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.75rem' }}>{config.title}</h1>
        <button className="btn btn-primary" onClick={startNew}>+ Add {config.singular}</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {rows.length === 0 && <p className="text-muted">No items yet. Click “Add {config.singular}”.</p>}
        {rows.map((row) => (
          <div key={String(row.id)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: '0.5rem', background: 'var(--card)' }}>
            {'photo_url' in row || 'image_url' in row || 'logo_url' in row ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={String(row.photo_url || row.image_url || row.logo_url || '')} alt="" style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: 6, background: '#eee', flexShrink: 0 }} />
            ) : null}
            <div style={{ flex: 1, minWidth: 0 }}>
              <strong>{String(row[titleField] || '(untitled)')}</strong>
              {'role' in row && <span className="text-muted"> — {String(row.role)}</span>}
              {'curriculum' in row && <span className="text-muted"> — {String(row.curriculum).toUpperCase()}</span>}
            </div>
            <button className="btn btn-outline" style={{ padding: '0.4rem 1rem' }} onClick={() => { setError(''); setEditing({ ...row }); }}>Edit</button>
            <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', color: '#dc2626' }} onClick={() => remove(String(row.id))}>Delete</button>
          </div>
        ))}
      </div>

      {editing && (
        <div className="session-modal open" onClick={(e) => { if (e.target === e.currentTarget && !saving) setEditing(null); }}>
          <div className="session-modal-content" style={{ maxWidth: 640 }}>
            <button className="session-modal-close" onClick={() => !saving && setEditing(null)}>&times;</button>
            <div className="session-modal-body">
              <h2 style={{ marginBottom: '1.5rem' }}>{editing.id ? `Edit ${config.singular}` : `New ${config.singular}`}</h2>
              {config.fields.map((f) => (
                <FieldInput key={f.key} field={f} value={editing[f.key]} onChange={(v) => setEditing({ ...editing, [f.key]: v })} />
              ))}
              {error && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginBottom: '1rem' }}>{error}</p>}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <button className="btn btn-primary" onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
                <button className="btn btn-outline" onClick={() => setEditing(null)} disabled={saving}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FieldInput({ field, value, onChange }: { field: Field; value: unknown; onChange: (v: unknown) => void }) {
  const [uploading, setUploading] = useState(false);

  if (field.type === 'checkbox') {
    return (
      <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input type="checkbox" id={field.key} checked={Boolean(value)} onChange={(e) => onChange(e.target.checked)} style={{ width: 'auto' }} />
        <label htmlFor={field.key} style={{ margin: 0 }}>{field.label}</label>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={field.key}>{field.label}</label>

      {field.type === 'text' && (
        <input id={field.key} type="text" value={String(value ?? '')} onChange={(e) => onChange(e.target.value)} />
      )}

      {field.type === 'number' && (
        <input id={field.key} type="number" value={Number(value ?? 0)} onChange={(e) => onChange(Number(e.target.value))} />
      )}

      {field.type === 'textarea' && (
        <textarea id={field.key} value={String(value ?? '')} onChange={(e) => onChange(e.target.value)} style={{ minHeight: 100 }} />
      )}

      {field.type === 'select' && (
        <select id={field.key} value={String(value ?? '')} onChange={(e) => onChange(e.target.value)}>
          {field.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      )}

      {field.type === 'list' && (
        <ListEditor value={Array.isArray(value) ? (value as string[]) : []} onChange={onChange} />
      )}

      {field.type === 'linklist' && (
        <LinkListEditor value={Array.isArray(value) ? (value as AwardLink[]) : []} onChange={onChange} />
      )}

      {field.type === 'image' && (
        <div>
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={String(value)} alt="" style={{ maxHeight: 90, borderRadius: 6, marginBottom: 8, display: 'block' }} />
          ) : null}
          <input
            type="file"
            accept="image/*"
            disabled={uploading}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              setUploading(true);
              const fd = new FormData();
              fd.append('file', file);
              const res = await uploadImage(fd);
              setUploading(false);
              if (res?.error) { alert(res.error); return; }
              if (res?.url) onChange(res.url);
            }}
          />
          {uploading && <p className="text-muted" style={{ fontSize: '0.8rem' }}>Uploading…</p>}
          <input type="text" placeholder="…or paste an image URL" value={String(value ?? '')} onChange={(e) => onChange(e.target.value)} style={{ marginTop: 8 }} />
        </div>
      )}
    </div>
  );
}

function ListEditor({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {value.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '0.5rem' }}>
          <input type="text" value={item} onChange={(e) => { const next = [...value]; next[i] = e.target.value; onChange(next); }} />
          <button type="button" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem' }} onClick={() => onChange(value.filter((_, j) => j !== i))}>✕</button>
        </div>
      ))}
      <button type="button" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.4rem 1rem' }} onClick={() => onChange([...value, ''])}>+ Add item</button>
    </div>
  );
}

function LinkListEditor({ value, onChange }: { value: AwardLink[]; onChange: (v: AwardLink[]) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {value.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '0.5rem' }}>
          <input type="text" placeholder="Label" value={item.label} onChange={(e) => { const next = [...value]; next[i] = { ...item, label: e.target.value }; onChange(next); }} />
          <input type="text" placeholder="https://…" value={item.url} onChange={(e) => { const next = [...value]; next[i] = { ...item, url: e.target.value }; onChange(next); }} />
          <button type="button" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem' }} onClick={() => onChange(value.filter((_, j) => j !== i))}>✕</button>
        </div>
      ))}
      <button type="button" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.4rem 1rem' }} onClick={() => onChange([...value, { label: '', url: '' }])}>+ Add link</button>
    </div>
  );
}
