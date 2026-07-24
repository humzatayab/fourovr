import { Link } from 'react-router-dom';
import { Video, Layers, Sparkles, ArrowUpRight, Film, Sliders, Volume2, MonitorPlay, Clock, Zap } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';
import './ServiceDetailPage.css';

export default function VideoMotionServicePage() {
  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-glow"></div>
      
      {/* Service Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-number">Service 03</div>
            <h1 className="service-title">
              Video & <br />
              <span className="outline-text">Motion Graphics</span>
            </h1>
            <p className="service-hero-desc">
              We create high-impact video edits, 2D/3D motion graphics, and engaging visual campaigns engineered to capture attention in the first three seconds.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start video project</span>
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
              <div className="stat-val">1 - 3 Weeks</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">DELIVERED RESOLUTION</span>
                <MonitorPlay className="stat-icon" size={18} />
              </div>
              <div className="stat-val">4K & Full HD (1080p)</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">HOOK OPTIMIZATION</span>
                <Zap className="stat-icon" size={18} />
              </div>
              <div className="stat-val">First 3 Seconds Focus</div>
            </div>
            <div className="service-stat-card">
              <div className="stat-header">
                <span className="stat-label">SOUND SYSTEM</span>
                <Volume2 className="stat-icon" size={18} />
              </div>
              <div className="stat-val">SFX, Licensing, Voiceover</div>
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
                <MonitorPlay size={24} />
              </div>
              <h3 className="deliverable-title">Explainer & Promos</h3>
              <p className="deliverable-desc">
                High-end promotional edits, software walkthroughs, brand stories, and product reveal videos designed to convert leads into customers.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Film size={24} />
              </div>
              <h3 className="deliverable-title">High-Converting Ad Creatives</h3>
              <p className="deliverable-desc">
                Short-form vertical video creatives (9:16) optimized for Meta, TikTok, and YouTube Shorts with custom captions, hook highlights, and sound design.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliverable-icon-wrap">
                <Layers size={24} />
              </div>
              <h3 className="deliverable-title">Motion Design & Assets</h3>
              <p className="deliverable-desc">
                Kinetic typography, custom 2D & 3D vector animations, animated logos, title cards, and lower third overlays matching your brand guidelines.
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
                <h3 className="workflow-step-title">Concept & Scriptwriting</h3>
                <p className="workflow-step-desc">
                  We write high-impact scripts focusing on key audience hooks, clear benefit statements, and interactive call-to-actions.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">02</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Storyboarding & Asset Prep</h3>
                <p className="workflow-step-desc">
                  We draft outline frames, design graphics, prepare vector files, and select licensed background audio or professional voiceovers.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">03</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Animation & Editing</h3>
                <p className="workflow-step-desc">
                  We edit raw clips, apply kinetic typography, render vector animations, and integrate micro-transitions to keep watch rates high.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="workflow-dot">04</div>
              <div className="workflow-card">
                <h3 className="workflow-step-title">Sound Design & Mix</h3>
                <p className="workflow-step-desc">
                  We apply custom sound effects, balance voice and music volumes, run final color grading, and export final files in multiple dimensions.
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
              <h2 className="section-main-title">Attention is currency.</h2>
              <p style={{ color: 'var(--color-paper-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                In a world of infinite scrolls, average edits get ignored. We create content that keeps audiences engaged till the last frame.
              </p>
            </div>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h4>Hook-Centered Editing</h4>
                  <p>We structure visual loops, key questions, and bold graphics in the opening 3 seconds of vertical videos to stop user swipes immediately.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h4>Premium Sound Design</h4>
                  <p>We layer background beats, transition swooshes, impact pops, and click sounds, making videos feel tactile and immersive even on mobile.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h4>Cohesive Brand Theme</h4>
                  <p>Animations, typography sizing, text colors, and lower thirds align with your visual style, reinforcing brand recognition on all channels.</p>
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
