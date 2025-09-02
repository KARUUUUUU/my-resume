import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">📞</span>
          CONTACT
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:k.a.manangann@gmail.com">k.a.manangann@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:09297687122">09297687122</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Location</h4>
                <span>Caloocan City, Philippines 1421</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div className="contact-details">
                <h4>Portfolio</h4>
                <a href="https://bold.pro/my/karlandrei-manangan/290r" target="_blank" rel="noopener noreferrer">
                  View Online Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-message">
            <p>
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to connect or discuss potential projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
