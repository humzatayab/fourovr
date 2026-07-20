import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          setTimeout(() => {
            setIsFadingOut(true);
          }, 250);

          setTimeout(() => {
            setIsHidden(true);
            document.body.style.overflow = '';
          }, 950);

          return 100;
        }

        const step = Math.floor(Math.random() * 7) + 5;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className={`preloader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="preloader-glow" />
      
      <div className="preloader-content">
        {/* Logo Icon */}
        <div className="preloader-logo">
          <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" width="28" height="28">
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

        {/* Counter Number */}
        <div className="preloader-counter">{progress}</div>

        {/* Loading Text */}
        <div className="preloader-label">L O A D I N G</div>
      </div>
    </div>
  );
}
