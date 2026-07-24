import { Link } from 'react-router-dom';
import { Target, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, Megaphone } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function PaidAdsServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 16</div>
            <h1 className="service-title">
              Paid Ads & <br />
              <span className="outline-text">PPC Campaigns</span>
            </h1>
            <p className="service-hero-desc">
              We design and manage high-ROI paid acquisition campaigns on Meta Ads, Google Search/Shopping, and LinkedIn to generate predictable revenue growth.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start ad campaigns</span>
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
              <div className="stat-val">Monthly Retainer</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">PLATFORMS</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Meta / Google / LinkedIn</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">GOAL FOCUS</span>
                <Target className="stat-icon" size={18} />
              </div>
              <div className="stat-val">4X+ Average ROAS</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">TRACKING ACCURACY</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Server-Side Pixel & CAPI</div>
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
                <Megaphone size={24} />
              </div>
              <h3 className="deliverable-title">Campaign Management</h3>
              <p className="deliverable-desc">
                Setup and optimization of Meta/Google ad structures, bid strategy modifications, scaling models, and demographic targets.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Layers size={24} />
              </div>
              <h3 className="deliverable-title">Ad Visuals & Copywriting</h3>
              <p className="deliverable-desc">
                Scroll-stopping visual ad variation layouts, copy editing, high-converting product headlines, and promo content design.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Cpu size={24} />
              </div>
              <h3 className="deliverable-title">Server-Side Tracking</h3>
              <p className="deliverable-desc">
                Conversions API (CAPI) configurations and server-side tracking, ensuring perfect attribution data by overcoming iOS browser privacy blockers.
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
                <h3 className="workflow-step-title">Audit & Conversion Spec</h3>
                <p className="workflow-step-desc">
                  We audit your historical ad performance, configure custom target metrics, prepare competitor search targets, and set conversion budgets.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Creative & Copy Setup</h3>
                <p className="workflow-step-desc">
                  We design multiple image ad variations, write persuasive copywriting options, and outline video hooks for vertical ad models.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Server Tracking Setup</h3>
                <p className="workflow-step-desc">
                  We hook Google Tag Manager containers, configure cloud Conversions API parameters, and run purchase event checks to verify data.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Scaling & Retargeting</h3>
                <p className="workflow-step-desc">
                  We launch ads, audit daily performance values, configure retargeting lists, optimize bid caps, and scale profitable campaign layers.
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
              <h2 className="section-main-title">Data-driven ROAS.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We don't rely on random guesses. We build campaigns grounded in strict conversion tracking statistics, optimizing budgets for actual purchase records.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Full-Funnel Targeting</h4>
                  <p>We structure campaigns to guide prospects from initial brand discovery to mid-funnel consideration and checkout triggers.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Pixel Perfect Data</h4>
                  <p>We integrate server-side tracking, capturing accurate attribution data to optimize algorithm targets and reduce cost-per-purchase.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Rapid Ad Testing</h4>
                  <p>We test multiple visual design frames, copy headings, and video hooks weekly, scaling profitable ads and pausing cold ones.</p>
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
