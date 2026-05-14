import React from 'react';
import { Download, Linkedin, Mail, Phone } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="header"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.82) 48%, rgba(0, 0, 0, 0.4) 100%), url(/dinakar-profile.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        position: 'relative'
      }}
    >
      <div className="section__container header__container">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div>
            <p>Hello I'm</p>
            <h1>Dinakar Y</h1>
            <h2 className="section__title">Full-Stack <span>Developer</span></h2>
            <p className="hero-description">
              Results-driven software engineer with 3+ years of experience building scalable
              enterprise and FinTech applications using Python, Django, React.js, Next.js, and
              RESTful APIs. I focus on secure backend systems, resilient architecture, and polished
              user experiences across web and mobile products.
            </p>
            <div className="action__btns">
              <button onClick={scrollToContact} className="btn">
                Say Hello
              </button>
              <a
                href="/Dinakar_Y_Resume.pdf"
                download="Dinakar_Y_Resume.pdf"
                className="btn video"
              >
                <span>Download Resume</span>
                <Download size={24} />
              </a>
            </div>
            <div className="social__icons">
              <a
                href="https://www.linkedin.com/in/dinakar-y-31a527217/"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:dinakaryaramati95355@gmail.com" className="icon" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="tel:+919535555301" className="icon" aria-label="Phone">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
