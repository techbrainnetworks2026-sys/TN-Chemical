import React from 'react';
import About from './About';
import Products from './Products';
import Industries from './Industries';
import Services from './Services';
import Careers from './Careers';
import Contact from './Contact';
import './Home.css';

const Home = () => {
  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <picture className="hero-bg-picture">
          <source media="(max-width: 640px)" srcSet="/image/chemical_background_640.avif" type="image/avif" />
          <source media="(max-width: 640px)" srcSet="/image/chemical_background_640.webp" type="image/webp" />
          <source media="(max-width: 1200px)" srcSet="/image/chemical_background_1200.avif" type="image/avif" />
          <source media="(max-width: 1200px)" srcSet="/image/chemical_background_1200.webp" type="image/webp" />
          <source srcSet="/image/chemical_background_1920.avif" type="image/avif" />
          <source srcSet="/image/chemical_background_1920.webp" type="image/webp" />
          <img 
            src="/image/chemical_background.jpeg" 
            alt="Advanced industrial chemical processing plant facility representing Techbrain Networks solutions" 
            className="hero-bg-img"
            loading="eager" 
            fetchpriority="high" 
            decoding="async" 
          />
        </picture>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Advanced Chemical Technology Solutions</h1>
          <p>Driving Innovation, Safety and Sustainability in Chemical Manufacturing</p>
          <div className="hero-buttons">
            <a href="#products" onClick={(e) => handleScrollClick(e, 'products')} className="btn btn-primary" aria-label="Explore chemical products">Explore Products</a>
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="btn btn-accent" aria-label="Contact Techbrain Networks team">Contact Us</a>
          </div>
        </div>
      </section>

      <div id="about">
        <About />
      </div>

      <div id="products">
        <Products />
      </div>

      <div id="industries">
        <Industries />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="careers">
        <Careers />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
