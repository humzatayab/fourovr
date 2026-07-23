import { useState, useMemo } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, Mail, CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import './BookingModal.css';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState('30'); // '15' or '30'
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Generate available working dates (Mon-Fri only, skipping Sat & Sun) for next 14 days
  const availableDates = useMemo(() => {
    const dates = [];
    let current = new Date();
    // Start from tomorrow
    current.setDate(current.getDate() + 1);

    while (dates.length < 10) {
      const dayOfWeek = current.getDay(); // 0 is Sun, 6 is Sat
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const dateStr = current.toISOString().split('T')[0];
        const formattedLabel = current.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
        dates.push({ dateStr, label: formattedLabel, rawDate: new Date(current) });
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  }, []);

  // Available time slots (10:00 AM - 6:00 PM)
  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextFromDuration = () => {
    if (duration) setStep(2);
  };

  const handleNextFromDateTime = () => {
    if (selectedDate && selectedTime) setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email) return;

    setIsSubmitting(true);
    setErrorMsg('');

    const bookingPayload = {
      _subject: `📅 New Consultation Booking: ${userInfo.name} (${selectedDate} @ ${selectedTime})`,
      _template: 'table',
      _captcha: 'false',
      'Client Name': userInfo.name,
      'Client Email': userInfo.email,
      'Phone Number': userInfo.phone || 'Not provided',
      'Meeting Duration': `${duration} Minutes`,
      'Scheduled Date': selectedDate,
      'Scheduled Time Slot': selectedTime,
      'Notes / Topics': userInfo.notes || 'General Strategy Consultation',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/fourovr@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bookingPayload),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setStep(4); // Success Step
      } else {
        setErrorMsg('Failed to submit booking. Please try again or email fourovr@gmail.com directly.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setDuration('30');
    setSelectedDate('');
    setSelectedTime('');
    setUserInfo({ name: '', email: '', phone: '', notes: '' });
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="booking-modal-overlay animate-fade-in" onClick={resetAndClose}>
      <div
        className="booking-modal-container animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="booking-modal-header">
          <div className="booking-modal-title-group">
            <span className="booking-badge text-lime">
              <Sparkles size={14} /> FOUROVR CALENDAR
            </span>
            <h2 className="booking-modal-heading">Book Strategy Call</h2>
          </div>
          <button className="booking-modal-close" onClick={resetAndClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator (Only show for steps 1-3) */}
        {step <= 3 && (
          <div className="booking-steps-bar">
            <div className={`step-pill ${step >= 1 ? 'active' : ''}`}>
              <span className="step-num">1</span>
              <span className="step-label">Duration</span>
            </div>
            <div className="step-line" />
            <div className={`step-pill ${step >= 2 ? 'active' : ''}`}>
              <span className="step-num">2</span>
              <span className="step-label">Date & Time</span>
            </div>
            <div className="step-line" />
            <div className={`step-pill ${step >= 3 ? 'active' : ''}`}>
              <span className="step-num">3</span>
              <span className="step-label">Your Info</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="booking-modal-body">
          {/* STEP 1: DURATION SELECTION */}
          {step === 1 && (
            <div className="booking-step-content animate-step-in">
              <h3 className="step-question">Step 1: Select Meeting Duration</h3>
              <p className="step-subtext">Choose how long you'd like to meet with our strategy team.</p>

              <div className="duration-options-grid">
                <div
                  className={`duration-card ${duration === '15' ? 'selected' : ''}`}
                  onClick={() => setDuration('15')}
                >
                  <div className="duration-icon-wrap">
                    <Clock size={22} className="duration-icon" />
                  </div>
                  <div className="duration-meta">
                    <span className="duration-time">15 Minutes</span>
                    <span className="duration-desc">Quick 1-on-1 strategy sync & Q&A</span>
                  </div>
                  <div className="radio-check" />
                </div>

                <div
                  className={`duration-card ${duration === '30' ? 'selected' : ''}`}
                  onClick={() => setDuration('30')}
                >
                  <div className="duration-icon-wrap">
                    <Clock size={22} className="duration-icon text-lime" />
                  </div>
                  <div className="duration-meta">
                    <div className="recommended-tag">RECOMMENDED</div>
                    <span className="duration-time">30 Minutes</span>
                    <span className="duration-desc">In-depth project scope, roadmap & pricing</span>
                  </div>
                  <div className="radio-check" />
                </div>
              </div>

              <div className="modal-actions-row justify-end">
                <button className="btn-modal-primary" onClick={handleNextFromDuration}>
                  <span>Next: Choose Time</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME SELECTION */}
          {step === 2 && (
            <div className="booking-step-content animate-step-in">
              <h3 className="step-question">Step 2: Choose Date & Time</h3>
              <p className="step-subtext">
                Note: All dates and time slots are in <strong className="text-lime">Pakistan Standard Time (PKT / UTC+5)</strong>. Please select your preferred slot accordingly.
              </p>

              {/* Date Selection */}
              <div className="section-label">
                <CalendarIcon size={14} className="text-lime" />
                <span>SELECT DATE</span>
              </div>
              <div className="dates-scroll-grid">
                {availableDates.map((item) => (
                  <button
                    key={item.dateStr}
                    type="button"
                    className={`date-chip ${selectedDate === item.dateStr ? 'selected' : ''}`}
                    onClick={() => setSelectedDate(item.dateStr)}
                  >
                    <span className="date-chip-label">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Time Slot Selection */}
              <div className="section-label margin-top">
                <Clock size={14} className="text-lime" />
                <span>SELECT TIME SLOT (PKT / UTC+5)</span>
              </div>
              <div className="time-slots-grid">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`time-chip ${selectedTime === slot ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="modal-actions-row">
                <button className="btn-modal-secondary" onClick={() => setStep(1)}>
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button
                  className="btn-modal-primary"
                  onClick={handleNextFromDateTime}
                  disabled={!selectedDate || !selectedTime}
                >
                  <span>Next: Your Info</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: USER DETAILS & SUBMIT */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="booking-step-content animate-step-in">
              <h3 className="step-question">Step 3: Enter Details & Confirm</h3>
              <p className="step-subtext">
                Summary: <strong className="text-lime">{duration} Mins Call</strong> on{' '}
                <strong className="text-lime">{selectedDate}</strong> at <strong className="text-lime">{selectedTime} PKT</strong>
              </p>

              <div className="modal-form-grid">
                <div className="form-group">
                  <label className="modal-form-label">
                    <User size={13} /> YOUR NAME <span className="text-lime">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="modal-form-input"
                    placeholder="e.g. John Doe"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="modal-form-label">
                    <Mail size={13} /> YOUR EMAIL <span className="text-lime">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="modal-form-input"
                    placeholder="john@example.com"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="modal-form-label">PHONE NUMBER (OPTIONAL)</label>
                  <input
                    type="tel"
                    name="phone"
                    className="modal-form-input"
                    placeholder="+92 300 1234567"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="modal-form-label">PROJECT NOTES / GOALS (OPTIONAL)</label>
                  <textarea
                    name="notes"
                    className="modal-form-textarea"
                    rows={3}
                    placeholder="Briefly tell us what you'd like to discuss..."
                    value={userInfo.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {errorMsg && <div className="modal-error-msg">{errorMsg}</div>}

              <div className="modal-actions-row">
                <button type="button" className="btn-modal-secondary" onClick={() => setStep(2)}>
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="submit" className="btn-modal-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>Confirming Booking...</span>
                  ) : (
                    <>
                      <span>Book Call</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: THANK YOU / SUCCESS SCREEN */}
          {step === 4 && (
            <div className="booking-step-content success-step animate-step-in text-center">
              <div className="success-icon-wrap">
                <CheckCircle2 size={56} className="text-lime" />
              </div>
              <h3 className="success-heading">Booking Request Submitted!</h3>
              <p className="success-subtext">
                Thank you, <strong className="text-lime">{userInfo.name}</strong>! Your strategy consultation is requested for{' '}
                <strong className="text-paper">{selectedDate}</strong> at <strong className="text-paper">{selectedTime} PKT</strong> ({duration} Mins).
              </p>

              <div className="reminder-alert-card">
                <Sparkles size={18} className="text-lime flex-shrink-0" />
                <p>
                  <strong>Aap ready rehna!</strong> Aapko meeting se kuch der pehle email
                  (<span className="text-lime">{userInfo.email}</span>) par meeting link bhej di jayegi.
                </p>
              </div>

              <div className="modal-actions-row justify-center margin-top">
                <button className="btn-modal-primary" onClick={resetAndClose}>
                  Done & Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
