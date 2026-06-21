import { getSponsors } from '@/lib/content/queries';

export default async function Sponsors() {
  const sponsors = await getSponsors();
  return (
    <section className="sponsors-section">
      <div className="container">
        <div className="sponsors-content">
          <h2>Our Sponsors</h2>
          <p className="sponsors-cta">Interested in becoming a sponsor? Contact us at code4communityjkt@gmail.com</p>
          <div className="sponsors-grid">
            {sponsors.map((s) => (
              <div className="sponsor-spot" key={s.id}>
                {s.logo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.logo_url} alt={s.name || 'Sponsor'} style={{ maxHeight: '60px', objectFit: 'contain' }} />
                ) : (
                  s.name || 'Your Logo Here'
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
