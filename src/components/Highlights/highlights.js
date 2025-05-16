// src/components/Highlights/highlights.js
import React from 'react';
import './highlights.css';
import { FaBoxes, FaChartLine, FaCashRegister, FaUsers, FaSyncAlt, FaLock, FaChartPie, FaMobileAlt, FaHeadset } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaBoxes />,
    color: '#FF5733', // Red-orange
    title: 'Advanced Inventory Management',
    description: `Gain real-time visibility into your stock levels, allowing you to track product movement and automate reordering with ease. Our system supports multiple warehouses, product variations (such as sizes and colors), and detailed stock reports to prevent stockouts and overstocking.`,
  },
  {
    icon: <FaChartLine />,
    color: '#2ECC71', // Green
    title: 'Real-Time Reporting',
    description: `Access detailed reports anytime. Track sales performance, monitor stock changes, and analyze trends with real-time data dashboards. Export options and data filtering provide in-depth business insights for strategic decisions.`,
  },
  {
    icon: <FaCashRegister />,
    color: '#3498DB', // Blue
    title: 'Fast & Secure Billing',
    description: `Process transactions quickly and securely with FBR-integrated POS. Support for multiple payment methods, customer receipts, and cash drawer integration ensures smooth checkout.`,
  },
  {
    icon: <FaUsers />,
    color: '#9B59B6', // Purple
    title: 'Customer Management',
    description: `Keep a record of your customers, their purchase history, preferences, and contact info. Offer targeted promotions and build customer loyalty.`,
  },
  {
    icon: <FaSyncAlt />,
    color: '#E67E22', // Orange
    title: 'Multi-Device Sync',
    description: `Access and manage your POS system from any device. Data is synced across all devices in real-time, ensuring continuity and flexibility.`,
  },
  {
    icon: <FaLock />,
    color: '#1ABC9C', // Teal
    title: 'Data Security',
    description: `Your business data is protected with encrypted storage and role-based access control, ensuring only authorized users can access sensitive information.`,
  },
  {
    icon: <FaChartPie />,
    color: '#F1C40F', // Yellow
    title: 'Sales Analytics',
    description: `Visualize sales trends, peak hours, and product performance using graphs and KPIs. Customize reports to focus on what matters most to your business.`,
  },
  {
    icon: <FaMobileAlt />,
    color: '#E74C3C', // Coral Red
    title: 'Mobile Access',
    description: `Manage your store on the go with our mobile-friendly POS interface. Check sales, inventory, and receive alerts from your smartphone or tablet.`,
  },
  {
    icon: <FaHeadset />,
    color: '#16A085', // Greenish-blue
    title: '24/7 Support',
    description: `Get professional support anytime. Our dedicated team is available 24/7 via chat, email, or phone to ensure uninterrupted operations.`,
  }
];

const Highlights = () => {
  return (
    <div className="highlights-container">
      <h2 className="highlights-heading">Key Features & Benefits</h2>
      <p className="highlights-subheading">
        Unlock Efficiency and Growth with Our Comprehensive Features
      </p>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ borderColor: feature.color }}
          >
            <div className="feature-icon" style={{ color: feature.color }}>
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
