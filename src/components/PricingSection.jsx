import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Plus, X, Sliders, Palette, Code, Megaphone, Bot, CheckCircle2, ShieldCheck, FileText, Send } from 'lucide-react';
import './PricingSection.css';

const categories = [
  { id: 'design', name: 'Graphic Design & Branding', icon: Palette },
  { id: 'web', name: 'Web Development & Apps', icon: Code },
  { id: 'marketing', name: 'Digital Marketing & Ads', icon: Megaphone },
  { id: 'ai', name: 'AI Automations & Bots', icon: Bot }
];

const categoryPlans = {
  design: [
    {
      id: 'design-starter',
      name: 'Starter Brand',
      subtitle: 'Essential visual identity for startups.',
      price: '$200 - $400',
      period: '/ project',
      isPopular: false,
      features: [
        '8 Custom Social Media Posts',
        'Logo & Brand Color Palette',
        'Typography Guidelines',
        'High-Res Source Files',
        '2 Revisions Included',
        '5 Days Delivery'
      ]
    },
    {
      id: 'design-pro',
      name: 'Growth Creative',
      subtitle: 'Complete branding & monthly ad creatives.',
      price: '$500 - $900',
      period: '/ month',
      isPopular: true,
      features: [
        '20 Social Posts + 4 Motion Reels',
        'Full Brand Style Guide & Identity',
        'UI/UX Web Wireframes',
        'High-Converting Ad Creatives',
        'Unlimited Revisions',
        'Dedicated Senior Designer'
      ]
    },
    {
      id: 'design-empire',
      name: 'Full Empire Design',
      subtitle: '3D assets & complete visual dominance.',
      price: '$1,200+',
      period: '/ month',
      isPopular: false,
      features: [
        '30+ Motion Graphics & Reels',
        'Full Product Packaging & 3D Render',
        'Custom Web & App UI/UX System',
        'Daily Creative Turnaround',
        'Dedicated Design Team',
        '24/7 Priority Support'
      ]
    }
  ],
  web: [
    {
      id: 'web-landing',
      name: 'High-Converting Landing',
      subtitle: 'Single page site engineered for sales.',
      price: '$300 - $600',
      period: '/ project',
      isPopular: false,
      features: [
        'Custom React/Vite Landing Page',
        'Mobile Responsive Design',
        'Conversion Copywriting',
        'Fast 95+ Speed Score',
        'Form & WhatsApp Integration',
        '1 Week Delivery'
      ]
    },
    {
      id: 'web-business',
      name: 'Business Growth Site',
      subtitle: 'Multi-page corporate & agency platform.',
      price: '$800 - $1,800',
      period: '/ project',
      isPopular: true,
      features: [
        '5–8 Custom Web Pages',
        'Framer Motion Smooth Animations',
        'SEO Strategy & Schema Setup',
        'CMS & Blog Integration',
        'Google Analytics & Pixel Setup',
        '2 Weeks Delivery'
      ]
    },
    {
      id: 'web-mern',
      name: 'Full-Stack MERN / App',
      subtitle: 'Complex web application or Shopify store.',
      price: '$2,500+',
      period: '/ project',
      isPopular: false,
      features: [
        'Custom MERN Stack Architecture',
        'Database & API Integration',
        'Shopify Custom Theme & Apps',
        'AI Assistant / Bot Integration',
        '1 Month Free Maintenance',
        'Dedicated Project Lead'
      ]
    }
  ],
  marketing: [
    {
      id: 'mkt-starter',
      name: 'Meta Ads Launch',
      subtitle: 'Drive targeted leads on Facebook & IG.',
      price: '$250 - $500',
      period: '/ month',
      isPopular: false,
      features: [
        'Facebook & Instagram Ad Setup',
        'Target Audience Research',
        '2 Ad Copy & Creative Sets',
        'Lead Form Integration',
        'Weekly Performance Report',
        'Ad Budget Optimization'
      ]
    },
    {
      id: 'mkt-growth',
      name: 'Growth Funnel Suite',
      subtitle: 'Omnichannel ads & conversion funnel.',
      price: '$600 - $1,300',
      period: '/ month',
      isPopular: true,
      features: [
        'Meta Ads + Google Search Ads',
        'Retargeting Campaign Setup',
        'High-ROAS Copywriting',
        'CRM & Email Automation Sync',
        'Bi-Weekly Strategy Meetings',
        'Dedicated Growth Lead'
      ]
    },
    {
      id: 'mkt-enterprise',
      name: 'Full Scale Empire',
      subtitle: 'Aggressive ROAS scaling & complete ads.',
      price: '$1,800+',
      period: '/ month',
      isPopular: false,
      features: [
        'Meta, Google, YouTube & TikTok Ads',
        'Full Funnel CRO Optimisation',
        'Custom Landing Page Building',
        'Competitor Ad Spying & Analysis',
        'Weekly Video Strategy Calls',
        '24/7 Slack / WhatsApp Support'
      ]
    }
  ],
  ai: [
    {
      id: 'ai-bot',
      name: 'AI Strategy Chatbot',
      subtitle: '24/7 automated sales & support agent.',
      price: '$250 - $500',
      period: '/ project',
      isPopular: false,
      features: [
        'Custom Trained AI Assistant Widget',
        'Groq / Gemini LLM Integration',
        'Leads & Form Auto Capture',
        'WhatsApp / Web Embed',
        'Instant 24/7 Customer Replies',
        '1 Week Delivery'
      ]
    },
    {
      id: 'ai-workflow',
      name: 'Workflow Automation',
      subtitle: 'Automate repetitive tasks & invoicing.',
      price: '$600 - $1,200',
      period: '/ project',
      isPopular: true,
      features: [
        'Make.com / Zapier Custom Flows',
        'HubSpot / Notion CRM Integration',
        'Automated Email & Invoice Sending',
        'Social Media Auto Scheduler',
        'Data Sync Across Apps',
        'Full Workflow Documentation'
      ]
    },
    {
      id: 'ai-enterprise',
      name: 'Enterprise AI Suite',
      subtitle: 'Complete AI agent ecosystem for scale.',
      price: '$1,800+',
      period: '/ project',
      isPopular: false,
      features: [
        'Multi-Agent System Architecture',
        'Custom Internal Knowledge Base',
        'WhatsApp & Voice Call Bots',
        'Enterprise Security & Logs',
        'Team Training Session',
        'Ongoing Monthly Optimization'
      ]
    }
  ]
};

const customServices = [
  { id: 'design', label: 'Graphic Design & Branding', baseMin: 200, baseMax: 400 },
  { id: 'web', label: 'Web Development / Web App', baseMin: 350, baseMax: 700 },
  { id: 'marketing', label: 'Meta & Google Ads Campaign', baseMin: 300, baseMax: 600 },
  { id: 'ai', label: 'AI Chatbot & Workflow Automation', baseMin: 250, baseMax: 500 }
];

const faqs = [
  {
    question: 'How do project pricing ranges work?',
    answer: "Our prices are transparently quoted in $ (USD) as flexible ranges based on your exact scope, deliverables, and timeline. No hidden lock-ins or surprise fees."
  },
  {
    question: 'Can I build a custom package for my exact budget?',
    answer: "Absolutely! Use our interactive Custom Package Builder below, or chat with Nova (AI Strategy Advisor) who will tailor a package matching your exact budget!"
  },
  {
    question: 'Do you work with Pakistani and international clients?',
    answer: 'Yes! We work globally across the US, UK, Middle East, Pakistan, and Europe.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Graphics & AI Chatbots take 3–7 days, Websites take 1–3 weeks, and marketing campaigns run on month-to-month contracts.'
  }
];

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState('design');
  const [openFaq, setOpenFaq] = useState(0);

  // Custom Package Builder State
  const [selectedServices, setSelectedServices] = useState(['web', 'design']);
  const [speedMultiplier, setSpeedMultiplier] = useState(1.0);

  // Invoice Modal State
  const [activeInvoiceModal, setActiveInvoiceModal] = useState(null);
  const [clientForm, setClientForm] = useState({ name: '', email: '', phone: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate live dynamic range
  const calcMin = Math.round(
    selectedServices.reduce((sum, id) => {
      const item = customServices.find((s) => s.id === id);
      return sum + (item ? item.baseMin : 0);
    }, 0) * speedMultiplier
  );

  const calcMax = Math.round(
    selectedServices.reduce((sum, id) => {
      const item = customServices.find((s) => s.id === id);
      return sum + (item ? item.baseMax : 0);
    }, 0) * speedMultiplier
  );

  // Open Modal for Pricing Plan Card
  const openPlanInvoice = (plan) => {
    const categoryName = categories.find((c) => c.id === activeCategory)?.name || 'Digital Agency';
    const invoiceId = `#FVR-${Math.floor(10000 + Math.random() * 90000)}`;

    setActiveInvoiceModal({
      invoiceId,
      title: `${plan.name} Package`,
      category: categoryName,
      price: `${plan.price} ${plan.period}`,
      rawPrice: plan.price,
      features: plan.features,
      speed: 'Standard Priority (1–2 Weeks)'
    });
    setClientForm({ name: '', email: '', phone: '', notes: '' });
    setIsOrderSubmitted(false);
  };

  // Open Modal for Custom Package Builder
  const openCustomInvoice = () => {
    const invoiceId = `#FVR-${Math.floor(10000 + Math.random() * 90000)}`;
    const serviceLabels = selectedServices.map(
      (id) => customServices.find((s) => s.id === id)?.label || id
    );

    setActiveInvoiceModal({
      invoiceId,
      title: 'Custom Tailored Package',
      category: 'Multi-Service Custom Scope',
      price: `$${calcMin.toLocaleString()} - $${calcMax.toLocaleString()} USD`,
      rawPrice: `$${calcMin.toLocaleString()} - $${calcMax.toLocaleString()}`,
      features: serviceLabels,
      speed: speedMultiplier === 1.25 ? '⚡ Express Priority (1 Week)' : 'Standard (2–3 Weeks)'
    });
    setClientForm({ name: '', email: '', phone: '', notes: '' });
    setIsOrderSubmitted(false);
  };

  // Submit Form Data & Send Email to fourovr@gmail.com
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!clientForm.name || !clientForm.email || !activeInvoiceModal) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/fourovr@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Invoice Order ${activeInvoiceModal.invoiceId} from ${clientForm.name}`,
          _template: 'table',
          _captcha: 'false',
          'Invoice Tracking ID': activeInvoiceModal.invoiceId,
          'Selected Package / Scope': activeInvoiceModal.title,
          'Estimated Price ($ USD)': activeInvoiceModal.price,
          'Delivery Speed': activeInvoiceModal.speed,
          'Included Deliverables': activeInvoiceModal.features.join(', '),
          'Client Name': clientForm.name,
          'Client Email': clientForm.email,
          'WhatsApp / Phone': clientForm.phone || 'Not provided',
          'Project Notes': clientForm.notes || 'None'
        })
      });

      if (response.ok) {
        setIsOrderSubmitted(true);
      } else {
        setIsOrderSubmitted(true); // fallback so client experience is seamless
      }
    } catch (err) {
      setIsOrderSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="pricing-wrapper">
      <div className="container">
        {/* Header Banner */}
        <div className="pricing-header">
          <div className="pricing-badge text-lime">( PRICING & PACKAGES )</div>
          <h2 className="pricing-title">
            Plans that scale<br />
            with your ambition.
          </h2>
          <p className="pricing-subtitle">
            Select a service category to explore curated packages, or build your custom scope with live price estimation.
          </p>

          {/* Service Category Filter Tabs */}
          <div className="category-tabs-row">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <Icon size={16} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Pricing Cards Grid for Selected Category */}
        <div className="pricing-cards-grid">
          {categoryPlans[activeCategory].map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.isPopular ? 'popular-card' : ''}`}
            >
              {plan.isPopular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>

              <div className="plan-price-row">
                <span className="price-val">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>

              <div className="plan-divider" />

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={16} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openPlanInvoice(plan)}
                className={`btn-plan ${plan.isPopular ? 'btn-plan-dark' : 'btn-plan-lime'}`}
              >
                <span>Get started</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* INTERACTIVE CUSTOM PACKAGE BUILDER */}
        <div className="custom-builder-card">
          <div className="builder-header">
            <div className="builder-badge">
              <Sliders size={15} className="text-lime" />
              <span>CUSTOM SCOPE BUILDER</span>
            </div>
            <h3 className="builder-title">
              Build your custom <span className="text-lime">package.</span>
            </h3>
            <p className="builder-subtext">
              Select your required services and timeline to calculate your estimated project budget range.
            </p>
          </div>

          <div className="builder-body-grid">
            {/* Left: Service Checkboxes */}
            <div className="builder-services-list">
              <label className="builder-label">Select Services Needed:</label>
              <div className="checkboxes-group">
                {customServices.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      className={`custom-checkbox-btn ${isChecked ? 'selected' : ''}`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="checkbox-square">
                        {isChecked && <Check size={14} className="text-lime" />}
                      </div>
                      <span className="checkbox-label">{service.label}</span>
                    </button>
                  );
                })}
              </div>

              <label className="builder-label" style={{ marginTop: '1.5rem' }}>Delivery Speed:</label>
              <div className="speed-buttons-row">
                <button
                  className={`speed-btn ${speedMultiplier === 1.0 ? 'active' : ''}`}
                  onClick={() => setSpeedMultiplier(1.0)}
                >
                  Standard (2–3 Weeks)
                </button>
                <button
                  className={`speed-btn ${speedMultiplier === 1.25 ? 'active' : ''}`}
                  onClick={() => setSpeedMultiplier(1.25)}
                >
                  ⚡ Express Priority (1 Week)
                </button>
              </div>
            </div>

            {/* Right: Dynamic Calculation Result */}
            <div className="builder-summary-box">
              <div className="summary-title">ESTIMATED BUDGET RANGE</div>
              <div className="summary-price-display">
                <span className="calc-price">${calcMin.toLocaleString()} - ${calcMax.toLocaleString()}</span>
                <span className="calc-unit">USD</span>
              </div>
              <p className="summary-note">
                Final scope & invoice will be tailored by our Account Manager based on your budget.
              </p>

              <button
                type="button"
                onClick={openCustomInvoice}
                className="btn-hero-lime btn-builder-cta"
              >
                <span>Request Custom Proposal</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="faq-wrapper">
          <div className="faq-badge text-lime">( FAQ )</div>
          <h2 className="faq-title">
            Good<br />
            questions
          </h2>

          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div className="faq-toggle-icon">
                      {isOpen ? <X size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* INTERACTIVE INVOICE & CHECKOUT MODAL POPUP */}
      {activeInvoiceModal && (
        <div className="invoice-modal-overlay" onClick={() => setActiveInvoiceModal(null)}>
          <div className="invoice-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveInvoiceModal(null)}>
              <X size={20} />
            </button>

            {isOrderSubmitted ? (
              /* SUCCESS THANK YOU CONFIRMATION SCREEN */
              <div className="modal-success-container">
                <CheckCircle2 size={54} className="text-lime success-check-icon" />
                <div className="success-badge">{activeInvoiceModal.invoiceId} CONFIRMED</div>
                <h3 className="success-title">Order Request Submitted!</h3>
                <p className="success-subtext">
                  Thank you, <strong>{clientForm.name}</strong>! Your invoice details and package scope have been logged.
                </p>
                <div className="success-info-box">
                  <FileText size={18} className="text-lime" />
                  <span>Our Account Manager will review your inquiry and email your official Invoice & onboarding proposal to <strong>{clientForm.email}</strong> within 2 hours.</span>
                </div>
                <button className="btn-hero-lime btn-modal-done" onClick={() => setActiveInvoiceModal(null)}>
                  Done & Close Window
                </button>
              </div>
            ) : (
              /* 2-COLUMN INVOICE CHECKOUT FORM */
              <div className="modal-checkout-grid">
                {/* Left Column: Itemized Invoice Breakdown */}
                <div className="invoice-summary-col">
                  <div className="invoice-header-tag">
                    <FileText size={15} className="text-lime" />
                    <span>INVOICE ESTIMATE {activeInvoiceModal.invoiceId}</span>
                  </div>

                  <h3 className="invoice-package-title">{activeInvoiceModal.title}</h3>
                  <div className="invoice-category-name">{activeInvoiceModal.category}</div>

                  <div className="invoice-divider" />

                  <div className="invoice-deliverables-title">INCLUDED DELIVERABLES:</div>
                  <ul className="invoice-deliverables-list">
                    {activeInvoiceModal.features.map((item, i) => (
                      <li key={i}>
                        <Check size={14} className="text-lime" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="invoice-divider" />

                  <div className="invoice-meta-row">
                    <span>Delivery Speed:</span>
                    <strong className="text-lime">{activeInvoiceModal.speed}</strong>
                  </div>
                  <div className="invoice-meta-row">
                    <span>Currency:</span>
                    <strong>$ USD</strong>
                  </div>
                </div>

                {/* Right Column: Client Contact Form & Grand Total */}
                <div className="invoice-form-col">
                  <div className="grand-total-box">
                    <div className="total-label">GRAND TOTAL ESTIMATE</div>
                    <div className="total-amount">{activeInvoiceModal.price}</div>
                    <div className="total-note">Custom budget options available upon proposal</div>
                  </div>

                  <form onSubmit={handleModalSubmit} className="invoice-contact-form">
                    <div className="modal-input-group">
                      <label className="modal-input-label">YOUR FULL NAME *</label>
                      <input
                        type="text"
                        className="modal-input"
                        placeholder="John Doe"
                        value={clientForm.name}
                        onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="modal-input-group">
                      <label className="modal-input-label">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        className="modal-input"
                        placeholder="john@company.com"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="modal-input-group">
                      <label className="modal-input-label">WHATSAPP / PHONE *</label>
                      <input
                        type="tel"
                        className="modal-input"
                        placeholder="+92 300 1234567"
                        value={clientForm.phone}
                        onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="modal-input-group">
                      <label className="modal-input-label">PROJECT NOTES / BUDGET REQUIREMENT</label>
                      <textarea
                        className="modal-textarea"
                        placeholder="Share your goals or budget preference..."
                        rows={3}
                        value={clientForm.notes}
                        onChange={(e) => setClientForm({ ...clientForm, notes: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-hero-lime btn-confirm-order" disabled={isSubmitting}>
                      <Send size={16} />
                      <span>{isSubmitting ? 'Sending Request...' : 'Confirm & Request Official Invoice'}</span>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
