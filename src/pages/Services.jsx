import React from 'react';
import './Services.css';

const servicesList = [
  {
    title: "Software Development",
    desc: "Techbrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions for businesses across multiple industries. We develop robust, scalable, and secure applications for web, mobile, and desktop platforms, ensuring they are tailored to meet the unique requirements of each client. With a focus on quality and efficiency, our team leverages the latest technologies to deliver high-performing software that drives growth and optimizes operations.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  },
  {
    title: "Hardware Engineering",
    desc: "Techbrain Networks offers expert hardware engineering services designed to bring innovative and reliable products to market. Our team specializes in end-to-end hardware development, from concept design and prototyping to testing and production. We work across industries, including aerospace, automotive, healthcare, and more, ensuring that our solutions meet stringent quality and safety standards.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    title: "Product Design",
    desc: "Techbrain Networks delivers innovative product design services, transforming ideas into market-ready solutions. Our team excels in creating user-centric designs that balance functionality, aesthetics, and usability. We handle everything from concept development and prototyping to final production, ensuring each product meets industry standards and client expectations. With a focus on cutting-edge design technologies and techniques.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
  },
  {
    title: "Research & Development",
    desc: "Techbrain Networks offers comprehensive Research & Development (R&D) services, driving innovation and technological advancements for businesses. Our team specializes in exploring new technologies, developing prototypes, and conducting in-depth testing to turn ideas into viable products. We focus on solving complex challenges across industries such as aerospace, healthcare, and technology, ensuring our R&D efforts lead to breakthroughs that enhance efficiency and performance.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')" }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1>Our Core Services</h1>
          <p>We take pride in being an innovative organization where the digital revolution thrives</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="services-container">
            {servicesList.map((svc, idx) => (
              <div className={`service-row ${idx % 2 !== 0 ? 'reverse' : ''}`} key={idx}>
                <div className="service-image">
                  <img src={svc.img} alt={svc.title} />
                </div>
                <div className="service-content">
                  <h2>{svc.title}</h2>
                  <p>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
