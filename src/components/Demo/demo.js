import React from 'react';
import './demo.css';
import demoImage from '../../images/sidebar.jpg';

function Demo() {
  return (
    <div className='demo-container'>
      <h2 className="demo-main-heading">
        Stay informed with our<br /><br />
        <span className="typing-text">Latest News!</span>
      </h2>

      <div className='demo-content'>
        {/* Left side form */}
        <div className='demo-form'>
          <h1 className='demo-form-heading'>Get a Free Demo</h1>
          <hr className='demo-heading-underline' />

          <form>
            <label className='demo-label'>
              Name<span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="demo-input"
            />

            <label className='demo-label'>
              Phone Number<span className="required">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
              className="demo-input"
            />

            <button type="submit" className="demo-submit-btn">SEND REQUEST</button>
          </form>
        </div>

        {/* Right side image */}
        <div className='demo-image-container'>
          <img src={demoImage} alt="Demo" className='demo-image' />
        </div>
      </div>
    </div>
  );
}

export default Demo;
