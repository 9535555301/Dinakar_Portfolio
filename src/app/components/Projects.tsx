import React from 'react';
import { BellRing, DollarSign, HandCoins, Smartphone } from 'lucide-react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Wellness Booking Application',
      description: 'Cross-platform therapy booking application with automated scheduling, real-time sync, and an optimized mobile user experience.',
      icon: <Smartphone size={24} />,
      technologies: ['React Native', 'Firebase', 'TypeScript', 'API Integrations'],
      features: [
        'Therapy booking and appointment scheduling',
        'Firebase real-time synchronization',
        'Responsive cross-platform mobile UI',
        'User-friendly booking and update flows',
        'Optimized performance for live app usage'
      ],
      status: 'Production Experience',
      category: 'Mobile App'
    },
    {
      title: 'Notification & Management System',
      description: 'Scalable dashboard and notification modules with real-time updates, centralized management, and secure user access.',
      icon: <BellRing size={24} />,
      technologies: ['Django', 'Next.js', 'PostgreSQL', 'JWT Authentication', 'REST APIs'],
      features: [
        'Real-time notifications with read/unread tracking',
        'Centralized management dashboard',
        'Secure JWT-based authentication flows',
        'Modular API-driven architecture',
        'Reliable data handling with PostgreSQL'
      ],
      status: 'Enterprise Delivery',
      category: 'Dashboard'
    },
    {
      title: 'FinTech Payment Platform',
      description: 'Scalable payment platform supporting secure transaction processing, authentication workflows, and reliable backend operations.',
      icon: <DollarSign size={24} />,
      technologies: ['Django', 'PostgreSQL', 'REST APIs', 'Payment Gateway Integration', 'JWT'],
      features: [
        'Secure transaction processing workflows',
        'Payment gateway and third-party API integration',
        'High-performance backend API design',
        'Transaction management and audit-friendly logic',
        'Scalable architecture for production workloads'
      ],
      status: 'Production Ready',
      category: 'FinTech'
    },
    {
      title: 'P2P Lending Platform',
      description: 'Peer-to-peer lending solution designed to connect borrowers and lenders through secure digital workflows.',
      icon: <HandCoins size={24} />,
      technologies: ['React Native', 'Django', 'CockroachDB', 'Node.js', 'REST APIs'],
      features: [
        'Borrower and lender onboarding flows',
        'Secure application and approval workflows',
        'Database support for transactional records',
        'Structured APIs for lending operations',
        'Mobile-first product experience'
      ],
      status: 'Product Experience',
      category: 'Lending'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Solutions delivered across FinTech, operations, and mobile product experiences
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
