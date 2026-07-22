import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import './Hero.css';

const clientAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={heroRef}
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing Vibrant Lime Green Mouse Spotlight Pointer */}
      <div
        className={`spotlight-glow ${isHovered ? 'active' : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      <div className="container relative z-10">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="badge-dot" />
            <span className="badge-text">PREMIER DIGITAL AGENCY</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="desktop-title-break">
              Smarter digital<br />
              marketing. Better<br />
              <span className="text-lime">results.</span>
            </span>
            <span className="mobile-title-break">
              Smarter Digital<br />
              Marketing.<br />
              Better <span className="text-lime">results.</span>
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            FOUROVR is a leading digital marketing agency. We deliver SEO, web development, paid ads, and growth campaigns that rank you higher and convert more customers.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-hero-lime">
              <span>Book consultation</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/services" className="btn-hero-outline">
              <span>View services</span>
            </Link>
          </motion.div>

          {/* Bottom Stats & Client Avatars Row */}
          <motion.div
            className="hero-bottom-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">YEARS EXP.</span>
            </div>

            <div className="stat-divider" />

            <div className="stat-item">
              <span className="stat-num">95+</span>
              <span className="stat-label">PROJECTS DONE</span>
            </div>

            <div className="stat-divider" />

            <div className="avatars-group">
              <div className="avatars-stack">
                {clientAvatars.map((url, idx) => (
                  <img key={idx} src={url} alt="Client Avatar" className="avatar-img" />
                ))}
              </div>
              <div className="avatars-rating">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#c7ff24" color="#c7ff24" />
                  ))}
                </div>
                <span className="rating-text">4.9/5 Client Rating</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
