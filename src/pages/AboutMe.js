// src/pages/AboutMe.js
import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="main-content">
      <div className="main-content-holder">
        <div className="main-content-text">
          <h2>About Me</h2>
          <p>
            I am a software developer and a computer science student at Trinity College. I am passionate about software development and I am always looking for new opportunities to learn and grow. I have experience in web development, mobile development, and desktop development.
          </p>
        </div>
        {/* You can add the image back here when ready */}
        {/* <div className="main-content-image">
          <img src={profileImage} alt="Mohammad Shaker Asir" />
        </div> */}
      </div>
    </div>
  );
}

export default AboutMe;
