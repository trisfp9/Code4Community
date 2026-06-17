import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';

export const metadata = { title: 'Our Team - Code 4 Community' };

const team = [
  { name: 'Ryan Wong', role: 'President' },
  { name: 'Trevyn Theodore Tjandra', role: 'Vice-President' },
  { name: 'Ken Adhisya Winarta', role: 'Media Manager' },
  { name: 'Kent Djajaria', role: 'Mentor' },
  { name: 'Audric Tsai', role: 'Mentor' },
  { name: 'Michelle Wang', role: 'Mentor' },
  { name: 'Janice Vivien Lau', role: 'Mentor' },
  { name: 'Tristan Park', role: 'Mentor' },
  { name: 'Kate Wong', role: 'Mentor' },
  { name: 'Chloe Gwenneth Hia', role: 'Mentor' },
  { name: 'Richard Chang', role: 'Mentor' },
  { name: 'Juwon Shin', role: 'Mentor' },
];

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />
      <main style={{ paddingBottom: '6rem' }}>
        <section className="section-muted" style={{ padding: '5rem 0', borderBottom: '1px solid var(--border)' }}>
          <div className="container text-center" style={{ paddingTop: '4rem' }}>
            <h1 className="fade-in" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Meet the Team</h1>
            <p className="fade-in stagger-1" style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '42rem', margin: '0 auto' }}>
              The passionate individuals behind Code 4 Community, dedicated to empowering the next generation of tech leaders.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '4rem 1rem' }}>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={member.name} className={`team-member scale-in stagger-${(i % 4) + 1}`}>
                <div className="team-member-image">
                  <img src="/images/blank-pfp.jpg" alt={member.name} />
                  <div className="team-member-overlay">
                    <div className="team-social">
                      <a href="#"><InstagramIcon /></a>
                      <a href="#"><LinkedInIcon /></a>
                    </div>
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Sponsors />
      <Footer />
    </>
  );
}
