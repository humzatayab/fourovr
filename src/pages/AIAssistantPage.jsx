import { useState } from 'react';
import {
  Bot, Sparkles, Zap, ShieldCheck, ArrowUpRight, Cpu, Workflow,
  Globe, BarChart3, MessageSquare, Calendar, CheckCircle2, ArrowRight
} from 'lucide-react';
import BookingModal from '../components/BookingModal';
import './AIAssistantPage.css';

const samplePrompts = [
  '🤖 What tech stack is best for a high-converting e-commerce brand?',
  '⚡ How can AI automation reduce my agency\'s manual workflow by 80%?',
  '📈 What budget & timeline do I need for a 3-month growth marketing campaign?',
  '🎨 How long does a full visual identity & branding revamp take?'
];

const capabilities = [
  {
    icon: Bot,
    title: 'Custom AI Agents & Bots',
    desc: '24/7 client booking, intelligent lead qualification, and automated instant customer support integrated into your stack.',
    tag: 'INTELLIGENCE'
  },
  {
    icon: Workflow,
    title: 'Workflow & API Automation',
    desc: 'Eliminate repetitive manual entry. Auto-sync incoming leads to CRM, generate invoices, and trigger multi-channel drip sequences.',
    tag: 'EFFICIENCY'
  },
  {
    icon: Globe,
    title: 'AI-Enhanced Web Platforms',
    desc: 'Lightning-fast React & Vite web applications embedded with smart AI search, dynamic recommendations, and personalization.',
    tag: 'ENGINEERING'
  },
  {
    icon: Sparkles,
    title: 'Generative Content Engine',
    desc: 'Scale high-ROI ad creatives, social reels scripting, and SEO content production effortlessly with customized AI pipelines.',
    tag: 'CREATIVE'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics & Growth',
    desc: 'Real-time data pipelines tracking Customer Acquisition Cost (CAC), LTV, and campaign ROAS with automated anomaly alerts.',
    tag: 'ANALYTICS'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Data Privacy',
    desc: 'Private LLM deployments, encrypted API architectures, and strict data governance ensuring your business IP remains secure.',
    tag: 'SECURITY'
  }
];

const processSteps = [
  {
    num: '01',
    title: 'Bottleneck Audit',
    desc: 'Nova analyzes your existing web, marketing, and manual operational workflows to pinpoint high-ROI automation opportunities.'
  },
  {
    num: '02',
    title: 'Architect Blueprint',
    desc: 'We design a custom AI architecture, tech stack recommendation, and timeline tailored to your exact revenue goals.'
  },
  {
    num: '03',
    title: 'Deploy & Integrate',
    desc: 'Our engineering team builds, tests, and deploys your custom AI agents, web platforms, and automated workflow pipelines.'
  },
  {
    num: '04',
    title: 'Scale & Optimize',
    desc: 'Continuous monitoring, performance tuning, and scaling as your business scales, keeping you ahead of competitors.'
  }
];

export default function AIAssistantPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  // Trigger floating AI Chat Widget
  const handleOpenAIChat = () => {
    const chatWidgetBtn = document.querySelector('.chat-trigger-btn, .ai-chat-widget-wrapper button');
    if (chatWidgetBtn) {
      chatWidgetBtn.click();
    }
  };

  const handlePromptClick = (promptText) => {
    setCopiedPrompt(promptText);
    setTimeout(() => setCopiedPrompt(null), 2500);
    handleOpenAIChat();
  };

  return (
    <div className="ai-page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="ai-header animate-fade-in">
          <div className="ai-badge text-lime">
            <Cpu size={16} />
            <span>( AI CONSULTATION HUB )</span>
          </div>
          <h1 className="ai-title">
            Talk to Nova, your<br />
            <span className="text-lime">AI Agency Advisor.</span>
          </h1>
          <p className="ai-subtitle">
            Get instant strategic guidance on web development, AI chatbot integration, workflow automation, and growth marketing campaigns tailored for your business.
          </p>

          <div className="header-action-pills">
            <button className="btn-hero-lime" onClick={handleOpenAIChat}>
              <Sparkles size={18} />
              <span>Launch Nova AI Advisor</span>
            </button>
            <button className="btn-hero-outline" onClick={() => setIsBookingOpen(true)}>
              <Calendar size={18} />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>

        {/* Interactive Sample Prompts Grid */}
        <div className="sample-prompts-section">
          <div className="section-meta-label">
            <MessageSquare size={14} className="text-lime" />
            <span>TRY ASKING NOVA ABOUT:</span>
          </div>
          <div className="prompts-chips-grid">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                className="prompt-chip-card"
                onClick={() => handlePromptClick(prompt)}
              >
                <span>{prompt}</span>
                <ArrowUpRight size={15} className="prompt-chip-arrow" />
              </button>
            ))}
          </div>
          {copiedPrompt && (
            <div className="prompt-toast animate-fade-in">
              <CheckCircle2 size={15} className="text-lime" />
              <span>Opening Nova AI Advisor with selected query...</span>
            </div>
          )}
        </div>

        {/* Core AI Capabilities Grid */}
        <div className="ai-capabilities-section">
          <div className="section-header text-center">
            <div className="section-badge text-lime">( SOLUTIONS & CAPABILITIES )</div>
            <h2 className="section-title">Engineered to scale your agency.</h2>
            <p className="section-subtitle">
              From automated lead capture to enterprise AI pipelines — explore how we modernize your business.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((cap, i) => {
              const IconComp = cap.icon;
              return (
                <div key={i} className="capability-card">
                  <div className="cap-card-header">
                    <div className="cap-icon-wrap">
                      <IconComp size={22} className="text-lime" />
                    </div>
                    <span className="cap-tag">{cap.tag}</span>
                  </div>
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="ai-process-section">
          <div className="section-header text-center">
            <div className="section-badge text-lime">( THE METHODOLOGY )</div>
            <h2 className="section-title">How we deploy AI for your growth.</h2>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((step, idx) => (
              <div key={step.num} className="process-step-card">
                <div className="step-num-badge">{step.num}</div>
                <h4 className="step-card-title">{step.title}</h4>
                <p className="step-card-desc">{step.desc}</p>
                {idx < processSteps.length - 1 && <ArrowRight size={18} className="step-flow-arrow desktop-only" />}
              </div>
            ))}
          </div>
        </div>

        {/* High-Converting CTA Banner (Replacing WhatsApp Button) */}
        <div className="ai-cta-banner">
          <div className="banner-glow-effect" />
          <div className="banner-content">
            <span className="banner-badge text-lime">
              <Sparkles size={14} /> SCALE WITH FOUROVR
            </span>
            <h2 className="banner-heading">Ready to automate & scale your business?</h2>
            <p className="banner-subtext">
              Launch our interactive AI Advisor right now, or schedule a free 1-on-1 strategy consultation with our senior engineering team.
            </p>
            <div className="banner-actions-row">
              <button className="btn-hero-lime btn-banner-action" onClick={handleOpenAIChat}>
                <Sparkles size={18} />
                <span>Launch Nova AI Advisor</span>
              </button>
              <button className="btn-hero-outline btn-banner-action" onClick={() => setIsBookingOpen(true)}>
                <Calendar size={18} />
                <span>Book 1-on-1 Consultation</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
            <p className="banner-direct-note">
              Prefer direct email? Reach us anytime at <a href="mailto:fourovr@gmail.com" className="text-lime underline">fourovr@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Consultation Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
