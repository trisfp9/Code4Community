import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';
import Icon from '@/components/Icon';
import { getWorkshops } from '@/lib/content/queries';

export const metadata = { title: 'Workshops - Code 4 Community' };
export const revalidate = 30;

export default async function WorkshopsPage() {
  const workshops = await getWorkshops();
  return (
    <>
      <Navbar />
      <ScrollAnimations />
      <main style={{ paddingBottom: '6rem' }}>
        <section className="section-muted" style={{ padding: '5rem 0', borderBottom: '1px solid var(--border)' }}>
          <div className="container text-center" style={{ paddingTop: '4rem' }}>
            <h1 className="fade-in" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Future Online Workshops</h1>
            <p className="fade-in stagger-1" style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '42rem', margin: '0 auto' }}>
              Join our interactive sessions led by industry experts. Learn new skills, build projects, and connect with peers.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '4rem 1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {workshops.map((w) => (
              <div className="workshop-card fade-in" key={w.id}>
                <div className="workshop-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.image_url || ''} alt={w.title} />
                  {w.badge && <span className="workshop-badge">{w.badge}</span>}
                </div>
                <div className="workshop-content">
                  <div className="workshop-tags">
                    {w.tags.map((t) => <span className="workshop-tag" key={t}>{t}</span>)}
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                  <div className="workshop-details">
                    {w.date && <div className="workshop-detail"><Icon name="calendar" size={16} />{w.date}</div>}
                    {w.time && <div className="workshop-detail"><Icon name="clock" size={16} />{w.time}</div>}
                    {w.location && <div className="workshop-detail"><Icon name="globe" size={16} />{w.location}</div>}
                  </div>
                  <div className="workshop-footer">
                    <div className="workshop-attendees">
                      <div className="workshop-attendee"></div>
                      <div className="workshop-attendee"></div>
                      <div className="workshop-attendee"></div>
                      {w.attendee_count && <div className="workshop-attendee-count">{w.attendee_count}</div>}
                    </div>
                    <a href={w.register_url || '#'} className="btn btn-primary">Register Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1rem' }}>
          <div className="newsletter-box fade-in">
            <div className="newsletter-content">
              <div className="newsletter-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              </div>
              <div>
                <h4>Stay Updated</h4>
                <p>Get notified when new workshops are scheduled. No spam, we promise.</p>
              </div>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Sponsors />
      <Footer />
    </>
  );
}
