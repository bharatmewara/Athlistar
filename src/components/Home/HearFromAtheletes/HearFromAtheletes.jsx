import React from "react";
import "./HearFromAtheletes.css";

const testimonials = [
  {
    name: "ABHINAV K. SINGH",
    role: "Javelin Thrower",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      '“ATHLISTAR transformed my training with expert coaching and the perfect shoe match—my performance has never been better!”',
    stars: 3,
    featured: false,
  },
  {
    name: "MEGHA RATHI",
    role: "State-Level Sprinter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      '“Thanks to ATHLISTAR’s personalized consultancy, I finally have a clear roadmap to achieve my athletic goals.”',
    stars: 4, 
    featured: true,
  },
  {
    name: "RAHUL DEY",
    role: "U21 Hockey Team",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      '“The shoe matching tool was a game-changer—comfort, support, and results all in one!”',
    stars: 5,
    featured: false,
  },
];

export default function HearFromAtheletes() {
  return (
    <section className="hear-from-athletes-section">
      <h2 className="hear-from-athletes-title">
        HEAR FROM <span className="highlight">ATHELETES</span>
      </h2>
      <div className="hear-from-athletes-cards">
        {testimonials.map((t, idx) => (
          <div
            className={
              "hear-from-athletes-card" + (t.featured ? " featured" : "")
            }
            key={idx}
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
        <button aria-label="Previous">
          <span>&lt;</span>
        </button>
        <button aria-label="Next">
          <span>&gt;</span>
        </button>
      </div>
    </section>
  );
}