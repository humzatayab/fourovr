import { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: '01',
    title: 'Website Development',
    description: 'Fast, responsive, SEO-friendly websites engineered to turn visitors into customers.',
    cardBg: '#c7ff24',
    cardText: '#0a0b0a'
  },
  {
    id: '02',
    title: 'Workflow Automation',
    description: 'Smart automated systems and workflows that streamline your business operations and save hours of manual work.',
    cardBg: '#3b82f6', // Aap chahein toh color apni marzi se change kar sakte hain
    cardText: '#ffffff'
  },
  {
    id: '03',
    title: 'Graphic Designing & Branding',
    description: 'Eye-catching visual identity, logo design, UI/UX, AI-powered marketing creatives, and post designs.',
    cardBg: '#a855f7',
    cardText: '#ffffff'
  },
  {
    id: '04',
    title: 'Shopify Store & AI Automations',
    description: 'Full Shopify store creation, custom theme modifications, AI order & catalog management.',
    cardBg: '#f97316',
    cardText: '#ffffff'
  },
  {
    id: '05',
    title: 'Custom MERN Stack Websites',
    description: 'High-performance, scalable custom web applications built with MongoDB, Express, React, and Node.js.',
    cardBg: '#06b6d4',
    cardText: '#0a0b0a'
  },
  {
    id: '06',
    title: 'Meta Ads & Paid Campaigns',
    description: 'Targeted Facebook, Instagram, and Google ad campaigns optimized for maximum ROAS.',
    cardBg: '#f43f5e',
    cardText: '#ffffff'
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const listRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section id="services" className="fullstack-growth-section">
      <div className="container">
        {/* Header Row */}
        <div className="growth-header">
          <h2 className="growth-title">
            Full-stack<br />
            digital growth
          </h2>
          <Link to="/services" className="btn-all-services">
            <span>All services</span>
            <ArrowUpRight className="btn-icon" size={18} />
          </Link>
        </div>

        {/* Services Accordion List */}
        <div
          ref={listRef}
          className="growth-list"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {servicesData.map((item, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <div
                key={item.id}
                className={`growth-row ${isHovered ? 'active' : ''}`}
                onMouseEnter={() => setHoveredIdx(index)}
              >
                <div className="row-left">
                  <span className="row-id">{item.id}</span>
                  <h3 className="row-title">{item.title}</h3>
                </div>

                <div className="row-right">
                  <p className="row-desc">{item.description}</p>
                  <div className="row-arrow">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mouse-Following Floating Preview Card */}
          {hoveredIdx !== null && (
            <div
              className="mouse-floating-card"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
                backgroundColor: servicesData[hoveredIdx].cardBg,
                color: servicesData[hoveredIdx].cardText
              }}
            >
              <div className="preview-card-header">
                <span>{servicesData[hoveredIdx].id} / SERVICE</span>
              </div>

              <div className="preview-card-watermark">
                <svg viewBox="0 0 100 100" fill="none" width="70" height="70">
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="8" opacity="0.3" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.6" />
                  <g stroke="currentColor" strokeWidth="10" strokeLinecap="round">
                    <path d="M30 31 L44 49 M61 28 L44 49 M44 49 L32 70" />
                  </g>
                </svg>
              </div>

              <div className="preview-card-title">
                {servicesData[hoveredIdx].title}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
