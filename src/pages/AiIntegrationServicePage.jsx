import { Link } from 'react-router-dom';
import { Cpu, Layers, ShieldCheck, Sparkles, ArrowUpRight, Clock, Terminal, Zap, Code } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function AiIntegrationServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 12</div>
            <h1 className="service-title">
              AI Stack <br />
              <span className="outline-text">Integration</span>
            </h1>
            <p className="service-hero-desc">
              We integrate advanced Large Language Models, generative AI APIs, and smart machine learning features into your existing software and SaaS products.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start AI integration</span>
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
              <div className="stat-val">3 - 6 Weeks</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">MODEL ENGINES</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">OpenAI / Claude / Gemini</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">API LATENCY</span>
                <Zap className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Streaming Responses</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">INTEGRATION CODE</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Clean Wrapper Gates</div>
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
                <Code size={24} />
              </div>
              <h3 className="deliverable-title">Custom LLM Connectors</h3>
              <p className="deliverable-desc">
                API integration wrappers that connect GPT or Claude, configuring streaming token outputs, custom temperature variables, and safety guardrails.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Sparkles size={24} />
              </div>
              <h3 className="deliverable-title">Generative Visual Modules</h3>
              <p className="deliverable-desc">
                Automated graphic generation pipelines using Stable Diffusion or DALL-E APIs, rendering content inside your product interface.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Cpu size={24} />
              </div>
              <h3 className="deliverable-title">AI Search & Filters</h3>
              <p className="deliverable-desc">
                Embedding-based search algorithms that map word similarities, providing users with context-rich search recommendations.
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
                <h3 className="workflow-step-title">Stack Audit & Prompt Blueprint</h3>
                <p className="workflow-step-desc">
                  We audit your database architecture, define target AI triggers, structure system instructions, and outline prompt variables.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">API Connection Wrappers</h3>
                <p className="workflow-step-desc">
                  We write backend functions to query model endpoints, handling rate limits, retry logs, token counting, and caching.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Vector Storage Integration</h3>
                <p className="workflow-step-desc">
                  We configure embedding processes, setting up vector database tables to query relevant data segments before LLM queries.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Testing & Token Limits</h3>
                <p className="workflow-step-desc">
                  We run security test logs, enforce prompt injection limits, setup custom usage alerts to prevent high costs, and deploy.
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
              <h2 className="section-main-title">Smart features. Secure API.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe AI should add value, not visual bloat. We build lightweight integrations that fetch streaming tokens rapidly and manage costs effectively.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Optimized Response Times</h4>
                  <p>We implement response token streaming and visual placeholder elements, keeping perceived API delays near zero.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Token Cost Control</h4>
                  <p>We set up custom system request caching mechanisms, reducing redundant LLM API calls and lowering operational costs.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Safety Guardrails</h4>
                  <p>We configure moderation checkpoints, preventing prompt injections and model failures inside customer-facing widgets.</p>
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
