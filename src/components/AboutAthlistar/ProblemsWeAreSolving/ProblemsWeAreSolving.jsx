import React from "react";
import "./ProblemsWeAreSolving.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const problems = [
  {
    title: "Wrong Footwear Selection",
    icon: "/images/hero_img.jpg",
    image: "/images/hero_img.jpg",
    desc:
      "Most athletes don't know which shoes are ideal for their foot type, sport, or surface. This leads to poor performance, discomfort, and frequent injuries.",
  },
  {
    title: "Lack of Community Support",
    icon: "/images/hero_img.jpg",
    image: "/images/hero_img.jpg",
    desc:
      "Many players train in isolation without guidance or peer interaction, limiting their exposure to training best practices, motivation, or mentorship.",
  },
  {
    title: "Limited Sponsorship Access",
    icon: "/images/hero_img.jpg",
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
        <span className="problems-headline-main">PROBLEMS</span><br></br>
        <span className="problems-headline-highlight">WE ARE SOLVING</span>
        </div>
        <div className="problems-header-desc">
          We tackle wrong footwear choices and support athletes with expert guidance, strong community, and better sponsorship access.
        </div>
      </div>
      <div className="problems-grid">
        {problems.map((item, index) => (
          <div key={index} className="problem-card">
            <img src={item.img} alt={item.title} className="problem-image" />
            <div className="problem-info">
              <img src={item.icon} alt="" className="problem-icon" />
              <h3>{item.title}</h3>
            </div>
            <div className="hover-description">
              <p>
                We’re solving this by providing expert advice, a strong
                community, and better opportunities for growth.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProblemsWeAreSolving;