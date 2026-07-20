import { useLocation } from 'react-router-dom';
import './PageHeaderGlow.css';

export default function PageHeaderGlow() {
  const { pathname } = useLocation();

  // Do not render on Home page
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="page-header-glow-wrapper">
      {/* Subtle Math Grid Overlay */}
      <div className="math-grid-overlay" />
      {/* Top Ambient Lime Glow */}
      <div className="top-lime-glow" />
    </div>
  );
}
