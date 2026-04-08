import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <Beaker className="logo-icon" />
            <span>Techbrain Networks</span>
          </Link>
          <p className="footer-desc">
            Empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability.
          </p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Thanjavur 614201, Tamilnadu, India</span>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>London, WC2H 9JQ, United Kingdom</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 8754906714</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>contact@techbrainnetworks.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Techbrain Networks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
