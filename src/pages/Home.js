// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../img/profile.jpg';
function Home() {
  return (
    <div className="home-container">
      <div className="name-section">
        <h1 className="my-name">
          <span className="typewriter">Mohammad Shaker Asir</span>
        </h1>
        <p className="intro-text">
          Aspiring Software Engineer|Tech Enthusiast|looking for opportunities
        </p>
      </div>
      

      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>

      <div className="links-section">
        <Link to="/aboutme" className="home-link">About Me</Link>
        <Link to="/projects" className="home-link">Projects</Link>
        <Link to="/contactinfo" className="home-link">Contact</Link>
      </div>
    </div>
  );
}

export default Home;
