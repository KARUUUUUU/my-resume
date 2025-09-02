import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'Attention to detail',
    'Flexible and adaptable',
    'Multitasking Abilities',
    'Excellent communication',
    'Computer skills',
    'Calm under pressure',
    'Time management',
    'Friendly, positive attitude',
    'Organizational skills',
    'Web development via React',
    'Database knowledge'
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">⚡</span>
          SKILLS
        </h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-icon">💡</span>
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
