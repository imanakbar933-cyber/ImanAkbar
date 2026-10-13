import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">

        <div className="contact-info-header">
          <h2>Get In Touch</h2>
          <p>
            Have a question about memberships, training, or schedules?
            Reach out to the Kinetix team — we're here to help you
            reach your fitness goals.
          </p>
        </div>

        <div className="contact-info-grid">

          <div className="contact-info-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>123 Fitness Street,<br />Your City, Pakistan</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p>+92 300 1234567<br />+92 321 7654321</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">✉️</div>
            <h3>Email Us</h3>
            <p>info@kinetixgym.com<br />support@kinetixgym.com</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">⏰</div>
            <h3>Working Hours</h3>
            <p>Mon – Sat: 6:00 AM – 11:00 PM<br />Sunday: 8:00 AM – 8:00 PM</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactInfo;