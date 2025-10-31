import React, { useState } from 'react';
import './ShoeMatchingTool.css';
import { MdOutlineSportsHandball } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Data for the sport selection cards
const sports = [
  { id: 'cricket', name: 'Cricket', image: '/images/cricket.png' },
  { id: 'football', name: 'Football', image: '/images/football.png' },
  { id: 'basketball', name: 'Basketball', image: '/images/basketball.png' },
  { id: 'volleyball', name: 'Volleyball', image: '/images/volleyball.png' },
  { id: 'badminton', name: 'Badminton', image: '/images/badminton.png' },
  { id: 'lawn_tennis', name: 'Lawn Tennis', image: '/images/tennis.png' }, // Assuming tennis.png for lawn tennis
  { id: 'running', name: 'Running', image: '/images/running.png' },
  // You can add more sports here
];

const ShoeMatchingTool = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [showStepper, setShowStepper] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleSportSelect = (sportId) => {
    setSelectedSport(sportId);
    setShowStepper(true);
    setCurrentStep(0);
    setFormData({});
  };

  const handleBack = () => {
    setShowStepper(false);
    setSelectedSport(null);
  };

  const handleNext = () => {
    if (currentStep < getStepsForSport(selectedSport).length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepsForSport = () => {
    return ['Sport Details', 'Preferences', 'Personal Details', 'Results'];
  };

  const getAthleteReview = (sportId) => {
    const reviews = {
      cricket: { name: 'Virat Kohli', review: 'Perfect grip and comfort for aggressive batting and quick running between wickets.' },
      football: { name: 'Cristiano Ronaldo', review: 'Excellent ball control and stability for precision shots and quick movements.' },
      basketball: { name: 'LeBron James', review: 'Outstanding ankle support and cushioning for explosive jumps and court dominance.' },
      volleyball: { name: 'Karch Kiraly', review: 'Superior traction and flexibility for powerful spikes and defensive dives.' },
      badminton: { name: 'Lin Dan', review: 'Lightweight design with perfect court feel for lightning-fast footwork.' },
      lawn_tennis: { name: 'Serena Williams', review: 'Exceptional lateral support and durability for intense baseline rallies.' },
      running: { name: 'Eliud Kipchoge', review: 'Ultimate comfort and energy return for marathon distance performance.' }
    };
    return reviews[sportId] || { name: 'Pro Athlete', review: 'Great performance and comfort for this sport.' };
  };

  const renderStepContent = () => {
    const steps = getStepsForSport();
    const currentStepName = steps[currentStep];
    const selectedSportData = sports.find(s => s.id === selectedSport);
    const athleteReview = getAthleteReview(selectedSport);

    if (currentStepName === 'Sport Details') {
      return (
        <div className="step-layout">
          <div className="form-section">
            <h3>Sport Details</h3>
            <div className="form-group">
              <label>Playing Position</label>
              <select className="form-input">
                <option>Select Position</option>
                {selectedSport === 'cricket' && ['Batsman', 'Bowler', 'Wicket Keeper', 'All Rounder'].map(pos => <option key={pos}>{pos}</option>)}
                {selectedSport === 'football' && ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'].map(pos => <option key={pos}>{pos}</option>)}
                {selectedSport === 'basketball' && ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'].map(pos => <option key={pos}>{pos}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Experience Level</label>
              <div className="radio-group">
                {['Beginner', 'Intermediate', 'Advanced', 'Professional'].map(level => (
                  <label key={level} className="radio-label">
                    <input type="radio" name="experience" value={level} />
                    {level}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Playing Surface</label>
              <div className="checkbox-group">
                {['Indoor', 'Outdoor', 'Grass', 'Turf', 'Court'].map(surface => (
                  <label key={surface} className="checkbox-label">
                    <input type="checkbox" value={surface} />
                    {surface}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="sport-card-section">
            <div className="selected-sport-card">
              <img src={selectedSportData?.image} alt={selectedSportData?.name} />
              <h4>{selectedSportData?.name}</h4>
              <div className="athlete-review">
                <h5>Athlete Review</h5>
                <p className="athlete-name">- {athleteReview.name}</p>
                <p className="review-text">"{athleteReview.review}"</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentStepName === 'Preferences') {
      return (
        <div className="step-content">
          <h3>Your Preferences</h3>
          <div className="form-group">
            <label>Preferred Brand</label>
            <select className="form-input">
              <option>Any Brand</option>
              {['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance'].map(brand => <option key={brand}>{brand}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Budget Range</label>
            <select className="form-input">
              {['Under ₹2000', '₹2000-₹5000', '₹5000-₹10000', 'Above ₹10000'].map(range => <option key={range}>{range}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Color Preference</label>
            <div className="checkbox-group">
              {['Black', 'White', 'Blue', 'Red', 'Green', 'Multi-color'].map(color => (
                <label key={color} className="checkbox-label">
                  <input type="checkbox" value={color} />
                  {color}
                </label>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (currentStepName === 'Personal Details') {
      return (
        <div className="step-content">
          <h3>Personal Details</h3>
          <div className="form-group">
            <label>Shoe Size</label>
            <select className="form-input">
              {Array.from({length: 10}, (_, i) => i + 6).map(size => <option key={size}>{size}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Foot Width</label>
            <div className="radio-group">
              {['Narrow', 'Normal', 'Wide'].map(width => (
                <label key={width} className="radio-label">
                  <input type="radio" name="footWidth" value={width} />
                  {width}
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Arch Type</label>
            <div className="radio-group">
              {['Flat Feet', 'Normal Arch', 'High Arch'].map(arch => (
                <label key={arch} className="radio-label">
                  <input type="radio" name="archType" value={arch} />
                  {arch}
                </label>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (currentStepName === 'Results') {
      return (
        <div className="step-content results-step">
          <h3>Login Required</h3>
          <p>Please login to see your personalized shoe recommendations</p>
          <div className="login-form">
            <input type="email" placeholder="Email" className="form-input" />
            <input type="password" placeholder="Password" className="form-input" />
            <button className="login-btn">Login & View Results</button>
          </div>
        </div>
      );
    }
  };

  if (showStepper) {
    const steps = getStepsForSport();
    const selectedSportName = sports.find(s => s.id === selectedSport)?.name;

    return (
      <div className="shoe-matching-tool-page">
        <header className="tool-header">
          <div className="stadium-background"></div>
          <div className="header-content">
            <h1 className="header-title">
              <span className="title-bold">{selectedSportName}</span> <span className="title-light">SHOE FINDER</span>
            </h1>
          </div>
        </header>

        <div className="stepper-container">
          <div className="stepper-header">
            <button className="back-btn-fixed" onClick={handleBack}>
              <FaArrowLeft /> Back to Sports
            </button>
            <div className="stepper-progress">
              {steps.map((step, index) => (
                <div key={index} className={`step ${index <= currentStep ? 'active' : ''}`}>
                  <div className="step-number">{index + 1}</div>
                  <div className="step-label">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="stepper-content">
            {renderStepContent()}
          </div>

          <div className="stepper-navigation">
            <button 
              className="nav-btn prev-btn" 
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <FaArrowLeft /> Previous
            </button>
            <button 
              className="nav-btn next-btn" 
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
            >
              Next <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shoe-matching-tool-page">
      <header className="tool-header">
        <div className="stadium-background"></div>
        <div className="header-content">
          <h1 className="header-title">
            <span className="title-bold">SMART SHOE</span> <span className="title-light">MATCHING TOOL</span>
          </h1>
        </div>
      </header>

      <section className="sport-selection-section">
        <h2 className="selection-heading">
          <MdOutlineSportsHandball className="heading-icon" />
          SELECT YOUR SPORT
        </h2>

        <div className="sports-grid">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className={`sport-card ${selectedSport === sport.id ? 'selected' : ''}`}
              onClick={() => handleSportSelect(sport.id)}
            >
              <div className="sport-image-wrapper">
                <img src={sport.image} alt={sport.name} className="sport-image" />
              </div>
              <p className="sport-name">{sport.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShoeMatchingTool;