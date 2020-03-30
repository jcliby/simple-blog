import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <div id="footer-container" className="container">
      <p id="footer-title" className="section-title">
        Contact
      </p>
      <div id="link-grid">
        {linkData.map((link, index) => {
          return (
            <div key={`link ${index}`} className="link-box">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const linkData = [
  {
    name: 'Email',
    url: 'mailto:hello@google.com'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/'
  },
  {
    name: 'Github',
    url: 'https://github.com/'
  }
];

export default Footer;
