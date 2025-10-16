import React, { useState } from 'react';
import './ShoeMatchingTool.css';
import { MdOutlineSportsHandball } from 'react-icons/md'; // Using a generic sports icon

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

  const handleSportSelect = (sportId) => {
    setSelectedSport(sportId);
    // Here you would typically navigate to the next step
    // or load further options based on the selected sport.
    console.log(`Sport selected: ${sportId}`);
  };

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