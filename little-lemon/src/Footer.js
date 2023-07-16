// Footer.js
import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#555',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <div className="footer-content">
        <p>&copy; 2023 Little Lemon. All rights reserved.</p>
        <div className="social-media-links">
          <a
            href="https://example.com/facebook"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Facebook
          </a>
          <a
            href="https://example.com/twitter"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Twitter
          </a>
          <a
            href="https://example.com/instagram"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
