import { Link } from 'react-router-dom';
import { Layout, Smartphone, MousePointerClick, Workflow, Sparkles, ArrowUpRight, Activity, Eye, Compass, Clock, Cpu } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function UiUxServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 02</div>
            <h1 className="service-title">
              UI/UX <br />
              <span className="outline-text">Interface Design</span>
            </h1>
            <p className="service-hero-desc">
              We design digital products, SaaS applications, and responsive landing pages with a deep focus on user psychology, friction reduction, and modern design aesthetics.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start your design</span>
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
              <div className="stat-val">3 - 5 Weeks</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">DESIGN ENGINE</span>
                <Layout className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Figma Master App</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">PROTOTYPING</span>
                <MousePointerClick className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Interactive & Clickable</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">SYSTEM METHOD</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Atomic Design Tokens</div>
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
                <Workflow size={24} />
              </div>
              <h3 className="deliverable-title">UX Mapping & Wireframes</h3>
              <p className="deliverable-desc">
                High-fidelity blueprints and structural user flows mapped to eliminate user friction, increase retention, and guide customers to the checkout.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Layout size={24} />
              </div>
              <h3 className="deliverable-title">UI & Figma Design Systems</h3>
              <p className="deliverable-desc">
                Pixel-perfect, customized interface screens mapped out with fully reusable styles, component variants, and color token systems in Figma.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <MousePointerClick size={24} />
              </div>
              <h3 className="deliverable-title">Interactive Prototypes</h3>
              <p className="deliverable-desc">
                Clickable simulation links of the entire app experience, ready for immediate user testing, stakeholder approvals, and developer handoff.
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
                <h3 className="workflow-step-title">Research & Mapping</h3>
                <p className="workflow-step-desc">
                  We audit your user goals, map core paths, document key customer scenarios, and establish functional requirements for the interfaces.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">UX Blueprinting (Wireframes)</h3>
                <p className="workflow-step-desc">
                  We design low-to-mid fidelity interface outlines. This lets us perfect page layout systems, content hierarchy, and buttons before visual details.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Visual UI Design</h3>
                <p className="workflow-step-desc">
                  We convert wireframes into gorgeous interface screens. We craft colors, glowing borders, custom card blocks, typography, and hover feedback.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Prototyping & Handoff</h3>
                <p className="workflow-step-desc">
                  We link mockups into interactive flows. We provide dev teams with fully documentated Figma stylesheets, tokens, asset exports, and components.
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
              <h2 className="section-main-title">Interfaces that convert.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe premium aesthetics must go hand-in-hand with functional efficiency. Our interfaces are built to sell, satisfy, and scale.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Conversion Optimization</h4>
                  <p>We position CTA buttons, fields, and informational graphics based on verified conversion rate benchmarks and heat-map structures.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Scalable Design Assets</h4>
                  <p>All Figma screens utilize auto-layouts, structured component variations, and color tokens, making it incredibly simple to add new features.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Seamless Dev Handoff</h4>
                  <p>We group and label grids, borders, components, and spacing values clearly. Developers can start writing CSS and components immediately.</p>
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
