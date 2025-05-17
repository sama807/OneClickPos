// src/pages/AboutPage.js
import React from 'react';
import AboutHeader from '../components/AboutHeader/aboutHeader';
import WhatWeAre from '../components/WhatWeAre/whatWeAre';
import WhatWeDo from '../components/WhatWeDo/whatWeDo';
import Training from '../components/Training/training';
import Testimonial from '../components/Testiomonial/testimonial';
import Network from '../components/Network/network';

const AboutPage = () => {
  return (
    <>
      <AboutHeader />
      <WhatWeAre />
      <WhatWeDo />
      <Training />
      <Network />
      <Testimonial />
    </>
  );
};

export default AboutPage;
