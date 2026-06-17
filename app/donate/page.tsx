import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';

export const metadata = { title: 'Donate - Code 4 Community' };

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />
      <main style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="donate-grid">
            <div className="donate-content fade-in-left">
              <span className="subtitle">Support Our Mission</span>
              <h1>Invest in the Future of Tech</h1>
              <p>Your donation directly funds our workshops, mentorship programs, and resources for students who need them most. Help us bridge the digital divide.</p>

              <div className="donate-info-grid">
                <div className="donate-info-card">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
                  </div>
                  <h3>Sponsor a Student</h3>
                  <p>Rp 250.000 covers materials for one student for a whole semester.</p>
                </div>
                <div className="donate-info-card">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
                  </div>
                  <h3>Equip a Classroom</h3>
                  <p>Rp 5.000.000 provides laptops and software for a workshop group.</p>
                </div>
              </div>

              <div className="donate-secure">
                <div className="donate-secure-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                  <div>
                    <h4>Secure &amp; Transparent</h4>
                    <p>We are a registered non-profit. All donations are tax-deductible and processed securely.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in-right">
              <div className="donate-form-card">
                <div className="donate-form-header">
                  <h3>Make a Donation</h3>
                  <p>Choose an amount to give</p>
                </div>

                <form>
                  <div className="amount-grid">
                    {[
                      { value: '50000', label: 'Rp 50rb' },
                      { value: '100000', label: 'Rp 100rb' },
                      { value: '250000', label: 'Rp 250rb' },
                      { value: '500000', label: 'Rp 500rb' },
                      { value: '1000000', label: 'Rp 1jt' },
                    ].map((amt) => (
                      <div className="amount-option" key={amt.value}>
                        <input type="radio" name="amount" id={`amount-${amt.value}`} value={amt.value} defaultChecked={amt.value === '100000'} />
                        <label htmlFor={`amount-${amt.value}`}><span>{amt.label}</span></label>
                      </div>
                    ))}
                    <div className="amount-option">
                      <input type="radio" name="amount" id="amount-custom" value="custom" />
                      <label htmlFor="amount-custom"><span>?</span></label>
                    </div>
                  </div>

                  <div className="form-divider">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="John" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="donateEmail">Email Address</label>
                      <input type="email" id="donateEmail" placeholder="john@example.com" />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', borderRadius: '0.75rem' }}>
                    Donate Now
                  </button>
                  <p className="form-disclaimer">By donating, you agree to our Terms of Service and Privacy Policy.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Sponsors />
      <Footer />
    </>
  );
}
