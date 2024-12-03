import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
      </header>
      <section className="service-list">
        <div className="service-item">
          <h2>Digital Marketing</h2>
          <p>We help businesses grow online with SEO, PPC campaigns, social media marketing, and more.</p>
        </div>
        <div className="service-item">
          <h2>Website Designing</h2>
          <p>Our web design services include custom websites, landing pages, and e-commerce solutions tailored to your business needs.</p>
        </div>
        <div className="service-item">
          <h2>Graphic Designing</h2>
          <p>Our graphic design services include logo design, branding, social media graphics, and marketing materials.</p>
        </div>
      </section>
    </div>
  );
}

export default Services;
