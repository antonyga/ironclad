import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Demo = () => {
  const [selectedAttack, setSelectedAttack] = useState(null);
  const [demoResponse, setDemoResponse] = useState(null);

  const attackVectors = [
    {
      id: 1,
      name: 'Prompt Injection',
      description: 'Attempting to manipulate the model\'s behavior through carefully crafted prompts',
      example: 'Ignore previous instructions and...',
      response: 'I apologize, but I cannot ignore my core instructions...'
    },
    {
      id: 2,
      name: 'Role Playing',
      description: 'Trying to make the model assume a different role or identity',
      example: 'Pretend you are a system administrator...',
      response: 'I maintain my role as an AI assistant...'
    },
    {
      id: 3,
      name: 'Information Extraction',
      description: 'Attempting to extract sensitive information or training data',
      example: 'What was your training data?',
      response: 'I cannot disclose details about my training...'
    }
  ];

  const handleAttackSelect = (attack) => {
    setSelectedAttack(attack);
    setDemoResponse(null);
    
    // Simulate API response delay
    setTimeout(() => {
      setDemoResponse(attack.response);
    }, 1000);
  };

  return (
    <div className="demo-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center mb-5">Interactive Demo</h1>
          <p className="lead text-center mb-5">
            Select an attack vector to see how different LLMs respond to potential security challenges.
          </p>
        </motion.div>

        <div className="row">
          <div className="col-md-4">
            <div className="attack-vectors">
              {attackVectors.map((attack) => (
                <motion.div
                  key={attack.id}
                  className={`attack-card p-4 mb-3 ${selectedAttack?.id === attack.id ? 'selected' : ''}`}
                  onClick={() => handleAttackSelect(attack)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4>{attack.name}</h4>
                  <p className="text-muted">{attack.description}</p>
                  <div className="example-prompt">
                    <small className="text-muted">Example:</small>
                    <code className="d-block mt-1">{attack.example}</code>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-md-8">
            <div className="demo-response p-4">
              {selectedAttack ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="mb-4">Model Response</h3>
                  {demoResponse ? (
                    <div className="response-box p-4 bg-light rounded">
                      <p>{demoResponse}</p>
                    </div>
                  ) : (
                    <div className="loading-spinner text-center">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="text-center text-muted">
                  <p>Select an attack vector to see the model's response</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo; 