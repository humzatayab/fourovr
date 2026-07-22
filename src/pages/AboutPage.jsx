import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './AboutPage.css';

const stats = [
  { value: '10+', label: 'Projects & brands scaled' },
  { value: '95+', label: 'Avg. Lighthouse score' },
  { value: '4.9/5', label: 'Client satisfaction' },
  { value: '3yrs', label: 'Driving brand growth' }
];

const values = [
  {
    id: '01',
    title: 'Innovation',
    desc: 'Pushing boundaries using the latest web tech, AI automations, and modern design standards.'
  },
  {
    id: '02',
    title: 'Transparency',
    desc: 'Clear pricing, zero hidden fees, and honest performance reporting on every metric.'
  },
  {
    id: '03',
    title: 'Results',
    desc: 'Obsessed with real business outcomes. We engineer for conversions, ROAS, and revenue.'
  },
  {
    id: '04',
    title: 'Partnership',
    desc: 'We do not act as distant vendors; we operate as your embedded, fully accountable growth team.'
  },
  {
    id: '05',
    title: 'Continuous Improvement',
    desc: 'Always testing, measuring, and refining to compound your digital performance over time.'
  }
];

const timelineMilestones = [
  {
    year: '2023',
    title: 'The journey begins',
    desc: 'FOUROVR was founded with a mission to deliver high-converting digital marketing & development.'
  },
  {
    year: '2024',
    title: 'Web & mobile expansion',
    desc: 'Expanded core services into full-stack MERN web platforms and native mobile app engineering.'
  },
  {
    year: '2025',
    title: 'AI-powered solutions',
    desc: 'Integrated custom AI workflow automations and performance marketing scale strategies.'
  },
  {
    year: '2026',
    title: 'Scaling globally',
    desc: 'Partnering with ambitious businesses across international markets to drive measurable growth.'
  }
];

const tickerItems = [
  'Website Development',
  'Mobile Apps',
  'SEO',
  'Paid Ads',
  'Branding',
  'UI/UX Design'
];

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      {/* 1. About Hero Header */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-badge text-lime">( ABOUT US )</div>
          <h1 className="about-hero-title">
            Building digital<br />
            solutions that<br />
            drive growth.
          </h1>
          <p className="about-hero-subtitle">
            FOUROVR helps businesses build websites, mobile apps, and digital marketing systems that create measurable business growth.
          </p>
        </div>
      </section>

      {/* 2. Agency Overview & Photo */}
      <section className="about-overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-left">
              <h2 className="overview-statement">
                We're a digital agency obsessed with one thing: turning digital into measurable growth for the businesses we partner with.
              </h2>
            </div>
            
            <div className="overview-right">
              <div className="team-image-container">
                <img src="/about-team.png" alt="FOUROVR Agency Team" className="team-img" />
                <div className="team-pill">DESIGN &middot; DEV &middot; MARKETING</div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="about-stat-card">
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Stand For (Values Grid - Light Paper Theme) */}
      <section className="about-values-section">
        <div className="container">
          <div className="values-header">
            <div className="values-badge">( OUR VALUES )</div>
            <h2 className="values-title">What we<br />stand for</h2>
          </div>

          <div className="values-grid">
            {values.map((v) => (
              <div key={v.id} className="value-card">
                <div className="value-id">{v.id}</div>
                <h3 className="value-card-title">{v.title}</h3>
                <p className="value-card-desc">{v.desc}</p>
              </div>
            ))}

            {/* Featured Principle Dark Card */}
            <div className="value-card principle-dark-card">
              <h3 className="principle-text">
                Five principles, <span className="text-lime">one promise:</span> your growth, measured.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Road So Far (Timeline) */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="timeline-header">
            <div className="timeline-badge text-lime">( OUR JOURNEY )</div>
            <h2 className="timeline-title">The road so far</h2>
          </div>

          <div className="timeline-grid">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className={`timeline-card milestone-${idx + 1}`}>
                <div className="milestone-year-row">
                  <span className="milestone-year">{m.year}</span>
                  <span className="milestone-dot" />
                </div>
                <h3 className="milestone-title">{m.title}</h3>
                <p className="milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Next Chapter Call to Action Banner */}
      <section className="about-cta-section">
        <div className="about-cta-banner">
          <div className="cta-watermark">
            <svg viewBox="0 0 100 100" fill="none" width="360" height="360">
              <g stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                <path d="M30 31 L44 49" />
                <path d="M61 28 L44 49" />
                <path d="M44 49 L32 70" />
              </g>
              <rect x="19" y="20" width="22" height="22" rx="7.5" fill="currentColor" />
              <rect x="46" y="13" width="30" height="30" rx="10" fill="currentColor" />
              <rect x="33" y="38" width="22" height="22" rx="7.5" fill="currentColor" />
              <rect x="21" y="59" width="22" height="22" rx="7.5" fill="currentColor" />
            </svg>
          </div>

          <div className="container">
            <div className="cta-tagline">WORK WITH US</div>
            <h2 className="cta-heading">
              Let's write the<br />
              next chapter<br />
              together.
            </h2>

            <div className="cta-bottom-row">
              <p className="cta-subtext">
                We take on a limited number of partners to ensure your project gets 100% dedicated focus.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-cta-dark">
                  <span>Book consultation</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link to="/services" className="btn-cta-outline">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
