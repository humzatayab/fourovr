import { Bot, Sliders, Zap, MessageSquare } from 'lucide-react';
import CallToActionSection from '../components/CallToActionSection';

export default function AIAutomationServicePage() {
  return (
    <div className="service-page-container" style={{ paddingTop: '7rem', backgroundColor: '#070807', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Service Hero */}
        <div style={{ textTransform: 'uppercase', color: '#c7ff24', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '1rem' }}>
          ( SERVICE 04 )
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.02, marginBottom: '1.5rem' }}>
          AI Automations & <span style={{ color: '#c7ff24' }}>Chatbots</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', color: '#a1a1aa', maxWidth: '680px', lineHeight: 1.6, marginBottom: '3rem' }}>
          Automate customer support, lead capture, CRM updates, and internal business workflows with 24/7 intelligent AI agents powered by Groq Llama-3 & Gemini.
        </p>

        {/* Deliverables Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Bot size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>24/7 AI Sales Chatbots</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Custom-trained LLM widgets for instant web & WhatsApp customer responses.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Sliders size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Make / Zapier Automations</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Automated invoicing, email notifications, and HubSpot/Notion CRM sync.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem' }}>
            <Zap size={24} style={{ color: '#c7ff24', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Workflow Efficiency</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.5 }}>Save 20+ hours per week by eliminating manual data entry and repetitive tasks.</p>
          </div>
        </div>
      </div>

      <CallToActionSection />
    </div>
  );
}
