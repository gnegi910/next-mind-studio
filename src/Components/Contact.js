import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email, company, message, selectedServices });
  };

  return (
    <div className="contact-page">
      {/* Intro Section */}
      <section className="intro">
        <h1>Let’s Create Something Extraordinary</h1>
        <p>Your ideas deserve to shine. Let’s make them come alive.</p>
      </section>

      {/* Animated Particles */}
      <div className="particles"></div>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h3>Select Your Services</h3>
        <div className="service-cards">
          {['Branding', 'Web Design', 'Illustration', 'Motion Design', '3D Design', 'Graphic Design'].map((service) => (
            <div
              key={service}
              className={`service-card ${selectedServices.includes(service) ? 'selected' : ''}`}
              onClick={() => handleServiceToggle(service)}
            >
              {service}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Your Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="form-input"
          />
          <textarea
            placeholder="Describe your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-textarea"
          />
          <button type="submit" className="form-submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
