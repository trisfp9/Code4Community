import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />
      <main>
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-overlay"></div>
            <img src="/images/IMG_0220.JPG" alt="Students coding" />
          </div>

          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-text">
                <div className="fade-in">
                  <br />
                  <h1><span className="gradient-text">Code4Community, </span> <br /> A Sinarmas World Academy Based Non-Profit</h1>
                </div>
                <p className="hero-description fade-in stagger-1">
                  We empower students with essential technology skills through comprehensive mentorship programs, fostering creativity and digital literacy.
                </p>
                <div className="hero-buttons fade-in stagger-2">
                  <Link href="/program" className="btn btn-primary btn-lg">Explore Programs</Link>
                  <Link href="/get-involved" className="btn btn-outline btn-lg">Join the Movement</Link>
                </div>
                <div className="hero-stats fade-in stagger-3">
                  <div className="hero-stat">
                    <h4>200+</h4>
                    <p>Students Mentored</p>
                  </div>
                  <div className="hero-divider"></div>
                  <div className="hero-stat">
                    <h4>10+</h4>
                    <p>Workshops Held</p>
                  </div>
                  <div className="hero-divider"></div>
                  <div className="hero-stat">
                    <h4>100%</h4>
                    <p>Volunteer Driven</p>
                  </div>
                </div>
              </div>

              <div className="hero-visual scale-in">
                <div className="hero-card">
                  <img src="/images/IMG_0203.JPG" alt="Digital Community" />
                </div>
                <div className="hero-glow"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-muted">
          <div className="container">
            <div className="section-header">
              <h2 className="fade-in">Our Initiatives</h2>
              <p className="fade-in stagger-1">We bridge the digital divide through targeted programs designed to inspire and educate.</p>
            </div>
            <div className="grid-3">
              <div className="card card-hover-lift fade-in stagger-1">
                <div className="card-icon blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>
                </div>
                <h3>Workshops/teaching</h3>
                <p>We teach fundamental computer skills to ensure no student is left behind in the digital age.</p>
              </div>
              <div className="card card-hover-lift fade-in stagger-2">
                <div className="card-icon purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <h3>School Partnerships</h3>
                <p>We partner with schools to integrate digital literacy into their existing learning environments.</p>
              </div>
              <div className="card card-hover-lift fade-in stagger-3">
                <div className="card-icon orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                </div>
                <h3>Donations</h3>
                <p>We bridge the digital divide by providing students with the tools they need to learn, grow, and explore technology.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="grid-2">
              <div className="vision-card fade-in-right">
                <div className="icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>About Us</h3>
                <p>We are a student-led non-profit organization based at Sinarmas World Academy in Indonesia, dedicated to expanding access to digital literacy and coding education for young learners. Through workshops, community initiatives, and educational programs, we strive to empower students with the skills needed for the future.</p>
              </div>
              <div className="mission-card fade-in-left">
                <div className="glow"></div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div className="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <h3>History</h3>
                  <p>Code 4 Community began as a small school club with a big vision: to make technology education more accessible to everyone. What started as a group of passionate students has grown into a growing non-profit initiative that continues to expand its impact across local communities.</p>
                </div>
              </div>
              <div className="mission-card fade-in-left">
                <div className="glow"></div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div className="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <h3>Our Mission</h3>
                  <p>To democratize access to technology education by providing high-quality, free mentorship and resources to underrepresented communities, fostering a future where every child has the opportunity to become a creator of technology.</p>
                </div>
              </div>
              <div className="vision-card fade-in-right">
                <div className="icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3>Our Vision</h3>
                <p>A world where technology serves as a bridge rather than a barrier, creating inclusive communities where innovation thrives through diversity, collaboration, and shared knowledge.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container" style={{ maxWidth: '80rem' }}>
            <div className="cta-box fade-in">
              <div className="glow-1"></div>
              <div className="glow-2"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2>Ready to Make an Impact?</h2>
                <p>Whether you&apos;re a student eager to learn or a professional ready to mentor, there&apos;s a place for you in our community.</p>
                <div className="cta-buttons">
                  <Link href="/get-involved" className="btn btn-white btn-lg">Get Involved</Link>
                  <Link href="/donate" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>Donate Now</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Sponsors />
      <Footer />
    </>
  );
}
