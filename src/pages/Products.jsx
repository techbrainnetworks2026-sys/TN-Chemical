import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Products.css';

const productsList = [
  {
    id: 1, title: "Process Simulation & Optimization",
    desc: "Chemical plant digital simulation dashboard, process flow diagrams.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop"
  },
  {
    id: 2, title: "Environmental Impact Assessment",
    desc: "Chemical plant with environmental analytics dashboard.",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop"
  },
  {
    id: 3, title: "Chemical Inventory Management",
    desc: "Chemical storage warehouse with inventory software.",
    img: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&h=400&fit=crop"
  },
  {
    id: 4, title: "LIMS (Laboratory Information)",
    desc: "Modern chemical laboratory with digital data monitoring.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop"
  },
  {
    id: 5, title: "Quality Control & Assurance",
    desc: "Lab technician analyzing samples with quality control dashboard.",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop"
  },
  {
    id: 6, title: "Hazardous Material Tracking",
    desc: "Hazardous chemical containers with tracking analytics.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
  },
  {
    id: 7, title: "Chemical Safety Management",
    desc: "Safety dashboard, chemical plant worker with PPE.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
  },
  {
    id: 8, title: "Regulatory Compliance",
    desc: "Compliance analytics dashboard, chemical documentation.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
  },
  {
    id: 9, title: "Sustainable Chemistry Tools",
    desc: "Eco-friendly chemical plant with green technology.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop"
  },
  {
    id: 10, title: "Supply Chain & Collaboration",
    desc: "Chemical logistics tracking dashboard, transport containers.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
  },
  {
    id: 11, title: "Process Safety Management",
    desc: "Chemical plant safety monitoring control room.",
    img: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=600&h=400&fit=crop"
  },
  {
    id: 12, title: "Computational Chemistry",
    desc: "Molecular structure visualization on scientific software.",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=400&fit=crop"
  },
  {
    id: 13, title: "Waste Management & Recycling",
    desc: "Chemical recycling facility, waste management dashboard.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop"
  },
  {
    id: 14, title: "Emission Reduction Solutions",
    desc: "Industrial plant emission monitoring analytics.",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop"
  },
  {
    id: 15, title: "Batch Process Control",
    desc: "Chemical batch processing control screen.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
  },
  {
    id: 16, title: "Remote Monitoring & Control",
    desc: "Operator monitoring plant remotely using tablet.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    id: 17, title: "Plant Maintenance Software",
    desc: "Industrial maintenance engineer using monitoring system.",
    img: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=600&h=400&fit=crop&crop=right"
  },
  {
    id: 18, title: "MSDS Management Systems",
    desc: "MSDS documentation software interface.",
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop"
  },
  {
    id: 19, title: "Digital Twin Technology",
    desc: "Digital twin 3D chemical plant model with analytics overlay.",
    img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop"
  },
  {
    id: 20, title: "Advanced Market Analytics",
    desc: "Chemical market analytics dashboard, business intelligence charts.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  }
];

const Products = () => {
  return (
    <div className="products-page">
      <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80')" }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1>Our Chemical Technology Solutions</h1>
          <p>Explore 20 Cutting-Edge Products for the Chemical Industry</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="product-grid grid grid-cols-4">
            {productsList.map((prod) => (
              <div className="product-card" key={prod.id}>
                <div className="product-img">
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                </div>
                <div className="product-content">
                  <h3>{prod.title}</h3>
                  <p>{prod.desc}</p>
                  <button className="product-link btn-text">Learn More <ArrowRight size={16} /></button>
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
