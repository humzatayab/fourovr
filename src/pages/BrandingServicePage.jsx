import { Link } from 'react-router-dom';
import { PenTool, Palette, ShieldCheck, FileText, Sparkles, ArrowUpRight, Target, Users, Award, Clock, Briefcase, RefreshCw } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function BrandingServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 01</div>
            <h1 className="service-title">
              Branding & <br />
              <span className="outline-text">Visual Identity</span>
            </h1>
            <p className="service-hero-desc">
              We design memorable brand identities, full visual systems, and corporate strategies that instantly communicate credibility and values to your ideal audience.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start your project</span>
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
                <span className="stat-label">AVERAGE TIMELINE</span>
                <Clock className="stat-icon" size={18} />
              </div>
              <div className="stat-val">3 - 4 Weeks</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">DELIVERABLE FORMATS</span>
                <Briefcase className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Figma, AI, SVG, PDF</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">REVISIONS OFFERED</span>
                <RefreshCw className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Unlimited Iterations</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">STRATEGY DRIVEN</span>
                <Target className="stat-icon" size={18} />
              </div>
              <div className="stat-val">100% Custom Research</div>
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
                <PenTool size={24} />
              </div>
              <h3 className="deliverable-title">Logo & Mark System</h3>
              <p className="deliverable-desc">
                Primary logo, secondary logo variations, submarks, monograms, and favicon assets optimized for both digital displays and physical prints.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Palette size={24} />
              </div>
              <h3 className="deliverable-title">Brand Identity Book</h3>
              <p className="deliverable-desc">
                A comprehensive style guide detailing color harmony systems, custom typography scales, clear space guidelines, and photography art directions.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <FileText size={24} />
              </div>
              <h3 className="deliverable-title">Marketing Collateral</h3>
              <p className="deliverable-desc">
                Ready-to-use business cards, email signatures, high-end presentation decks, letterheads, and customized social media profile kits.
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
                <h3 className="workflow-step-title">Discovery & Strategy</h3>
                <p className="workflow-step-desc">
                  We deep-dive into your market segment, analyze competitor positioning, clarify your target demographics, and define a unique core brand strategy.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Moodboard & Art Direction</h3>
                <p className="workflow-step-desc">
                  We curate custom visual directions and moodboards to align on color psychology, imagery styles, and overall brand tone before drafting designs.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Design Exploration</h3>
                <p className="workflow-step-desc">
                  Our designers craft vector logo concepts, brand signatures, typography pairings, and initial identity mockups to showcase in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Delivery & Handoff</h3>
                <p className="workflow-step-desc">
                  We deliver final production-ready vector assets (SVG, AI, PDF), style guidelines, and design templates packed in an organized cloud library.
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
              <h2 className="section-main-title">Uncompromising Quality.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe brand building is an investment, not an expense. We help you establish high authority from day one.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Strategic Approach</h4>
                  <p>Every stroke, font choice, and tone definition is supported by detailed research of what converts and establishes authority in your market.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Vector Perfect</h4>
                  <p>All brand assets are built with pixel perfection, ensuring they scale from a 16px browser favicon to a massive physical billboard.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Sleek & Modern Aesthetic</h4>
                  <p>We build visuals with modern layouts, minimal lines, and sleek color harmony styles that keep your brand fresh for years to come.</p>
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
