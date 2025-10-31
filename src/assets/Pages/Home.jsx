import React from 'react';
import Navigation from '../Components/Navigation';
import "../CSS/Home.css";
import { Link } from 'react-router-dom';
import image from '../Images/tahia.jpeg';


function Home() {
  return (
    <div className="container">
      <Navigation />
      
      <div className="about">
        <div className="about-content">
          <div className="about-name">
            <h1 className="about-greeting">Hey, I'm Nasaazi Takia</h1>
            <p className="about-description">
              A Product Designer passionate about solving user Problems.
              I love being immersed using what I focus on research and empathy
              to create meaning and effective User user experience what quality
              is achieved
            </p>
          </div>
          <div className="about-buttons">
            <Link to={'/contact'}>
            <button className="btn btn-primary">Hire Me</button>
            </Link>
            <Link to={'/portfolio'}>
            <button className="btn btn-secondary">Portfolio</button>
            </Link>
          </div>
        </div>
        <div className="about-image">
          <img 
            src={image}
            alt="Nasaazi Takia"
          />
        </div>
      </div>

      <div className="philosophy">
        <h2 className="philosophy-title">My Design Philosophy</h2>
        <div className="philosophy-cards">
          <div className="card">
            <div className="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="card-title">User Centered Design</h3>
            <p className="card-description">
              Ensure User involvements throughout the design process by prioritizing with users and defining problems, ideation, prototyping, usability testing, and iterative refining to ensure solutions are intuitive, effective, and closely aligned with user needs.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3 className="card-title">Problem Solving Design</h3>
            <p className="card-description">
              With a strong focus on problem solving, I aim to uncover and address real user needs by deeply understanding users through research, data analysis, and continuous refining solutions to ensure each design effectively meet user requirements.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 3v18"/>
                <path d="M15 3v18"/>
              </svg>
            </div>
            <h3 className="card-title">Innovative Designing</h3>
            <p className="card-description">
              I am driven by innovative mindset in coming up with creative solutions that are functional, user-centered and impactful. By trying out different modern tools and applying strong problem solving skills, I make sure stand out and provide meaningful improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;