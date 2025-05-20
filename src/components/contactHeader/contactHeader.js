import React from "react";
import contactImage from '../../images/Restaurant-POS-Software.jpg';
import './contactHeader.css';


function ContactHeader(){

    return(
      <div className="contact-header-container">
        <div className="contact-header-hero">
            <img src={contactImage} alt="Contact-OneClick-Pos" className="contact-background" />
            <div className="contact-header-content">
            <h1>Contact POS Software</h1>
            </div>
        </div>

        {/* Why Contact Us */}
        <div className="why-contact-us">
            <h1>Why Contact Us?</h1>
            <h2>Get Expert Guidance for Your Business</h2>
            <p>Contact POS Software — At OneClick POS, we’re committed to providing you with the right POS solution for your business. 
                Whether you’re in retail, hospitality, or any service-based industry, our expert team is here to guide you in selecting the best system tailored to your needs. We don’t just offer recommendations; we provide hands-on demos and consultations to ensure a smooth implementation and seamless integration with your existing operations. Furthermore, we’re dedicated to your business’s success, offering ongoing support and assistance long after the system is up and running. Therefore, you can rely on us to help you optimize your POS system to improve efficiency, streamline workflows, and enhance customer experiences. 
                Contact us today, and let’s make your business operations smarter and more efficient together! 
            </p>
        </div>

      </div>


    );
}

export default ContactHeader;