import React from "react";
import './AthlistarSolution.css';
import { FaShoePrints, FaVideo, FaBullseye, FaUsers, FaCogs } from 'react-icons/fa';

const AthlistarSolution = () => {
  const features = [
    {
      icon: <FaShoePrints />,
      title: 'Smart Shoe Match - Tool',
      description: 'Personalized recommendations based on foot shape, sport, playing surface, and skill level.',
      gridArea: 'smartShoe',
    },
    {
      icon: <FaVideo />,
      title: 'Performance Coaching Content',
      description: 'Video drills, endurance tips, and warm-ups crafted by pro athletes and coaches.',
      gridArea: 'coaching',
    },
    {
      icon: <FaBullseye />,
      title: 'Sponsorship Gateway',
      description: 'Apply, qualify, and get matched with sponsorships from brands looking to invest in real talent.',
      gridArea: 'sponsorship',
    },
    {
      icon: <FaUsers />,
      title: 'Community Access',
      description: 'Connect with fellow athletes, mentors, and industry experts in an invite-only, purpose-driven environment.',
      gridArea: 'community',
    },
  ];

  return (
    <div className="solutionContainer">
    <header className="header">
      <div className="titleWrapper">
        <h1 className="mainTitle">ATHLISTAR'S</h1>
        <h2 className="subTitle">SOLUTION</h2>
      </div>
      <p className="headerText">
        We tackle wrong footwear choices and support athletes with expert guidance, strong community, and better sponsorship access.
      </p>
    </header>

    <div className="mainContent">
      {features.map((feature) => (
        <div key={feature.title} className="featureCardWrapper" style={{ gridArea: feature.gridArea }}>
          <div className="featureIcon">{feature.icon}</div>
          <div className="featureCard">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
      
      <div className="centerpiece">
        
        <div className="centralCircle">
          <FaCogs className="gearsIcon" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default AthlistarSolution;