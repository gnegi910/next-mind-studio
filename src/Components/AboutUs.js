import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About <span className="highlight">NextMindStudio</span></h1>
        <p>Your Creative Partner in Digital Innovation</p>
      </header>

      {/* Introduction */}
<section className="about-us-intro">
  <h2>Who We Are</h2>
  <p>
    At <strong>NextMindStudio</strong>, we’re more than just a digital agency. 
    We’re a team of passionate creatives, tech enthusiasts, and problem-solvers who bring your ideas to life. 
    Whether it’s designing breathtaking websites or crafting impactful marketing strategies, we thrive on turning challenges into opportunities.
  </p>
</section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <img src="/Photos/innovation.png" alt="Innovation Icon" />
            <h3>Innovative Solutions</h3>
            <p>We think outside the box to deliver unique, results-driven solutions.</p>
          </div>
          <div className="feature">
            <img src="/Photos/badge.png" alt="Quality Icon" />
            <h3>Quality Assurance</h3>
            <p>Our attention to detail ensures exceptional results every time.</p>
          </div>
          <div className="feature">
            <img src="/Photos/partners.png" alt="Teamwork Icon" />
            <h3>Collaborative Approach</h3>
            <p>Your goals become ours, and together, we achieve greatness.</p>
          </div>
          <div className="feature">
  <img src="/Photos/handle-with-care.png" alt="Personalized Approach Icon" />
  <h3>Personalized Approach</h3>
  <p>We understand that every business is unique. Our tailored solutions are designed to fit your specific needs, ensuring your goals are met with precision and care.</p>
</div>
<div className="feature">
  <img src="/Photos/satisfied.png" alt="Proven Track Record Icon" />
  <h3>Proven Track Record</h3>
  <p>With a history of successful projects and satisfied clients, we deliver results that speak for themselves. Our work consistently exceeds expectations, fostering long-term relationships with our clients.</p>
</div>
<div className="feature">
  <img src="/Photos/tech-service.png" alt="Cutting Edge Technology Icon" />
  <h3>Cutting-Edge Technology</h3>
  <p>We leverage the latest technology and tools to create innovative, scalable solutions that keep you ahead of the curve in the ever-evolving digital landscape.</p>
</div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="meet-the-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team-member1.jpg" alt="Team Member 1" />
            <h4>John Doe</h4>
            <p>CEO & Visionary</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member2.jpg" alt="Team Member 2" />
            <h4>Jane Smith</h4>
            <p>Lead Designer</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member3.jpg" alt="Team Member 3" />
            <h4>David Lee</h4>
            <p>Marketing Guru</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"NextMindStudio transformed our online presence with a stunning website and strategic marketing campaigns."</p>
          <h4>– Sarah Johnson, CEO of TechWorld</h4>
        </div>
        <div className="testimonial">
          <p>"Their creativity and attention to detail are unparalleled. Highly recommend!"</p>
          <h4>– Michael Brown, Founder of GreenGrowth</h4>
        </div>
      </section>

      {/* Our Journey */}
      <section className="our-journey">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-event">
            <h4>2015</h4>
            <p>NextMindStudio was born out of a passion for innovation and creativity.</p>
          </div>
          <div className="timeline-event">
            <h4>2018</h4>
            <p>Launched our 100th successful project for a global client base.</p>
          </div>
          <div className="timeline-event">
            <h4>2023</h4>
            <p>Named a top digital agency by Global Media Awards.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
