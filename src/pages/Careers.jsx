import React from 'react';
import { Briefcase } from 'lucide-react';
import './Careers.css';

const jobs = [
  { title: "Android Developer", skill: "Java, Kotlin" },
  { title: "CAD/CAM Designer", skill: "Solidworks" },
  { title: "DFT (Design for Test) Engineer", skill: "DFT Methodologies, ATPG, JTAG" },
  { title: "FARM-stack Developer", skill: "FastAPI, ReactJs, MongoDB" },
  { title: "FPGA", skill: "VHDL, modelsim, xilinx vivado" },
  { title: "Hardware Design & Testing", skill: "C, Embedded C, RTOS, Kicad" },
  { title: "IOS Developer", skill: "Swift" },
  { title: "Machine Learning Engineer", skill: "Python, Keras, Opencv, Scikit, Tensorflow" },
  { title: "MEAN-stack Developer", skill: "AngularJs, NodeJs, MongoDB, ExpressJs" },
  { title: "MERN-stack Developer", skill: "ReactJs, NodeJs, MongoDB, ExpressJs" },
  { title: "Physical Design Engineer", skill: "RTL-to-GDSII Flow, Place and Route, Timing Closure" },
  { title: "Robotics Engineer", skill: "C++, Python, ROS" },
  { title: "Software Tester", skill: "Automation and Manual Testing" },
  { title: "UX/UI Designer", skill: "Framer, Figma, Adobe XD, Sketch" },
  { title: "Verification Engineer", skill: "SystemVerilog, UVM, Functional Coverage" },
  { title: "VLSI Design Engineer", skill: "RTL Design, Verilog, Synthesis" }
];

const Careers = () => {
  return (
    <div className="careers-page">
      <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')" }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1>Join Our Team</h1>
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
                  <Briefcase size={28} />
                </div>
                <h3>{job.title}</h3>
                <p><strong>Skill:</strong> {job.skill}</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
