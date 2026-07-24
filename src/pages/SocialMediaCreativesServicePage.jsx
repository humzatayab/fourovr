import { Link } from 'react-router-dom';
import { Sparkles, Image, ArrowUpRight, Share2, MessageSquare, Layout, Clock, Target, Palette } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function SocialMediaCreativesServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 04</div>
            <h1 className="service-title">
              Social Media <br />
              <span className="outline-text">Creatives</span>
            </h1>
            <p className="service-hero-desc">
              We design high-converting static posts, seamless swipe carousels, and visual templates that turn casual scrollers into loyal followers.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Get social designs</span>
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
              <div className="stat-val">1 - 2 Weeks</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">DELIVERED FORMATS</span>
                <Image className="stat-icon" size={18} />
              </div>
              <div className="stat-val">Figma, Canva, PNG, PDF</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">GOAL FOCUS</span>
                <Target className="stat-icon" size={18} />
              </div>
              <div className="stat-val">CTR, Engagement, Followers</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">BRAND SYNC</span>
                <Palette className="stat-icon" size={18} />
              </div>
              <div className="stat-val">100% Palette Alignment</div>
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
                <Layout size={24} />
              </div>
              <h3 className="deliverable-title">Seamless Swipe Carousels</h3>
              <p className="deliverable-desc">
                Engaging multi-slide storytellers (Instagram/LinkedIn) designed with seamless transitions to increase interaction rates and profile visits.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Image size={24} />
              </div>
              <h3 className="deliverable-title">High-Converting Statics</h3>
              <p className="deliverable-desc">
                Scroll-stopping promotional posts, product feature highlights, client testimonial graphics, and announcements styled to stand out in the feed.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Sparkles size={24} />
              </div>
              <h3 className="deliverable-title">Custom Brand Templates</h3>
              <p className="deliverable-desc">
                Fully editable, organized templates created in Figma or Canva, letting your internal team post updates quickly while keeping the brand consistency.
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
                <h3 className="workflow-step-title">Content & Topic Strategy</h3>
                <p className="workflow-step-desc">
                  We audit your profile goals, determine topics of interest, choose high-value metrics to showcase, and plan the visual themes.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Copywriting & Hook Outline</h3>
                <p className="workflow-step-desc">
                  We outline slides and write copy. We focus on catchy slide titles, clear, readable sentences, and highly visible calls-to-action.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Creative Graphic Design</h3>
                <p className="workflow-step-desc">
                  We lay out the graphics, place relevant mockups/images, configure the typography hierarchy, and add fine brand visual elements.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Review & Asset Handoff</h3>
                <p className="workflow-step-desc">
                  We review color contrast, readability on small screens, adjust according to feedback, and deliver production PNGs and edit links.
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
              <h2 className="section-main-title">Feed optimization.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                Average designs get skipped. We combine data-driven copy with high-end, clean aesthetics that earn attention and build followers.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Scroll-Stopping Layouts</h4>
                  <p>We use high-contrast text layers, sharp imagery, and bold spacing rules that pull visual focus from surrounding clutter in the social feeds.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Copywriting that Sells</h4>
                  <p>We don't just design; we structure copy to address reader pain points, make complex ideas simple, and drive users to take action.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Consistent Visual Authority</h4>
                  <p>Every post reinforces your premium identity by adhering strictly to your brand book's typography, colors, and asset styling guidelines.</p>
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
