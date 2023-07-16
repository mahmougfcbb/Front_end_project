// Nav.js
import React from 'react';

function Nav() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
  };

  const liStyle = {
    margin: '0 10px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <a href="/" style={linkStyle}>
            Home
          </a>
        </li>
        <li style={liStyle}>
          <a href="/about" style={linkStyle}>
            About
          </a>
        </li>
        <li style={liStyle}>
          <a href="/services" style={linkStyle}>
            Services
          </a>
        </li>
        {/* Add more navigation links based on your mockup */}
      </ul>
    </nav>
  );
}

export default Nav;
