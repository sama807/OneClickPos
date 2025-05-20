import React from "react";
import "./simplifySales.css";
import salesImage from '../../images/Powering-Your-Grocery-Business.jpg';

function SimplifySales() {
  return (
    <div className="simplify-sales-container">
      <div className="sales-left">
        <img src={salesImage} alt="Simplify Sales" />
      </div>

      <div className="sales-right">
        <h3>Get in Touch with Us</h3>
        <h2>OneClick POS – Simplifying Your Sales</h2>
        <p>
          OneClick POS is a powerful and easy-to-use Point of Sale system that helps you manage your business more efficiently.
          Moreover, it is specifically designed for retail stores, restaurants, and service businesses. As a result, it offers
          quick billing, real-time inventory tracking, and detailed reporting — all in one platform.
        </p>
        <p>
          In addition, with support for multiple payment methods, barcode scanning, and kitchen display integration,
          OneClickPOS simplifies your operations and further speeds up the checkout process. Furthermore, its user-friendly
          interface ensures your team gets started with minimal training, enabling you to hit the ground running.
        </p>
        <div className="company-info">
          <h3>Company Info:</h3>
          <p><strong>Email:</strong> oneclick@example.com</p>
          <p><strong>Phone:</strong> +92 300 9778848</p>
          <p><strong>Address:</strong> Office# 728, 7th Floor, Mashriq Center, Block 14 Gulshan-e-Iqbal, Karachi.</p>
        </div>
      </div>
    </div>
  );
}

export default SimplifySales;
