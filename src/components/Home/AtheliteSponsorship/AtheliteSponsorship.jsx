import React from 'react';
import './AthleteSponsorship.css';
import videoThumbnail from '/images/video-thumbnail.jpg'; // Replace with actual thumbnail path
import playIcon from '/icons/play-icon.jpg'; // Replace with actual play icon path

const AthleteSponsorship = () => {
  return (
    <section className="athlete-section">
      <div className="athlete-container">
        <div className="athlete-left">
          <h2 className="highlight-box-h1">
            <span className="highlight-box-h1">ATHLETE</span><br />
            <span className="highlight-text-h2">SPONSORSHIP</span><br />
            PROGRAM
          </h2>
          <p className="athlete-caption">
            Join our Athlete Sponsorship Program to fuel your journey with support, gear, and exclusive brand opportunities.
          </p>
          <button className="join-btn">JOIN NOW</button>
        </div>
        <div className="athlete-right">
          <div className="video-box">
            <video 
              src="/videos/athlete-sponsorship.mp4" 
              autoPlay 
              muted 
              loop 
              className="video-player"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleteSponsorship;
