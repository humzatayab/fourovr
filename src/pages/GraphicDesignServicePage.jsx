import { Link } from 'react-router-dom';
import { Palette, Sparkles, Image, Video, ShieldCheck } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';

export default function GraphicDesignServicePage() {
  return (
    <div className="service-page-container" style={{ paddingTop: '7rem', backgroundColor: '#070807', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Service Hero */}
        <div style={{ textTransform: 'uppercase', color: '#c7ff24', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '1rem' }}>
          ( SERVICE 02 )
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.02, marginBottom: '1.5rem' }}>
          Graphic Design & <span style={{ color: '#c7ff24' }}>Branding</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', color: '#a1a1aa', maxWidth: '680px', lineHeight: 1.6, marginBottom: '3rem' }}>
          Stand out from competitors with eye-catching visual identity, high-converting social media creatives, motion reels, and full brand design systems.
        </p>

        {/* Deliverables Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Image size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Social Media Creatives</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Static post designs, carousel ads, and brand promotional graphics.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Video size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Motion Reels & Video</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Animated Instagram reels, TikTok motion ads, and dynamic video edits.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Palette size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Brand Identity Guidelines</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Logos, color palettes, typography, and full corporate style guides.</p>
          </div>
        </div>
      </div>

      <CallToActionSection />
    </div>
  );
}
