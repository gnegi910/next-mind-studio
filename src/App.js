import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Blogs from './Components/Blogs';
import BlogPost from './Components/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Dynamic route for individual blog posts */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
