import React, { useEffect, useState, useRef } from 'react';
import './Home.css';

const images = [
  '/Photos/Banner.jpg',
  '/Photos/Banner1.jpg',
  '/Photos/Banner3.jpg',
  '/Photos/logo.jpg',
];

function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const sliderRef = useRef(null); // Reference to the slider container

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return; // If slider is not available, do nothing

    const scrollAmount = slider.offsetWidth / 2; // Scroll half of the slider container
    if (direction === 'left') {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {showSplash ? (
        <div className="splash-screen">
          <div className="logo">NextMindStudio</div>
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="main-content">
          <header className="home-header">
            <h1 className="title">
              Innovate, Design, Deliver
              <br />
              <span style={{ color: 'red' }}>Beyond</span> the Ordinary
            </h1>
            <p className="subtitle">
              Empowering Brands with Creative and Strategic Precision
              <br />
              Expert digital marketing, website designing, and graphic designing services.
            </p>
          </header>
          <section className="cta">
            <button className="cta-button">Book a Call</button>
          </section>
          {/* Horizontal Slider */}
          <div className="horizontal-slider">
            <button
              className="slider-button left"
              onClick={() => scrollSlider('left')}
            >
              &#10094;
            </button>
            <div className="slider-container" ref={sliderRef}>
              {images.map((image, index) => (
                <div key={index} className="slider-image-container-horizontal">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="slider-image-horizontal"
                  />
                </div>
              ))}
            </div>
            <button
              className="slider-button right"
              onClick={() => scrollSlider('right')}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
