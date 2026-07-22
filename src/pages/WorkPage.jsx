import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';
import './WorkPage.css';

const projects = [
  {
    id: 'kiwiana-immigration',
    title: 'Kiwiana Immigration',
    category: 'Web Development',
    tags: ['Next.js', 'SEO', 'UX Strategy'],
    metric: '+240% Inquiries',
    desc: 'Full digital overhaul & automated visa application portal designed for high conversion and seamless user journey.',
    imgSrc: '/work-featured.png',
    isFeatured: true
  },
  {
    id: 'point8-wealth',
    title: 'Point8 Wealth',
    category: 'Branding',
    tags: ['Branding', 'Web Dev', 'SEO'],
    metric: '$4.2M Growth',
    desc: 'Premium financial advisory portal with client dashboard and interactive investment calculators.',
    imageTheme: 'finance'
  },
  {
    id: 'kiwaccountant',
    title: 'KiwAccountant',
    category: 'AI Automations',
    tags: ['AI Agents', 'Automation', 'Shopify'],
    metric: '75% Time Saved',
    desc: 'AI-powered receipt scanning and automated accounting workflow for SMBs.',
    imageTheme: 'ai'
  },
  {
    id: 'instasure-finance',
    title: 'InstaSure Finance',
    category: 'Digital Marketing',
    tags: ['Paid Ads', 'Meta Ads', 'Funnel'],
    metric: '+180% Conversions',
    desc: 'Targeted paid advertising and high-converting landing pages for insurance leads.',
    imageTheme: 'marketing'
  },
  {
    id: 'borro-finance',
    title: 'Borro Finance',
    category: 'Web Development',
    tags: ['React', 'PPC', 'Branding'],
    metric: '$12M Funded',
    desc: 'Mortgage & home loan decision calculator platform with real-time lead capture.',
    imageTheme: 'mortgage'
  },
  {
    id: 'healthcure-nz',
    title: 'HealthCure NZ',
    category: 'Digital Marketing',
    tags: ['E-Commerce', 'SEO', 'Email Flow'],
    metric: '3.8X ROAS',
    desc: 'E-commerce growth engine with automated Klaviyo flows and organic Google search dominance.',
    imageTheme: 'wellness'
  }
];

const categories = ['All Work', 'Web Development', 'AI Automations', 'Digital Marketing', 'Branding'];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('All Work');

  const filteredProjects = activeTab === 'All Work'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const featured = projects.find((p) => p.isFeatured);

  return (
    <div className="work-page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="work-header">
          <div className="work-badge text-lime">( SELECTED WORK )</div>
          <h1 className="work-title">
            Results we're<br />
            proud to put our<br />
            name on.
          </h1>
          <p className="work-subtitle">
            A look at how we've helped ambitious businesses turn digital into measurable, compounding growth.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="work-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Case Study Hero Banner */}
        {activeTab === 'All Work' && featured && (
          <div className="featured-work-card">
            <div className="featured-img-box">
              <img src={featured.imgSrc} alt={featured.title} className="featured-img" />
              <div className="featured-overlay-badge">
                <Sparkles size={14} className="text-lime" />
                <span>FEATURED CASE STUDY</span>
              </div>
            </div>

            <div className="featured-content">
              <div className="featured-top">
                <span className="metric-pill">
                  <TrendingUp size={14} />
                  {featured.metric}
                </span>
                <div className="featured-tags">
                  {featured.tags.map((t, i) => (
                    <span key={i} className="tag-pill">{t}</span>
                  ))}
                </div>
              </div>

              <h2 className="featured-title">{featured.title}</h2>
              <p className="featured-desc">{featured.desc}</p>

              <Link to="/contact" className="btn-primary featured-btn">
                <span>View case study</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        )}

        {/* Grid Portfolio Cards */}
        <div className="work-grid">
          {filteredProjects
            .filter((p) => (activeTab === 'All Work' ? !p.isFeatured : true))
            .map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-thumb">
                  {project.imgSrc ? (
                    <img src={project.imgSrc} alt={project.title} className="project-img" />
                  ) : (
                    <div className={`project-mockup theme-${project.imageTheme}`}>
                      <div className="mockup-watermark">{project.title}</div>
                    </div>
                  )}
                  <div className="project-thumb-overlay">
                    <div className="arrow-badge">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-info-header">
                    <h3 className="project-card-title">{project.title}</h3>
                    <span className="project-metric-tag">{project.metric}</span>
                  </div>

                  <p className="project-card-desc">{project.desc}</p>

                  <div className="project-card-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="work-cta-banner">
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

          <div className="cta-tagline">HAVE A PROJECT IN MIND?</div>
          <h2 className="cta-heading">
            Let's create your<br />
            success story.
          </h2>

          <div className="cta-bottom-row">
            <p className="cta-subtext">
              We take on a limited number of clients per quarter to ensure top-tier execution.
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
    </div>
  );
}
