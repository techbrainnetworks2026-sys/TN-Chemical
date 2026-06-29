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
        <Link to="/" className="btn btn-primary" aria-label="Return to the homepage">Back to Home</Link>
      </div>
    );
  }

  // Structured Data Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tn-chemical.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://tn-chemical.vercel.app/#products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://tn-chemical.vercel.app/product/${id}`
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": productMeta ? `https://tn-chemical.vercel.app${productMeta.webp}` : undefined,
    "description": product.content.Introduction?.[0] || `Enterprise solution for ${product.title}.`,
    "brand": {
      "@type": "Brand",
      "name": "Techbrain Networks"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0.00",
      "availability": "https://schema.org/InStock",
      "url": `https://tn-chemical.vercel.app/product/${id}`
    }
  };

  return (
    <div className="product-detail-page">
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      <div className="page-header detail-header">
        <div className="header-overlay"></div>
        <div className="container header-content">
          <Link to="/#products" className="back-link" aria-label="Go back to the chemical products list"><ArrowLeft size={20} aria-hidden="true"/> Back to Products</Link>
          <h1>{product.title}</h1>
          <p>Detailed insights and comprehensive capabilities</p>
        </div>
      </div>
      
      <div className="container detail-content">
        {productMeta?.img && (
          <div className="product-main-image" style={{ textAlign: 'center', marginBottom: '40px', marginTop: '10px' }}>
            <picture>
              <source srcSet={productMeta.avif} type="image/avif" />
              <source srcSet={productMeta.webp} type="image/webp" />
              <img 
                src={productMeta.img} 
                alt={`${product.title} interface details`} 
                loading="lazy" 
                decoding="async" 
                width="640" 
                height="320" 
                style={{maxWidth: '80%', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
              />
            </picture>
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
