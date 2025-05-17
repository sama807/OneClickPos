import React from "react";
import aboutImage from '../../images/About-OneClick-POS.jpg';
import './aboutHeader.css';


function AboutHeader(){

    return(

        <div className="about-header-container">
            <img src={aboutImage} alt= 'About-OneClick-Pos' className="about-background"></img>
            <div className="about-header-content">
                <h1>About OneClick POS</h1>
            </div>

        </div>

    );
}

export default AboutHeader;