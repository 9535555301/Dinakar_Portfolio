import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Next.js', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'React Native', level: 82 },
        { name: 'TypeScript', level: 84 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Django', level: 92 },
        { name: 'Django REST Framework', level: 91 },
        { name: 'Python', level: 90 },
        { name: 'Node.js', level: 72 }
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'CockroachDB', level: 82 },
        { name: 'Firebase', level: 84 },
        { name: 'Google Cloud Platform', level: 80 }
      ]
    },
    {
      title: 'Engineering',
      skills: [
        { name: 'RESTful APIs', level: 92 },
        { name: 'JWT Authentication', level: 90 },
        { name: 'CI/CD Pipelines', level: 78 },
        { name: 'Agile & SDLC', level: 86 }
      ]
    }
  ];

  const tools = [
    'Git',
    'GitHub',
    'Docker',
    'Postman',
    'Tailwind CSS',
    'Firebase Hosting',
    'Payment Gateway Integration',
    'Authentication & Authorization',
    'Real-Time Notifications'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-tag">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
