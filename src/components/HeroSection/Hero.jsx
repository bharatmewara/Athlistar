import React from 'react';
import './Hero.css';
import hero_img from '/images/hero_img.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          FROM <span className="highlight">SHOES</span> <br/> TO <span className="highlight">STARDOM</span>
        </h1>
        <p>You Bring The Fire. We Bring The Fit.<br />Together, We Build Legends.</p>
        <button className="cta-button">FIND MY FIT</button>
      </div>
      <div className="hero-image">
        <img src = {hero_img} alt="Athlete" />
      </div>
    </section>
  );
};

export default Hero;
