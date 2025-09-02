import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [showDescriptions, setShowDescriptions] = useState({});

  const toggleDescription = (index) => {
    setShowDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = [
    {
      title: "Academic Projects",
      status: "Completed",
      description: "Various academic projects completed as part of Computer Science coursework.",
      tech: ["Academic", "Research", "Analysis"],
      links: [
        { name: "Business Intelligence Project", url: "https://docs.google.com/spreadsheets/d/1Z9ZNWBaTSiyLm6Q0JxMm2aq0XNP17wFI/edit?usp=sharing&ouid=103538437070071656661&rtpof=true&sd=true" },
        { name: "Digital Marketing Campaign", url: "https://docs.google.com/document/d/1IwPspOU1WU-rwcmGxUF4K4WPlYreZPXin9pyfiQFrDQ/edit?usp=sharing" }
      ]
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">💻</span>
          PROJECTS
        </h2>
        <div className="projects-content">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>
              <button 
                className="show-description-btn"
                onClick={() => toggleDescription(index)}
              >
                {showDescriptions[index] ? 'Hide Description' : 'Show Description'}
              </button>
              {showDescriptions[index] && (
                <>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.links && (
                    <div className="project-links">
                      <h5>Project Links:</h5>
                      <ul>
                        {project.links.map((link, i) => (
                          <li key={i}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
