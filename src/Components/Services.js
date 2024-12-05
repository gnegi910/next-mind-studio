import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p className="services-intro">
          At NextMindStudio, we offer a wide range of digital services tailored to help your business succeed online. Whether you're looking to enhance your online presence, create engaging designs, or drive targeted traffic, we have the expertise to bring your vision to life.
        </p>
      </header>

      <section className="service-list">
        <div className="service-item">
          <img src="/icons/digital-marketing.png" alt="Digital Marketing Icon" />
          <h2>Digital Marketing</h2>
          <p>
            Grow your business online with our comprehensive digital marketing services. We specialize in <strong>SEO, PPC campaigns, social media marketing, and email marketing</strong>. Our strategies are designed to increase your online visibility, attract more customers, and drive revenue.
          </p>
        </div>

        <div className="service-item">
          <img src="/icons/web-design.png" alt="Web Design Icon" />
          <h2>Website Designing</h2>
          <p>
            We create stunning, responsive websites that convert visitors into customers. Our team specializes in <strong>custom websites, landing pages, and e-commerce solutions</strong> that are visually appealing and optimized for performance.
          </p>
        </div>

        <div className="service-item">
          <img src="/icons/graphic-design.png" alt="Graphic Design Icon" />
          <h2>Graphic Designing</h2>
          <p>
            Make a lasting impression with our <strong>logo design, branding, and marketing materials</strong>. We create impactful visuals that resonate with your audience and communicate your brand's identity effectively across all platforms.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;
