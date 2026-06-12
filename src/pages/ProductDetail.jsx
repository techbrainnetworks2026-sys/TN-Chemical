import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productDetails } from '../data/productDetails';
import { productsList } from './Products';
import { ArrowLeft } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails.find(p => p.id === parseInt(id));
  const productMeta = productsList.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="product-detail-page not-found">
        <h2>Product Not Found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="page-header detail-header">
        <div className="header-overlay"></div>
        <div className="container header-content">
          <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Products</Link>
          <h1>{product.title}</h1>
          <p>Detailed insights and comprehensive capabilities</p>
        </div>
      </div>
      
      <div className="container detail-content">
        {productMeta?.img && (
          <div className="product-main-image" style={{ textAlign: 'center', marginBottom: '40px', marginTop: '10px' }}>
            <img src={productMeta.img} alt={product.title} style={{maxWidth: '80%', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }} />
          </div>
        )}
        
        {Object.entries(product.content).map(([heading, points], idx) => (
          <section key={idx} className="detail-section">
            <h2>{heading}</h2>
            <ul className="points-list">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
