import React from "react";
import "./Portfolio.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const logoImages = [
  { src: "/Photos/Logos/Alyana.jpg", title: "Alyana" },
  { src: "/Photos/Logos/petferals.jpg", title: "Pet Ferals" },
  { src: "/Photos/Logos/vista.jpg", title: "Vista" },
];

const letterHead = [
  { src: "/Photos/LetterHead/Amoor.jpg", title: "Amoor" },
  { src: "/Photos/LetterHead/AN.jpg", title: "AN" },
  { src: "/Photos/LetterHead/Avanche.jpg", title: "Avanche" },
];

const bannerImages = [
  { src: "/Photos/Banner/AllianceBiotech.jpg", title: "Alliance Biotech" },
  { src: "/Photos/Banner/EraEdu.jpg", title: "Era Edu" },
  { src: "/Photos/Banner/E-max.jpg", title: "E-Max" },
];

const businesscard = [
  { src: "/Photos/BusinessCard/chhabra-sons.jpg", title: "Chhabra Sons" },
  { src: "/Photos/BusinessCard/Amoor.jpg", title: "Amoor" },
  { src: "/Photos/BusinessCard/Indswift.jpg", title: "Indswift" },
];

const videoProjects = [
  { src: "/Videos/exploring-gujrat.mp4", title: "Exploring Gujrat", type: "video/mp4" },
  { src: "/Videos/WhoPlant.mp4", title: "WhoPlant", type: "video/mp4" },
  { src: "/Videos/WeddingInvitation.mp4", title: "Wedding Invitation", type: "video/mp4" },
];

function Portfolio() {
  const renderCarouselItems = (items, isVideo = false) =>
    items.map((item, index) => (
      <div key={index} className="carousel-item">
        {isVideo ? (
          <video controls>
            <source src={item.src} type={item.type} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={item.src} alt={item.title} />
        )}
        <p>{item.title}</p>
      </div>
    ));

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

      <section className="portfolio-section creative-portfolio">
        <h2>Graphic Designing</h2>

        {/* Logos and Letterhead */}
        <div className="carousel-row">
          {/* Logos Carousel */}
          <div className="carousel-container">
            <h3>Logos</h3>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showStatus={false}
              className="portfolio-carousel"
            >
              {logoImages.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image.src} alt={`Logo ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Letterhead Carousel */}
          <div className="carousel-container">
            <h3>Letterhead</h3>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showStatus={false}
              className="portfolio-carousel"
            >
              {letterHead.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image.src} alt={`Letterhead ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Banners and Business Cards */}
        <div className="carousel-row">
          {/* Banners Carousel */}
          <div className="carousel-container">
            <h3>Banners</h3>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showStatus={false}
              className="portfolio-carousel"
            >
              {bannerImages.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image.src} alt={`Banner ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Business Cards Carousel */}
          <div className="carousel-container">
            <h3>Business Cards</h3>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showStatus={false}
              className="portfolio-carousel"
            >
              {businesscard.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image.src} alt={`Business Card ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Video Editing Section */}
      <section className="portfolio-section creative-portfolio video-spacing">
        <h2>Video Editing</h2>
        <h3>Projects</h3>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
          className="portfolio-carousel"
          centerMode={true}
          centerSlidePercentage={50}
        >
          {renderCarouselItems(videoProjects, true)}
        </Carousel>
      </section>
{/* Digital Marketing Section (Without Carousel) */}
{/* Digital Marketing Section */}
<section className="portfolio-section digital-marketing-section">
  <h2>Digital Marketing</h2>
  <div className="digital-marketing-grid">
    <div className="marketing-card">
      <img src="/Photos/DigitalMarketing/social-media.jpg" alt="Social Media Marketing" />
      <h3>Social Media Marketing</h3>
      <p>Boost your brand's presence across platforms like Instagram, Facebook, and Twitter.</p>
    </div>
    <div className="marketing-card">
      <img src="/Photos/DigitalMarketing/seo.jpg" alt="SEO Optimization" />
      <h3>SEO Optimization</h3>
      <p>Rank higher on search engines with our tailored SEO strategies.</p>
    </div>
    <div className="marketing-card">
      <img src="/Photos/DigitalMarketing/ppc.jpg" alt="PPC Campaigns" />
      <h3>PPC Campaigns</h3>
      <p>Drive targeted traffic with cost-effective Pay-Per-Click campaigns.</p>
    </div>
    <div className="marketing-card">
      <img src="/Photos/DigitalMarketing/content-marketing.jpg" alt="Content Marketing" />
      <h3>Content Marketing</h3>
      <p>Engage your audience with high-quality blogs, articles, and infographics.</p>
    </div>
    <div className="marketing-card">
      <img src="/Photos/DigitalMarketing/email.jpg" alt="Email Marketing" />
      <h3>Email Marketing</h3>
      <p>Build customer loyalty with personalized email campaigns.</p>
    </div>
    <div className="marketing-card">
      <img src="/Photos/DigitalMarketing/analytics.jpg" alt="Analytics & Reporting" />
      <h3>Analytics & Reporting</h3>
      <p>Monitor your progress and refine strategies with our in-depth reports.</p>
    </div>
  </div>
</section>

    </div>
  );
}

export default Portfolio;
