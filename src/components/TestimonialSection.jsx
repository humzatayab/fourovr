import './TestimonialSection.css';

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-content">
          <div className="testimonial-badge text-lime">
            ( WHAT CLIENTS SAY )
          </div>

          <blockquote className="testimonial-quote">
            “FOUROVR didn't just give us a website — they built the engine that runs our business.”
          </blockquote>

          <div className="testimonial-author">
            <div className="author-name">Pawandeep Singh</div>
            <div className="author-role">Director, Kiwiana Immigration</div>
          </div>
        </div>
      </div>
    </section>
  );
}
