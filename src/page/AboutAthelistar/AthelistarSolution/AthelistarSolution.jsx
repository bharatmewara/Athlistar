import React from "react";
import "./AthlistarSolution.css";

const AthlistarSolution = () => {
  const solutions = [
    {
      title: "Smart Shoe Match - Tool",
      description:
        "Personalized recommendations based on foot shape, sport, playing surface, and skill level.",
      icon: "/images/icons/shoe-icon.png",
      position: "top-left",
    },
    {
      title: "Performance Coaching Content",
      description:
        "Video drills, endurance tips, and warm-ups crafted by pro athletes and coaches.",
      icon: "/images/icons/video-icon.png",
      position: "top-right",
    },
    {
      title: "Sponsorship Gateway",
      description:
        "Apply, qualify, and get matched with sponsorships from brands looking to invest in real talent.",
      icon: "/images/icons/handshake-icon.png",
      position: "bottom-left",
    },
    {
      title: "Community Access",
      description:
        "Connect with fellow athletes, mentors, and industry experts in an invite-only, purpose-driven environment.",
      icon: "/images/icons/community-icon.png",
      position: "bottom-right",
    },
  ];

  return (
    <div className="solution-section">
      <div className="solution-header">
        <h2 className="solution-title">
          <span className="solution-title-main">ATHLISTAR’S</span>{" "}
          <span className="solution-title-highlight">SOLUTION</span>
        </h2>
        <p className="solution-subtitle">
          We tackle wrong footwear choices and support athletes with expert
          guidance, strong community, and better sponsorship access.
        </p>
      </div>

      <div className="solution-grid">
        <div className="solution-center">
          <div className="center-icon">
            <img src="/images/icons/gear-icon.png" alt="center" />
          </div>
        </div>

        {solutions.map((item, i) => (
          <div key={i} className={`solution-card ${item.position}`}>
            <img src={item.icon} alt={item.title} className="solution-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AthlistarSolution;
