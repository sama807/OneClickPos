import React, { useState } from "react";
import "./contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    // You can integrate email sending or API submission here.
  };

  return (
    <div className="contact-form-container">
      {/* Left Side */}
      <div className="form-left">
        <h2>For Further Details, Contact POS Software</h2>
        <p>
          Have questions or need help choosing the right POS solution for your business? Contact Us and our team will get
          back to you shortly with the information you need. Furthermore, we’re here to help you make the smart move!
        </p>
        <div className="map-container">
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=Mashriq%20Center%2C%20Gulshan-e-Iqbal%2C%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="form-right">
        <form onSubmit={handleSubmit}>
          <label>
            Name <span className="required">*</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email <span className="required">*</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Subject <span className="required">*</span>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>
          <label>
            Message <span className="required">*</span>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
