import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <h1>NextMindStudio</h1>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <div className="navbar-button">
          <Link to="/contact">
            <button className="footer-button">
              LET'S TALK
              <span className="button-icon">➔</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Hamburger Menu (for mobile) */}
      <div className={`navbar-hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
