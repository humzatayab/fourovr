import { Link } from 'react-router-dom';
import { Bot, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, Target } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function AiAgentsServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 09</div>
            <h1 className="service-title">
              AI Agents & <br />
              <span className="outline-text">Chatbots</span>
            </h1>
            <p className="service-hero-desc">
              We design and deploy custom, autonomous AI agents and conversational chatbots integrated with LLMs to automate support, sales, and internal processes.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Deploy AI Agent</span>
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
                <span className="stat-label">MODEL ENGINES</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">GPT-4 / Claude 3 / Llama 3</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">SUPPORT SCOPE</span>
                <Bot className="stat-icon" size={18} />
              </div>
              <div className="stat-val">24/7 Auto Execution</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">ACCURACY FOCUS</span>
                <Target className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Custom RAG & Vectors</div>
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
                <Bot size={24} />
              </div>
              <h3 className="deliverable-title">Custom Support Chatbots</h3>
              <p className="deliverable-desc">
                AI support chat widgets integrated with website frontends, WhatsApp, or Slack to resolve up to 70% of common queries instantly.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Cpu size={24} />
              </div>
              <h3 className="deliverable-title">Autonomous Action Agents</h3>
              <p className="deliverable-desc">
                Task agents capable of triggering API actions, querying local databases, booking appointments, and compiling custom customer emails.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Target size={24} />
              </div>
              <h3 className="deliverable-title">Vector RAG Databases</h3>
              <p className="deliverable-desc">
                Custom document ingestion engines that parse local FAQs, training manuals, and product sheets, embedding data into Pinecone or pgvector.
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
                <h3 className="workflow-step-title">Persona & Tool Strategy</h3>
                <p className="workflow-step-desc">
                  We define system prompt instructions, establish agent tone controls, outline database capabilities, and configure tool calling routes.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Knowledge Embedding</h3>
                <p className="workflow-step-desc">
                  We import company instruction files, split raw text, generate database embeddings, and upload to cloud vector database channels.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Logic & API Programming</h3>
                <p className="workflow-step-desc">
                  We write API wrapper functions, implement check logic systems, configure state parameters (LangChain/LlamaIndex), and code widgets.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Integration & Release</h3>
                <p className="workflow-step-desc">
                  We link the agent with live channels (WhatsApp, Slack, Web Widget), audit security keys, test responses, and deploy live.
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
              <h2 className="section-main-title">Intelligent. Autonomous.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We build AI that doesn't hallucinate. By grounding responses in custom company knowledge structures, we guarantee high support accuracy.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Zero Hallucination Focus</h4>
                  <p>Our retrieval-augmented generation (RAG) structures limit models to company data parameters, preventing false claims.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Actionable Tool Hooking</h4>
                  <p>Agents execute complex CRM lookups, sync calendar meetings, and process client invoice records on autopilot.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Secure Data Silos</h4>
                  <p>Client conversations, local document embeddings, and model prompt configurations are secured on isolated server nodes.</p>
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
