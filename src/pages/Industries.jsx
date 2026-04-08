import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './Industries.css';

const industriesList = [
  "Aerospace", "Agriculture", "Automotive", "Chemical", 
  "Defence Technology", "Education", "Energy & Utilities", 
  "Entertainment and Media", "Finance", "Food Technology", 
  "Healthcare", "Infrastructure", "Logistics", "Manufacturing", 
  "Ocean Technology", "Oil and Gas", "Pharmaceutical", "Retail", 
  "Sports Technology", "Telecommunication", "Textile", 
  "Transportation", "Travel"
];

const Industries = () => {
  return (
    <div className="industries-page">
      <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1920&q=80')" }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1>Industries We Serve</h1>
          <p>Delivering 480 innovative products spanning across multiple domains</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Global Impact</h2>
          <p className="section-subtitle">Our technological solutions cater to a diverse array of industries, empowering them with digital transformation and innovation.</p>
          
          <div className="industry-grid">
            {industriesList.map((ind, index) => (
              <div className="industry-card" key={index}>
                <CheckCircle2 className="industry-icon" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
