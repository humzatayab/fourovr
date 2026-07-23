import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, Menu, X, Sparkles, ChevronDown,
  Palette, Code2, Zap, Megaphone,
  PenTool, Layers, Globe, ShoppingCart,
  Bot, Workflow, BarChart3, Mail,
  Monitor, Smartphone, Layout, Camera
} from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const megaMenuData = [
  {
    category: 'Creative',
    icon: Palette,
    color: '#ff6b9d',
    gradient: 'linear-gradient(135deg, rgba(255,107,157,0.15), rgba(255,107,157,0.03))',
    description: 'Bold visuals that leave a mark',
    links: [
      { label: 'Brand Identity', icon: PenTool, to: '/services/graphic-design', desc: 'Logos, colors & brand systems' },
      { label: 'UI/UX Design', icon: Layout, to: '/services/graphic-design', desc: 'Interfaces people love to use' },
      { label: 'Motion & 3D', icon: Layers, to: '/services/graphic-design', desc: 'Animation & 3D experiences' },
      { label: 'Photography', icon: Camera, to: '/services/graphic-design', desc: 'Visual storytelling through lens' },
    ],
  },
  {
    category: 'Development',
    icon: Code2,
    color: '#c7ff24',
    gradient: 'linear-gradient(135deg, rgba(199,255,36,0.15), rgba(199,255,36,0.03))',
    description: 'Engineered for performance',
    links: [
      { label: 'Web Development', icon: Globe, to: '/services/web-development', desc: 'Fast, scalable web apps' },
      { label: 'Mobile Apps', icon: Smartphone, to: '/services/web-development', desc: 'iOS & Android development' },
      { label: 'E-Commerce', icon: ShoppingCart, to: '/services/web-development', desc: 'Stores that convert' },
      { label: 'Desktop Apps', icon: Monitor, to: '/services/web-development', desc: 'Cross-platform software' },
    ],
  },
  {
    category: 'Automations',
    icon: Zap,
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(167,139,250,0.03))',
    description: 'Scale smarter with AI',
    links: [
      { label: 'AI Agents', icon: Bot, to: '/services/ai-automation', desc: 'Custom AI assistants' },
      { label: 'Workflow Automation', icon: Workflow, to: '/services/ai-automation', desc: 'Eliminate repetitive tasks' },
      { label: 'Data Pipelines', icon: BarChart3, to: '/services/ai-automation', desc: 'Smart data processing' },
      { label: 'AI Integration', icon: Zap, to: '/services/ai-automation', desc: 'Embed AI into your stack' },
    ],
  },
  {
    category: 'Marketing',
    icon: Megaphone,
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.03))',
    description: 'Grow your audience fast',
    links: [
      { label: 'Social Media', icon: Megaphone, to: '/services/marketing', desc: 'Content that goes viral' },
      { label: 'SEO & Growth', icon: BarChart3, to: '/services/marketing', desc: 'Rank higher, grow faster' },
      { label: 'Email Campaigns', icon: Mail, to: '/services/marketing', desc: 'Nurture & convert leads' },
      { label: 'Paid Ads', icon: Globe, to: '/services/marketing', desc: 'High-ROI ad campaigns' },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const megaMenuRef = useRef(null);
  const servicesRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleServicesEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const handleMegaMenuEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const handleMegaMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const activeData = megaMenuData[activeCategory];

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
            {/* Services with Mega Menu */}
            <div
              className="services-trigger"
              ref={servicesRef}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <span className={`services-btn ${isMegaMenuOpen ? 'active' : ''}`}>
                Services
                <ChevronDown
                  size={14}
                  className={`services-chevron ${isMegaMenuOpen ? 'rotated' : ''}`}
                />
              </span>
            </div>

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

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div
          className="mega-menu-backdrop"
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="mega-menu-wrapper animate-mega-drop">
            {/* Left: Category Tabs */}
            <div className="mega-menu-sidebar">
              <p className="mega-menu-sidebar-label">Our Services</p>
              {megaMenuData.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.category}
                    className={`mega-cat-tab ${activeCategory === i ? 'mega-cat-tab--active' : ''}`}
                    style={{
                      '--cat-color': cat.color,
                    }}
                    onMouseEnter={() => setActiveCategory(i)}
                  >
                    <span
                      className="mega-cat-icon-wrap"
                      style={{ background: `${cat.color}22` }}
                    >
                      <Icon size={16} style={{ color: cat.color }} />
                    </span>
                    <span className="mega-cat-label">{cat.category}</span>
                    <ChevronDown size={13} className="mega-cat-arrow" />
                  </button>
                );
              })}

              <div className="mega-sidebar-footer">
                <Link to="/services" className="mega-all-services-btn">
                  View All Services
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: Links Panel */}
            <div
              className="mega-menu-panel"
              key={activeCategory}
              style={{ background: activeData.gradient }}
            >
              <div className="mega-panel-header">
                <div
                  className="mega-panel-icon"
                  style={{ background: `${activeData.color}22`, borderColor: `${activeData.color}33` }}
                >
                  {(() => {
                    const Icon = activeData.icon;
                    return <Icon size={20} style={{ color: activeData.color }} />;
                  })()}
                </div>
                <div>
                  <h3 className="mega-panel-title" style={{ color: activeData.color }}>
                    {activeData.category}
                  </h3>
                  <p className="mega-panel-desc">{activeData.description}</p>
                </div>
              </div>

              <div className="mega-panel-links">
                {activeData.links.map((link, idx) => {
                  const LinkIcon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="mega-link-card"
                      style={{ '--delay': `${idx * 50}ms`, '--cat-color': activeData.color }}
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      <span
                        className="mega-link-icon"
                        style={{ background: `${activeData.color}18` }}
                      >
                        <LinkIcon size={15} style={{ color: activeData.color }} />
                      </span>
                      <span className="mega-link-text">
                        <span className="mega-link-label">{link.label}</span>
                        <span className="mega-link-subdesc">{link.desc}</span>
                      </span>
                      <ArrowUpRight size={13} className="mega-link-arrow" />
                    </Link>
                  );
                })}
              </div>

              <div className="mega-panel-cta">
                <Link
                  to="/contact"
                  className="mega-cta-btn"
                  style={{ '--cat-color': activeData.color }}
                  onClick={() => setIsMegaMenuOpen(false)}
                >
                  <Sparkles size={14} />
                  Get a Free Consultation
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

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

              {/* Mobile Services Submenu */}
              <div className="mobile-services-grid">
                {megaMenuData.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.category}
                      to="/services"
                      className="mobile-service-chip"
                      style={{ '--cat-color': cat.color }}
                      onClick={closeMobileMenu}
                    >
                      <Icon size={13} style={{ color: cat.color }} />
                      <span>{cat.category}</span>
                    </Link>
                  );
                })}
              </div>

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
