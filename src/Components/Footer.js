import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-heading">Let’s Fire Up Your Business!</h2>
        <p className="footer-subheading">
          Team Up With Us Today For An Unforgettable Service Experience.
        </p>
        <button className="footer-button">
          LET'S TALK
          <span className="button-icon">➔</span>
        </button>

        {/* Main Links */}
        <div className="footer-links">
          <a href="#home" className="footer-link-item">Home</a>
          <a href="#services" className="footer-link-item">Services</a>
          <a href="#works" className="footer-link-item">Portfolio</a>
          <a href="#about" className="footer-link-item">About</a>
          <a href="#blogs" className="footer-link-item">Blogs</a>
        </div>

        {/* Contact Info and Social Media */}
        <div className="footer-info">
          <div className="contact-info">
            <p>contact@NextMindStudio.com</p>
            <p>+1 (226) 961-0325</p>
          </div>
          <div className="social-media">
            <p><a href="#dribbble">Dribbble</a></p>
            <p> <a href="#instagram">Instagram</a></p>
            <p> <a href="#tiktok">TikTok</a></p>
            <p><a href="#facebook">Facebook</a></p>
            <p>   <a href="#linkedin">LinkedIn</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NextMindStudio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
