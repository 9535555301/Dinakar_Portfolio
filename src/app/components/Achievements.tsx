import React from 'react';
import { Award, BellRing, Cloud, Shield, Smartphone, Workflow, Wrench } from 'lucide-react';
import '../styles/Achievements.css';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Shield size={24} />,
      title: 'Secure Auth & Authorization',
      description: 'Implemented JWT-based authentication, RBAC, and API authorization patterns for enterprise applications.',
      category: 'Platform Security'
    },
    {
      icon: <Workflow size={24} />,
      title: 'End-to-End SDLC Delivery',
      description: 'Contributed across architecture, development, testing, deployment, debugging, and production support.',
      category: 'Engineering Process'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud & CI/CD Contributions',
      description: 'Supported deployment workflows, cloud operations, monitoring, and delivery practices in live environments.',
      category: 'Cloud Infrastructure'
    },
    {
      icon: <BellRing size={24} />,
      title: 'Real-Time Notification Systems',
      description: 'Built notification workflows with centralized dashboards, read tracking, and live update capabilities.',
      category: 'Product Engineering'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Scalable Backend Systems',
      description: 'Created maintainable Django and DRF services for payment, transaction, and business-critical workflows.',
      category: 'Backend Development'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Cross-Platform Product Delivery',
      description: 'Built responsive interfaces and mobile experiences using React Native, Next.js, Tailwind CSS, and TypeScript.',
      category: 'Frontend & Mobile'
    },
    {
      icon: <Award size={24} />,
      title: 'Registered Product Owner',
      description: 'Earned a Registered Product Owner certification, strengthening product thinking alongside engineering delivery.',
      category: 'Professional Growth'
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Milestones</h2>
          <p className="section-subtitle">
            Key strengths shaped by enterprise delivery, product ownership, and production engineering
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon-wrapper">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
              </div>
              <div className="achievement-content">
                <span className="achievement-category">{achievement.category}</span>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-summary">
          <div className="summary-card">
            <div className="summary-content">
              <h3 className="summary-title">Professional Highlights</h3>
              <div className="highlights-list">
                <div className="highlight-item">
                  <span className="highlight-number">3+</span>
                  <span className="highlight-text">Years of software engineering experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">3</span>
                  <span className="highlight-text">Core solution tracks highlighted in the resume</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">1</span>
                  <span className="highlight-text">Current enterprise role at GTPL</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">4</span>
                  <span className="highlight-text">Primary stack areas: frontend, backend, cloud, and databases</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">1</span>
                  <span className="highlight-text">Product owner certification from LinkedIn profile</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">100%</span>
                  <span className="highlight-text">Focus on scalable, production-grade engineering practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
