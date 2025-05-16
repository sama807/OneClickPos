import React from "react";
import "./footer.css";
import { FaFacebookF, FaYoutube, FaTiktok, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from '../../images/OneClick-Logo.png';
import bgImage from '../../images/footer.jpg';

function Footer() {
  return (
    <footer className="footer">
      {/* Background layer with blur */}
      <div
        className="footer-background"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content overlay */}
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-section about">
            <img src={logo} alt="OneClick Logo" className="footer-logo" />
            <p className="footer-about-text">
              One Click POS Software – A fast, user-friendly system for seamless
              sales, inventory, and customer management with a single click.
            </p>
            <div className="footer-socials">
              <FaFacebookF />
              <FaYoutube />
              <FaTiktok />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>

          <div className="footer-section">
            <h4>About OneClick</h4>
            <ul>
              
              <li>Purchase Module</li>
              <li>Sales Module</li>
              <li>Accounting</li>
              <li>Multi-location</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
            <li><a href="/restaurant-pos" target="_blank" rel="noopener noreferrer">Restaurant POS Software</a></li>
            <li><a href="/pharmacy-system" target="_blank" rel="noopener noreferrer">Pharmacy System</a></li>
            <li><a href="/grocery-store" target="_blank" rel="noopener noreferrer">Grocery Store & Super Mart</a></li>
            <li><a href="/garment-shop" target="_blank" rel="noopener noreferrer">Garment Shop Software</a></li>
            </ul>
        </div>


          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>oneclick@example.com</li>
              <li>+92 300 9778848</li>
              <li>
                Office# 728, 7th Floor, Mashriq Center, Block 14<br />
                Gulshan-e-Iqbal, Karachi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
