// Header.js
import React from 'react';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: '10px',
  };

  const logoStyle = {
    width: '150px',
    height: 'auto',
  };

  return (
    <header style={headerStyle}>
      <img
        src="/path/to/little-lemon-logo.png"
        alt="Little Lemon Logo"
        style={logoStyle}
      />
      {/* Content for the header section */}
    </header>
  );
}

export default Header;
