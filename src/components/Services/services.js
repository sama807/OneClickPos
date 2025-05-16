import React from "react";
import './services.css';
import sideImg from '../../images/small-img.jpg';
import posImg from '../../images/OneClick-POS-1.jpg';

function Services(){

    return(

        <div className="services-container">
                {/* left Side Container */}
            <div className="services-content">
                <div className="services-title">
                    <h1>What We Do?</h1>
                </div>
                <div className="services-subtitle">
                    <h1>How OneClick FBR Integrated POS Software is Different from Other?</h1>
                </div>
                <div className="services-description">
                    <p>When choosing a comprehensive POS system, you need more than just billing software—you need a complete business solution. 
                    That’s why OneClick POS stands out from the competition. With its advanced features, along with seamless integration and 
                    unmatched ease of use, it delivers everything you need to run your business efficiently. In addition, its user-friendly 
                    design ensures that both staff and management can operate the system with minimal training.</p>
                </div>
                <div className="services-logo-row">
                    <div className="services-small-image">
                        <img src={sideImg} alt='Side Img' className="services-side-image" />
                    </div>
                    <div className="services-small-image-heading">
                        <p>
                        Experience a faster, smarter, and more efficient POS system with OneClick. As a result, you'll streamline your operations and 
                        enhance customer satisfaction. So why wait? Switch today, and ultimately take your business to the next level.
                        </p>
                    </div>
                </div>

            </div>
                {/* Right Side Container  */}

                <div className="services-image-container">
                    <img src={posImg} alt='OneClick Pos' className="services-image" />
                </div>
            

        </div>
    );
}

export default Services;