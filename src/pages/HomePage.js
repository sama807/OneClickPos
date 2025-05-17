// src/pages/HomePage.js
import React from 'react';
import BackgroundSlider from '../components/BackgroundSlider/backgroundSlider';
import Home from '../components/Home/home';
import Demo from '../components/Demo/demo';
import Services from '../components/Services/services';
import Highlights from '../components/Highlights/highlights';
import Model from '../components/Model/model';
import Blogs from '../components/Blogs/blogs';

const HomePage = () => {
  return (
    <>
      <BackgroundSlider>
        <Home />
      </BackgroundSlider>
      <Demo />
      <Services />
      <Highlights />
      <Model />
      <Blogs />
    </>
  );
};

export default HomePage;
