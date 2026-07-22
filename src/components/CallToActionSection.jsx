import { ArrowUpRight } from 'lucide-react';
import './CallToActionSection.css';
import { Link } from 'react-router-dom';
import flogoImg from '../assets/Flogo.png';

export default function CallToActionSection() {
  return (
    <section className="cta-wrapper-section">
      {/* Lime Banner */}
      <div className="cta-banner">
        <div className="cta-watermark">
          <img src={flogoImg} alt="FOUROVR Watermark Logo" className="cta-flogo-img" />
        </div>

        <div className="container relative z-10">
          <div className="cta-content">
            <div className="cta-tagline">START THE CONVERSATION</div>

            <h2 className="cta-heading">
              <span className="desktop-cta-title">Let's build your<br />digital future.</span>
              <span className="mobile-cta-title">Let's build<br />your digital<br />future.</span>
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
