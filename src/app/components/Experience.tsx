import React from 'react';
import { Calendar, ChevronRight, MapPin } from 'lucide-react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  const experience = {
    company: 'GTPL',
    role: 'Software Engineer',
    duration: 'Apr 2023 - Present',
    location: 'Bengaluru, India',
    type: 'Full-Time',
    responsibilities: [
      'Develop and enhance scalable enterprise-grade web and mobile applications using Python, Django, React Native, Next.js, and RESTful APIs.',
      'Engineer secure backend systems with JWT-based authentication, RBAC, and API authorization mechanisms.',
      'Design high-performance APIs for payment processing, transaction management, notification services, and real-time product features.',
      'Participate across the full SDLC including requirement analysis, architecture, development, testing, deployment, debugging, and production support.',
      'Collaborate with developers, QA teams, and business stakeholders in Agile/Scrum environments to deliver production-ready solutions.',
      'Optimize PostgreSQL and CockroachDB schemas to support reliable, high-volume transactional workloads.'
    ],
    achievements: [
      'Built secure enterprise and FinTech systems with strong emphasis on scalability, stability, and performance.',
      'Integrated payment gateways, authentication providers, and notification services into production applications.',
      'Improved operational efficiency through automated notification workflows and real-time updates using Django and Firebase.',
      'Contributed to deployment, CI/CD, application monitoring, debugging, and architecture discussions in live environments.'
    ]
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Professional journey and engineering contributions
          </p>
        </div>

        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-header">
              <div className="company-info">
                <h3 className="company-name">{experience.company}</h3>
                <h4 className="role-title">{experience.role}</h4>
                <p className="role-type">{experience.type}</p>
              </div>
              <div className="experience-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{experience.duration}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="experience-details">
              <div className="responsibilities">
                <h5 className="detail-title">Key Responsibilities</h5>
                <ul className="responsibility-list">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="responsibility-item">
                      <ChevronRight size={16} />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="achievements">
                <h5 className="detail-title">Key Achievements</h5>
                <div className="achievement-list">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <div className="achievement-icon">*</div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="career-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Software Engineer</h4>
                <p>Building enterprise, FinTech, and real-time application workflows at GTPL</p>
                <span className="timeline-date">Apr 2023 - Present</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Engineering Foundation</h4>
                <p>Completed ECE degree and transitioned into full-stack product engineering</p>
                <span className="timeline-date">2022 - 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
