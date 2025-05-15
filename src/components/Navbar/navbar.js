// src/components/Navbar.js
import React from 'react';
import './navbar.css'; // Import the corresponding CSS file
import logo from '../../images/OneClick-Logo.png';

function Navbar() {
  return (
    <div className="nav-bar-container">
      <a href="#" className="main-logo">
        <img src={logo} alt="OneClick Logo" className="logo-image" />
      </a>
      <nav className="nav-bar" id="nav-bar">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item">
          Services
        </a>
        <a href="#" className="nav-item">
          Contact
        </a>
        
      </nav>
      
      
    </div>
  );
}
export default Navbar;
