import './ClientLogos.css';

const clientLogos = [
  { name: 'sympl.cm', iconType: 'sympl' },
  { name: 'iremos', iconType: 'iremos' },
  { name: 'AdvanceCM', iconType: 'advance' },
  { name: 'S We\'Share', iconType: 'weshare' },
  { name: 'Point8 Wealth', iconType: 'point8' },
  { name: 'Kiwiana', iconType: 'kiwiana' },
  { name: 'HealthCure', iconType: 'healthcure' },
  { name: 'InstaSure', iconType: 'instasure' }
];

export default function ClientLogos() {
  return (
    <section className="client-logos-section">
      <div className="container">
        <h4 className="client-logos-title">
          TRUSTED BY FOUNDERS, BUILDERS, AND FAST-GROWING BRANDS
        </h4>
      </div>

      <div className="logos-marquee-wrapper">
        <div className="logos-marquee-track">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div key={idx} className="logo-item">
              <span className="logo-text-graphic">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
