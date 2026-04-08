import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80')" }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1>Contact Us</h1>
          <p>Your all-in-one stop for digital products</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-intro text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We offer both digital and physical products that meet our customer's requirements. If you're looking for customized solutions to power up your business, we'll be happy to help out!</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <MapPin size={32} />
              </div>
              <h3>India Office</h3>
              <p>6/12 Papa vaikal Street, Ayyampettai Post<br />
              Papanasam Taluk<br />
              Thanjavur 614201, Tamilnadu, India.</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <MapPin size={32} />
              </div>
              <h3>UK Office</h3>
              <p>71-75 Shelton Street, Covent Garden<br />
              London, WC2H 9JQ<br />
              United Kingdom.</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <Phone size={32} />
              </div>
              <h3>Phone</h3>
              <p><a href="tel:+918754906714">+91 8754906714</a></p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <Mail size={32} />
              </div>
              <h3>Email</h3>
              <p><a href="mailto:contact@techbrainnetworks.com">contact@techbrainnetworks.com</a></p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
