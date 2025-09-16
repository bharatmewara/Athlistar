import React, { useEffect, useState } from 'react';
import './Hero.css';

// Import images
import hero_img1 from '/images/hero_img.jpg';
import hero_img2 from '/images/hero_img2.jpg';
import hero_img3 from '/images/hero_img.jpg';

const images = [hero_img1, hero_img2];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-wrapper">
      <div
        className="hero-bg-container"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="hero-bg-slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            FROM <span className="highlight">SHOES</span> <br /> TO{' '}
            <span className="highlight">STARDOM</span>
          </h1>
          <p>
            You Bring The Fire. We Bring The Fit.
            <br />
            Together, We Build Legends.
          </p>
          <button className="cta-button">FIND MY FIT &gt;</button>

          {/* Arrows */}
          <div className="arrow-controls">
            <button onClick={prevImage} className="arrow-btn">&lt;</button>
            <button onClick={nextImage} className="arrow-btn">&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;