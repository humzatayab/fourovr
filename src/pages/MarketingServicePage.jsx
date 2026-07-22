import { Megaphone, TrendingUp, Target, BarChart2 } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';

export default function MarketingServicePage() {
  return (
    <div className="service-page-container" style={{ paddingTop: '7rem', backgroundColor: '#070807', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Service Hero */}
        <div style={{ textTransform: 'uppercase', color: '#c7ff24', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '1rem' }}>
          ( SERVICE 03 )
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.02, marginBottom: '1.5rem' }}>
          Digital Marketing & <span style={{ color: '#c7ff24' }}>Paid Ads</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', color: '#a1a1aa', maxWidth: '680px', lineHeight: 1.6, marginBottom: '3rem' }}>
          Scale revenue and acquire qualified customers with data-driven Meta & Google ad campaigns, retargeting funnels, and high-conversion copywriting.
        </p>

        {/* Deliverables Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Target size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Meta & Google Ads</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>High-ROAS Facebook, Instagram, and Search Ads built for lead generation.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <TrendingUp size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Conversion Funnels</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Custom landing page funnels, email sequences, and retargeting flows.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <BarChart2 size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Real ROI Dashboards</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Transparent weekly reporting tied directly to revenue and customer acquisition cost.</p>
          </div>
        </div>
      </div>

      <CallToActionSection />
    </div>
  );
}
