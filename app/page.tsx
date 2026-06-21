import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';
import Icon from '@/components/Icon';
import { getSiteContent } from '@/lib/content/queries';

export const revalidate = 30;

export default async function Home() {
  const c = await getSiteContent();
  return (
    <>
      <Navbar />
      <ScrollAnimations />
      <main>
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-overlay"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/IMG_0220.JPG" alt="Students coding" />
          </div>

          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-text">
                <div className="fade-in">
                  <br />
                  <h1><span className="gradient-text">{c.hero_title_lead} </span> <br /> {c.hero_title_rest}</h1>
                </div>
                <p className="hero-description fade-in stagger-1">{c.hero_description}</p>
                <div className="hero-buttons fade-in stagger-2">
                  <Link href="/program" className="btn btn-primary btn-lg">Explore Programs</Link>
                  <Link href="/get-involved" className="btn btn-outline btn-lg">Join the Movement</Link>
                </div>
                <div className="hero-stats fade-in stagger-3">
                  {c.hero_stats.map((s, i) => (
                    <div key={i} style={{ display: 'contents' }}>
                      {i > 0 && <div className="hero-divider"></div>}
                      <div className="hero-stat">
                        <h4>{s.value}</h4>
                        <p>{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-visual scale-in">
                <div className="hero-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
              <h2 className="fade-in">{c.initiatives_heading}</h2>
              <p className="fade-in stagger-1">{c.initiatives_subheading}</p>
            </div>
            <div className="grid-3">
              {c.initiatives.map((it, i) => (
                <div key={i} className={`card card-hover-lift fade-in stagger-${i + 1}`}>
                  <div className={`card-icon ${it.color}`}>
                    <Icon name={it.icon} size={28} />
                  </div>
                  <h3>{it.title}</h3>
                  <p>{it.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="grid-2">
              <div className="vision-card fade-in-right">
                <div className="icon-box"><Icon name="users" /></div>
                <h3>About Us</h3>
                <p>{c.about}</p>
              </div>
              <div className="mission-card fade-in-left">
                <div className="glow"></div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div className="icon-box"><Icon name="clock" /></div>
                  <h3>History</h3>
                  <p>{c.history}</p>
                </div>
              </div>
              <div className="mission-card fade-in-left">
                <div className="glow"></div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div className="icon-box"><Icon name="target" /></div>
                  <h3>Our Mission</h3>
                  <p>{c.mission}</p>
                </div>
              </div>
              <div className="vision-card fade-in-right">
                <div className="icon-box"><Icon name="heart" /></div>
                <h3>Our Vision</h3>
                <p>{c.vision}</p>
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
                <h2>{c.cta_heading}</h2>
                <p>{c.cta_text}</p>
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
