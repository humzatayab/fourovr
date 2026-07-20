import { ArrowUpRight } from 'lucide-react';
import './ApproachSection.css';
import { Link } from 'react-router-dom';

const approachSteps = [
  {
    id: '01',
    title: 'Strategy first',
    description: 'We build around your specific business goals, not generic templates. Every decision we make traces directly back to maximizing your ROI.'
  },
  {
    id: '02',
    title: 'Designed to convert',
    description: 'Beautiful aesthetics are just the baseline. We engineer premium, user-centric experiences that turn passive attention into immediate action.'
  },
  {
    id: '03',
    title: 'Built to last',
    description: 'Deploying fast, accessible, and maintainable code on modern frameworks. We ensure your digital infrastructure keeps performing flawlessly for years.'
  },
  {
    id: '04',
    title: 'Optimised forever',
    description: 'A launch is just the beginning. We rigorously test, measure, and refine your digital assets to compound your growth over time.'
  }
];

export default function ApproachSection() {
  return (
    <section className="approach-section">
      <div className="container">
        <div className="approach-grid">
          {/* Left Column */}
          <div className="approach-left">
            <div className="approach-badge">( THE APPROACH )</div>

            <h2 className="approach-title">
              How we<br />
              drive<br />
              growth
            </h2>

            <p className="approach-subtitle">
              A proven, data-driven framework that transforms your marketing from a standard cost center into your most reliable revenue engine.
            </p>

            <Link to="/about" className="btn-primary approach-btn">
              <span>About the team</span>
              <ArrowUpRight className="btn-icon" size={18} />
            </Link>
          </div>

          {/* Right Column Steps */}
          <div className="approach-right">
            <div className="steps-list">
              {approachSteps.map((step) => (
                <div key={step.id} className="step-card">
                  <div className="step-id">{step.id}</div>
                  <div className="step-body">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
