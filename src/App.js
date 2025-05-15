// src/App.js
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/navbar';
import BackgroundSlider from './components/BackgroundSlider/backgroundSlider';
import Home from './components/Home/home' ;
import Demo from './components/Demo/demo';

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundSlider>
        <Home />
      </BackgroundSlider>
      <Demo />
     
    

    </div>
  );
}

export default App;





