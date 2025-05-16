// src/App.js
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/navbar';
import BackgroundSlider from './components/BackgroundSlider/backgroundSlider';
import Home from './components/Home/home' ;
import Demo from './components/Demo/demo';
import Services from './components/Services/services';
import Highlights from './components/Highlights/highlights';
import Model from './components/Model/model';

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundSlider>
        <Home />
      </BackgroundSlider>
      <Demo />
      <Services />
      <Highlights />
      <Model />

     
    

    </div>
  );
}

export default App;





