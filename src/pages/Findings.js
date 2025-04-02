import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Findings = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('all');

  // Sample data - replace with actual data
  const vulnerabilityData = {
    labels: ['Prompt Injection', 'Role Playing', 'Information Extraction', 'Harmful Content', 'Misinformation'],
    datasets: [
      {
        label: 'Vulnerabilities Found',
        data: [12, 8, 15, 6, 9],
        backgroundColor: [
          'rgba(37, 99, 235, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(96, 165, 250, 0.8)',
          'rgba(147, 197, 253, 0.8)',
          'rgba(191, 219, 254, 0.8)',
        ],
      },
    ],
  };

  const modelComparisonData = {
    labels: ['GPT-4', 'Claude', 'PaLM', 'LLaMA', 'Other'],
    datasets: [
      {
        label: 'Vulnerability Score',
        data: [65, 75, 85, 90, 70],
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
      },
    ],
  };

  const timelineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Vulnerabilities Discovered',
        data: [5, 8, 12, 15, 20, 25],
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="findings-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h1 className="mb-4">Research Findings</h1>
          <p className="lead">
            Comprehensive analysis of discovered vulnerabilities across different LLM models
          </p>
        </motion.div>

        <div className="timeframe-selector mb-4">
          <div className="btn-group">
            <button
              className={`btn ${activeTimeframe === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTimeframe('all')}
            >
              All Time
            </button>
            <button
              className={`btn ${activeTimeframe === 'year' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTimeframe('year')}
            >
              Past Year
            </button>
            <button
              className={`btn ${activeTimeframe === 'month' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTimeframe('month')}
            >
              Past Month
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="chart-card p-4"
            >
              <h3 className="mb-4">Vulnerability Distribution</h3>
              <Bar data={vulnerabilityData} options={chartOptions} />
            </motion.div>
          </div>

          <div className="col-md-6 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="chart-card p-4"
            >
              <h3 className="mb-4">Model Comparison</h3>
              <Pie data={vulnerabilityData} options={chartOptions} />
            </motion.div>
          </div>

          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="chart-card p-4"
            >
              <h3 className="mb-4">Discovery Timeline</h3>
              <Line data={timelineData} options={chartOptions} />
            </motion.div>
          </div>
        </div>

        <div className="critical-findings mt-5">
          <h2 className="mb-4">Critical Findings</h2>
          <div className="row">
            {[1, 2, 3].map((finding) => (
              <motion.div
                key={finding}
                className="col-md-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * finding }}
              >
                <div className="finding-card p-4">
                  <h4>Critical Finding #{finding}</h4>
                  <p className="text-muted">
                    Brief description of the critical vulnerability and its potential impact.
                  </p>
                  <div className="finding-meta">
                    <span className="badge bg-danger">High Risk</span>
                    <small className="text-muted ms-2">Discovered: Jan 2024</small>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findings; 