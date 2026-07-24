import { Link } from 'react-router-dom';
import { Share2, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, MessageSquare } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function SocialMediaMarketingServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 13</div>
            <h1 className="service-title">
              Social Media <br />
              <span className="outline-text">Marketing</span>
            </h1>
            <p className="service-hero-desc">
              We manage, optimize, and scale your organic social media presence across Instagram, TikTok, LinkedIn, and YouTube to build active audience growth.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start organic growth</span>
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
                <span className="stat-label">MANAGEMENT STYLE</span>
                <Clock className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Monthly Retainer</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">CHANNELS</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Meta / TikTok / LinkedIn</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">GOAL FOCUS</span>
                <Share2 className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Organic Reach & Growth</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">EXECUTION</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Auto Scheduling Engine</div>
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
                <Share2 size={24} />
              </div>
              <h3 className="deliverable-title">Profile Audits & Strategy</h3>
              <p className="deliverable-desc">
                In-depth optimization of biography lines, profile link maps, target keyword setups, and visual aesthetics to increase visitor-to-follower rates.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Layers size={24} />
              </div>
              <h3 className="deliverable-title">Monthly Content Calendars</h3>
              <p className="deliverable-desc">
                Structured scheduling of static slides, copy outlines, and short-form video hooks mapping weekly value metrics.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <MessageSquare size={24} />
              </div>
              <h3 className="deliverable-title">Account Management & DM Sync</h3>
              <p className="deliverable-desc">
                Regular daily post deployments, commenting on related industry feeds, replying to client DMs, and compiling traffic log files.
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
                <h3 className="workflow-step-title">Profile Audit & Keyword Plan</h3>
                <p className="workflow-step-desc">
                  We audit your account history, locate high-traffic hashtag search variables, configure custom bios, and plan the monthly theme.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Content Calendar & Copy draft</h3>
                <p className="workflow-step-desc">
                  We write captions, script visual reels, select trending background audio clips, and map the publication timelines.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Design & Scheduling</h3>
                <p className="workflow-step-desc">
                  We design custom layout cards, edit raw video reels, write final review lines, and configure auto-publish parameters.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Audit & Traffic Analytics</h3>
                <p className="workflow-step-desc">
                  We verify weekly account traffic metrics, check follow rates, optimize copy parameters, and adjust future calendar lists.
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
              <h2 className="section-main-title">Consistent. High engagement.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe content without consistency is wasted effort. We build structured calendars that keep your feed active and build long-term authority.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Structured Scheduling</h4>
                  <p>Our team deploys content systematically during prime engagement hours, maximizing post reach metrics.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Copywriting that Connects</h4>
                  <p>We write conversational, value-driven captions that hook readers and motivate profile click-through actions.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Cross-Platform Formatting</h4>
                  <p>We resize and optimize post specifications for Meta, TikTok, and LinkedIn feeds automatically, saving internal time.</p>
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
