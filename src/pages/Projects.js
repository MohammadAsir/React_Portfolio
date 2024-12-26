// src/pages/Projects.js
import React from 'react';
import './Projects.css';
import ftpServerImg from '../img/ftp.jpg';
import assemblerImg from '../img/VSM.jpg';
import cacheSimulatorImg from '../img/cache.jpg';
import weatherProjectImg from '../img/weather.jpg';
import diffusionGraphsSecurityImg from '../img/diffusion.jpg';
import websiteDevImg from '../img/web.jpg';

const projects = [
  {
    title: 'Website Development',
    image: websiteDevImg,
    technologies: 'HTML, CSS, JavaScript, React',
    description: 'A professional portfolio website developed with HTML, CSS, JavaScript, and React. This site showcases various projects, allowing visitors to browse academic and non-academic work. The site features a modern, responsive design, with project galleries and interactive components that highlight the developer’s skills and achievements.',
    url: 'https://mohammadasir.com',
    githubUrl: 'https://github.com/MohammadAsir/React_Portfolio',
    isAcademic: false,
  },
  {
    title: 'FTP Server',
    image: ftpServerImg,
    technologies: 'C, Linux Sockets, File Transfer',
    description: 'This project implements a fully functional File Transfer Protocol (FTP) server written in C. It uses Linux sockets to manage and transfer files between a server and multiple clients concurrently. Clients can upload and download files, change directories, and list files on the server. The FTP server is designed to handle basic file operations efficiently, with an interface similar to standard FTP clients.',
    url: 'https://example.com/ftp-server',
    githubUrl: 'https://github.com/MohammadAsir/Simple-ftp-server',
    isAcademic: true,
  },
  {
    title: 'Assembler Simulator (VSM)',
    image: assemblerImg,
    technologies: 'C, Binary Parsing, Virtual Machine',
    description: 'A Virtual Simulation Machine (VSM) designed to mimic the functionality of an assembler. Written in C, this simulator processes binary code, converting it into hexadecimal format, and executes basic arithmetic, memory, and control instructions. It maintains an organized memory dump that displays the current state of registers, making it ideal for understanding low-level binary processing and machine instructions.',
    url: 'https://example.com/assembler',
    githubUrl: 'https://github.com/MohammadAsir/C-assembler',
    isAcademic: true,
  },
  {
    title: 'Cache Simulator',
    image: cacheSimulatorImg,
    technologies: 'C, Cache Memory, Simulation',
    description: 'This cache simulator project simulates the behavior of a CPU cache, modeling how cache hits, misses, and evictions occur during memory access. Using command-line parameters, users can adjust settings like the cache size, associativity, and block size. The simulator reads a trace file of memory accesses and provides detailed statistics on cache performance, including the number of hits, misses, and evictions, along with optional debugging output.',
    url: 'https://example.com/cache-simulator',
    githubUrl: 'https://github.com/MohammadAsir/Cache-sim',
    isAcademic: true,
  },
  {
    title: 'Weather Project',
    image: weatherProjectImg,
    technologies: 'Python, PyTorch, ResNet, Vision Transformer',
    description: 'This project leverages deep learning to classify weather conditions from images. Using models like ResNet and Vision Transformers (ViT), the system is designed to identify different weather scenarios such as sunny, rainy, cloudy, and snowy conditions. It’s equipped with scripts to manage data preprocessing, training, and evaluation, making it a robust framework for weather-based image classification tasks.',
    url: 'https://example.com/weather-project',
    githubUrl: 'https://github.com/MohammadAsir/weather_project',
    isAcademic: false,
  },
  {
    title: 'Diffusion Models and Dynamic Graphs for Security',
    image: diffusionGraphsSecurityImg,
    technologies: 'Python, Machine Learning, Security',
    description: 'An academic project exploring advanced machine learning techniques, focusing on diffusion models and dynamic graphs for enhanced security applications. The project aims to model and analyze data flow and security patterns within networks, providing insights into how these tools can improve network resilience against security threats. The project is ongoing, with research directed toward potential real-world applications in cybersecurity.',
    url: 'https://example.com/diffusion-graphs',
    githubUrl: 'https://github.com/tarek-debug/NetSecDiffusion',
    isAcademic: true,
  },
  
];


function Projects() {
  return (
    <div className="projects-page">
      <h1 className="projects-heading">Projects</h1>
      <div className="legend">
        <div className="legend-item">
          <span className="legend-color academic-color"></span>
          <span>Academic Projects</span>
        </div>
        <div className="legend-item">
          <span className="legend-color non-academic-color"></span>
          <span>Non-Academic Projects</span>
        </div>
      </div>

      <div className="gallery">
        {projects.map((project, index) => (
          <div
            className={`thumbnail ${project.isAcademic ? 'academic' : 'non-academic'}`}
            key={index}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="cards"
                width="200"
              />
            </a>
            <h4>{project.title}</h4>
            <p className="tag">{project.technologies}</p>
            <p className="text_column">{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
