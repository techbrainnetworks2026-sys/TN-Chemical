import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="footer-logo" aria-label="Techbrain Networks - Go to homepage">
            <Beaker className="logo-icon" aria-hidden="true" />
            <span>Techbrain Networks</span>
          </Link>
          <p className="footer-desc">
            Empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Techbrain Networks on Facebook"><Facebook size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Techbrain Networks on Twitter"><Twitter size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Techbrain Networks on LinkedIn"><Linkedin size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Techbrain Networks on Instagram"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#products">Products</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#careers">Careers</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="contact-icon" aria-hidden="true" />
              <span>Thanjavur 614201, Tamilnadu, India</span>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" aria-hidden="true" />
              <span>London, WC2H 9JQ, United Kingdom</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" aria-hidden="true" />
              <span><a href="tel:+918754906714" style={{color: 'inherit', textDecoration: 'none'}} aria-label="Call Techbrain Networks">+91 8754906714</a></span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" aria-hidden="true" />
              <span><a href="mailto:contact@techbrainnetworks.com" style={{color: 'inherit', textDecoration: 'none'}} aria-label="Email Techbrain Networks">contact@techbrainnetworks.com</a></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
          <p>&copy; {new Date().getFullYear()} Techbrain Networks. All rights reserved.</p>
          <div className="legal-links" style={{display: 'flex', gap: '20px'}}>
            <Link to="/terms" style={{color: '#a0aec0', textDecoration: 'none'}} aria-label="Read our Terms and Conditions">Terms and Conditions</Link>
            <Link to="/privacy" style={{color: '#a0aec0', textDecoration: 'none'}} aria-label="Read our Privacy Policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
