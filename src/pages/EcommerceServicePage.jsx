import { Link } from 'react-router-dom';
import { ShoppingBag, Layers, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Clock, Terminal, MousePointerClick } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function EcommerceServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 07</div>
            <h1 className="service-title">
              E-Commerce <br />
              <span className="outline-text">Store Design</span>
            </h1>
            <p className="service-hero-desc">
              We design and build custom Shopify, WooCommerce, and headless commerce stores optimized for high conversion rates and seamless checkout flows.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Build your store</span>
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
                <span className="stat-label">PLATFORMS</span>
                <Layers className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Shopify & Headless</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">CONVERSION FOCUS</span>
                <MousePointerClick className="stat-icon" size={18} />
              </div>
              <div className="stat-val">UX & Cart Optimization</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">AUTOMATION</span>
                <Cpu className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Auto Inventory & CRM</div>
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
                <ShoppingBag size={24} />
              </div>
              <h3 className="deliverable-title">Custom Shopify Design</h3>
              <p className="deliverable-desc">
                Completely custom-styled theme templates built using modern styling engines, minimizing app load dependency and optimizing speeds.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <MousePointerClick size={24} />
              </div>
              <h3 className="deliverable-title">Conversion Architecture</h3>
              <p className="deliverable-desc">
                High-converting product grids, streamlined sliding checkout tunnels, persistent cart models, and multi-currency support channels.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Cpu size={24} />
              </div>
              <h3 className="deliverable-title">CRM & Invoicing Sync</h3>
              <p className="deliverable-desc">
                Automatic connection with inventory channels, CRM lead triggers (HubSpot/Klaviyo), localized shipping tax matrix, and custom billing modules.
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
                <h3 className="workflow-step-title">Shop Strategy & Tax setup</h3>
                <p className="workflow-step-desc">
                  We audit product parameters, set up payment options (Stripe/PayPal), structure category systems, and configure localized shipping matrix rules.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Visual Shop Design</h3>
                <p className="workflow-step-desc">
                  We design responsive homepage grids, custom product view layout options, responsive cart panels, and clear checkouts in Figma.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Development & App Setup</h3>
                <p className="workflow-step-desc">
                  We construct code layouts, program custom app widgets, link CRM tracking flows, and prepare pixel variables (Meta/Google).
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Launch & Testing</h3>
                <p className="workflow-step-desc">
                  We run transaction test flows, optimize asset compressions, audit mobile responsiveness speed, and push the DNS settings to go live.
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
              <h2 className="section-main-title">Stores built to sell.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                We believe storefronts are marketing engines. We eliminate visual friction, loading delays, and security warnings to maximize conversion rates.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Optimized Checkout Speed</h4>
                  <p>Our structures guarantee sub-second load speeds, cutting shopping cart abandon rates by up to 30%.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Marketing Tech Ready</h4>
                  <p>We configure server-side pixel integrations and Klaviyo webhooks out of the box, ensuring perfect attribution data for paid ads.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Responsive Multi-Currency</h4>
                  <p>Our layouts format currency, language parameters, and local shipping options based on shopper IP localization automatically.</p>
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
