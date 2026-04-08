import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'products', 'industries', 'services', 'careers', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'About', path: '#about', id: 'about' },
    { name: 'Products', path: '#products', id: 'products' },
    { name: 'Industries', path: '#industries', id: 'industries' },
    { name: 'Services', path: '#services', id: 'services' },
    { name: 'Careers', path: '#careers', id: 'careers' },
    { name: 'Contact', path: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
    // If not on root path, go there first? Actually we removed other routes so we are always on root
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38" height="38" fill="none">
            {/* Flask body */}
            <path d="M18 8 L18 22 L8 36 Q6 40 10 42 L38 42 Q42 40 40 36 L30 22 L30 8 Z"
              fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
            {/* Neck cap */}
            <line x1="16" y1="8" x2="32" y2="8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
            {/* Liquid fill */}
            <path d="M12 36 Q10 40 14 41 L34 41 Q38 40 36 36 L27 24 L21 24 Z" fill="currentColor" opacity="0.2"/>
            {/* Bubbles */}
            <circle cx="20" cy="35" r="2" fill="currentColor" opacity="0.7"/>
            <circle cx="27" cy="31" r="1.4" fill="currentColor" opacity="0.5"/>
            <circle cx="24" cy="38" r="1.1" fill="currentColor" opacity="0.6"/>
            {/* Atom orbit */}
            <ellipse cx="24" cy="16" rx="7" ry="3" stroke="currentColor" strokeWidth="1" opacity="0.45" strokeDasharray="2.5 1.5"/>
            <circle cx="31" cy="16" r="1.5" fill="currentColor" opacity="0.65"/>
          </svg>
          <div className="logo-text">
            <span className="logo-brand">Techbrain Networks</span>
            <span className="logo-division">Chemical</span>
          </div>
        </a>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <a 
                href={link.path} 
                className={`nav-links ${activeSection === link.id ? 'active-link' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
