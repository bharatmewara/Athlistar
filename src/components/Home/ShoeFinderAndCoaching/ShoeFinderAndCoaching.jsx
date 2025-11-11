import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ShoeFinderAndCoaching.css";
import Nutrition from '/images/Home/nutrition.jpg'
import mentalhealth from '/images/Home/mentalhealth.jpg'
import injury from '/images/Home/injury.jpg'
import specific_training from '/images/Home/specific_training.jpg'

const ShoeFinderAndCoaching = () => {
    const [selectedSport, setSelectedSport] = useState('');
    const [playerLevel, setPlayerLevel] = useState('');
    const [footType, setFootType] = useState('');
    const navigate = useNavigate();

    const handleLetsBegin = () => {
        if (selectedSport && playerLevel && footType) {
            navigate('/ShoeMatchingTool', {
                state: {
                    preSelectedSport: selectedSport.toLowerCase().replace(' ', '_'),
                    preSelectedLevel: playerLevel,
                    preSelectedFootType: footType
                }
            });
        }
    };

    return (
        <Container className="py-5">
            <Row>
                {/* LEFT COLUMN: Shoe Finder Form */}
                <Col md={5} className="mb-4">
                    <h2 className="shoe-finder">
                        FIND YOUR <span className="fill-highlight"> <br /> PERFECT SHOES</span>
                    </h2>
                    <Card className="p-4 shadow-sm">
                        <Form>
                            <Form.Group className="mb-3" controlId="formSport">
                                <Form.Label>Select Your Sport</Form.Label>
                                <Form.Select value={selectedSport} onChange={(e) => setSelectedSport(e.target.value)}>
                                    <option value="" disabled>
                                        -- Select a Sport --
                                    </option>
                                    <option value="Cricket">Cricket</option>
                                    <option value="Football">Football</option>
                                    <option value="Running">Running</option>
                                    <option value="Basketball">Basketball</option>
                                    <option value="Volleyball">Volleyball</option>
                                    <option value="Badminton">Badminton</option>
                                    <option value="Lawn Tennis">Lawn Tennis</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLevel">
                                <Form.Label>Player Level</Form.Label>
                                <Form.Select value={playerLevel} onChange={(e) => setPlayerLevel(e.target.value)}>
                                    <option value="" disabled>
                                        -- Select Player Level --
                                    </option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Professional">Professional</option>
                                    <option value="World Class">World Class</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formFootType">
                                <Form.Label>Foot Type</Form.Label>
                                <Form.Select value={footType} onChange={(e) => setFootType(e.target.value)}>
                                    <option value="" disabled>
                                        -- Select Foot Type --
                                    </option>
                                    <option value="Flat Foot">Flat Foot</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="High Arch">High Arch</option>
                                    <option value="Low Arch">Low Arch</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                            </Form.Group>
                            <Button className="shoe-match-btn" onClick={handleLetsBegin}>
                                LET'S BEGIN
                            </Button>
                        </Form>
                    </Card>
                </Col>

                {/* SEPARATOR */}
                <Col md={1} className="d-flex justify-content-center">
                    <div className="separator"></div>
                </Col>

                {/* RIGHT COLUMN: Coaching Highlights */}
                <Col md={6}>
                    <h2 className="coaching-highlights">
                        COACHING <span className="fill-highlight"> <br /> HIGHLIGHTS</span>
                    </h2>

                    {coachingHighlights.map((item, idx) => (
                        <div className="flip-card-wrapper mb-3" key={idx}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    {/* Front Side */}
                                    <div className={`flip-card-front ${idx % 2 === 0 ? "green" : "grey"}`}>
                                        <div className="highlight-left">
                                            <div className="highlight-number">{idx + 1}</div>
                                            <div className="highlight-text ms-2">
                                                <strong>{item.title}</strong>
                                            </div>
                                        </div>
                                        <img src={item.image} alt={item.title} className="highlight-image" />
                                    </div>

                                    {/* Back Side */}
                                    <div className={`flip-card-back ${idx % 2 === 0 ? "grey" : "green"}`}>
                                        <div className="highlight-description">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

const coachingHighlights = [
    {
        number: "1",
        title: "Nutrition & Recovery Guidance",
        image: Nutrition,
        description: "Maximize performance with expert meal plans, hydration tips, and recovery routines tailored for athletes.",
    },
    {
        number: "2",
        title: "Mental Conditioning & Focus Training",
        image: mentalhealth,
        description: "Build a champion's mindset through focus drills, visualization techniques, and stress control strategies.",
    },
    {
        number: "3",
        title: "Flexibility & Injury Prevention Routines",
        image: injury,
        description: "Prevent injuries and improve mobility with daily stretches and physiotherapist-recommended exercises.",
    },
    {
        number: "4",
        title: "Position-Specific Training",
        image: specific_training,
        description: "Master your role with drills and tactics customized for your sport and playing position.",
    },
];

export default ShoeFinderAndCoaching;