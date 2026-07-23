import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import './ContactPage.css';

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/fourovr@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Inquiry from ${formData.name} - FOUROVR Agency`,
          _template: 'table',
          _captcha: 'false',
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'Not provided',
          Company: formData.company || 'Not provided',
          'Project Details': formData.details
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmitted(true);
      } else {
        setErrorMsg('Failed to send message. Please try again or email us at fourovr@gmail.com.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your connection or email us at fourovr@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="contact-header">
          <div className="contact-badge text-lime">( GET IN TOUCH )</div>
          <h1 className="contact-title">
            Let's start a<br />
            conversation.
          </h1>
          <p className="contact-subtitle">
            Have a project in mind or want to explore how we can help your business grow? We'd love to hear from you.
          </p>
        </div>

        {/* 2-Column Main Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Calendar Booking */}
          <div className="contact-info-col">
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="info-icon-box">
                <Mail size={20} className="info-icon" />
              </div>
              <div className="info-content">
                <div className="info-label">EMAIL</div>
                <a href="mailto:fourovr@gmail.com" className="info-value">
                  fourovr@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="info-icon-box">
                <Phone size={20} className="info-icon" />
              </div>
              <div className="info-content">
                <div className="info-label">PHONE</div>
                <a href="tel:+64220890942" className="info-value">
                  +92 320 4108187
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="info-icon-box">
                <MapPin size={20} className="info-icon" />
              </div>
              <div className="info-content">
                <div className="info-label">LOCATION</div>
                <div className="info-value">Lahore, Pakistan</div>
              </div>
            </div>

            {/* Book Consultation Box */}
            <div className="booking-card">
              <div className="booking-badge text-lime">
                <Calendar size={15} />
                <span>BOOK A CONSULTATION</span>
              </div>
              <h3 className="booking-title">Prefer to grab a time?</h3>
              <p className="booking-subtitle">⏱ Free 30-minute strategy call</p>
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="btn-booking"
              >
                <span>Open calendar</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="text-lime success-icon" />
                  <h3>Thank you for reaching out!</h3>
                  <p>
                    Your message has been sent successfully. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', details: '' });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        NAME <span className="text-lime">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        EMAIL <span className="text-lime">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="details" className="form-label">
                      PROJECT DETAILS <span className="text-lime">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      className="form-textarea"
                      placeholder="Tell us about your goals, timeline and budget..."
                      rows={5}
                      value={formData.details}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending message...' : 'Send message'}
                  </button>
                  {errorMsg && (
                    <p style={{ color: '#ff4d4d', marginTop: '12px', fontSize: '14px', textAlign: 'center' }}>
                      {errorMsg}
                    </p>
                  )}

                  <p className="form-disclaimer">
                    By submitting you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Booking Calendar Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
