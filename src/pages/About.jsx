import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')" }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1>About Techbrain Networks</h1>
          <p>Innovating for a Smarter, More Connected World</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="about-intro text-center">
            <h2 className="section-title">Who We Are</h2>
            <p className="intro-text">
              Techbrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing.
            </p>
            <p className="intro-text">
              We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="core-card">
              <div className="icon-wrapper">
                <h3>V</h3>
              </div>
              <h4>Vision</h4>
              <p>We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.</p>
            </div>
            
            <div className="core-card">
              <div className="icon-wrapper">
                <h3>M</h3>
              </div>
              <h4>Mission</h4>
              <p>We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.</p>
            </div>
            
            <div className="core-card">
              <div className="icon-wrapper">
                <h3>P</h3>
              </div>
              <h4>Passion</h4>
              <p>Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Leadership</h2>
          <div className="team-member">
            <div className="team-avatar">
              <img src="https://ui-avatars.com/api/?name=Ramkumar+Arunachalam&size=150&background=0B3C5D&color=fff" alt="Ramkumar Arunachalam" />
            </div>
            <h3>Ramkumar Arunachalam</h3>
            <span className="role">Founder of Techbrain Networks</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
