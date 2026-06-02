import React, { useEffect } from 'react';
import './Policy.css';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="page-header detail-header">
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us</p>
        </div>
      </div>
      <div className="container policy-content">
        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>We collect information to provide better services to all our users. The information Techbrain Networks collects, and how that information is used, depends on how you use our services.</p>
        </section>
        <section className="policy-section">
          <h2>2. How We Use Information</h2>
          <p>We use the information we collect from all our services for the following purposes: providing, maintaining, protecting and improving them, developing new ones, and protecting our users.</p>
        </section>
        <section className="policy-section">
          <h2>3. Information Security</h2>
          <p>We work hard to protect Techbrain Networks and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
