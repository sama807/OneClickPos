import React from "react";
import './whatWeAre.css';
import WhatWeAreImg from '../../images/What-we-are.jpg';

function WhatWeAre(){

    return(
        <div className="whatWeAre-container">
          <div className="whatWeAre-content">
            <h2>About Us</h2>
            <h1>What We Are?</h1>
            <p>At OneClick, we are a passionate team of software developers, business consultants, and POS experts 
              committed to delivering high-quality, user-friendly POS solutions in Pakistan. With this in mind, we combine 
              technical expertise and business insight to develop systems that are both powerful and intuitive. 
              Furthermore, our modular approach allows clients to customize features according to their business needs, 
              thereby ensuring scalability and flexibility. Consequently, we help businesses improve operational efficiency, 
              increase customer satisfaction, and boost overall profitability. In addition, our focus on innovation drives
               us to stay ahead of industry trends, continually enhancing our solutions. Ultimately, OneClick is not just a 
               technology provider; rather, we are strategic partners helping businesses grow smarter and faster in an 
               increasingly competitive environment.</p>
          </div>
          <div className="whatWeAreImage">
            <img src = {WhatWeAreImg} alt='What-We-Are' ></img>
          </div>

        </div>

    );

}

export default WhatWeAre;