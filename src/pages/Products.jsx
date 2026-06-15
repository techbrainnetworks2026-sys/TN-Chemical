import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Products.css';
import prd1 from '../assets/prd1.jpg'
import prd2 from '../assets/prd2.jpg'
import prd3 from '../assets/prd3.jpg'
import prd4 from '../assets/prd4.webp'
import prd5 from '../assets/prd5.jpg'
import prd6 from '../assets/prd6.png'
import prd7 from '../assets/prd7.jpg'
import prd8 from '../assets/prd8.jpg'
import prd9 from '../assets/prd9.jpg'
import prd10 from '../assets/prd10.jpg'
import prd11 from '../assets/prd11.jpeg'
import prd12 from '../assets/prd12.avif'
import prd13 from '../assets/prd13.jpg'
import prd14 from '../assets/prd14.jpg'
import prd15 from '../assets/prd15.jpg'
import prd16 from '../assets/prd16.jpg'
import prd17 from '../assets/prd17.jpg'
import prd18 from '../assets/prd18.jpeg'
import prd19 from '../assets/prd19.jpg'
import prd20 from '../assets/prd20.jpg'

export const productsList = [
  {
    id: 1, title: "Process Simulation & Optimization",
    desc: "Chemical plant digital simulation dashboard, process flow diagrams.",
    img: prd1
  },
  {
    id: 2, title: "Environmental Impact Assessment",
    desc: "Chemical plant with environmental analytics dashboard.",
    img: prd2
  },
  {
    id: 3, title: "Chemical Inventory Management",
    desc: "Chemical storage warehouse with inventory software.",
    img: prd3
  },
  {
    id: 4, title: "LIMS (Laboratory Information)",
    desc: "Modern chemical laboratory with digital data monitoring.",
    img: prd4
  },
  {
    id: 5, title: "Quality Control & Assurance",
    desc: "Lab technician analyzing samples with quality control dashboard.",
    img: prd5
  },
  {
    id: 6, title: "Hazardous Material Tracking",
    desc: "Hazardous chemical containers with tracking analytics.",
    img: prd6
  },
  {
    id: 7, title: "Chemical Safety Management",
    desc: "Safety dashboard, chemical plant worker with PPE.",
    img: prd7
  },
  {
    id: 8, title: "Regulatory Compliance",
    desc: "Compliance analytics dashboard, chemical documentation.",
    img: prd8
  },
  {
    id: 9, title: "Sustainable Chemistry Tools",
    desc: "Eco-friendly chemical plant with green technology.",
    img: prd9
  },
  {
    id: 10, title: "Supply Chain & Collaboration",
    desc: "Chemical logistics tracking dashboard, transport containers.",
    img: prd10
  },
  {
    id: 11, title: "Process Safety Management",
    desc: "Chemical plant safety monitoring control room.",
    img: prd11
  },
  {
    id: 12, title: "Computational Chemistry",
    desc: "Molecular structure visualization on scientific software.",
    img: prd12
  },
  {
    id: 13, title: "Waste Management & Recycling",
    desc: "Chemical recycling facility, waste management dashboard.",
    img: prd13
  },
  {
    id: 14, title: "Emission Reduction Solutions",
    desc: "Industrial plant emission monitoring analytics.",
    img: prd14
  },
  {
    id: 15, title: "Batch Process Control",
    desc: "Chemical batch processing control screen.",
    img: prd15
  },
  {
    id: 16, title: "Remote Monitoring & Control",
    desc: "Operator monitoring plant remotely using tablet.",
    img: prd16
  },
  {
    id: 17, title: "Plant Maintenance Software",
    desc: "Industrial maintenance engineer using monitoring system.",
    img: prd17
  },
  {
    id: 18, title: "MSDS Management Systems",
    desc: "MSDS documentation software interface.",
    img: prd18
  },
  {
    id: 19, title: "Digital Twin Technology",
    desc: "Digital twin 3D chemical plant model with analytics overlay.",
    img: prd19
  },
  {
    id: 20, title: "Advanced Market Analytics",
    desc: "Chemical market analytics dashboard, business intelligence charts.",
    img: prd20
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
                  <img src={prod.img } alt={prod.title} />
                </div>
                <div className="product-content">
                  <h3>{prod.title}</h3>
                  <p>{prod.desc}</p>
                  <Link to={`/product/${prod.id}`} className="product-link btn-text" style={{display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}>Learn More <ArrowRight size={16} /></Link>
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
