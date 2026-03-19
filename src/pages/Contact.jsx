import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact container">
      <h2>Contact Us</h2>

      <div className="contact-wrapper">
        {/* Left Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions or want to work with us? Reach out anytime.</p>

          <p>
            <strong>Email:</strong> vintertech@outlook.com
          </p>
          <p>
            <strong>Phone:</strong> +91 93844 70778
          </p>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>College Name</label>
            <input type="text" placeholder="Enter college name" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Write your message..." required />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
