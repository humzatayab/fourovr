import { Link } from 'react-router-dom';
import { Smartphone, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, Globe } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function MobileAppsServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 06</div>
            <h1 className="service-title">
              Mobile App <br />
              <span className="outline-text">Development</span>
            </h1>
            <p className="service-hero-desc">
              We design and engineer high-performance iOS and Android mobile applications using cross-platform architectures tailored to scale your brand.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start your app</span>
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
              <div className="stat-val">6 - 10 Weeks</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">TECH STACK</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">React Native / Flutter</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">PLATFORMS</span>
                <Smartphone className="stat-icon" size={18} />
              </div>
              <div className="stat-val">iOS & Android App</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">ARCHITECTURE</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Native Performance</div>
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
                <Smartphone size={24} />
              </div>
              <h3 className="deliverable-title">Cross-Platform Coding</h3>
              <p className="deliverable-desc">
                High-performance applications built using React Native or Flutter, offering single-codebase speed with completely native interface response times.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Layers size={24} />
              </div>
              <h3 className="deliverable-title">Offline & Local Sync</h3>
              <p className="deliverable-desc">
                Offline database architecture utilizing SQLite or WatermelonDB, syncing with backend databases seamlessly when internet connectivity resumes.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Terminal size={24} />
              </div>
              <h3 className="deliverable-title">Push & Interactive Alerts</h3>
              <p className="deliverable-desc">
                Advanced targeted notification system (Firebase/OneSignal) with deep-linking protocols that redirect users directly to campaign pages.
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
                <h3 className="workflow-step-title">Flow Planning & Specs</h3>
                <p className="workflow-step-desc">
                  We outline every screen transition path, plan local vs online storage states, configure backend API triggers, and document specifications.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">UI/UX & Wireframes</h3>
                <p className="workflow-step-desc">
                  We design responsive app screens in Figma, focusing on thumb zone reaches, clear tap interactions, and branding guidelines.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Development & Logic</h3>
                <p className="workflow-step-desc">
                  We write modular typescript code, hook local storage variables, configure state logic (Redux/Zustand), and hook online API endpoints.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Submission & Release</h3>
                <p className="workflow-step-desc">
                  We compile release bundles, generate secure provisioning profiles and signing keys, compile assets, and submit to App Store and Google Play.
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
              <h2 className="section-main-title">Responsive. High performance.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We engineer apps that load in milliseconds and don't drain the user's phone resources. Clean, modular code structure ensures simple long-term edits.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Single Codebase Sync</h4>
                  <p>We leverage cross-platform tools to build for both platforms simultaneously, cutting development costs and release delays in half.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Robust Data Security</h4>
                  <p>We compile secure code bundles, encrypt local SQLite files, and configure server SSL tunnels to prevent corporate leaks.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Push-Notification Engine</h4>
                  <p>We configure trigger sequences that remind users of abandoned cards or custom milestones, boosting daily usage rates by 25%+.</p>
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
