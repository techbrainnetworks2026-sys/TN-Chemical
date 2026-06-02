import React, { useEffect } from 'react';
import './Policy.css';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="page-header detail-header">
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1>Terms and Conditions</h1>
          <p>Please read these terms carefully before using our services</p>
        </div>
      </div>
      <div className="container policy-content">
        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>Welcome to Techbrain Networks. By accessing our website, you agree to these terms and conditions.</p>
        </section>
        <section className="policy-section">
          <h2>2. Intellectual Property Rights</h2>
          <p>Other than the content you own, under these terms, Techbrain Networks and/or its licensors own all the intellectual property rights and materials contained in this website.</p>
        </section>
        <section className="policy-section">
          <h2>3. Restrictions</h2>
          <p>You are specifically restricted from publishing any website material in any other media, selling, sublicensing, and/or otherwise commercializing any website material.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
