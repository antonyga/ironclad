import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-4">
                  AIronclad
                </h1>
                <p className="lead mb-4">
                  Exploring and documenting vulnerabilities in Large Language Models through systematic security testing and analysis.
                </p>
                <div className="d-flex gap-3">
                  <Link to="/demo" className="btn btn-primary btn-lg">
                    Try Demo
                  </Link>
                  <Link to="/methodology" className="btn btn-outline-primary btn-lg">
                    View Methodology
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hero-animation"
              >
                {/* Placeholder for animated visualization */}
                <div className="ai-visualization p-4">
                  <div className="neural-network-animation">
                    {/* Add your animation component here */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="stat-card p-4"
              >
                <h3 className="display-4 fw-bold text-primary">50+</h3>
                <p className="lead">Vulnerabilities Discovered</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="stat-card p-4"
              >
                <h3 className="display-4 fw-bold text-primary">10+</h3>
                <p className="lead">LLMs Tested</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="stat-card p-4"
              >
                <h3 className="display-4 fw-bold text-primary">5</h3>
                <p className="lead">Attack Categories</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Key Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="feature-card p-4"
              >
                <h4>Interactive Demo</h4>
                <p>Experience real-world examples of LLM vulnerabilities through our interactive demonstration.</p>
              </motion.div>
            </div>
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="feature-card p-4"
              >
                <h4>Comprehensive Methodology</h4>
                <p>Learn about our systematic approach to identifying and documenting LLM vulnerabilities.</p>
              </motion.div>
            </div>
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="feature-card p-4"
              >
                <h4>Detailed Findings</h4>
                <p>Explore our database of discovered vulnerabilities and their potential impacts.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 