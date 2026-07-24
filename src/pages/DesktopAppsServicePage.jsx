import { Link } from 'react-router-dom';
import { Monitor, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function DesktopAppsServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 08</div>
            <h1 className="service-title">
              Desktop App <br />
              <span className="outline-text">Development</span>
            </h1>
            <p className="service-hero-desc">
              We build cross-platform, resource-efficient desktop software applications and system utilities tailored to integrate with your workflow.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start desktop app</span>
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
              <div className="stat-val">8 - 12 Weeks</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">TECH STACK</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Electron / Tauri / C++</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">PLATFORMS</span>
                <Monitor className="stat-icon" size={18} />
              </div>
              <div className="stat-val">macOS / Windows / Linux</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">PERFORMANCE</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Low RAM / CPU Overhead</div>
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
                <Monitor size={24} />
              </div>
              <h3 className="deliverable-title">Cross-Platform Software</h3>
              <p className="deliverable-desc">
                High-performance desktop apps packaged using Electron or Tauri, ensuring a single codebase targets macOS, Windows, and Linux operating systems.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Layers size={24} />
              </div>
              <h3 className="deliverable-title">Encrypted Storage</h3>
              <p className="deliverable-desc">
                Secure local databases using SQLite with AES encryption systems, handling high transaction rates and auto syncing with web clouds.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Terminal size={24} />
              </div>
              <h3 className="deliverable-title">OS Integration</h3>
              <p className="deliverable-desc">
                Integration with system menus, local file systems, offline utilities, background services, and native desktop notifications.
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
                <h3 className="workflow-step-title">Requirements & OS Spec</h3>
                <p className="workflow-step-desc">
                  We audit target system architectures, plan offline cache storage parameters, list device access parameters, and write logic specs.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Visual Layout & UX Grid</h3>
                <p className="workflow-step-desc">
                  We design custom interface screens optimized for large desktop resolutions, native window scales, and responsive dark themes in Figma.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Core Development</h3>
                <p className="workflow-step-desc">
                  We write the backend code (Rust/Node), connect SQLite database encryption channels, wire UI triggers, and run local mock tests.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Compilation & Signing</h3>
                <p className="workflow-step-desc">
                  We package executable formats (.DMG, .MSI, .EXE), register digital security signatures for OS trust, and upload releases to target repositories.
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
              <h2 className="section-main-title">Native feel. Custom logic.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe desktop software must feel snappy. We use modern web-desktop frameworks like Tauri (Rust) to keep RAM usage under 50MB and CPU cycles low.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Tauri-Rust Optimization</h4>
                  <p>We leverage Rust backend structures, keeping package sizes under 10MB and preventing standard desktop lags.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Local Security Encryption</h4>
                  <p>All database tables are encrypted locally using SQLCipher, preventing user data extraction by unauthorized programs.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Background Tray Utility</h4>
                  <p>We build lightweight tray helper services that execute sync logic in the background without disturbing the user's focus.</p>
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
