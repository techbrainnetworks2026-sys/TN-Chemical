import React from 'react';
import { Briefcase } from 'lucide-react';
import './Careers.css';

const jobs = [
  { title: "Android Developer", skill: "Java, Kotlin" },
  { title: "CAD/CAM Designer", skill: "Solidworks" },
  { title: "FARM-stack Developer", skill: "FastAPI, ReactJs, MongoDB" },
  { title: "Hardware Design & Testing", skill: "C, Embedded C, RTOS, Kicad" }, 
  { title: "Machine Learning Engineer", skill: "Python, Keras, Opencv, Scikit, Tensorflow" },
  { title: "MEAN-stack Developer", skill: "AngularJs, NodeJs, MongoDB, ExpressJs" },
  { title: "MERN-stack Developer", skill: "ReactJs, NodeJs, MongoDB, ExpressJs" },
  { title: "Robotics Engineer", skill: "C++, Python, ROS" },
  { title: "Software Tester", skill: "Automation and Manual Testing" },
  { title: "UX/UI Designer", skill: "Framer, Figma, Adobe XD, Sketch" }
];

const Careers = () => {
  return (
    <div className="careers-page">
      <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h2>Join Our Team</h2>
          <p>Shape the future of technology and make a global impact</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">We are constantly on the lookout for passionate innovators to join our team across a variety of domains.</p>

          <div className="careers-grid">
            {jobs.map((job, idx) => (
              <div className="career-card" key={idx}>
                <div className="career-icon">
                  <Briefcase size={28} aria-hidden="true" />
                </div>
                <h3>{job.title}</h3>
                <p><strong>Skill:</strong> {job.skill}</p>
                <button 
                  className="btn btn-primary" 
                  style={{ marginTop: '1rem', width: '100%' }}
                  aria-label={`Apply now for the position of ${job.title}`}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
