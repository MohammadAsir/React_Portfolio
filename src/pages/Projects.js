// src/pages/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project One',
    image: 'images/project1.jpg', // Place your images in public/images
    technologies: 'HTML, CSS, JS, WordPress',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://example.com/project-one',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="gallery">
      {projects.map((project, index) => (
        <div className="thumbnail" key={index}>
          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fscience%2FKoppen-climate-classification&psig=AOvVaw2esGq7hj6G3z92MhPGXHor&ust=1727493736323000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDToO2V4ogDFQAAAAAdAAAAABAE">
            <img
              src={project.image}
              alt={project.title}
              className="cards"
              width="2000"
            />
          </a>
          <h4>{project.title}</h4>
          <p className="tag">{project.technologies}</p>
          <p className="text_column">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
