import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';

export const metadata = { title: 'Get Involved - Code 4 Community' };

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />
      <main style={{ paddingBottom: '6rem' }}>
        <section className="involve-header">
          <div className="container text-center" style={{ paddingTop: '4rem' }}>
            <h1 className="fade-in" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get Involved</h1>
            <p className="fade-in stagger-1" style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '42rem', margin: '0 auto' }}>
              Join our community of changemakers. Whether you want to mentor, volunteer, or partner with us, we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="involve-cards">
            <div className="grid-3">
              <div className="involve-card fade-in stagger-1">
                <div className="involve-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>Become a Mentor</h3>
                <p>Share your expertise with the next generation. Hold a one-time workshop, online or offline</p>
              </div>
              <div className="involve-card fade-in stagger-2">
                <div className="involve-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                </div>
                <h3>Volunteer</h3>
                <p>Help organize events, manage social media, or support our operations. Every skill set is valuable.</p>
              </div>
              <div className="involve-card fade-in stagger-3">
                <div className="involve-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>Partner With Us</h3>
                <p>Schools, companies, and organizations - let&apos;s collaborate to bring more programs to students.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card fade-in">
            <div className="contact-form-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
            </div>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Jane Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interest">I&apos;m interested in...</label>
                <select id="interest">
                  <option value="" disabled>Select an option</option>
                  <option value="mentor">Mentoring Students</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="partner">Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us a bit about yourself and how you'd like to get involved..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </form>
          </div>
        </div>
      </main>
      <Sponsors />
      <Footer />
    </>
  );
}
