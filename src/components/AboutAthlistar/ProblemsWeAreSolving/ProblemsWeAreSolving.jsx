import React from "react";
import "./ProblemsWeAreSolving.css";
// Step 1: Import the icons from react-icons
import { FaShoePrints, FaUsers, FaBullseye } from 'react-icons/fa';

// Step 2: Update the 'problems' array to use the icon components
const problems = [
  {
    title: "Wrong Footwear Selection",
    icon: <FaShoePrints />, // Using the FaShoePrints component
    image: "/images/hero_img.jpg", // Make sure this path is correct in your public folder
    desc:
      "Most athletes don't know which shoes are ideal for their foot type, sport, or surface. This leads to poor performance, discomfort, and frequent injuries.",
  },
  {
    title: "Lack of Community Support",
    icon: <FaUsers />, // Using the FaUsers component
    image: "/images/hero_img.jpg",
    desc:
      "Many players train in isolation without guidance or peer interaction, limiting their exposure to training best practices, motivation, or mentorship.",
  },
  {
    title: "Limited Sponsorship Access",
    icon: <FaBullseye />, // Using the FaBullseye component
    image: "/images/hero_img.jpg",
    desc:
      "Sponsorships are often reserved for a select few. Talented athletes lack access to platforms where they can showcase their skills and get noticed by brands.",
  },
];

function ProblemsWeAreSolving() {
  return (
    <section className="problems-section">
      <div className="problems-header-flex">
        <div className="problems-headline">
          <span className="problems-headline-main">PROBLEMS</span>
          <br />
          <span className="problems-headline-highlight">WE ARE SOLVING</span>
        </div>
        <div className="problems-header-desc">
          We tackle wrong footwear choices and support athletes with expert
          guidance, strong community, and better sponsorship access.
        </div>
      </div>
      <div className="problems-grid">
        {problems.map((item, index) => (
          // There's a small typo in your original code (item.img). It should be item.image
          <div key={index} className="problem-card">
            <img src={item.image} alt={item.title} className="problem-image" />
            <div className="problem-info">
              {/* Step 3: Render the icon inside a div instead of an <img> tag */}
              <div className="problem-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
            <div className="hover-description">
              <div className="problem-info-hover">
                <div className="problem-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p> {/* Using the full description for better context */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProblemsWeAreSolving;