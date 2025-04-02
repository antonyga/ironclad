import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>AIronclad</h5>
            <p className="mb-0">Exploring and documenting LLM vulnerabilities</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-links">
              <a href="https://github.com/yourusername" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-light" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} AIronclad. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 