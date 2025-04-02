import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Methodology = () => {
  const [activeCategory, setActiveCategory] = useState('security');

  const categories = {
    security: {
      title: 'Security & Jailbreaking',
      description: 'Testing the model\'s ability to maintain security boundaries and resist manipulation attempts.',
      steps: [
        'Identify potential security boundaries',
        'Design test cases for boundary testing',
        'Execute systematic prompt injection attempts',
        'Analyze model responses and identify vulnerabilities',
        'Document successful attack vectors'
      ]
    },
    misinformation: {
      title: 'Misinformation & Factuality',
      description: 'Evaluating the model\'s accuracy and resistance to generating false or misleading information.',
      steps: [
        'Create test cases with known facts',
        'Introduce conflicting information',
        'Test model\'s ability to maintain consistency',
        'Evaluate fact-checking capabilities',
        'Document instances of misinformation'
      ]
    },
    harmful: {
      title: 'Harmful Content Generation',
      description: 'Assessing the model\'s ability to prevent generation of harmful or inappropriate content.',
      steps: [
        'Define categories of harmful content',
        'Create test prompts targeting each category',
        'Evaluate content filtering effectiveness',
        'Test edge cases and ambiguous scenarios',
        'Document content safety vulnerabilities'
      ]
    }
  };

  return (
    <div className="methodology-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h1 className="mb-4">Testing Methodology</h1>
          <p className="lead">
            Our comprehensive approach to identifying and documenting LLM vulnerabilities
          </p>
        </motion.div>

        <div className="row">
          <div className="col-md-4">
            <div className="category-selector">
              {Object.entries(categories).map(([key, category]) => (
                <motion.div
                  key={key}
                  className={`category-card p-4 mb-3 ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4>{category.title}</h4>
                  <p className="text-muted">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-md-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="methodology-details p-4"
            >
              <h2 className="mb-4">{categories[activeCategory].title}</h2>
              <p className="lead mb-4">{categories[activeCategory].description}</p>
              
              <div className="testing-steps">
                <h4 className="mb-3">Testing Process</h4>
                <div className="steps-timeline">
                  {categories[activeCategory].steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="step-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <p>{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="code-example mt-5">
                <h4 className="mb-3">Example Test Case</h4>
                <pre className="bg-light p-3 rounded">
                  <code>
                    {`// Example test case for ${categories[activeCategory].title}
const testCase = {
  prompt: "Example prompt...",
  expectedBehavior: "Expected response...",
  actualResponse: "Actual response...",
  vulnerability: "Identified vulnerability..."
};`}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology; 