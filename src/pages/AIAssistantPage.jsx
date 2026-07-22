import { Link } from 'react-router-dom';
import { Bot, Sparkles, MessageSquare, Zap, ShieldCheck, ArrowUpRight, Cpu } from 'lucide-react';
import './AIAssistantPage.css';

export default function AIAssistantPage() {
  const whatsappUrl = `https://wa.me/923204108187?text=${encodeURIComponent(
    "Hi FOUROVR Agency! I'm interested in your AI & Automation solutions for my business."
  )}`;

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
            Get instant guidance on website development, AI chatbot integration, automated workflows, and digital marketing strategies tailored for your business.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="ai-features-grid">
          <div className="ai-feature-card">
            <div className="icon-box">
              <Bot size={24} className="text-lime" />
            </div>
            <h3>Human-like AI Conversations</h3>
            <p>Nova understands your requirements and recommends custom tech stacks, timelines, and strategy blueprints.</p>
          </div>

          <div className="ai-feature-card">
            <div className="icon-box">
              <Zap size={24} className="text-lime" />
            </div>
            <h3>Instant WhatsApp Connect</h3>
            <p>Finalize your goals in seconds and jump straight into a direct WhatsApp conversation with our engineering team.</p>
          </div>

          <div className="ai-feature-card">
            <div className="icon-box">
              <ShieldCheck size={24} className="text-lime" />
            </div>
            <h3>Free Lead Proposals</h3>
            <p>Submit your inquiry directly through the chat to receive a detailed breakdown at <strong>fourovr@gmail.com</strong>.</p>
          </div>
        </div>

        {/* CTA Hero Box */}
        <div className="ai-cta-banner">
          <div className="banner-content">
            <h2>Ready to automate & scale your business?</h2>
            <p>Click the floating AI Assistant at the bottom-left of your screen, or chat directly on WhatsApp right now!</p>
            <div className="banner-actions">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp-large">
                <MessageSquare size={20} />
                <span>Chat on WhatsApp (+92 320 4108187)</span>
              </a>
              <Link to="/contact" className="btn-hero-outline">
                <span>Book Consultation</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
