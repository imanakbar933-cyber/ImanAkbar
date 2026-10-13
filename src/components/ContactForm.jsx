import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="contact-form-wrapper">

        <h2>Send Us a Message</h2>

        <form className="contact-form">

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What is this about?" required />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">
            Send Message <span>↗</span>
          </button>

        </form>

      </div>
    </section>
  );
}

export default ContactForm;