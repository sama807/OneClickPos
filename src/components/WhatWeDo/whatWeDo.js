import React from "react";
import './whatWeDo.css';
import WhatWeDoImg from '../../images/What-we-do.jpg';

function WhatWeDo() {
  return (
    <div className="whatWeDo-container">
      <div className="whatWeDo-image">
        <img src={WhatWeDoImg} alt="What We Do" />
      </div>

      <div className="whatWeDo-content">
        <h1>What We Do?</h1>
        <h3>Manage orders, inventory, and billing to save time.</h3>
        <p>
          OneClick POS is specifically designed to meet the needs of restaurants, retail stores, supermarkets, and grocery shops. 
          To begin with, through a comprehensive system, we offer features like order management, real-time inventory tracking, 
          and detailed reporting. More importantly, our POS operates without relying on cloud platforms; as a result, 
          it ensures safer and faster transactions. Consequently, businesses can deliver efficient billing services
           while simultaneously managing stock with accuracy. In the same way, our customizable platform adapts to unique 
           business processes, thereby reducing manual work and increasing reliability. Additionally, with advanced reporting 
           tools, owners gain valuable insights to make informed decisions and improve overall performance. All things considered, 
           OneClick POS simplifies daily operations while consistently supporting long-term growth and profitability — ultimately, 
          making it an ideal solution for businesses aiming to thrive in today’s fast-paced market.
        </p>
      </div>
    </div>
  );
}

export default WhatWeDo;
