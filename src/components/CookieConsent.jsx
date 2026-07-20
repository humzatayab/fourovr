import { useState, useEffect } from 'react';
import './CookieConsent.css';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('fourovr_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('fourovr_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('fourovr_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p className="cookie-text">
          We use cookies to improve your experience and analyse traffic. See our{' '}
          <a href="#privacy" className="privacy-link">
            privacy policy
          </a>
          .
        </p>
        <div className="cookie-actions">
          <button onClick={handleDecline} className="btn-decline">
            Decline
          </button>
          <button onClick={handleAccept} className="btn-accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
