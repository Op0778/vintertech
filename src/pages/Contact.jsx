import "../styles/contact.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collegeName: "",
    message: "",
    access_key: "b942a176-991d-465b-ab68-6f28353f4949",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.status === 200) {
        setResult(json.message);
      } else {
        setResult(json.message || "Something went wrong!");
      }

      setFormData({
        name: "",
        email: "",
        collegeName: "",
        message: "",
        access_key: "b942a176-991d-465b-ab68-6f28353f4949",
      });

      setTimeout(() => {
        setResult("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setResult("Something went wrong!");
    }
  };

  return (
    <section className="contact container">
      <Helmet>
        <title>Contact Vinter Tech</title>
        <meta
          name="description"
          content="Contact Vinter Tech for internship details, support, and enrollment information."
        />
      </Helmet>

      <h1>Contact Us</h1>

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>College Name</label>
            <input
              type="text"
              placeholder="Enter college name"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
          <p>{result}</p>
        </form>
      </div>
    </section>
  );
}
