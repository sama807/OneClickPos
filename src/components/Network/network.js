import React from "react";
import CountUp from "react-countup";
import './network.css';

function Network() {
  return (
    <div className="network-container">
      <p className="section-subtitle">Our Reach and Network</p>
      <h1 className="section-title">A Wide Network of Trusted Clients</h1>

      <div className="stats-wrapper">
        <div className="stat-box">
          <h2>
            <CountUp start={3100} end={3500} duration={2.5} separator="," />+
          </h2>
          <p>POS Software Sold</p>
        </div>

        <div className="stat-box">
          <h2>
            <CountUp start={65} end={80} duration={2.5} />%
          </h2>
          <p>Satisfied Customers</p>
        </div>

        <div className="stat-box">
          <h2>
            <CountUp start={2100} end={2700} duration={2.5} separator="," />+
          </h2>
          <p>Still Running</p>
        </div>

        <div className="stat-box">
          <h2>
            <CountUp start={5} end={14} duration={2.5} />+
          </h2>
          <p>Years of Experience</p>
        </div>
      </div>

      {/* Descriptive Cards Section */}
      <div className="network-subcontainer">
        <div className="network-grid">
          <div className="network-card">
            <div className="network-icon">✅</div>
            <div>
              <h3>3,500+ Satisfied Customers:</h3>
              <p>
                Over the years, we’ve proudly helped thousands of businesses. Our POS software earns trust not only through its ease of use but also its flexibility and impactful results.
              </p>
            </div>
          </div>

          <div className="network-card">
            <div className="network-icon">✅</div>
            <div>
              <h3>80% Customer Retention Rate:</h3>
              <p>
                What sets us apart is customer loyalty. With regular improvements and consistent service, 80% of users continue choosing us — a clear sign of long-term satisfaction.
              </p>
            </div>
          </div>

          <div className="network-card">
            <div className="network-icon">✅</div>
            <div>
              <h3>2,700+ Years of Combined Experience:</h3>
              <p>
                Our experienced team brings deep industry knowledge to create practical, tailored solutions for modern businesses.
              </p>
            </div>
          </div>

          <div className="network-card">
            <div className="network-icon">✅</div>
            <div>
              <h3>14+ Years in the Industry:</h3>
              <p>
                Since our inception, we’ve led with technology and innovation to match our customers' changing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
