import React from "react";
import "./Portfolio.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const logoImages = [
  { src: "logo1.jpg", title: "Logo Design 1" },
  { src: "logo2.jpg", title: "Logo Design 2" },
  { src: "logo3.jpg", title: "Logo Design 3" },
];

const posterImages = [
  { src: "poster1.jpg", title: "Poster Design 1" },
  { src: "poster2.jpg", title: "Poster Design 2" },
  { src: "poster3.jpg", title: "Poster Design 3" },
];

const bannerImages = [
  { src: "banner1.jpg", title: "Banner Design 1" },
  { src: "banner2.jpg", title: "Banner Design 2" },
  { src: "banner3.jpg", title: "Banner Design 3" },
];

function Portfolio() {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Our Portfolio</h1>
        <p>Explore our expertise in design, marketing, and creativity.</p>
        <button>Contact Us</button>
      </section>

      {/* Website Design Section */}
      <section className="portfolio-section">
        <h2>Website Design</h2>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
          className="portfolio-carousel"
        >
          <div className="carousel-item">
            <img src="website1.jpg" alt="Website Project 1" />
            <h3>E-commerce Platform</h3>
            <p>Custom-built online store with seamless UX.</p>
          </div>
          <div className="carousel-item">
            <img src="website2.jpg" alt="Website Project 2" />
            <h3>Portfolio Website</h3>
            <p>Modern portfolio for a creative agency.</p>
          </div>
          <div className="carousel-item">
            <img src="website3.jpg" alt="Website Project 3" />
            <h3>Corporate Website</h3>
            <p>Professional website for a global enterprise.</p>
          </div>
        </Carousel>
      </section>

      {/* Digital Marketing Section */}
      <section className="portfolio-section">
        <h2>Digital Marketing</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>Social Media Campaign</h3>
            <p>Increased brand engagement by 300% for a tech company.</p>
          </div>
          <div className="portfolio-item">
            <h3>SEO Optimization</h3>
            <p>Boosted organic traffic for a local business.</p>
          </div>
          <div className="portfolio-item">
            <h3>Email Marketing</h3>
            <p>Designed and executed a high-performing email strategy.</p>
          </div>
        </div>
      </section>

      {/* Graphic Designing Section */}
      <section className="portfolio-section creative-portfolio">
        <h2>Graphic Designing</h2>

        {/* Logo Designs */}
        <h3>Logos</h3>
        <div className="image-grid">
          {logoImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
        </div>

        {/* Posters */}
        <h3>Posters</h3>
        <div className="image-grid">
          {posterImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
        </div>

        {/* Banners */}
        <h3>Banners</h3>
        <div className="image-grid">
          {bannerImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
