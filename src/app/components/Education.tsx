import React from 'react';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import '../styles/Education.css';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'BE in Electronics and Communication Engineering',
      institution: 'Basaveshwar Engineering College, Bagalkot',
      year: '2022',
      grade: 'CGPA 6.58',
      location: 'Karnataka, India',
      type: "Bachelor's Degree"
    },
    {
      degree: 'PUC (PCMB)',
      institution: 'Vasavi Comp PU College, Bellary',
      year: '2018',
      grade: '63%',
      location: 'Karnataka, India',
      type: 'Higher Secondary'
    },
    {
      degree: 'SSLC',
      institution: 'Vidhya Eng Med High School, Sindhanur',
      year: '2016',
      grade: '80.48%',
      location: 'Karnataka, India',
      type: 'Secondary Education'
    }
  ];

  const strengths = [
    'Enterprise application development',
    'FinTech payment workflows',
    'Notification systems',
    'Production debugging'
  ];

  const personalInfo = {
    location: 'Bengaluru, Karnataka',
    currentRole: 'Software Engineer at GTPL',
    certification: 'Registered Product Owner'
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Background</h2>
          <p className="section-subtitle">
            Academic foundation and professional snapshot
          </p>
        </div>

        <div className="education-content">
          <div className="education-timeline">
            <h3 className="subsection-title">Educational Journey</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>
                <div className="education-details">
                  <div className="education-header">
                    <h4 className="degree-title">{edu.degree}</h4>
                    <span className="education-type">{edu.type}</span>
                  </div>
                  <h5 className="institution-name">{edu.institution}</h5>
                  <div className="education-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{edu.year}</span>
                    </div>
                    <div className="meta-item">
                      <Award size={16} />
                      <span>{edu.grade}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="additional-info">
            <div className="info-card">
              <h3 className="card-title">Core Strengths</h3>
              <div className="languages-list">
                {strengths.map((strength, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{strength}</span>
                    <div className="language-level">
                      <div className="level-indicator fluent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3 className="card-title">Profile Snapshot</h3>
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Current Base:</span>
                  <span className="info-value">{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Current Role:</span>
                  <span className="info-value">{personalInfo.currentRole}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Certification:</span>
                  <span className="info-value highlight">{personalInfo.certification}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
