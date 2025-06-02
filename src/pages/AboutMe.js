import React from 'react';
import './AboutMe.css';
import profileImage1 from '../img/profile2.jpg';
import profileImage2 from '../img/profile1.jpg';


function AboutMe() {
  return (
    <div className="main-content">
      <div className="main-content-text">
        <h2>About Me</h2>
        <p>
          I am <strong>Mohammad Ammar Ahed Shaker Asir</strong>, a passionate software developer and computer science student at Trinity College. With a strong background in web development, machine learning, and economics, I am always seeking new opportunities to learn and grow. I thrive on <strong>problem-solving</strong> and enjoy tackling complex challenges to develop innovative solutions.
          <img src={profileImage1} alt="Mohammad Asir" className="inline-image" />
        </p>

        
        <div className="button-container">
          <a href = "/Mohammad_ShakerAsir_Resume.pdf" download className= "download-button">
            Download My Resume
          </a>
        </div>

        <h3>Education</h3>
        <p>
          <strong>Trinity College, Hartford, CT</strong><br />
          Bachelor of Science in <strong>Economics and Computer Science</strong> (May 2025)<br />
          GPA: <strong>3.742</strong>
        </p>
        <p>
          <strong>UWC, Changshu, China</strong><br />
          <strong>International Baccalaureate</strong><br />
        </p>

        <h3>Experience</h3>

        {/* Experience Entry: Ard Labs */}
        <div className="experience-entry">
          <p>
            <strong>AI/Machine Learning Intern at Ard Labs</strong> (July – August 2024)<br />
            Amman, Jordan
          </p>
          <ul>
            <li>
              Developed machine learning models using the PyTorch framework, specifically PyTorch Lightning, to support a new feature for the ArabiaWeather app, serving millions of users in an Arab country.
            </li>
            <li>
              Worked on a proof-of-concept for a feature that analyzes user-posted images from social media to predict weather conditions using image classification techniques.
            </li>
            <li>
              Project GitHub repository: <a href="https://github.com/MohammadAsir/weather_project/tree/main" target="_blank" rel="noopener noreferrer">github.com/MohammadAsir/weather_project</a>
            </li>
          </ul>
        </div>

        {/* Experience Entry: Teaching Assistant */}
        <div className="experience-entry">
          <p>
            <strong>Teaching Assistant for Contemporary Microeconomic Issues at Trinity College</strong> (September - December 2023)<br />
            Hartford, CT
          </p>
          <ul>
            <li>
              <strong>Grading Responsibilities:</strong> Assessed and graded quizzes and assignments with meticulous attention to detail, ensuring accurate evaluation of student performance, and providing model answers for submitted work.
            </li>
            <li>
              <strong>Facilitated Weekly Help Sessions:</strong> Conducted weekly help sessions to offer students additional support, clarify concepts, and address questions, fostering a deeper understanding of course material.
            </li>
            <li>
              <strong>Provided Constructive Feedback:</strong> Delivered personalized feedback to students on their coursework, helping them identify areas of improvement and encouraging academic growth.
            </li>
          </ul>
        </div>

        {/* Experience Entry: Campus Safety Department */}
        <div className="experience-entry">
          <p>
            <strong>Office Assistant at Trinity College Campus Safety Department</strong> (March 2022 - Present)<br />
            Hartford, CT
          </p>
          <ul>
            <li>
              Played a key role in streamlining document management processes, ensuring efficient organization of records.
            </li>
            <li>
              Accurately entered parking ticket data into the ticketing system, contributing to the maintenance of precise records and efficient tracking of parking violations.
            </li>
            <li>
              Acted as a dispatcher for both on-campus and off-campus shuttle services, demonstrating strong organizational and communication skills to facilitate safe and timely transportation options for the college community.
            </li>
          </ul>
          <img src={profileImage2} alt="Mohammad Asir 2" className="inline-image" />
        </div>

        {/* Leadership Experiences */}
        <h3>Leadership Experiences</h3>

        {/* Leadership Entry: Treasurer */}
        <div className="experience-entry">
          <p>
            <strong>Treasurer at Trinity College MSA</strong> (September 2023 - May 2024)<br />
            Hartford, CT
          </p>
          <ul>
            <li>
              Oversaw the organization's finances, including budgeting, expense tracking, and fund allocation, ensuring responsible and transparent financial practices.
            </li>
          </ul>
        </div>

        {/* Leadership Entry: Resident Advisor */}
        <div className="experience-entry">
          <p>
            <strong>Resident Advisor at Bantam Network Residential Learning Community</strong> (September 2022 - May 2023)<br />
            Hartford, CT
          </p>
          <ul>
            <li>
              Assisted incoming freshmen in their transition to college life and provided guidance on navigating campus resources effectively.
            </li>
            <li>
              Spearheaded the planning and execution of diverse community-building events, fostering an inclusive and engaging living environment.
            </li>
            <li>
              Conducted routine safety rounds within the south campus area, ensuring a secure and issue-free living environment for all residents.
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <h3>Skills</h3>
        <ul>
          <li><strong>Programming Languages:</strong> Python, Java, C, JavaScript, Assembly, SQL, NoSQL</li>
          <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React, Node.js</li>
          <li><strong>Frameworks and Libraries:</strong> PyTorch, TensorFlow, Pandas, Matplotlib, NumPy</li>
          <li><strong>Tools and Platforms:</strong> Git, AWS, Linux (including socket programming), Jupyter Notebooks, Bash, SQL</li>
          <li><strong>Languages:</strong> Arabic (Native), English (Professional Proficiency)</li>
        </ul>

      </div>
    </div>
  );
}

export default AboutMe;
