import { Link } from 'react-router-dom';
import { BarChart3, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, Zap } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function DataPipelinesServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 11</div>
            <h1 className="service-title">
              Data Pipelines & <br />
              <span className="outline-text">Analytics</span>
            </h1>
            <p className="service-hero-desc">
              We construct secure, automated data ingestion pipelines, ETL processes, and real-time dashboard analytics systems to clean and sync your business metrics.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start data project</span>
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
                <span className="stat-label">STACK ENGINE</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Python / SQL / Airflow</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">LOAD LATENCY</span>
                <Zap className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Real-time / Batch Sync</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">SECURITY DATA</span>
                <ShieldCheck className="stat-icon" size={18} />
              </div>
              <div className="stat-val">ISO Encrypted Warehouses</div>
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
                <Layers size={24} />
              </div>
              <h3 className="deliverable-title">ETL Ingestion Pipelines</h3>
              <p className="deliverable-desc">
                Automated extraction scripts written in Python, querying external APIs, scraping web databases, and syncing records safely.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Terminal size={24} />
              </div>
              <h3 className="deliverable-title">Encrypted Data Warehouses</h3>
              <p className="deliverable-desc">
                Setup of structured Google BigQuery, Snowflake, or PostgreSQL warehouses with optimized schemas to process millions of transactions.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <BarChart3 size={24} />
              </div>
              <h3 className="deliverable-title">BI Analytics Dashboards</h3>
              <p className="deliverable-desc">
                Highly visual business intelligence dashboards in Looker Studio or custom React applications showing real-time revenue and user metrics.
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
                <h3 className="workflow-step-title">Audit & Schema Strategy</h3>
                <p className="workflow-step-desc">
                  We audit your scattered business metrics, mapping out database tables and designing clean schemas for analytics dashboards.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Pipeline Connection Code</h3>
                <p className="workflow-step-desc">
                  We write scripts to query APIs, configuring data warehouse credential keys and scheduling cron sequences.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Transformation & Formatting</h3>
                <p className="workflow-step-desc">
                  We configure cleaning rules (using SQL/dbt), removing duplicate rows, organizing currency symbols, and creating structured statistics tables.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Dashboard Sync & Launch</h3>
                <p className="workflow-step-desc">
                  We connect data warehouses to frontends, writing query test scripts, auditing responsiveness, and deploying live panels.
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
              <h2 className="section-main-title">Data you can trust.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe business decisions must be backed by accurate data metrics. We eliminate synchronization gaps and slow queries to give you immediate insights.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Optimized Query Speed</h4>
                  <p>We build optimized indexes and partition parameters, reducing database query times from minutes to milliseconds.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>ISO Standard Security</h4>
                  <p>All database tables utilize AES security, strict role-based access tokens, and automated hourly data backups.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Unified Analytics Hub</h4>
                  <p>We combine Shopify sales, Meta Ads costs, and CRM logs into a single centralized dashboard, revealing clear ROI metrics.</p>
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
