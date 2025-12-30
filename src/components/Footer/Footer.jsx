import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} <strong>Findr</strong>. All rights reserved.</p>
        <div className="footer-links">
          <span>Built with React</span>
          <span className="separator">|</span>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;