const jpgs = import.meta.glob('../assets/prd*.jpg', { eager: true, import: 'default' });
const webps = import.meta.glob('../assets/prd*.webp', { eager: true, import: 'default' });
const avifs = import.meta.glob('../assets/prd*.avif', { eager: true, import: 'default' });

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Products.css';

const rawProductsList = [
  {
    id: 1, title: "Process Simulation & Optimization",
    desc: "Chemical plant digital simulation dashboard, process flow diagrams."
  },
  {
    id: 2, title: "Environmental Impact Assessment",
    desc: "Chemical plant with environmental analytics dashboard."
  },
  {
    id: 3, title: "Chemical Inventory Management",
    desc: "Chemical storage warehouse with inventory software."
  },
  {
    id: 4, title: "LIMS (Laboratory Information)",
    desc: "Modern chemical laboratory with digital data monitoring."
  },
  {
    id: 5, title: "Quality Control & Assurance",
    desc: "Lab technician analyzing samples with quality control dashboard."
  },
  {
    id: 6, title: "Hazardous Material Tracking",
    desc: "Hazardous chemical containers with tracking analytics."
  },
  {
    id: 7, title: "Chemical Safety Management",
    desc: "Safety dashboard, chemical plant worker with PPE."
  },
  {
    id: 8, title: "Regulatory Compliance",
    desc: "Compliance analytics dashboard, chemical documentation."
  },
  {
    id: 9, title: "Sustainable Chemistry Tools",
    desc: "Eco-friendly chemical plant with green technology."
  },
  {
    id: 10, title: "Supply Chain & Collaboration",
    desc: "Chemical logistics tracking dashboard, transport containers."
  },
  {
    id: 11, title: "Process Safety Management",
    desc: "Chemical plant safety monitoring control room."
  },
  {
    id: 12, title: "Computational Chemistry",
    desc: "Molecular structure visualization on scientific software."
  },
  {
    id: 13, title: "Waste Management & Recycling",
    desc: "Chemical recycling facility, waste management dashboard."
  },
  {
    id: 14, title: "Emission Reduction Solutions",
    desc: "Industrial plant emission monitoring analytics."
  },
  {
    id: 15, title: "Batch Process Control",
    desc: "Chemical batch processing control screen."
  },
  {
    id: 16, title: "Remote Monitoring & Control",
    desc: "Operator monitoring plant remotely using tablet."
  },
  {
    id: 17, title: "Plant Maintenance Software",
    desc: "Industrial maintenance engineer using monitoring system."
  },
  {
    id: 18, title: "MSDS Management Systems",
    desc: "MSDS documentation software interface."
  },
  {
    id: 19, title: "Digital Twin Technology",
    desc: "Digital twin 3D chemical plant model with analytics overlay."
  },
  {
    id: 20, title: "Advanced Market Analytics",
    desc: "Chemical market analytics dashboard, business intelligence charts."
  }
];

export const productsList = rawProductsList.map(prod => ({
  ...prod,
  img: jpgs[`../assets/prd${prod.id}.jpg`],
  webp: webps[`../assets/prd${prod.id}.webp`],
  avif: avifs[`../assets/prd${prod.id}.avif`]
}));

const Products = () => {
  return (
    <div className="products-page">
      <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80')" }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h2>Our Chemical Technology Solutions</h2>
          <p>Explore 20 Cutting-Edge Products for the Chemical Industry</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="product-grid grid grid-cols-4">
            {productsList.map((prod) => (
              <div className="product-card" key={prod.id}>
                <div className="product-img">
                  <picture>
                    <source srcSet={prod.avif} type="image/avif" />
                    <source srcSet={prod.webp} type="image/webp" />
                    <img 
                      src={prod.img} 
                      alt={prod.title} 
                      loading="lazy" 
                      decoding="async" 
                      width="400" 
                      height="200" 
                      style={{ objectFit: 'cover' }}
                    />
                  </picture>
                </div>
                <div className="product-content">
                  <h3>{prod.title}</h3>
                  <p>{prod.desc}</p>
                  <Link 
                    to={`/product/${prod.id}`} 
                    className="product-link btn-text" 
                    style={{display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}
                    aria-label={`Explore details and capabilities of ${prod.title}`}
                  >
                    Explore Details <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
