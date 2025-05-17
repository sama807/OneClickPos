// src/components/Navbar/navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../images/OneClick-Logo.png';

function Navbar() {
  return (
    <div className="nav-bar-container">
      <Link to="/" className="main-logo">
        <img src={logo} alt="OneClick Logo" className="logo-image" />
      </Link>
      <nav className="nav-bar" id="nav-bar">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/solution" className="nav-item">
          Solution
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
