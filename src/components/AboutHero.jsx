import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="about-hero-overlay"></div>
      <div className="about-hero-content">
        <h1 className="about-title">ABOUT</h1>
        <p className="about-breadcrumb">HOME / ABOUT</p>
      </div>
    </div>
  );
};

export default AboutHero;