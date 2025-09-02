import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">🎓</span>
          EDUCATION
        </h2>
        <div className="education-content">
          <div className="education-item">
            <div className="education-header">
              <h3 className="degree">Bachelor of Science Computer Science</h3>
              <span className="date">Expected in August 2027</span>
            </div>
            <div className="institution">
              <h4>CIIT College of Arts And Technology</h4>
              <p className="location">Kamuning, Metro Manila</p>
            </div>
            <div className="gpa">
              <strong>GPA: 2.73</strong>
            </div>
            <button 
              className="show-description-btn"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? 'Hide Description' : 'Show Description'}
            </button>
            {showDescription && (
              <div className="coursework">
                <h5>Completed Coursework:</h5>
                <ul>
                  <li>Business Intelligence, 2025</li>
                  <li>Digital Marketing, 2025</li>
                  <li>Software Engineering 1, 2025</li>
                  <li>Accounting for IT, 2024</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
