'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import type { ImpactStat, ImpactSession, Award } from '@/lib/types';

function SessionCard({ s, onClick, extraClass = '' }: { s: ImpactSession; onClick: () => void; extraClass?: string }) {
  return (
    <div className={`session-card ${extraClass}`} onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={s.image_url || ''} alt={s.title} />
      <div className="session-overlay">
        <span className="session-year">{s.year}</span>
        <h3>{s.title}</h3>
        <p>{s.attendees}</p>
      </div>
    </div>
  );
}

export default function ImpactClient({
  stats, sessions, awards,
}: { stats: ImpactStat[]; sessions: ImpactSession[]; awards: Award[] }) {
  const [modal, setModal] = useState<ImpactSession | null>(null);
  const [showMore, setShowMore] = useState(false);

  const featured = sessions.filter((s) => s.featured);
  const rest = sessions.filter((s) => !s.featured);

  return (
    <>
      <section className="stats-section">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        <div className="container text-center">
          <h1 className="fade-in" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Impact</h1>
          <p className="fade-in stagger-1" style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '42rem', margin: '0 auto 4rem' }}>
            Measuring our success not just in numbers, but in the confidence and skills we build in every student.
          </p>
          <div className="grid-4">
            {stats.map((s, i) => (
              <div key={s.id} className={`stat-card scale-in stagger-${(i % 4) + 1}`}>
                <div className="stat-card-icon"><Icon name={s.icon} /></div>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {awards.length > 0 && (
            <div>
              <h2 className="fade-in" style={{ fontSize: '1.875rem', marginBottom: '1.5rem' }}>Awards &amp; Recognition</h2>
              <p className="fade-in stagger-1" style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
                We are honored to be recognized for our commitment to education and community service.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {awards.map((a) => (
                  <div key={a.id} className="achievement-card fade-in-left stagger-1">
                    <div className="achievement-card-inner">
                      <div className="achievement-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      </div>
                      <div>
                        <h4>{a.title}</h4>
                        {a.org && <p className="org">{a.org}</p>}
                        <p>
                          {a.description}
                          {a.links.length > 0 && (
                            <ul>
                              {a.links.map((l) => (
                                <li key={l.url}><a className="browser-link" href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
                              ))}
                            </ul>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="fade-in" style={{ fontSize: '1.875rem', marginBottom: '1.5rem' }}>Past Sessions</h2>
            <div className="grid-2">
              {featured.map((s, i) => (
                <SessionCard key={s.id} s={s} onClick={() => setModal(s)} extraClass={`fade-in stagger-${i + 1}`} />
              ))}
              {rest.length > 0 && (
                <div
                  className="fade-in stagger-4 see-more-history"
                  onClick={() => setShowMore((v) => !v)}
                  style={{ backgroundColor: 'rgba(241,245,249,0.5)', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', border: '2px dashed var(--border)', cursor: 'pointer' }}
                >
                  <div style={{ backgroundColor: 'var(--background)', padding: '1rem', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{showMore ? 'Show Less' : 'See More History'}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{showMore ? 'Collapse the archive' : 'Browse our full archive of events'}</p>
                </div>
              )}
            </div>

            {showMore && rest.length > 0 && (
              <div className="grid-2" style={{ marginTop: '2rem' }}>
                {rest.map((s) => (
                  <SessionCard key={s.id} s={s} onClick={() => setModal(s)} extraClass="fade-in visible" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {modal && (
        <div className="session-modal open" onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}>
          <div className="session-modal-content">
            <button className="session-modal-close" onClick={() => setModal(null)}>&times;</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={modal.image_url || ''} alt={modal.title} />
            <div className="session-modal-body">
              <span className="session-year">{modal.year}</span>
              <h2>{modal.title}</h2>
              <p className="modal-attendees">{modal.attendees}</p>
              <p>{modal.description}</p>
              {modal.highlights.length > 0 && (
                <div className="modal-highlights">
                  <h4>Highlights:</h4>
                  <ul>{modal.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
