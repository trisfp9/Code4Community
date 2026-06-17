import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';

export const metadata = { title: 'Workshops - Code 4 Community' };

export default function WorkshopsPage() {
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
            <div className="workshop-card fade-in">
              <div className="workshop-image">
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80" alt="Python Programming" />
                <span className="workshop-badge">Beginner</span>
              </div>
              <div className="workshop-content">
                <div className="workshop-tags">
                  <span className="workshop-tag">Python</span>
                  <span className="workshop-tag">Coding</span>
                  <span className="workshop-tag">Game Dev</span>
                </div>
                <h3>Intro to Python Programming</h3>
                <p>A perfect starting point for coding. Learn variables, loops, and basic logic by building a text-based adventure game.</p>
                <div className="workshop-details">
                  <div className="workshop-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    October 15, 2025
                  </div>
                  <div className="workshop-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    10:00 AM - 2:00 PM PST
                  </div>
                  <div className="workshop-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Online (Zoom)
                  </div>
                </div>
                <div className="workshop-footer">
                  <div className="workshop-attendees">
                    <div className="workshop-attendee"></div>
                    <div className="workshop-attendee"></div>
                    <div className="workshop-attendee"></div>
                    <div className="workshop-attendee-count">+20</div>
                  </div>
                  <a href="#" className="btn btn-primary">Register Now</a>
                </div>
              </div>
            </div>
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
