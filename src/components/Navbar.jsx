import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';
import logodp from '../assets/dp.png';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="navbar-header">
        <nav className="navbar-container">
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="FOUROVR Logo"
              className="logo-img"
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>

          <div className="navbar-links desktop-only">
            <Link to="/services">Services</Link>
            <Link to="/ai-assistant" className="text-lime">AI Assistant</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="navbar-actions">
            <Link to="/contact" className="btn-primary desktop-only">
              <span>Book a call</span>
              <ArrowUpRight className="btn-icon" size={18} />
            </Link>

            <button
              className="mobile-menu-btn mobile-only"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Side Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-overlay animate-fade-in" onClick={closeMobileMenu}>
          <div
            className="mobile-drawer-content animate-slide-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <div className="drawer-brand">
                <img src={logo} alt="FOUROVR Logo" style={{ height: '34px', width: 'auto' }} />
              </div>
              <button className="drawer-close-btn" onClick={closeMobileMenu} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-nav">
              <Link to="/" className="drawer-nav-item" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to="/services" className="drawer-nav-item" onClick={closeMobileMenu}>
                Services
              </Link>
              <Link to="/ai-assistant" className="drawer-nav-item highlight-ai" onClick={closeMobileMenu}>
                <span>AI Assistant (Nova)</span>
                <Sparkles size={16} className="text-lime" />
              </Link>
              <Link to="/work" className="drawer-nav-item" onClick={closeMobileMenu}>
                Work / Portfolio
              </Link>
              <Link to="/about" className="drawer-nav-item" onClick={closeMobileMenu}>
                About FOUROVR
              </Link>
              <Link to="/pricing" className="drawer-nav-item" onClick={closeMobileMenu}>
                Packages & Pricing
              </Link>
            </div>

            <div className="mobile-drawer-footer">
              <Link to="/contact" className="btn-drawer-action" onClick={closeMobileMenu}>
                <span>Book a Call</span>
                <ArrowUpRight size={18} />
              </Link>
              <p className="drawer-contact-info">Lahore, Pakistan • fourovr@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
