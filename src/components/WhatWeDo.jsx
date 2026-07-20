import './WhatWeDo.css';

const tickerItems = [
  'AI AUTOMATION',
  'NEXT.JS',
  'FLUTTERFLOW',
  'GOOGLE ADS',
  'META ADS',
  'SEO',
  'HUBSPOT',
  'TAILWIND CSS',
  'SHOPIFY',
  'MERN STACK'
];

const stats = [
  { value: '10+', label: 'Projects & brands scaled' },
  { value: '95+', label: 'Avg. Lighthouse score' },
  { value: '4.9/5', label: 'Client satisfaction' },
  { value: '3yrs+', label: 'Driving brand growth' }
];

export default function WhatWeDo() {
  return (
    <section className="what-we-do-section">
      {/* Moving Marquee Ticker Bar */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="ticker-item">
              <span>{item}</span>
              <span className="ticker-star">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="what-we-do-content">
          <div className="section-badge text-lime">
            ( WHAT WE DO )
          </div>
          
          <h2 className="what-we-do-heading">
            We build the websites, apps, and growth systems behind ambitious brands.
          </h2>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
