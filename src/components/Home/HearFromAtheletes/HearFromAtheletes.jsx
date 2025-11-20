import React, { useState } from "react";
import "./HearFromAtheletes.css";

const testimonials = [
  {
    name: "ABHINAV K. SINGH",
    role: "Javelin Thrower",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      '"ATHLISTAR transformed my training with expert coaching and the perfect shoe match—my performance has never been better!"',
    stars: 3,
    featured: false,
  },
  {
    name: "MEGHA RATHI",
    role: "State-Level Sprinter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      '"Thanks to ATHLISTAR\'s personalized consultancy, I finally have a clear roadmap to achieve my athletic goals."',
    stars: 4, 
    featured: true,
  },
  {
    name: "RAHUL DEY",
    role: "U21 Hockey Team",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      '"The shoe matching tool was a game-changer—comfort, support, and results all in one!"',
    stars: 5,
    featured: false,
  },
];

export default function HearFromAtheletes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="hear-from-athletes-section">
      <h2 className="hear-from-athletes-title">
        HEAR FROM <span className="highlight">ATHELETES</span>
      </h2>
      <div className="hear-from-athletes-cards">
        {getVisibleTestimonials().map((t, idx) => (
          <div
            className={
              "hear-from-athletes-card" + (t.featured ? " featured" : "")
            }
            key={`${currentIndex}-${idx}`}
            style={{
              animation: `slideIn${direction === 'right' ? 'Right' : 'Left'} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
            }}
          >
            <div className="testimonial-text">{t.review}</div>
            <div className="testimonial-footer">
              <img
                src={t.avatar}
                alt={t.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < t.stars ? "star filled" : "star empty"}>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hear-from-athletes-controls">
        <button aria-label="Previous" onClick={handlePrevious}>
          <span>&lt;</span>
        </button>
        <button aria-label="Next" onClick={handleNext}>
          <span>&gt;</span>
        </button>
      </div>
    </section>
  );
}