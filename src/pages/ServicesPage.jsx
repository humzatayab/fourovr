import { Link } from 'react-router-dom';
import {
  ArrowUpRight, PenTool, Layout, Film, Sparkles,
  Code, Smartphone, ShoppingBag, Monitor,
  Bot, Workflow, BarChart3, Cpu,
  Share2, Search, Mail, Megaphone, ArrowDown
} from 'lucide-react';
import './ServicesPage.css';

const servicesData = [
  {
    id: 'creative',
    title: 'Creative Services',
    desc: 'Bold visuals and user-centric interfaces engineered to leave a lasting mark and convert viewers.',
    color: '#ff6b9d',
    badge: 'CREATIVE',
    items: [
      {
        title: 'Branding & Identity',
        desc: 'Logos, color harmony schemes, visual guidelines, and corporate strategy books.',
        bullets: ['Logo & Mark Systems', 'Complete Brand Book', 'Visual Style Guidelines'],
        link: '/services/branding',
        icon: PenTool
      },
      {
        title: 'UI/UX Design',
        desc: 'SaaS interfaces, mobile app layouts, responsive wireframes, and prototypes in Figma.',
        bullets: ['Wireframing & UX Maps', 'Pixel-Perfect UI Screen Designs', 'Interactive Prototypes'],
        link: '/services/ui-ux',
        icon: Layout
      },
      {
        title: 'Video & Motion',
        desc: 'High-impact kinetic typography, 2D/3D visual effects, explainer promos, and reels edits.',
        bullets: ['Explainer & Promo Videos', 'Short-Form Ad Creatives', 'Motion Typography & VFX'],
        link: '/services/video-motion',
        icon: Film
      },
      {
        title: 'Social Creatives',
        desc: 'Scroll-stopping static ads, seamless swipe carousels, and custom Figma templates.',
        bullets: ['Swipe Carousel Layouts', 'Engagement Static Graphics', 'Custom Figma Templates'],
        link: '/services/social-media-creatives',
        icon: Sparkles
      }
    ]
  },
  {
    id: 'development',
    title: 'Development & Apps',
    desc: 'Engineered backend structures, fast frontend screens, and native mobile apps built to scale.',
    color: '#c7ff24',
    badge: 'DEVELOPMENT',
    items: [
      {
        title: 'Web Development',
        desc: 'Custom React & Next.js architectures, fast serverless setups, and MERN stack systems.',
        bullets: ['Next.js React Frontend App', '95+ Lighthouse Score Guaranteed', 'Clean, Scalable API Core'],
        link: '/services/web-development',
        icon: Code
      },
      {
        title: 'Mobile Apps',
        desc: 'High-performance iOS and Android app development using React Native or Flutter.',
        bullets: ['React Native / Flutter Coding', 'Offline SQLite Database Sync', 'App Store Submission'],
        link: '/services/mobile-apps',
        icon: Smartphone
      },
      {
        title: 'E-Commerce Stores',
        desc: 'Shopify configurations, customized checkout channels, conversion triggers, and CRM syncs.',
        bullets: ['Shopify Custom Templates', 'Fast Checkouts & Persistent Carts', 'Klaviyo Invoice Integration'],
        link: '/services/ecommerce',
        icon: ShoppingBag
      },
      {
        title: 'Desktop Software',
        desc: 'Cross-platform applications compiled using Electron or Tauri for low resource loads.',
        bullets: ['DMG & MSI Executable Packages', 'Tauri-Rust Resource Savings', 'Encrypted SQLite Databases'],
        link: '/services/desktop-apps',
        icon: Monitor
      }
    ]
  },
  {
    id: 'automations',
    title: 'AI & Automations',
    desc: 'Scale smarter with custom AI agents, workflow triggers, and secure database data models.',
    color: '#a78bfa',
    badge: 'AUTOMATIONS',
    items: [
      {
        title: 'AI Agents',
        desc: 'Autonomous custom LLM assistants, chat widgets, prompt guides, and RAG knowledge bases.',
        bullets: ['Autonomous Task Execution', '24/7 Auto Support Chatbots', 'Custom Vector Database RAG'],
        link: '/services/ai-agents',
        icon: Bot
      },
      {
        title: 'Workflow Automation',
        desc: 'Connecting software platforms, custom Zapier/Make tasks, and conditional logic flows.',
        bullets: ['Zapier & Make Setup', 'Auto CRM Onboarding Sync', 'Custom API Webhook Scripts'],
        link: '/services/workflow-automation',
        icon: Workflow
      },
      {
        title: 'Data Pipelines',
        desc: 'Secure ingestion pipelines, ETL queries, SQL cleaning transformations, and analytics charts.',
        bullets: ['Python Ingestion Scripts', 'BigQuery/Snowflake Schema Setup', 'BI Looker Studio Dashboards'],
        link: '/services/data-pipelines',
        icon: BarChart3
      },
      {
        title: 'AI Stack Integration',
        desc: 'Embedding OpenAI, Claude, or Gemini APIs into SaaS systems, handling prompt variables.',
        bullets: ['Streaming Token API Connectors', 'Generative Design Pipelines', 'Semantic Embedding Search'],
        link: '/services/ai-integration',
        icon: Cpu
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Growth Marketing',
    desc: 'Targeted campaign layers, SEO ranking audits, and conversion flows designed for sales ROI.',
    color: '#38bdf8',
    badge: 'MARKETING',
    items: [
      {
        title: 'Social Media Management',
        desc: 'Feed profile optimization, weekly content calendars, organic follow growth, and analytics.',
        bullets: ['Profile Optimization Audits', 'Monthly Content Calendars', 'Follower Analytics Reports'],
        link: '/services/social-media-marketing',
        icon: Share2
      },
      {
        title: 'SEO & Search Growth',
        desc: 'Technical keyword search optimization, high-domain backlinks, page audits, and Google Console ranks.',
        bullets: ['Technical Site Index Scans', 'Competitor Keyword Research', 'Domain Backlink Campaigns'],
        link: '/services/seo-growth',
        icon: Search
      },
      {
        title: 'Email & SMS Campaigns',
        desc: 'High-converting abandoned cart flows, weekly mail broadcasts, opt-ins, and A/B test lists.',
        bullets: ['Welcome & Cart Lifecycles', 'Klaviyo Newsletter Templates', 'Targeted Customer Segments'],
        link: '/services/email-campaigns',
        icon: Mail
      },
      {
        title: 'Paid Ads & PPC',
        desc: 'ROI campaign management on Meta/Google networks, Conversion API setups, and keyword bids.',
        bullets: ['Campaign Bid Cap Strategy', 'Ad Copy & Image testing', 'Conversions API GTM Hook'],
        link: '/services/paid-ads',
        icon: Megaphone
      }
    ]
  }
];

export default function ServicesPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky nav header
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="services-page-wrapper">
      <div className="services-page-glow-top"></div>

      {/* Hero Header */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-badge">( SERVICES )</div>
          <h1 className="services-hero-title">
            Capabilities built<br />
            to scale your brand<br />
            online.
          </h1>
          <p className="services-hero-subtitle">
            We partner with ambitious startups and enterprises to deliver custom software, design systems, and marketing solutions that generate revenue.
          </p>

          {/* Jump Links Container */}
          <div className="jump-links-container">
            {servicesData.map((cat) => (
              <button
                key={cat.id}
                className="jump-link-badge"
                style={{ '--cat-color': cat.color }}
                onClick={() => scrollToSection(cat.id)}
              >
                <span>{cat.badge}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Category Sections */}
      {servicesData.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="services-category-section"
          style={{ '--cat-color': category.color }}
        >
          <div className="container">
            {/* Category Header */}
            <div className="category-header-wrap">
              <div className="category-tag">OUR SERVICES</div>
              <h2 className="category-title">{category.title}</h2>
              <p className="category-desc">{category.desc}</p>
            </div>

            {/* Sub-Services Grid */}
            <div className="services-grid">
              {category.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="service-card">
                    <div className="card-top">
                      <div className="card-header-row">
                        <div className="service-card-icon-wrap">
                          <Icon size={20} />
                        </div>
                        <ArrowUpRight className="card-arrow-icon" size={18} />
                      </div>
                      <h3 className="service-card-title">{item.title}</h3>
                      <p className="service-card-desc">{item.desc}</p>
                    </div>

                    <div className="card-bottom">
                      <ul className="service-card-bullets">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>
                            <span className="bullet-dot"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to={item.link} className="service-card-link">
                        <span>Explore Service</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Services CTA Banner */}
      <section className="services-category-section" style={{ borderTop: 'none', paddingBottom: '0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--color-lime)',
              color: 'var(--color-ink)',
              borderRadius: '2.5rem',
              padding: '6rem 4rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: '5%',
                bottom: '0',
                opacity: 0.05,
                color: 'currentColor',
                pointerEvents: 'none'
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" width="300" height="300">
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

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '650px' }}>
              <div style={{ textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '1.5rem' }}>GET STARTED</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>
                Let's find your fastest path to growth.
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.85, marginBottom: '3rem' }}>
                Book a free, no-pressure discovery call. We'll audit your current setup and share actionable insights.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    backgroundColor: '#0a0b0a',
                    color: '#fff',
                    padding: '0.9rem 1.8rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                >
                  <span>Book consultation</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  to="/pricing"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#0a0b0a',
                    border: '1px solid rgba(10, 11, 10, 0.25)',
                    padding: '0.9rem 1.8rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(10, 11, 10, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <span>View pricing</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
