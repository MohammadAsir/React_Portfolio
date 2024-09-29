// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuActive(false); // Close menu when switching to desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMenuActive(false);
  }, [location]);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuActive(!menuActive);
  };

  const closeMenuOnClickOutside = (event) => {
    if (
      !event.target.closest('.off-screen-menu') &&
      !event.target.closest('.hamburger-menu')
    ) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    if (menuActive) {
      document.addEventListener('click', closeMenuOnClickOutside);
    } else {
      document.removeEventListener('click', closeMenuOnClickOutside);
    }
    return () => {
      document.removeEventListener('click', closeMenuOnClickOutside);
    };
  }, [menuActive]);

  // Only render Navbar if not on the Home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      {isMobile ? (
        <>
          <div className={`off-screen-menu ${menuActive ? 'active' : ''}`}>
            <nav className="navs">
              <ul>
                <li>
                  <Link to="/" onClick={() => setMenuActive(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutme" onClick={() => setMenuActive(false)}>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={() => setMenuActive(false)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contactinfo" onClick={() => setMenuActive(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="first-div">
            <nav className="title-holder">
              <div className="title">
                {/* You can add a logo or title here */}
              </div>
              <div
                className={`hamburger-menu ${menuActive ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <div className="ham-bar bar-top"></div>
                <div className="ham-bar bar-mid"></div>
                <div className="ham-bar bar-bottom"></div>
              </div>
            </nav>
          </div>
        </>
      ) : (
        <nav className="desktop-navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <Link to="/">Mohammad Shaker Asir</Link>
            </div>
            <ul className="navbar-links">
              <li>
                <Link to="/aboutme">About Me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contactinfo">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
