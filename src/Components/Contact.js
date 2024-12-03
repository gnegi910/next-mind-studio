import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted with:", { name, email, company, message });
  };

  return (
    <div className="contact-page">
      {/* Intro Section */}
      <section className="intro">
        <h1 className="fadeIn">Ready to start your amazing project?</h1>
      </section>


      {/* Contact Form Section */}
      <section className="contact-form fadeInUp">
        <h3>Tell us what you need...</h3>
        <div className="service-options">
          <label>
            <input type="checkbox" /> Branding
          </label>
          <label>
            <input type="checkbox" /> Web Design
          </label>
          <label>
            <input type="checkbox" /> Illustration
          </label>
          <label>
            <input type="checkbox" /> Motion Design
          </label>
          <label>
            <input type="checkbox" /> 3D Design
          </label>
          <label>
            <input type="checkbox" /> Graphic Design
          </label>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleFormSubmit}>
          <input 
            type="text" 
            placeholder="What's your name?" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="form-input"
          />
          <input 
            type="email" 
            placeholder="What's your email address?" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="form-input"
          />
          <input 
            type="text" 
            placeholder="What's your company name?" 
            value={company} 
            onChange={(e) => setCompany(e.target.value)} 
            required 
            className="form-input"
          />
          <textarea 
            placeholder="Tell us more about your project" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required
            className="form-textarea"
          />
          <button type="submit" className="form-submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      {/* Since Footer is already implemented in your app, it is omitted here */}
    </div>
  );
}

export default Contact;
