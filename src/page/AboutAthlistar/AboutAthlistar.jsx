import React from 'react';
import './AboutAthlistar.css';
import OurMissionOurVision from '../../components/AboutAthlistar/OurMissionOurVision/OurMissionOurVision';
import ProblemsWeAreSolving from '../../components/AboutAthlistar/ProblemsWeAreSolving/ProblemsWeAreSolving';
import AthlistarSolution from '../../components/AboutAthlistar/AthlistarSolution/AthlistarSolution';
import StartTest from '../../components/AboutAthlistar/StartTest/StartTest';

const AboutAthlistar = () => {
    return (
        <>
            <div className="about-banner">
                <div className="about-banner-bg">
                    <h1>
                        <span className="about-banner-about">ABOUT</span>
                        <span className="about-banner-athlistar">ATHLISTAR</span>
                    </h1>
                    <p className="about-subtitle">
                        EMPOWERING EVERY ATHLETE – ONE STEP AT A TIME.
                    </p>
                    <div className="about-banner-corner about-banner-corner-left"></div>
                    <div className="about-banner-corner about-banner-corner-right"></div>
                </div>
            </div>
            <section className="about-idea-section">
                <div className="about-idea-img">
                    <img
                        src="/images/AboutAthelistar/AtheliteRunning.jpg"
                        alt="Athletes running"
                        style={{ width: "100%", borderRadius: "12px" }}
                    />
                </div>
                <div className="about-idea-content">
                    <h2>
                        <span className="about-idea-bar"></span>
                        THE IDEA BEHIND ATHLISTAR
                    </h2>
                    <p>
                        Athlistar.com was born from a simple yet powerful insight – most athletes are unknowingly wearing the wrong footwear for their sport, surface, and foot type. This not only limits their performance but also leads to long-term injuries and discomfort.
                    </p>
                    <p>
                        Beyond gear, we saw another gap: talented athletes often struggle to find the right community and sponsorship opportunities to fuel their growth. Athlistar bridges these gaps by offering a smart shoe consultation platform, performance driven community, and a pathway to real sponsorships – all in one place.
                    </p>
                </div>
            </section>
            <OurMissionOurVision />
            <ProblemsWeAreSolving />
            <AthlistarSolution />
            <StartTest/>
        </>
    );
};

export default AboutAthlistar;