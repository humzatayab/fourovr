import './MarqueeBar.css';

const marqueeItems = [
  'Website Development',
  'AI & Workflow Automations',
  'SEO Services',
  'Paid Advertising',
  'Branding & Strategy',
  'UI/UX Design'
];

export default function MarqueeBar() {
  return (
    <div className="global-marquee-bar">
      <div className="global-marquee-track">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="global-marquee-item">
            <span>{item}</span>
            <span className="global-marquee-star">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
