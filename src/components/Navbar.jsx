import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="FOUROVR Logo"
            className="logo-img"
            style={{ height: '40px', width: 'auto' }} // Logo ka size yahan se control kar sakte hain
          />
        </Link>

        <div className="navbar-links desktop-only">
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div className="navbar-actions">
          <Link to="/contact" className="btn-primary desktop-only">
            <span>Book a call</span>
            <ArrowUpRight className="btn-icon" size={18} />
          </Link>
          <button className="mobile-menu-btn mobile-only" aria-label="Toggle menu">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
