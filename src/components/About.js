import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">👤</span>
          SUMMARY
        </h2>
        <div className="about-content">
          <div className="summary-box">
            <p className="summary">
              Highly motivated student with a keen attention to detail and the ability to multitask effectively. 
              Possesses strong communication and computer skills, combined with a positive attitude and the 
              flexibility to adapt to new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
