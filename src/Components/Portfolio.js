import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>Our Portfolio</h1>
      </header>
      <section className="portfolio-items">
        <div className="portfolio-item">
          <h2>Website Project 1</h2>
          <p>Custom website design for a local business.</p>
        </div>
        <div className="portfolio-item">
          <h2>Social Media Campaign</h2>
          <p>Successful digital marketing campaign for a tech company.</p>
        </div>
        <div className="portfolio-item">
          <h2>Logo Design</h2>
          <p>Branding and logo design for a startup.</p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
