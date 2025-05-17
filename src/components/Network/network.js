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
    </div>
  );
}

export default Network;
