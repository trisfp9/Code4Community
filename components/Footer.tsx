import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <div className="logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                </svg>
              </div>
              <span className="logo-text">Code 4 Community</span>
            </Link>
            <p>Empowering students with technology skills through comprehensive mentorship programs and inclusive workshops.</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {/* <li><Link href="/workshops">Workshops</Link></li> */}
              <li><Link href="/program">Our Program</Link></li>
              <li><Link href="/impact">Impact</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/get-involved">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Sinarmas World Academy, CBD Lot XV BSD City, Jl. TM Pahlawan Seribu, Cilenggang, Tangerang, Kota Tangerang Selatan, Banten 15322</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>code4communityjkt@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="https://www.instagram.com/code4community_?igsh=YnIwY3F5eWd1ZjB4" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
            <Link href="/donate" className="btn btn-primary" style={{ width: '100%' }}>Support Our Mission</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Code 4 Community. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
