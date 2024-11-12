import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// HD Images for the slider (replace these with your own images)
const images = [
  "https://source.unsplash.com/1600x900/?digital,technology",
  "https://source.unsplash.com/1600x900/?marketing",
  "https://source.unsplash.com/1600x900/?design",
  "https://source.unsplash.com/1600x900/?business",
];

function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'ease-in-out',
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
          <Slider {...sliderSettings} className="image-slider">
            {images.map((image, index) => (
              <div key={index} className="slider-image-container">
                <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
              </div>
            ))}
          </Slider>

          <header className="home-header">
            <h1 className="title">Welcome to NextMindStudio</h1>
            <p className="subtitle">
              Your trusted partner for digital marketing, website designing, and graphic designing services.
            </p>
          </header>

          <section className="intro">
            <h2 className="intro-title">What We Do</h2>
            <p className="intro-description">
              We specialize in creating visually appealing and results-driven digital marketing campaigns,
              professional websites, and stunning graphic designs to elevate your business.
            </p>
          </section>

          <section className="cta">
            <button className="cta-button">Get Started</button>
          </section>
        </div>
      )}
      
    </div>
  );
}

export default Home;
