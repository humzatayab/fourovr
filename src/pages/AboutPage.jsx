import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Palette, Bot, TrendingUp, ArrowLeft, ArrowRight, Users, Smartphone, Video, Box } from 'lucide-react';
import './AboutPage.css';
import atiq from '../assets/Team/atique.png';
import hamza from '../assets/Team/hamza.png';
import mohsin from '../assets/Team/mohsin.png';
import zain_dev from '../assets/Team/zain-dev.png';
import soban from '../assets/Team/soban.png';

const stats = [
  { value: '10+', label: 'Projects & brands scaled' },
  { value: '95+', label: 'Avg. Lighthouse score' },
  { value: '4.9/5', label: 'Client satisfaction' },
  { value: '3yrs', label: 'Driving brand growth' }
];

const values = [
  {
    id: '01',
    title: 'Innovation',
    desc: 'Pushing boundaries using the latest web tech, AI automations, and modern design standards.'
  },
  {
    id: '02',
    title: 'Transparency',
    desc: 'Clear pricing, zero hidden fees, and honest performance reporting on every metric.'
  },
  {
    id: '03',
    title: 'Results',
    desc: 'Obsessed with real business outcomes. We engineer for conversions, ROAS, and revenue.'
  },
  {
    id: '04',
    title: 'Partnership',
    desc: 'We do not act as distant vendors; we operate as your embedded, fully accountable growth team.'
  },
  {
    id: '05',
    title: 'Continuous Improvement',
    desc: 'Always testing, measuring, and refining to compound your digital performance over time.'
  }
];

const timelineMilestones = [
  {
    year: '2023',
    title: 'The journey begins',
    desc: 'FOUROVR was founded with a mission to deliver high-converting digital marketing & development.'
  },
  {
    year: '2024',
    title: 'Web & mobile expansion',
    desc: 'Expanded core services into full-stack MERN web platforms and native mobile app engineering.'
  },
  {
    year: '2025',
    title: 'AI-powered solutions',
    desc: 'Integrated custom AI workflow automations and performance marketing scale strategies.'
  },
  {
    year: '2026',
    title: 'Scaling globally',
    desc: 'Partnering with ambitious businesses across international markets to drive measurable growth.'
  }
];

const tickerItems = [
  'Website Development',
  'Mobile Apps',
  'SEO',
  'Paid Ads',
  'Branding',
  'UI/UX Design'
];

const teamMembers = [
  {
    name: 'Hamza Tayyab',
    role: 'Founder & Creative Director',
    desc: 'Creative leader with 7 years of professional experience in graphic design, specializing in innovative visual strategies, brand identity, and high-impact digital design projects.',
    meta: 'SKILLS: Creative Direction / Brand Design / Visual Strategy',
    image: hamza,
    icon: Palette
  },
  {
    name: 'Hanzla Madni',
    role: 'Video Editor & Motion Designer',
    desc: 'Creates engaging video content, dynamic motion graphics, and high-quality visual animations for digital platforms.',
    meta: 'EXPERTISE: Video Editing / Motion Graphics',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    icon: Video
  },
  {
    name: 'Usama',
    role: '3D Artist',
    desc: 'Designs and animates high-quality 3D models, environments, and visual effects using Blender, After Effects, and other advanced 3D software.',
    meta: 'TOOLS: Blender / After Effects / 3D',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    icon: Box
  },
  {
    name: 'Muhammad Soban',
    role: 'Head of Growth',
    desc: 'Drives scalable business growth through high-converting paid media strategies, specializing in Meta Ads, TikTok Ads, and Google Ads.',
    meta: 'EXPERTISE: Meta Ads / TikTok Ads / Google Ads',
    image: soban,
    icon: TrendingUp
  },
  {
    name: 'Zain',
    role: 'Senior MERN Stack Developer',
    desc: 'Builds robust and scalable full-stack web applications, specializing in MongoDB, Express.js, React, and Node.js architecture.',
    meta: 'STACK: MongoDB / Express / React / Node',
    image: zain_dev,
    icon: Code2
  },
  {
    name: 'Atiq Malik',
    role: 'Junior Graphic Designer',
    desc: 'Assists in creating engaging visual content, designing social media graphics, and maintaining consistent brand aesthetics.',
    meta: 'SKILLS: Visual Design / Social Media Graphics',
    image: atiq,
    icon: Palette
  },
  {
    name: 'Mohsin',
    role: 'Social Media Manager',
    desc: 'Manages social media presence, develops engaging content calendars, and builds active online communities across digital platforms.',
    meta: 'EXPERTISE: Content Strategy / Community Management',
    image: mohsin,
    icon: Smartphone
  },
  {
    name: 'Kiran',
    role: 'Client & Lead Manager',
    desc: 'Manages inbound leads, handles client communications, and ensures smooth onboarding and excellent customer relations.',
    meta: 'EXPERTISE: Client Relations / Lead Management',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
    icon: Users
  }
];

export default function AboutPage() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, teamMembers.length - 4));
  };

  return (
    <div className="about-page-wrapper">
      {/* 1. About Hero Header */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-badge text-lime">( ABOUT US )</div>
          <h1 className="about-hero-title">
            Building digital<br />
            solutions that<br />
            drive growth.
          </h1>
          <p className="about-hero-subtitle">
            FOUROVR helps businesses build websites, mobile apps, and digital marketing systems that create measurable business growth.
          </p>
        </div>
      </section>

      {/* 2. Agency Overview & Photo */}
      <section className="about-overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-left">
              <h2 className="overview-statement">
                We're a digital agency obsessed with one thing: turning digital into measurable growth for the businesses we partner with.
              </h2>
            </div>

            <div className="overview-right">
              <div className="team-image-container">
                <img src="/about-team.png" alt="FOUROVR Agency Team" className="team-img" />
                <div className="team-pill">DESIGN &middot; DEV &middot; MARKETING</div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="about-stat-card">
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-left">
              <div className="about-badge text-lime">( OUR VISION )</div>
              <h2 className="vision-quote">
                To eliminate digital bloat, double output with AI, and engineer clean code that converts.
              </h2>
            </div>
            <div className="vision-right">
              <p>
                We envision a digital landscape where websites are ultra-fast, user interfaces are clean, and software automations handle repetitive overheads to multiply developer output.
              </p>
              <p>
                Our team coordinates visual identity designers, full-stack programmers, and growth managers into a unified ecosystem to design custom systems that scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Stand For (Values Grid - Light Paper Theme) */}
      <section className="about-values-section">
        <div className="container">
          <div className="values-header">
            <div className="values-badge">( OUR VALUES )</div>
            <h2 className="values-title">What we<br />stand for</h2>
          </div>

          <div className="values-grid">
            {values.map((v) => (
              <div key={v.id} className="value-card">
                <div className="value-id">{v.id}</div>
                <h3 className="value-card-title">{v.title}</h3>
                <p className="value-card-desc">{v.desc}</p>
              </div>
            ))}

            {/* Featured Principle Dark Card */}
            <div className="value-card principle-dark-card">
              <h3 className="principle-text">
                Five principles, <span className="text-lime">one promise:</span> your growth, measured.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Road So Far (Timeline) */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="timeline-header">
            <div className="timeline-badge text-lime">( OUR JOURNEY )</div>
            <h2 className="timeline-title">The road so far</h2>
          </div>

          <div className="timeline-grid">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className={`timeline-card milestone-${idx + 1}`}>
                <div className="milestone-year-row">
                  <span className="milestone-year">{m.year}</span>
                  <span className="milestone-dot" />
                </div>
                <h3 className="milestone-title">{m.title}</h3>
                <p className="milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section">
        <div className="container">
          <div className="team-header-row">
            <div className="team-header-left">
              <div className="team-badge">( OUR TEAM )</div>
              <h2 className="team-title">The brains behind<br />the screens</h2>
            </div>
            <div className="team-nav-buttons">
              <button
                onClick={handlePrev}
                className="team-nav-btn"
                disabled={startIndex === 0}
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="team-nav-btn"
                disabled={startIndex === teamMembers.length - 4}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="team-accordion-wrapper">
            <div
              className="team-accordion-track"
              style={{ transform: `translateX(calc(-${startIndex} * (25% + 0.3125rem)))` }}
            >
              {teamMembers.map((member, idx) => {
                const Icon = member.icon;
                return (
                  <div
                    key={idx}
                    className="team-accordion-panel"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    <div className="panel-overlay"></div>
                    <div className="panel-content">
                      <div className="panel-header-icon">
                        <Icon size={18} />
                      </div>
                      <div className="panel-main-info">
                        <h3 className="panel-name">{member.name}</h3>
                        <span className="panel-role">{member.role}</span>
                      </div>
                      <div className="panel-expanded-details">
                        <p className="panel-desc">{member.desc}</p>
                        <div className="panel-meta">{member.meta}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Next Chapter Call to Action Banner */}
      <section className="about-cta-section">
        <div className="about-cta-banner">
          <div className="cta-watermark">
            <svg viewBox="0 0 100 100" fill="none" width="360" height="360">
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

          <div className="container">
            <div className="cta-tagline">WORK WITH US</div>
            <h2 className="cta-heading">
              Let's write the<br />
              next chapter<br />
              together.
            </h2>

            <div className="cta-bottom-row">
              <p className="cta-subtext">
                We take on a limited number of partners to ensure your project gets 100% dedicated focus.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-cta-dark">
                  <span>Book consultation</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link to="/services" className="btn-cta-outline">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
