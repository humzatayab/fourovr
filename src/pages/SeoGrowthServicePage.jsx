import { Link } from 'react-router-dom';
import { Target, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, Search } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function SeoGrowthServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 14</div>
            <h1 className="service-title">
              SEO & Search <br />
              <span className="outline-text">Optimization</span>
            </h1>
            <p className="service-hero-desc">
              We design and execute data-driven organic search strategies to dominate search results, drive qualified traffic, and secure high-intent leads.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start SEO audit</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link 
                to="/pricing" 
                className="btn-primary" 
                style={{ 
                  backgroundColor: 'transparent', 
                  color: 'var(--color-paper)', 
                  border: '1px solid rgba(255,255,255,0.15)' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-lime)';
                  e.currentTarget.style.color = 'var(--color-ink)';
                  e.currentTarget.style.backgroundColor = 'var(--color-lime)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.color = 'var(--color-paper)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>View packages</span>
              </Link>
            </div>
          </div>
          
          {/* Quick Stats Grid */}
          <div className="service-stats-grid">
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">SERVICE MODEL</span>
                <Clock className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Ongoing / Monthly</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">TOOLS UTILIZED</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Ahrefs / SEMrush / Console</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">RANK GOALS</span>
                <Target className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Google Page #1 Focus</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">TECHNICAL STANDARDS</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">100% Core Web Vitals Pass</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliverables-section">
        <div className="container">
          <div className="section-header-block">
            <div className="section-tag">Key Deliverables</div>
            <h2 className="section-main-title">What you get.</h2>
          </div>
          
          <div className="deliverables-grid">
            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Search size={24} />
              </div>
              <h3 className="deliverable-title">Technical SEO Audits</h3>
              <p className="deliverable-desc">
                In-depth optimization of index configurations, redirect loops, visual layout shifts, and mobile-friendly markup codes.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Layers size={24} />
              </div>
              <h3 className="deliverable-title">Keyword Research & Content</h3>
              <p className="deliverable-desc">
                Identifying high-intent, low-difficulty transactional keywords, mapping search intents, and producing optimized articles.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Target size={24} />
              </div>
              <h3 className="deliverable-title">Authority Link Building</h3>
              <p className="deliverable-desc">
                Strategic outreach to secure editorial backlinks, local business listings, and PR features, boosting domain authority score levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header-block">
            <div className="section-tag">Our Process</div>
            <h2 className="section-main-title">How we work.</h2>
          </div>
          
          <div className="workflow-timeline">
            <div className="workflow-step">
              <div className="workflow-dot">01</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Technical Audit & Fixes</h3>
                <p className="workflow-step-desc">
                  We run full crawl scans, repair broken redirect chains, configure sitemap indexing, and optimize mobile loading speeds.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Competitor Keyword Analysis</h3>
                <p className="workflow-step-desc">
                  We locate high-intent search terms, identify competitor traffic channels, and map a structured content publishing schedule.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">On-Page Optimization</h3>
                <p className="workflow-step-desc">
                  We rewrite meta titles, configure schema tags, apply internal link structures, and publish keyword-rich articles.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Link Outreach & Tracking</h3>
                <p className="workflow-step-desc">
                  We pitch high-domain publishers to earn editorial backlinks, track keyword ranks in Google Console, and optimize monthly targets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FOUROVR Section */}
      <section className="why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-intro">
              <div className="section-tag">Why FOUROVR</div>
              <h2 className="section-main-title">Growth that lasts.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe SEO is about revenue, not just hits. We target conversion-focused transactional keywords that bring buyers to your site.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Transactional Targeting</h4>
                  <p>We focus on commercial and transactional keywords, bringing users who are ready to make a purchase decision.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>White-Hat Link Acquisition</h4>
                  <p>We build organic backlinks through manual outreach and content pitching, ensuring long-term safety from Google penalties.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Clear Dashboard Reports</h4>
                  <p>We set up unified Looker analytics, showing clear growth updates in organic traffic, search terms, and contact form submissions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
}
