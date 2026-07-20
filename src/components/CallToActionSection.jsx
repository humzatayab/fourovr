import { ArrowUpRight } from 'lucide-react';
import './CallToActionSection.css';
import { Link } from 'react-router-dom';

export default function CallToActionSection() {
  return (
    <section className="cta-wrapper-section">
      {/* Lime Banner */}
      <div className="cta-banner">
        <div className="cta-watermark">
          <svg viewBox="0 0 100 100" fill="none" width="400" height="400">
            <g stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
              <path d="M30 31 L44 49" />
              <path d="M61 28 L44 49" />
              <path d="M44 49 L32 70" />
            </g>
            <rect x="19" y="20" width="22" height="22" rx="7.5" fill="currentColor" />
            <rect x="46" y="13" width="30" height="30" rx="10" fill="currentColor" />
            <rect x="33" y="38" width="22" height="22" rx="7.5" fill="currentColor" />
            <rect x="21" y="59" width="22" height="22" rx="7.5" fill="currentColor" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="cta-content">
            <div className="cta-tagline">START THE CONVERSATION</div>

            <h2 className="cta-heading">
              Let's build your<br />
              digital future.
            </h2>

            <div className="cta-bottom-row">
              <p className="cta-subtext">
                Book a free, no-pressure consultation. We'll show you exactly where the biggest growth opportunities are.
              </p>

              <div className="cta-buttons">

                <Link to="/contact" className="btn-cta-dark">
                  <span>Book consultation</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link to="/services" className="btn-cta-outline">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
