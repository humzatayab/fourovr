import { useState, useEffect } from 'react';
import logoIcon from '../../public/loading.png';
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
        <div className="preloader-logo">
          <img src={logoIcon} alt="FOUROVR Favicon" className="preloader-fav-img" />
        </div>
        <div className="preloader-counter">{progress}</div>
        <div className="preloader-label">L O A D I N G</div>
      </div>
    </div>
  );
}
