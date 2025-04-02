import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="about-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h1 className="mb-4">About the Project</h1>
          <p className="lead">
            AIronclad is a comprehensive research initiative focused on identifying and documenting vulnerabilities in Large Language Models
          </p>
        </motion.div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="about-card p-4"
            >
              <h2 className="mb-4">About Me</h2>
              <p>
                I am a security researcher and AI enthusiast with a focus on Large Language Models and their potential vulnerabilities.
                My work involves systematic testing and documentation of security issues in various LLM implementations.
              </p>
              <p>
                With a background in both cybersecurity and machine learning, I bring a unique perspective to the field of AI safety
                and security. This project represents my ongoing efforts to contribute to the responsible development of AI systems.
              </p>
              <div className="expertise mt-4">
                <h4>Areas of Expertise</h4>
                <ul className="list-unstyled">
                  <li>✓ LLM Security Testing</li>
                  <li>✓ Prompt Engineering</li>
                  <li>✓ AI Safety Research</li>
                  <li>✓ Vulnerability Assessment</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="col-md-6 mb-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="contact-card p-4"
            >
              <h2 className="mb-4">Get in Touch</h2>
              <p>
                Interested in collaborating or learning more about LLM security? Feel free to reach out through any of the following channels.
              </p>
              <div className="social-links mt-4">
                <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  <span>Twitter</span>
                </a>
              </div>
              <div className="contact-form mt-4">
                <h4>Send a Message</h4>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="project-info mt-5"
        >
          <h2 className="mb-4">Project Information</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="info-card p-4">
                <h4>Research Goals</h4>
                <p>
                  To identify and document vulnerabilities in LLMs, contributing to the development of more secure AI systems.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="info-card p-4">
                <h4>Methodology</h4>
                <p>
                  Systematic testing approach combining security expertise with AI knowledge to uncover potential vulnerabilities.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="info-card p-4">
                <h4>Impact</h4>
                <p>
                  Contributing to the broader AI safety community by sharing findings and promoting responsible AI development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 