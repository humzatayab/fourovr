import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Plus, X } from 'lucide-react';
import './PricingSection.css';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'For businesses ready to show up and be found.',
    price: '$1,000',
    period: '/month',
    isPopular: false,
    features: [
      'Strategy session',
      'Social media management',
      'Monthly reporting',
      'Basic SEO',
      'Google Business Profile',
      'Monthly consultation'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'For businesses ready to scale acquisition.',
    price: '$3,000',
    period: '/month',
    isPopular: true,
    features: [
      'Everything in Starter',
      'Ongoing SEO',
      'Paid ads management',
      'Content creation',
      'CRM integration',
      'Analytics',
      'Bi-weekly meetings'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'For market leaders optimising every channel.',
    price: '$6,000',
    period: '/month',
    isPopular: false,
    features: [
      'Everything in Growth',
      'Advanced SEO',
      'YouTube advertising',
      'Retargeting campaigns',
      'Premium content',
      'Dedicated manager',
      'Weekly reporting',
      'Conversion optimisation'
    ]
  }
];

const valueProps = [
  {
    title: 'No lock-in',
    desc: "Month-to-month partnerships. Stay because it's working, not because you're trapped."
  },
  {
    title: 'One team',
    desc: 'Strategy, design, development and marketing under one roof — fully accountable.'
  },
  {
    title: 'Real reporting',
    desc: "Dashboards tied to revenue and leads, not vanity metrics you can't action."
  }
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: "Websites usually run 4–8 weeks, mobile apps 8–16 weeks, and ongoing marketing is month to month. We'll give you a clear timeline after our first discovery call."
  },
  {
    question: 'Do you work with businesses globally?',
    answer: 'Yes! We partner with ambitious clients globally across the US, UK, Middle East, Pakistan, Australia, and Asia.'
  },
  {
    question: 'What is included in monthly reporting?',
    answer: 'Clear dashboards tied directly to lead generation, revenue, ROI metrics, conversion rate optimisation, and action items.'
  },
  {
    question: 'Can I pause or upgrade my plan anytime?',
    answer: 'Yes, all our plans are month-to-month with total flexibility to scale up or adjust as your business grows.'
  }
];

export default function PricingSection() {
  const [openFaq, setOpenFaq] = useState(0); // 0th FAQ open by default

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="pricing" className="pricing-wrapper">
      {/* Header Banner */}
      <div className="container">
        <div className="pricing-header">
          <div className="pricing-badge text-lime">( PRICING )</div>
          <h2 className="pricing-title">
            Plans that scale<br />
            with your ambition.
          </h2>
          <p className="pricing-subtitle">
            Transparent monthly partnerships — no lock-in surprises. Pick a starting point and we'll tailor the scope to your goals.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {pricingPlans.map((plan) => (
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

              <a
                href="#contact"
                className={`btn-plan ${plan.isPopular ? 'btn-plan-dark' : 'btn-plan-lime'}`}
              >
                <span>Get started</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* 3 Value Props Bar */}
        <div className="value-props-grid">
          {valueProps.map((item, idx) => (
            <div key={idx} className="value-prop-card">
              <h4 className="prop-title">{item.title}</h4>
              <p className="prop-desc">{item.desc}</p>
            </div>
          ))}
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
                    onClick={() => toggleFaq(idx)}
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

        {/* Custom Scope Tailored Banner */}
        <div className="tailored-banner">
          <div className="tailored-watermark">
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

          <div className="tailored-tagline">CUSTOM SCOPE?</div>
          <h2 className="tailored-heading">
            Need something<br />
            tailored? Let's<br />
            talk.
          </h2>

          <div className="tailored-bottom-row">
            <p className="tailored-subtext">
              Bigger project or a unique mix of services? We'll build a custom proposal around your exact goals.
            </p>
            <div className="tailored-buttons">
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
  );
}
