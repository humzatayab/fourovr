import { useEffect, useRef, useState } from 'react';
import './CollideSection.css';

export default function CollideSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) return;

      // Calculate progress relative to when section is pinned
      const currentScroll = -rect.top;
      let progress = currentScroll / totalScrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Phase 1: Entry (0.0 -> 0.4) - "Let's" comes from left (-60vw -> 0), "build" from right (+60vw -> 0)
  // Phase 2: Collision & Crack (0.4 -> 0.65) - They meet in center and crack lines appear
  // Phase 3: Shatter & Explode (0.65 -> 1.0) - Broken pieces split and scatter apart

  let leftTranslate = 0;
  let rightTranslate = 0;
  let shatterFactor = 0;
  let subtitleOpacity = 0;

  if (scrollProgress < 0.4) {
    const entryRatio = 1 - scrollProgress / 0.4;
    leftTranslate = entryRatio * -55; // in vw
    rightTranslate = entryRatio * 55; // in vw
  } else if (scrollProgress >= 0.4 && scrollProgress < 0.65) {
    leftTranslate = 0;
    rightTranslate = 0;
    const impactRatio = (scrollProgress - 0.4) / 0.25;
    shatterFactor = impactRatio * 0.8;
    subtitleOpacity = Math.min(1, impactRatio * 1.5);
  } else {
    leftTranslate = 0;
    rightTranslate = 0;
    const shatterProgress = (scrollProgress - 0.65) / 0.35;
    shatterFactor = 0.8 + shatterProgress * 2.5;
    subtitleOpacity = Math.max(0, 1 - shatterProgress * 1.2);
  }

  return (
    <section ref={sectionRef} className="collide-section">
      <div className="collide-sticky-wrapper">
        <div className="collide-container">
          
          {/* Main Colliding Words Wrapper */}
          <div className="words-wrapper">

            {/* Normal / Approaching State (before shatter takes over) */}
            <div
              className="approaching-words"
              style={{
                opacity: shatterFactor > 0.05 ? 0 : 1,
                transition: 'opacity 0.1s ease'
              }}
            >
              <span
                className="word-lets"
                style={{ transform: `translateX(${leftTranslate}vw)` }}
              >
                Let's
              </span>
              <span
                className="word-build"
                style={{ transform: `translateX(${rightTranslate}vw)` }}
              >
                build
              </span>
            </div>

            {/* Shattered / Broken Layers (Active during collision & shatter) */}
            {shatterFactor > 0.05 && (
              <div className="shattered-layers">
                {/* Layer 1 - Top Slice */}
                <div
                  className="shatter-layer layer-1"
                  style={{
                    transform: `translate(${-shatterFactor * 30}px, ${-shatterFactor * 35}px) rotate(${-shatterFactor * 3.5}deg)`
                  }}
                >
                  <span className="word-lets">Let's</span>
                  <span className="word-build">build</span>
                </div>

                {/* Layer 2 - Middle-Upper Slice */}
                <div
                  className="shatter-layer layer-2"
                  style={{
                    transform: `translate(${shatterFactor * 40}px, ${-shatterFactor * 12}px) rotate(${shatterFactor * 2.5}deg)`
                  }}
                >
                  <span className="word-lets">Let's</span>
                  <span className="word-build">build</span>
                </div>

                {/* Layer 3 - Middle-Lower Slice */}
                <div
                  className="shatter-layer layer-3"
                  style={{
                    transform: `translate(${-shatterFactor * 45}px, ${shatterFactor * 20}px) rotate(${-shatterFactor * 4}deg)`
                  }}
                >
                  <span className="word-lets">Let's</span>
                  <span className="word-build">build</span>
                </div>

                {/* Layer 4 - Bottom Slice */}
                <div
                  className="shatter-layer layer-4"
                  style={{
                    transform: `translate(${shatterFactor * 35}px, ${shatterFactor * 45}px) rotate(${shatterFactor * 5}deg)`
                  }}
                >
                  <span className="word-lets">Let's</span>
                  <span className="word-build">build</span>
                </div>

                {/* Crack Line Accents */}
                <div
                  className="crack-line line-1"
                  style={{ opacity: Math.min(1, shatterFactor * 1.5) }}
                />
                <div
                  className="crack-line line-2"
                  style={{ opacity: Math.min(1, shatterFactor * 1.5) }}
                />
              </div>
            )}
          </div>

          {/* Subtitle / Tagline below */}
          <div
            className="collide-subtitle"
            style={{ opacity: subtitleOpacity }}
          >
            &#123; WHERE AMBITION MEETS EXECUTION &#125;
          </div>

        </div>
      </div>
    </section>
  );
}
