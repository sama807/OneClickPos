import React from "react";
import contactImage from '../../images/Restaurant-POS-Software.jpg';
import './contactHeader.css';


function ContactHeader(){

    return(

        <div className="contact-header-container">
            <img src={contactImage} alt= 'Contact-OneClick-Pos' className="contact-background"></img>
            <div className="contact-header-content">
                <h1>Contact POS Software</h1>
            </div>

        </div>

    );
}

export default ContactHeader;