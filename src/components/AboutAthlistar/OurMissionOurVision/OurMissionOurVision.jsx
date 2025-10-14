import React from "react";
import "./OurMissionOurVision.css";

function OurMissionOurVision() {
    return (
        <div className="omov-container">
            {/* Mission Card */}
            <div className="omov-card">
                <div className="omov-title-row">
                    <div className="omov-accent-bar"></div>
                    <h2 className="omov-title">OUR MISSION</h2>
                </div>
                <p className="omov-desc">
                    To empower athletes of all levels by eliminating guesswork in gear selection, building a supportive sports community, and creating access to sponsorship and growth opportunities - ensuring every player can perform at their peak, safely and confidently.
                </p>
                <ul className="omov-list">
                    <li>Smart gear recommendations</li>
                    <li>Strong athlete community</li>
                    <li>Easy access to sponsorships</li>
                </ul>
            </div>
            {/* Vision Card */}
            <div className="omov-card">
                <div className="omov-title-row">
                    <div className="omov-accent-bar"></div>
                    <h2 className="omov-title">OUR VISION</h2>
                </div>
                <p className="omov-desc">
                    To become the world's most trusted performance partner for athletes by:
                </p>
                <ul className="omov-list">
                    <li>
                        Revolutionizing how sports footwear is chosen through smart, personalized consultation.
                    </li>
                    <li>
                        Creating a global ecosystem where athletes, coaches, and brands collaborate and grow together.
                    </li>
                    <li>
                        Democratizing sponsorships, so talent and effort - not connections - determine who gets noticed.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default OurMissionOurVision;
