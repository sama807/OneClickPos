import React from 'react';
import './training.css';
import { FaUsers, FaBasketballBall, FaDesktop, FaPaperPlane } from 'react-icons/fa';

function Training() {
  return (
    <div className="training-container">
      <h1 className="training-title">Training and Support</h1>
      <div className="training-grid">
        <div className="training-item">
          <div className="icon-circle pink"><FaUsers /></div>
          <div className="training-content">
            <h2>Empowering Your Team</h2>
            <p>
              At OneClick POS, we know that even the best software needs capable hands. That’s why, we offer comprehensive, 
              hands-on training, ensuring your team feels confident from the start and guiding them step by step.
            </p>
          </div>
        </div>

        <div className="training-item">
          <div className="icon-circle yellow"><FaDesktop /></div>
          <div className="training-content">
            <h2>Support at Every Step</h2>
            <p>
              From the moment you get started, we’re by your side. Whether launching or scaling, our team is here to guide you 
              through every phase, ensuring you never feel stuck or unsupported.
            </p>
          </div>
        </div>

        <div className="training-item">
          <div className="icon-circle purple"><FaBasketballBall /></div>
          <div className="training-content">
            <h2>Personalized Live Sessions</h2>
            <p>
              Whether onboarding employees or exploring features, our live training sessions are clear, practical, and focused. 
              Instead of generic tutorials, we tailor each session to your workflow, saving time and avoiding confusion.
            </p>
          </div>
        </div>

        <div className="training-item">
          <div className="icon-circle blue"><FaPaperPlane /></div>
          <div className="training-content">
            <h2>Multiple Ways to Reach Us</h2>
            <p>
              Moreover, help is always just a message or call away. Our responsive support team is available via phone, chat, 
              or email — ready to assist with questions, technical concerns, or updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;
