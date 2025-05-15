// src/App.js
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/navbar';
import BackgroundSlider from './components/BackgroundSlider/backgroundSlider';

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundSlider />
    </div>
  );
}

export default App;





