import { Link } from 'react-router-dom';
import { Workflow, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, Zap } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function WorkflowAutomationServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 10</div>
            <h1 className="service-title">
              Workflow <br />
              <span className="outline-text">Automation</span>
            </h1>
            <p className="service-hero-desc">
              We automate repetitive processes, connect your software stack, and design smart workflows in Zapier, Make, and custom code integrations.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start automating</span>
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
              <div className="stat-val">2 - 4 Weeks</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">INTEGRATORS</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Zapier / Make / Custom APIs</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">ACTION SPEED</span>
                <Zap className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Real-time Webhook Sync</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">EFFICIENCY GOAL</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Eliminate 90% Manual Work</div>
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
              <h3 className="deliverable-title">Multi-Step Flows</h3>
              <p className="deliverable-desc">
                Complex, automated pipelines that connect multiple apps, transfer data fields cleanly, apply logic filters, and execute task sequences.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Zap size={24} />
              </div>
              <h3 className="deliverable-title">ERP & CRM Automation</h3>
              <p className="deliverable-desc">
                Automated customer onboarding pipelines, Shopify-to-ERP invoice synchronization, CRM status modifications, and auto email reminders.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Terminal size={24} />
              </div>
              <h3 className="deliverable-title">Custom Webhook Scripts</h3>
              <p className="deliverable-desc">
                NodeJS/Python serverless scripts that format file types, run arithmetic calculations, parse JSON fields, and connect custom endpoints.
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
                <h3 className="workflow-step-title">Process Audit & Logic Mapping</h3>
                <p className="workflow-step-desc">
                  We audit your manual workflows, determine software API credentials, structure logic conditions, and document a data mapping spec.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Connector Configuration</h3>
                <p className="workflow-step-desc">
                  We authenticate software connections, verify data field formats, configure trigger webhooks, and map parameters between apps.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Workflow Building & Filters</h3>
                <p className="workflow-step-desc">
                  We write custom javascript processing code, implement logic filters, manage looping triggers, and set up error correction logic.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Stress Testing & Deployment</h3>
                <p className="workflow-step-desc">
                  We run system tests with mockup inputs, verify data transmission logs, setup Slack notifications for failed actions, and deploy.
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
              <h2 className="section-main-title">Automate. Scale smarter.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe your team shouldn't waste time on copy-pasting data. We build solid automations that run silently in the background, reducing human errors.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Infinite Integration Scope</h4>
                  <p>We connect anything that has an API, building custom webhook processors when standard connectors are not available.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Error Alert Systems</h4>
                  <p>We set up Slack or Discord logs that ping our team immediately if an automated task fails, preventing database sync issues.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Optimized API Usage</h4>
                  <p>We bundle actions and filters strategically, preventing API limits from being reached and keeping Zapier/Make costs low.</p>
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
