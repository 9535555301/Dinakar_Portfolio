import React from 'react';
import { Cloud, Code, Database, ShieldCheck } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Enterprise Web Development',
      description: 'Builds scalable applications with Django, React.js, Next.js, and TypeScript.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Secure Backend Systems',
      description: 'Experienced with JWT auth, RBAC, API authorization, and production-grade service design.'
    },
    {
      icon: <Database size={24} />,
      title: 'FinTech & Data Workflows',
      description: 'Delivers payment processing, transaction flows, and optimized PostgreSQL/CockroachDB schemas.'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud & Delivery',
      description: 'Hands-on with Docker, GCP, CI/CD pipelines, monitoring, and production support.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/dinakar-profile.png" alt="Dinakar Y" className="profile-pic" />
          </div>
          <div className="about-text">
            <p className="about-description">
              I am a software engineer based in Bengaluru, Karnataka, with strong experience in
              building secure, high-performance applications for enterprise and FinTech use cases.
              My work spans backend architecture, REST API design, payment workflows, notification
              systems, cloud deployment, and responsive frontend development.
            </p>
            <p className="about-description">
              At GTPL, I contribute across the full SDLC: requirement analysis, architecture,
              development, debugging, deployment, and production support. I enjoy working with
              cross-functional teams to turn complex business requirements into reliable,
              maintainable software that performs well at scale.
            </p>
            <a href="#experience" className="more-about-btn">More About</a>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                {highlight.icon}
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
