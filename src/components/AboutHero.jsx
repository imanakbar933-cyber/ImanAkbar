import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">

      {/* BACKGROUND VIDEO */}
      <video
        className="about-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-woman-working-out-1572/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="about-hero-overlay"></div>

      {/* CONTENT */}
      <div className="about-hero-content">

        <h1 className="about-title">
          ABOUT
        </h1>

        {/* <p className="about-breadcrumb">
          HOME <span>/</span> ABOUT
        </p> */}

      </div>

    </section>
  );
};

export default AboutHero;