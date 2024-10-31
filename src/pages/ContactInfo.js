// src/pages/ContactInfo.js
import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info">
      <h1>Contact</h1>
      <ul className="contact-list">
        <li>
          <FaPhone className="icon" />
          <a href="tel:216-2550226">216-2550226</a>
        </li>
        <li>
          <FaEnvelope className="icon" />
          <a href="mailto:mshakera@trincoll.edu">mshakera@trincoll.edu</a>
        </li>
        <li>
          <FaInstagram className="icon" />
          <a href="https://instagram.com/mohammadaseer" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <FaGithub className="icon" />
          <a href="https://github.com/MohammadAsir" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <FaLinkedin className="icon" />
          <a href="https://linkedin.com/in/mohasir" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
