
import React, { useState } from 'react';
import './backgroundSlider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Home from '../Home/home';

import bg1 from '../../images/bg_image.jpg';
import bg2 from '../../images/pos2.jpg';
import bg3 from '../../images/pos4.jpg';
import bg4 from '../../images/pos5.jpg';

const backgroundImages = [bg1, bg2, bg3, bg4];

const sliderContent = [
  {
    title: "Grow your business with OneClick! Best POS & Billing Solution",
    subtitle: "Manage sales, Inventory, and Customers across diverse Industries.",
    description: "OneClick FBR Integrated POS Software in Pakistan – fast, simple billing, sales & inventory management.",
  },
  {
    title: "Smart Bakery POS | Sales & Inventory Control",
    subtitle: "Custom Menus, Stock Tracking & Inventory System.",
    description: "Advanced sales analytics with real-time inventory tracking.",
  },
  {
    title: "POS Software For Pharmacies | Medical Stores | Drug Shops",
    subtitle: "Simplify Sales, Control Inventory Tracking Process and Faster Checkouts!",
    description: "Streamline pharmacy operations with FBR Integrated POS Software – manage inventory, prescriptions & patients efficiently.",
  },
  {
    title: "Elevate Your Grocery Store & SuperMart Inventory Management",
    subtitle: "Fast Checkout, Real-Time Stock Management & Smart Reporting System!",
    description: "Advanced FBR Integrated POS Software for grocery stores, supermarts & karyana shops – fast billing & accurate inventory.",
  },
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1));
  };

  return (
    <div className="slider-wrapper">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className="slider-image"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
      </div>

      <div className="slider-controls">
        <button onClick={handlePrev} className="arrow-btn left">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="arrow-btn right">
          <FaChevronRight />
        </button>
      </div>

      {/* Overlay Dynamic Home Content */}
      <div className="content-overlay">
        <Home
          title={sliderContent[currentIndex].title}
          subtitle={sliderContent[currentIndex].subtitle}
          description={sliderContent[currentIndex].description}
        />
      </div>
    </div>
  );
};

export default BackgroundSlider;
