import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Code, ShieldCheck, Zap, Layers, Cpu } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';

export default function WebDevServicePage() {
  return (
    <div className="service-page-container" style={{ paddingTop: '7rem', backgroundColor: '#070807', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Service Hero */}
        <div style={{ textTransform: 'uppercase', color: '#c7ff24', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '1rem' }}>
          ( SERVICE 01 )
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.02, marginBottom: '1.5rem' }}>
          Web Development & <span style={{ color: '#c7ff24' }}>Web Apps</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', color: '#a1a1aa', maxWidth: '680px', lineHeight: 1.6, marginBottom: '3rem' }}>
          We engineer fast, responsive, conversion-focused websites and complex MERN Stack web applications tailored to scale your brand.
        </p>

        {/* Deliverables Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Zap size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Speed 95+ Score</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Ultra-fast load speeds using modern Vite, React, and serverless architectures.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Layers size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Custom UX / UI</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>100% custom-tailored user interfaces with smooth Framer Motion micro-interactions.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Cpu size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>MERN & Shopify</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Custom databases, MongoDB API backends, and full Shopify store setups.</p>
          </div>
        </div>
      </div>

      <CallToActionSection />
    </div>
  );
}
