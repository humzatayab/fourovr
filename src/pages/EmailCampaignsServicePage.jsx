import { Link } from 'react-router-dom';
import { Mail, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, Target } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function EmailCampaignsServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 15</div>
            <h1 className="service-title">
              Email & SMS <br />
              <span className="outline-text">Marketing</span>
            </h1>
            <p className="service-hero-desc">
              We design and construct high-converting automated email flows, SMS marketing campaigns, and transactional broadcasts in Klaviyo and Mailchimp to drive repeat sales.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start email campaigns</span>
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
                <span className="stat-label">CAMPAIGN TYPE</span>
                <Clock className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Ongoing Management</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">PLATFORMS</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Klaviyo / Mailchimp / SMS</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">REVENUE LIFT</span>
                <Target className="stat-icon" size={18} />
              </div>
              <div className="stat-val">20% - 30% Sales Lift</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">AUTOMATION SCOPE</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Abandoned Cart & Flows</div>
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
                <Mail size={24} />
              </div>
              <h3 className="deliverable-title">Automated Lifecycle Flows</h3>
              <p className="deliverable-desc">
                Setup of high-yielding automated flow sets, including welcome series, abandoned shopping carts, customer winbacks, and request reviews.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Layers size={24} />
              </div>
              <h3 className="deliverable-title">Campaign Broadcasts</h3>
              <p className="deliverable-desc">
                Engaging newsletter layouts, copy editing, product spotlight banners, discount alerts, and holiday campaign mailings.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Cpu size={24} />
              </div>
              <h3 className="deliverable-title">List Building & Forms</h3>
              <p className="deliverable-desc">
                High-converting lead acquisition widgets, visual discount pop-up modules, exit-intent triggers, and customer classification rules.
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
                <h3 className="workflow-step-title">Audit & Segment Strategy</h3>
                <p className="workflow-step-desc">
                  We audit your historical subscriber data, establish target segments based on user activities, and map out flow automation plans.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Visual Template Design</h3>
                <p className="workflow-step-desc">
                  We design responsive, visually stunning email templates in Figma matching your brand books and typography rules.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Flow Configuration & Copy</h3>
                <p className="workflow-step-desc">
                  We write persuasive copy, construct templates in Klaviyo, set wait triggers, and configure splits for cart values.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Optimization & A/B testing</h3>
                <p className="workflow-step-desc">
                  We audit inbox placement values, run ongoing A/B subject line tests, check mobile formatting layouts, and check conversion metrics.
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
              <h2 className="section-main-title">Sales on autopilot.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe in automated retention. By targeting subscribers based on actual search and purchase activities, we turn list members into buyers.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Targeted Segmentation</h4>
                  <p>We segment subscribers based on purchase history, email opens, and browsing paths, preventing user fatigue and unsubscribes.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Guaranteed Deliverability</h4>
                  <p>We optimize SPF, DKIM, and DMARC credentials, ensuring emails bypass junk filters and reach target inboxes.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Predictable Retention Sales</h4>
                  <p>Automated welcome and cart flows generate consistent sales daily, establishing a highly predictable retention channel.</p>
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
