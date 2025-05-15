import React, { useState } from 'react';
import './backgroundSlider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import bg1 from '../../images/bg_image.jpg';
import bg2 from '../../images/pos2.jpg';
import bg3 from '../../images/pos4.jpg';
import bg4 from '../../images/pos5.jpg';

const backgroundImages = [bg1, bg2, bg3, bg4];

const BackgroundSlider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
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

      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
};

export default BackgroundSlider;
