// src/pages/Home/WhyUseAthlistar.jsx
import React from "react";
import "./WhyUseAthlistar.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const features = [
  {
    title: "AI-Powered Shoe Match",
    icon: "👟",
    description: "Get matched with the perfect pair based on your sport, style, and surface – no guesswork.",
  },
  {
    title: "Pro Insights & Training Hacks",
    icon: "💡",
    description: "Exclusive drills, routines, and tips from top-level athletes and coaches.",
  },
  {
    title: "Real Sponsorship, Real Deals",
    icon: "🤝",
    description: "Score brand partnerships, mentorship, and gear support – built for rising athletes.",
  },
  {
    title: "Tribe of Game-Changers",
    icon: "🧑‍🤝‍🧑",
    description: "Join a network that pushes, supports, and grows with you.",
  },
  {
    title: "All-In-One Athlete Hub",
    icon: "🏃‍♂️",
    description: "Shoes. Gear. Coaching. Community. Everything you need, in one space.",
  },
  {
    title: "For Rookies to Rockstars",
    icon: "📈",
    description: "Whether you're starting out or aiming elite – we’ve got your back.",
  },
];

const WhyUseAthlistar = () => {
  return (
    <Container className="why-container py-5">
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <h2 className="h2-text">WHY USE 
            <span className="fill-highlight"><br/> ATHLISTAR</span> ?
          </h2>
        </Col>
        <Col md={6}>
          <p className="section-caption">
            Athlistar.com is your ultimate performance partner—more than just
            gear or coaching. It’s a personalized ecosystem to boost training,
            optimize results, and unlock sponsorships.
          </p>
        </Col>
      </Row>

      <Row>
        {features.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="feature-card text-center">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon">{item.icon}</div>
                  <Card.Title className="feature-title">
                    {item.title}
                  </Card.Title>
                </div>
                <div className="card-back">
                  <div className="feature-description">{item.description}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyUseAthlistar;
