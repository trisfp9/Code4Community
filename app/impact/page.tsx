'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';

type Session = {
  title: string;
  year: string;
  attendees: string;
  image: string;
  description: string;
  highlights: string[];
};

const sessionData: Record<string, Session> = {
  'Act7-SDNCilenggang03': {
    title: 'Donation',
    year: '2025',
    attendees: 'SDN Cilenggang 03',
    image: '',
    description: 'We donated 8 tablets worth Rp 16jt, ~$1000, to SDN Cilengang 03 on November with the help of APP, Indah Kiat, and our partners',
    highlights: ['Donation', 'Presentation', 'Socializing', 'Photos', 'Small Games'],
  },
  'Act6-SDNLengkokWetan01': {
    title: 'Game Dev Workshop',
    year: '2025',
    attendees: 'SDN Lengkok Wetan 01',
    image: '',
    description: 'A workshop held on September 11, where students from SDN Lengkok Wetan 01 learned to code a simple game through the use of Scratch.',
    highlights: ['Introduction to Scratch', 'Presentation', 'Team-based projects', 'Mentorship by volunteers'],
  },
  'Act5-SDNCilenggang03': {
    title: 'Game Dev Workshop',
    year: '2025',
    attendees: 'SDN Cilenggang 03',
    image: '',
    description: 'A game development workshop held on August 19, where students from SDN Cilenggang 03 successfully designed their own obstacle course maze game using Scratch.',
    highlights: ['Introduction to Scratch', 'Presentation', 'Team-based projects', 'Mentorship by volunteers'],
  },
  'Act4-SDNCilenggang02': {
    title: 'Game Dev Workshop',
    year: '2025',
    attendees: 'SDN Cilenggang 02',
    image: '/images/past_events/IMG_0215.JPG',
    description: 'A game development workshop for SDN Cilenggang 02 held on August 12. Students from SDN Cilenggang 02 were taught to create a simple game using Scratch.',
    highlights: ['Introduction to Scratch', 'Presentation', 'Team-based projects', 'Mentorship by volunteers'],
  },
  'Act3-Batch3': {
    title: 'Curriculum 1',
    year: '2025',
    attendees: 'Batch 3',
    image: '/images/past_events/WhatsApp Image 2025-06-12 at 10.22.22.jpeg',
    description: 'A series of classes were held to teach our 3rd batch of students our very own curriculum 1 for students grade 6 and below.',
    highlights: ['Computer skills', 'Introduction to Scratch', 'Game design', 'Mentorship by volunteers'],
  },
  'Act2-Batch2': {
    title: 'Curriculum 1',
    year: '2025',
    attendees: '40 Attendees',
    image: '/images/past_events/WhatsApp Image 2025-06-12 at 10.11.09.jpeg',
    description: 'Multiple classes were held to teach our 2nd batch of students the curriculum we have created catered to younger students.',
    highlights: ['Computer skills', 'Introduction to Scratch', 'Game design', 'Mentorship by volunteers'],
  },
  'Act1-Batch1': {
    title: 'Curriculum 2',
    year: '2025',
    attendees: 'Batch 1',
    image: '/images/past_events/PHOTO-2025-02-28-21-15-22 2.jpg',
    description: 'We held a series of classes and meetings to teach our first batch of students our second curriculum made for students grade 7 and above.',
    highlights: ['Scratch programming', 'Game dev', 'AI literacy', 'Basic web development'],
  },
};

const stats = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, value: '200+', label: 'Students Reached' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>, value: '10+', label: 'Workshops Conducted' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>, value: '10+', label: 'Volunteer Mentors' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>, value: '5+', label: 'Communities Served' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>, value: 'Rp 16Jt', label: 'Worth Of Devices Donated' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>, value: '100%', label: 'Project Completion Rate' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>, value: '300+', label: 'Projects completed' },
];

export default function ImpactPage() {
  const [modalSession, setModalSession] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const session = modalSession ? sessionData[modalSession] : null;

  return (
    <>
      <Navbar solid />
      <ScrollAnimations />
      <main style={{ paddingBottom: '6rem' }}>
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
                <div key={s.label} className={`stat-card scale-in stagger-${i + 1}`}>
                  <div className="stat-card-icon">{s.icon}</div>
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-24">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            <div>
              <h2 className="fade-in" style={{ fontSize: '1.875rem', marginBottom: '1.5rem' }}>Awards &amp; Recognition</h2>
              <p className="fade-in stagger-1" style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
                We are honored to be recognized for our commitment to education and community service.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="achievement-card fade-in-left stagger-1">
                  <div className="achievement-card-inner">
                    <div className="achievement-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <div>
                      <h4>Feature in Multiple Articles</h4>
                      <p className="org">Urban Vibes, tvonenews.com, suara.com</p>
                      <p>Check out the articles here:
                        <ul>
                          <li><a className="browser-link" href="https://urbanvibes.id/index.php/2025/10/10/9092-20-oktober-2025-tekno-bridging-indonesias-digital-divide-saatnya-anak-muda-jadi-jembatan-masa-depan-digital/" target="_blank" rel="noopener noreferrer">Urban Vibes</a></li>
                          <li><a className="browser-link" href="https://www.tvonenews.com/berita/380275-mimpi-anak-indonesia-terganjal-kesenjangan-digital" target="_blank" rel="noopener noreferrer">tvonenews</a></li>
                          <li><a className="browser-link" href="https://www.suara.com/lifestyle/2025/10/14/172742/generasi-muda-bergerak-saatnya-tutup-kesenjangan-digital-di-indonesia" target="_blank" rel="noopener noreferrer">suara.com</a></li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="fade-in" style={{ fontSize: '1.875rem', marginBottom: '1.5rem' }}>Past Sessions</h2>
              <div className="grid-2">
                {(['Act7-SDNCilenggang03', 'Act6-SDNLengkokWetan01', 'Act5-SDNCilenggang03'] as const).map((id, i) => {
                  const s = sessionData[id];
                  return (
                    <div key={id} className={`session-card fade-in stagger-${i + 1}`} onClick={() => setModalSession(id)}>
                      <img src={s.image || ''} alt={s.title} />
                      <div className="session-overlay">
                        <span className="session-year">{s.year}</span>
                        <h3>{s.title}</h3>
                        <p>{s.attendees}</p>
                      </div>
                    </div>
                  );
                })}
                <div
                  className="fade-in stagger-4 see-more-history"
                  onClick={() => setShowMore(v => !v)}
                  style={{ backgroundColor: 'rgba(241,245,249,0.5)', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', border: '2px dashed var(--border)', cursor: 'pointer' }}
                >
                  <div style={{ backgroundColor: 'var(--background)', padding: '1rem', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{showMore ? 'Show Less' : 'See More History'}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{showMore ? 'Collapse the archive' : 'Browse our full archive of events'}</p>
                </div>
              </div>

              {showMore && (
                <div className="grid-2" style={{ marginTop: '2rem' }}>
                  {(['Act4-SDNCilenggang02', 'Act3-Batch3', 'Act2-Batch2', 'Act1-Batch1'] as const).map((id) => {
                    const s = sessionData[id];
                    return (
                      <div key={id} className="session-card fade-in visible" onClick={() => setModalSession(id)}>
                        <img src={s.image} alt={s.title} />
                        <div className="session-overlay">
                          <span className="session-year">{s.year}</span>
                          <h3>{s.title}</h3>
                          <p>{s.attendees}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {session && (
        <div className={`session-modal${modalSession ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setModalSession(null); }}>
          <div className="session-modal-content">
            <button className="session-modal-close" onClick={() => setModalSession(null)}>&times;</button>
            <img src={session.image || ''} alt={session.title} />
            <div className="session-modal-body">
              <span className="session-year">{session.year}</span>
              <h2>{session.title}</h2>
              <p className="modal-attendees">{session.attendees}</p>
              <p>{session.description}</p>
              <div className="modal-highlights">
                <h4>Highlights:</h4>
                <ul>
                  {session.highlights.map(h => <li key={h}>{h}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <Sponsors />
      <Footer />
    </>
  );
}
