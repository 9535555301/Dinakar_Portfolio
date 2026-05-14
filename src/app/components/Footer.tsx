import React from 'react';
import { Code, Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-title">Dinakar Y</h3>
              <p className="brand-subtitle">Software Engineer | Full-Stack Developer</p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">Quick Links</h4>
                <a href="#about" className="footer-link">About</a>
                <a href="#skills" className="footer-link">Skills</a>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>

              <div className="link-group">
                <h4 className="link-title">Services</h4>
                <span className="footer-link">Web Development</span>
                <span className="footer-link">Mobile Apps</span>
                <span className="footer-link">API Development</span>
                <span className="footer-link">Cloud Deployment</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p className="copyright-text">
                Copyright {currentYear} Dinakar Y. Made with{' '}
                <Heart size={14} className="heart-icon" />{' '}
                and <Code size={14} className="code-icon" />
              </p>
            </div>

            <button onClick={scrollToTop} className="back-to-top">
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
