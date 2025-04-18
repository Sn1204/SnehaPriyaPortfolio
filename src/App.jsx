import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './contact';  // Import your Contact component
import './index.css'; // Import global styles
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaGit } from 'react-icons/fa';  // Remove the duplicate imports
import { SiPostgresql, SiNumpy, SiPandas, SiTableau, SiMongodb, SiMysql } from 'react-icons/si'; // PostgreSQL, Numpy, Pandas, Tableau, MongoDB, MySQL

// Import your images from src/assets
import snehaa1Image from './assets/snehaa3.jpg'; // Correct path to your photo
import snehaa2Image from './assets/snehaa2.jpg'; // Correct path to your photo
import snehaa3Image from './assets/snehaa1.jpg'; // Correct path to your photo
import churnersImage from './assets/churners.jpg'; // Correct path to churners.jpg
import musicFestivalImage from './assets/music festival.jpg'; // Correct path to music-festival.jpg
import tableauImage from './assets/tableau.jpg'; // Correct path to tableau.jpg
import gisImage from './assets/gis.jpg'; // Correct path to gis.jpg

const Home = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center min-h-screen pt-20 scroll-mt-24"
  >
    {/* Grid Background */}
    <div className="absolute inset-0 z-0 bg-grid-pattern"></div>

    {/* Marquee Effect (Name Animation) */}
    <div className="marquee-container">
      <div className="animate-marquee">
        Sneha Priya Prakash • Sneha Priya Prakash • Sneha Priya Prakash •
      </div>
    </div>

    {/* Hero Section Text */}
    <div className="hero-text z-10 text-center relative">
      <h1 className="text-5xl font-bold text-white">
        Hey there! I'm Sneha.
      </h1>
      <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
        I am a passionate Business Analyst with a deep interest in data science and analytics.
      </p>
      <p className="text-xl text-white mt-4 max-w-2xl mx-auto">📍New York</p>
    </div>

    {/* Overlapping Images (Side by Side with Space Below) */}
    <div className="images-container mt-12 flex gap-4 justify-center relative z-10">
      <div className="image-frame falling-img" style={{ zIndex: 3 }}>
        <img src={snehaa1Image} className="w-full h-full object-cover tilt-img" />
      </div>
      <div className="image-frame falling-img" style={{ zIndex: 2 }}>
        <img src={snehaa2Image} className="w-full h-full object-cover tilt-img" />
      </div>
      <div className="image-frame falling-img" style={{ zIndex: 1 }}>
        <img src={snehaa3Image} className="w-full h-full object-cover tilt-img" />
      </div>
    </div>

    {/* Space Below the Images */}
    <div className="mb-16"></div>

    {/* Tools and Technologies */}
    <section id="tools" className="w-full py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-white dark:text-gray-300">Tools & Technologies</h2>

      {/* Grid Layout for Tools */}
      <div className="tools-container grid grid-cols-4 gap-8 justify-center items-center">
        {/* Python */}
        <div className="tool-item text-center">
          <FaPython className="text-4xl text-yellow-600 dark:text-yellow-400" />
          <p className="text-sm mt-2 text-white dark:text-gray-300">Python</p>
        </div>

        {/* Git */}
        <div className="tool-item text-center">
          <FaGit className="text-4xl text-orange-600 dark:text-orange-400" />
          <p className="text-sm mt-2 text-white dark:text-gray-300">Git</p>
        </div>

        {/* PostgreSQL */}
        <div className="tool-item text-center">
          <SiPostgresql className="text-4xl text-green-600 dark:text-green-400" />
          <p className="text-sm mt-2 text-white dark:text-gray-300">PostgreSQL</p>
        </div>

        {/* MySQL */}
        <div className="tool-item text-center">
          <SiMysql className="text-4xl text-blue-500 dark:text-blue-400" />
          <p className="text-sm mt-2 text-white dark:text-gray-300">MySQL</p>
        </div>

        {/* MongoDB */}
        <div className="tool-item text-center">
          <SiMongodb className="text-4xl text-green-700 dark:text-green-500" />
          <p className="text-sm mt-2 text-white dark:text-gray-300">MongoDB</p>
        </div>

        {/* Tableau */}
        <div className="tool-item text-center">
          <SiTableau className="text-4xl text-blue-500 dark:text-blue-400" />
          <p className="text-sm mt-2 text-white dark:text-gray-300">Tableau</p>
        </div>

        {/* NumPy */}
        <div className="tool-item text-center">
          <SiNumpy className="text-4xl text-green-600 dark:text-green-400" />
          <p className="text-sm mt-2 text-white dark:text-gray-300">NumPy</p>
        </div>

        {/* Pandas */}
        <div className="tool-item text-center">
          <SiPandas className="text-4xl text-green-600 dark:text-green-400" />
          <p className="text-sm mt-2 text-white dark:text-gray-300">Pandas</p>
        </div>
      </div>
    </section>

    {/* Footer with Social Media Icons */}
    <footer className="w-full bg-white py-4 mt-32 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto flex justify-center gap-6">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/sneha-priya-prakash/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-blue-600 hover:text-blue-800 transition-colors dark:text-blue-400 dark:hover:text-blue-600" />
        </a>
        {/* GitHub */}
        <a href="https://github.com/Sn1204" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-black hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-gray-600" />
        </a>
        {/* Email */}
        <a href="mailto:snehapriyap99@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-xl text-red-600 hover:text-red-800 transition-colors dark:text-red-400 dark:hover:text-red-600" />
        </a>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-4">
        <p style={{ fontSize: '10px', lineHeight: '1.2' }} className="text-gray-500 dark:text-gray-300">
          Copyright © Sneha Priya Prakash 2025 crafting code with ❤️ in NYC
        </p>
      </div>
    </footer>
  </section>
);

// About Me Component
const AboutMe = () => (
  <section id="about" className="about-me-container">
    {/* Left side - Image (vertical image, full height) */}
    <div className="about-me-image">
      <div className="image-frame">
        <img src={snehaa2Image} alt="Sneha Priya Prakash" />
      </div>
    </div>

    {/* Right side - About Me Text */}
    <div className="about-me-text">
      <h2>About Me</h2>
      <div className="about-section">
        <h3>Today</h3>
        <p>
        I’m a Business Analyst, Developer, and Data Enthusiast, currently pursuing a Master’s in Information Systems. My passion for fashion and design shapes my creative approach to coding and product development.        </p>
      </div>
      <div className="about-section">
        <h3>Technical Work Experience</h3>
        <p>
        At IQVIA, I worked on key modules like OP/IP, Emergency, and Pharmacy, streamlining processes and improving operational efficiency. At Amazon, I focused on fraud prevention, built dashboards, and collaborated cross-functionally to provide actionable data insights.        </p>
      </div>
      <div className="about-section">
        <h3>Growth</h3>
        <p>
          Moving to New York in 2023 marked a pivotal point in my career, immersing me in a vibrant community and expanding my
          perspective on data-driven decisions and design thinking.
        </p>
      </div>
    </div>
  </section>
);

// Projects Component inside App.jsx
const Projects = () => {
  const projects = [
    {
      title: "Music Festival Database",
      description: "A comprehensive database for managing and exploring music festivals across the USA.",
      tags: ["Database", "Music Festival", "Web App", "React"],
      githubLink: "https://github.com/Sn1204/Music-Festival-Database", // Your GitHub link for Music Festival Database
      imageUrl: musicFestivalImage, // Path to the Music Festival image
    },
    {
      title: "Bank Churners EDA",
      description: "Exploratory Data Analysis (EDA) and Prediction of customer churn in the banking sector.",
      tags: ["EDA", "Data Science", "Machine Learning", "Python"],
      githubLink: "https://github.com/Sn1204/Bank-Churners-EDA", // Your GitHub link for Bank Churners
      imageUrl: churnersImage, // Path to the Bank Churners image
    },
    {
      title: "Tableau Projects",
      description: "Various data visualization projects using Tableau, showcasing interactive dashboards and insights.",
      tags: ["Data Visualization", "Tableau", "Business Intelligence"],
      githubLink: "https://public.tableau.com/app/profile/sneha.priya.prakash/vizzes", // Your Tableau link
      imageUrl: tableauImage, // Path to the Tableau Projects image
    },
    {
      title: "GIS Projects",
      description: "Explore various GIS applications and projects, analyzing geographical data and spatial patterns.",
      tags: ["GIS", "Mapping", "Geospatial Analysis", "Python"],
      githubLink: "https://github.com/Sn1204/GIS-Projects", // Your GitHub link for GIS Projects
      imageUrl: gisImage, // Path to the GIS Projects image
    },
  ];

  return (
    <section id="projects" className="projects-container">
      {/* Section Title */}
      <h2 className="section-title">My Projects</h2>
      <p className="section-description">
        Explore some of my work to see the transformative power of creative solutions and envision what we can accomplish together.
      </p>

      {/* Grid of Projects */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark/Light Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Ripple effect state and mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'mouse-trail';
      ripple.style.left = `${x - 20}px`;  // Adjust for centering the ripple
      ripple.style.top = `${y - 20}px`;   // Adjust for centering the ripple
      document.body.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);  // Remove ripple after 1 second
    };

    // Add event listener to track mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on component unmount
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen transition duration-500 relative overflow-hidden ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {/* Navigation */}
        <nav>
          <div className="left">
            <button onClick={() => setDarkMode(!darkMode)} className="text-lg font-normal">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="right">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><a href="https://drive.google.com/file/d/1bzZUK1UY9CmaswX-9iBW_lo1gJ9db8MR/view" target="_blank" rel="noreferrer">Resume</a></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}