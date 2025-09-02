import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [showDescriptions, setShowDescriptions] = useState({});

  const toggleDescription = (index) => {
    setShowDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      title: "Neighborhood Sundry Store Attendant",
      company: "Family Business",
      location: "Caloocan City, Metro Manila",
      date: "2021 - Current",
      description: [
        "Assisted customers with product inquiries and facilitated transactions.",
        "Handled payments accurately and efficiently.",
        "Responsible for restocking shelves and maintaining an organized and clean store environment.",
        "Monitored product inventory levels and reported stock needs to the store owner.",
        "Ensured a positive and friendly customer experience during store hours."
      ]
    },
    {
      title: "Student Teacher",
      company: "Gen. T De Leon National High School",
      location: "Valenzuela, Metro Manila",
      date: "2019 - 2019",
      description: [
        "Worked with classroom teacher to learn about current standards and best practices.",
        "Facilitated small group activities.",
        "Cultivated positive relationships with administration, teaching staff, and students.",
        "Promoted a positive learning environment by establishing clear expectations, enforcing classroom rules, and fostering open communication."
      ]
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">💼</span>
          WORK HISTORY
        </h2>
        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="job-info">
                  <h3 className="job-title">{exp.title}</h3>
                  <h4 className="company">{exp.company}</h4>
                  <p className="location">{exp.location}</p>
                </div>
                <span className="date">{exp.date}</span>
              </div>
              <button 
                className="show-description-btn"
                onClick={() => toggleDescription(index)}
              >
                {showDescriptions[index] ? 'Hide Description' : 'Show Description'}
              </button>
              {showDescriptions[index] && (
                <div className="job-description">
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
