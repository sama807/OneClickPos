
import React from 'react';
import './home.css';

function Home({ title, subtitle, description }) {
  return (
    <div className="home-container">
      <div className='home-title'>
        <h2>{title}</h2>
      </div>
      <div className='home-sub-title'>
        <h1>{subtitle}</h1>
      </div>
      <div className='home-description'>
        <p>{description}</p>
      </div>
     <div className='home-button'>
        <button className="demo-button">Get a Free Demo</button>
    </div>
    </div>
  );
}

export default Home;
