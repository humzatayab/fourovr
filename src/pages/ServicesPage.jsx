import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import './ServicesPage.css';

const servicesList = [
  {
    id: 'web-dev',
    title: 'Website Development',
    desc: 'Custom React & Next.js websites built for speed, conversion, and scalability. Designed to turn passive visitors into active customers.',
    features: [
      'Custom Next.js & React architecture',
      '95+ Lighthouse speed score guaranteed',
      'Technical SEO & schema markup',
      'Responsive mobile-first design'
    ],
    meta: [
      { label: 'STACK', val: 'React / Next.js' },
      { label: 'SPEED', val: '95+ Performance' },
      { label: 'CODE', val: '100% Custom' },
      { label: 'TIMELINE', val: '4-8 weeks' }
    ],
    imageTheme: 'code'
  },
  {
    id: 'ai-automations',
    title: 'AI & Workflow Automations',
    desc: 'Automate repetitive tasks, double team productivity, and integrate smart AI chatbots and custom LLM workflows into your business.',
    features: [
      'Custom AI Agent & LLM workflows',
      'Shopify & CRM automated pipelines',
      'Smart customer support chatbots',
      'OpenAI & Claude API integrations'
    ],
    meta: [
      { label: 'ENGINE', val: 'OpenAI / Claude' },
      { label: 'PRODUCTIVITY', val: '2X Output' },
      { label: 'CRM', val: 'Shopify & HubSpot' },
      { label: 'TIMELINE', val: '2-4 weeks' }
    ],
    imgSrc: '/service-ai.png'
  },
  {
    id: 'seo',
    title: 'SEO & Search Optimization',
    desc: 'Data-driven organic search strategies to dominate Google search rankings, increase qualified traffic, and drive sustainable growth.',
    features: [
      'Comprehensive technical SEO audit',
      'On-page & content strategy',
      'High-intent keyword targeting',
      'Authority backlink acquisition'
    ],
    meta: [
      { label: 'AUDIT', val: 'Full Technical' },
      { label: 'SEARCH', val: 'Google Rank #1' },
      { label: 'METRICS', val: 'Revenue Tied' },
      { label: 'TIMELINE', val: 'Ongoing Growth' }
    ],
    imageTheme: 'analytics'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    desc: 'Multi-channel marketing campaigns across Meta, Google, LinkedIn, and YouTube engineered to capture market share.',
    features: [
      'Full-funnel growth strategy',
      'Audience targeting & segmentation',
      'High-converting ad copy & design',
      'Continuous campaign optimization'
    ],
    meta: [
      { label: 'PLATFORMS', val: 'Meta / Google / LinkedIn' },
      { label: 'ROAS', val: '4X+ Average' },
      { label: 'CAMPAIGN', val: 'Full-Funnel' },
      { label: 'TIMELINE', val: 'Monthly Retainer' }
    ],
    imageTheme: 'marketing'
  },
  {
    id: 'paid-ads',
    title: 'Paid Advertising & PPC',
    desc: 'Laser-focused paid acquisition on Meta Ads and Google Search/Shopping to turn ad spend into predictable revenue.',
    features: [
      'Facebook & Instagram Ad campaigns',
      'Google Search & Shopping PPC',
      'Retargeting & lookalike audiences',
      'Server-side pixel & CAPI tracking'
    ],
    meta: [
      { label: 'TRACKING', val: 'CAPI & Pixel' },
      { label: 'FOCUS', val: 'High ROAS' },
      { label: 'CREATIVE', val: 'Dynamic Variants' },
      { label: 'TIMELINE', val: 'Monthly Retainer' }
    ],
    imageTheme: 'paid'
  },
  {
    id: 'email-marketing',
    title: 'Email & SMS Marketing',
    desc: 'Automated email flows and targeted broadcasts to increase customer lifetime value and drive repeat revenue.',
    features: [
      'Klaviyo & Mailchimp automated flows',
      'Welcome series & abandoned cart',
      'Segmented customer campaigns',
      'Continuous A/B subject testing'
    ],
    meta: [
      { label: 'PLATFORM', val: 'Klaviyo / Mailchimp' },
      { label: 'FLOWS', val: 'Automated Sales' },
      { label: 'REVENUE', val: '20-30% Incremental' },
      { label: 'TIMELINE', val: 'Monthly Management' }
    ],
    imageTheme: 'email'
  },
  {
    id: 'branding',
    title: 'Branding & Strategy',
    desc: 'Complete brand design system, logo guidelines, typography, and visual language that makes your business unmissable.',
    features: [
      'Logo design & brand guidelines',
      'Color palette & typography system',
      'Social media & marketing collateral',
      'Brand positioning strategy'
    ],
    meta: [
      { label: 'DELIVERABLE', val: 'Full Brand Kit' },
      { label: 'FORMAT', val: 'Figma & Vector' },
      { label: 'SYSTEM', val: 'Complete Brand Book' },
      { label: 'TIMELINE', val: '3-5 weeks' }
    ],
    imageTheme: 'branding'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Interface Design',
    desc: 'Intuitive digital product interfaces and conversion-focused web layouts designed in Figma with pixel perfection.',
    features: [
      'Wireframing & interactive prototypes',
      'User experience research & testing',
      'Scalable Figma design systems',
      'High-fidelity UI components'
    ],
    meta: [
      { label: 'TOOL', val: 'Figma Master' },
      { label: 'PROTOTYPE', val: 'Clickable Demo' },
      { label: 'COMPONENTS', val: 'Design System' },
      { label: 'TIMELINE', val: '3-6 weeks' }
    ],
    imageTheme: 'uiux'
  }
];

const tickerItems = [
  'Website Development',
  'AI Automations',
  'SEO Services',
  'Paid Ads',
  'Branding',
  'UI/UX Design'
];

export default function ServicesPage() {
  return (
    <div className="services-page-wrapper">
      {/* Hero Header */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-badge text-lime">( SERVICES )</div>
          <h1 className="services-hero-title">
            Everything you<br />
            need to grow<br />
            online.
          </h1>
          <p className="services-hero-subtitle">
            End-to-end digital capabilities designed to generate revenue, not just traffic.
          </p>
        </div>
      </section>

      {/* Services Showcase Blocks */}
      <section className="services-showcase-section">
        <div className="container">
          <div className="showcase-list">
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`showcase-block ${isEven ? 'layout-normal' : 'layout-reverse'}`}
                >
                  {/* Text Column */}
                  <div className="showcase-info">
                    <h2 className="showcase-title">{service.title}</h2>
                    <p className="showcase-desc">{service.desc}</p>

                    {/* Features Bullet List */}
                    <ul className="showcase-features">
                      {service.features.map((feat, i) => (
                        <li key={i}>
                          <Check size={16} className="feature-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* 4 Meta Grid */}
                    <div className="showcase-meta-grid">
                      {service.meta.map((m, i) => (
                        <div key={i} className="meta-card">
                          <div className="meta-label">{m.label}</div>
                          <div className="meta-val">{m.val}</div>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="btn-primary showcase-btn">
                      <span>Get started</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>

                  {/* Visual Card Column */}
                  <div className="showcase-visual">
                    <div className="visual-card">
                      {service.imgSrc ? (
                        <img src={service.imgSrc} alt={service.title} className="visual-img" />
                      ) : (
                        <div className={`mockup-bg mockup-${service.imageTheme}`}>
                          <div className="mockup-content">
                            <span className="mockup-pill">{service.title}</span>
                          </div>
                        </div>
                      )}
                      <div className="visual-card-overlay">
                        <span className="overlay-title">{service.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Banner & Marquee Ticker */}
      <section className="services-cta-section">
        <div className="services-cta-banner">
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
            <div className="cta-tagline">GET STARTED</div>
            <h2 className="cta-heading">
              Let's find your<br />
              fastest path to<br />
              growth.
            </h2>

            <div className="cta-bottom-row">
              <p className="cta-subtext">
                Book a free, no-pressure discovery call. We'll audit your current setup and share actionable insights.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-cta-dark">
                  <span>Book consultation</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link to="/pricing" className="btn-cta-outline">
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
