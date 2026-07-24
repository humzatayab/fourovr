import './ClientLogos.css';

const clientLogos = [
  { name: 'FOUROVR', iconType: 'sympl' },
  { name: 'Goeek', iconType: 'iremos' },
  { name: 'Nexorx', iconType: 'advance' },
  { name: 'TAAR', iconType: 'weshare' },
  { name: 'Retrofit', iconType: 'point8' },
  { name: 'NextGen', iconType: 'kiwiana' },
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
