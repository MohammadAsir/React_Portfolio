import React from 'react';
import './AboutMe.css';
import profileImage1 from '../img/profile2.JPG';
import profileImage2 from '../img/profile1.jpg';

function AboutMe() {
  return (
    <div className="main-content">
      <div className="main-content-text">
        <h2>About Me</h2>
        <p>
          I am <strong>Mohammad Ammar Ahed Shaker Asir</strong>, a passionate software developer and computer science student at Trinity College. With a strong background in web development, machine learning, and economics, I am always seeking new opportunities to learn and grow.
          <img src={profileImage1} alt="Mohammad Asir" className="inline-image" />
        </p>

        <h3>Education</h3>
        <p>
          <strong>Trinity College, Hartford, CT</strong><br />
          Bachelor of Science in <strong>Economics and Computer Science</strong> (Expected May 2025)<br />
          GPA: <strong>3.692</strong>
        </p>
        <p>
          <strong>UWC, Changshu, China</strong><br />
          <strong>International Baccalaureate</strong><br />
        </p>

        <h3>Experience</h3>
        <p>
          <strong>AI/Machine Learning Intern at Ard Labs</strong> (July – August 2024)<br />
          Developed machine learning models using <strong>PyTorch Lightning</strong> to support new features for the ArabiaWeather app.
        </p>

        <p>
          <strong>Teaching Assistant at Trinity College</strong> (September - December 2023)<br />
          Assisted in grading and conducted weekly help sessions for over 30 students in Contemporary Microeconomic Issues.
        </p>

        <p>
          <strong>Office Assistant at Campus Safety Department</strong> (March 2022 - Present)<br />
          Streamlined document management processes, enhancing efficiency.
          <img src={profileImage2} alt="Mohammad Asir 2" className="inline-image" />
        </p>

        <h3>Skills</h3>
        <ul>
          <li><strong>Programming Languages:</strong> Python, Java, C, JavaScript, Assembly</li>
          <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React, Node.js</li>
          <li><strong>Frameworks and Libraries:</strong> PyTorch, TensorFlow, Pandas, Matplotlib</li>
          <li><strong>Tools and Platforms:</strong> Git, AWS, Linux(including socket programming), Jupyter Notebooks, Bash</li>
          <li><strong>Languages:</strong> Arabic (Native), English (Professional Proficiency)</li>
        </ul>

      </div>
    </div>
  );
}

export default AboutMe;