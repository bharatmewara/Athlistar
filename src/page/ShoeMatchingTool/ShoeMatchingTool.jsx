import React, { useState } from 'react';
import './ShoeMatchingTool.css';
import { MdOutlineSportsHandball } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Data for the sport selection cards
const sports = [
  { id: 'cricket', name: 'Cricket', image: '/images/Sports/istockphoto-1961226379-612x612.jpg' },
  { id: 'football', name: 'Football', image: '/images/Sports/vecteezy_football-soccer-transparent_13362736.png' },
  { id: 'basketball', name: 'Basketball', image: '/images/Sports/vecteezy_basketball-with_26773411.png' },
  { id: 'volleyball', name: 'Volleyball', image: '/images/Sports/Volleyball PNG 1877 - Pngfre.com.png' },
  { id: 'badminton', name: 'Badminton', image: '/images/Sports/klipartz.com (3).png' },
  { id: 'lawn_tennis', name: 'Lawn Tennis', image: '/images/Sports/Lawn Tennis.png' },
  { id: 'running', name: 'Running', image: '/images/Sports/klipartz.com (2).png' },
];

// Comprehensive form configuration for each sport (fields per step)
const formConfigs = {
  cricket: {
    steps: [
      // Sport Details (Step 1)
      [
        { name: 'role', label: 'What is your main playing role?', type: 'select', options: ['Batsman', 'Bowler', 'All-Rounder', 'Wicketkeeper'], placeholder: 'Select role' },
        { name: 'battingStyle', label: 'What is your batting style?', type: 'radio', options: ['Right-hand', 'Left-hand', 'Not Applicable'] },
        { name: 'bowlingType', label: 'What is your bowling type?', type: 'radio', options: ['Fast', 'Medium', 'Spin', 'Not Applicable'] },
        { name: 'surfaces', label: 'Which surfaces do you usually play on?', type: 'checkbox', options: ['Grass', 'Turf', 'Matting', 'Cement', 'Indoor', 'Synthetic'] },
        { name: 'playingStyle', label: 'How would you describe your playing style?', type: 'select', options: ['Speed / Agility', 'Power-Based', 'All-Rounder', 'Endurance-Based', 'Tactical / Controlled'] },
      ],
      // Preferences (Step 2)
      [
        { name: 'injuryFeatures', label: 'Do you require any specific shoe features for injury protection?', type: 'checkbox', options: ['Good for Ankle Support', 'Good for Knee Support', 'Basic Impact Protection', 'Stability Support', 'No Specific Needs'] },
        { name: 'injuryHistory', label: 'Have you had any cricket-related injuries?', type: 'checkbox', options: ['Ankle Injury', 'Knee Injury', 'No Prior Injuries'] },
        { name: 'footwearPreference', label: 'What kind of footwear do you prefer for cricket?', type: 'checkbox', options: ['Lightweight', 'Cushioned', 'Spiked Sole', 'High Ankle Support', 'Breathable Material'] },
        { name: 'brand', label: 'Which brand do you prefer for cricket shoes?', type: 'select', options: ['Nike', 'Adidas', 'Puma', 'SG', 'SS', 'New Balance', 'ASICS', 'No Preference'] },
        { name: 'budget', label: 'What is your budget for cricket footwear? (INR)', type: 'select', options: ['Under ₹2,000', '₹2,000–₹5,000', '₹5,000–₹8,000', 'Above ₹8,000'] },
      ],
      // Personal Details (Step 3)
      [
        { name: 'interestedIn', label: 'Are you interested in:', type: 'checkbox', options: ['Shoe Recommendation', 'Equipment Guidance', 'Coaching Tips', 'Sponsorship Opportunities'] },
        { name: 'additionalComments', label: 'Any additional comments or preferences related to your game or gear?', type: 'textarea', placeholder: 'Type here...' },
      ],
      // Results (Step 4) - left empty (handled by results UI)
      [],
    ],
  },

  football: {
    steps: [
      [
        { name: 'primaryPosition', label: 'What is your primary playing position?', type: 'select', options: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward / Striker', 'Wing-back', 'Utility / Versatile'] },
        { name: 'dominantFoot', label: 'Which foot do you primarily use?', type: 'radio', options: ['Right-footed', 'Left-footed', 'Both (Ambidextrous)'] },
        { name: 'fieldTypes', label: 'What type of field do you mostly play on?', type: 'checkbox', options: ['Grass (Natural)', 'Turf (Artificial)', 'Clay', 'Cement', 'Indoor / Futsal'] },
        { name: 'playingStyle', label: 'What is your typical playing style?', type: 'select', options: ['Speed / Agility', 'Playmaker / Vision', 'Physical / Strength-Based', 'All-Rounder', 'Defensive Anchor'] },
      ],
      [
        { name: 'shoeFeatures', label: 'Do you need specific features in your football footwear?', type: 'checkbox', options: ['High traction (grip)', 'Ankle support', 'Lightweight design', 'Cushioning / Comfort', 'Control-enhancing surface', 'Durable for rough fields'] },
        { name: 'injuries', label: 'Have you experienced any football-related injuries?', type: 'checkbox', options: ['Ankle Injury', 'Knee Injury', 'Shin Splints', 'No Past Injuries'] },
        { name: 'fitSupport', label: 'What kind of fit or support do you look for in football shoes?', type: 'checkbox', options: ['Snug fit for control', 'Roomy fit for comfort', 'Stability support', 'Impact protection'] },
        { name: 'soleType', label: 'Preferred shoe sole type:', type: 'select', options: ['Firm Ground (FG)', 'Soft Ground (SG)', 'Artificial Ground (AG)', 'Indoor (IN)', 'Turf (TF)', 'Not sure'] },
      ],
      [
        { name: 'brand', label: 'Brand Preference (Optional)', type: 'select', options: ['Nike', 'Adidas', 'Puma', 'Nivia', 'Mizuno', 'No Preference'] },
        { name: 'budget', label: 'Budget for Football Shoes (INR)', type: 'select', options: ['Under ₹2,000', '₹2,000–₹5,000', '₹5,000–₹8,000', 'Above ₹8,000'] },
        { name: 'interestedIn', label: 'Are you interested in:', type: 'checkbox', options: ['Football Shoe Consultation', 'Equipment Guide', 'Skill Coaching Tips', 'Sponsorship Program'] },
      ],
      [],
    ],
  },

  badminton: {
    steps: [
      [
        { name: 'positionPref', label: 'What is your playing position preference?', type: 'select', options: ['Singles', 'Doubles', 'Mixed Doubles'] },
        { name: 'dominantHand', label: 'What is your dominant hand?', type: 'radio', options: ['Right-handed', 'Left-handed', 'Both (Ambidextrous)'] },
        { name: 'courtTypes', label: 'What type of court do you mostly play on?', type: 'checkbox', options: ['Wooden Court', 'Synthetic Court', 'Cement / Concrete Court', 'Outdoor Court'] },
      ],
      [
        { name: 'playingStyle', label: 'What kind of playing style best describes you?', type: 'select', options: ['Attacking / Aggressive', 'Defensive / Counter-play', 'All-Rounder', 'Speed / Reflex Based'] },
        { name: 'soleType', label: 'What type of shoe sole do you prefer (or use)?', type: 'select', options: ['Gum Rubber Sole (Indoor)', 'All-Court Sole', 'Not Sure'] },
        { name: 'shoeGoals', label: 'What do you want most from your badminton shoes?', type: 'checkbox', options: ['Lightweight & Speed', 'Grip / Traction', 'Cushioning for jumps', 'Ankle or heel support', 'Durability', 'Lateral Stability'] },
      ],
      [
        { name: 'injuries', label: 'Do you have any history of injuries during play?', type: 'checkbox', options: ['Ankle Injury', 'Knee Injury', 'Plantar Fasciitis / Heel Pain', 'No Prior Injuries'] },
        { name: 'footType', label: 'What’s your foot type?', type: 'select', options: ['Flat Foot', 'Neutral', 'High Arch', 'Not Sure'] },
        { name: 'footWidth', label: 'What’s your foot width?', type: 'select', options: ['Narrow', 'Regular', 'Wide'] },
        { name: 'customInsoles', label: 'Do you use custom insoles or orthotics?', type: 'radio', options: ['Yes', 'No'] },
        { name: 'brand', label: 'Preferred brand (if any)', type: 'select', options: ['Yonex', 'Li-Ning', 'Victor', 'Adidas', 'Babolat', 'No Preference'] },
        { name: 'budget', label: 'Budget for Badminton Shoes (INR)', type: 'select', options: ['Under ₹2,000', '₹2,000–₹5,000', '₹5,000–₹8,000', 'Above ₹8,000'] },
      ],
      [
        { name: 'interestedIn', label: 'Are you interested in:', type: 'checkbox', options: ['Shoe Recommendation', 'Equipment Guidance', 'Coaching Tips', 'Sponsorship Opportunities'] },
      ],
    ],
  },

  lawn_tennis: {
    steps: [
      [
        { name: 'dominantHand', label: 'Dominant Hand', type: 'radio', options: ['Right', 'Left', 'Both'] },
        { name: 'courtSurface', label: 'Court Surface', type: 'checkbox', options: ['Hard', 'Clay', 'Grass', 'Synthetic', 'Indoor'] },
        { name: 'playFrequency', label: 'Play Frequency', type: 'select', options: ['Daily', '3–4× / Week', 'Weekends Only', 'Occasionally'] },
      ],
      [
        { name: 'playStyle', label: 'Play Style', type: 'select', options: ['Baseline', 'Serve & Volley', 'Defensive', 'All-Round'] },
        { name: 'movementType', label: 'Movement Type', type: 'checkbox', options: ['Side Steps', 'Baseline Rallies', 'Net Approaches', 'Sliding'] },
        { name: 'shoeFeatures', label: 'Shoe Features Needed', type: 'checkbox', options: ['Grip', 'Durability', 'Lightweight', 'Cushion', 'Ankle Support', 'Stability'] },
      ],
      [
        { name: 'injuryHistory', label: 'Injury History', type: 'checkbox', options: ['Ankle', 'Knee', 'Achilles', 'Heel', 'None'] },
        { name: 'footType', label: 'Foot Type', type: 'select', options: ['Flat', 'Neutral', 'High Arch', 'Unsure'] },
        { name: 'footWidth', label: 'Foot Width', type: 'select', options: ['Narrow', 'Regular', 'Wide'] },
        { name: 'customInsoles', label: 'Custom Insoles Used?', type: 'radio', options: ['Yes', 'No'] },
        { name: 'soleType', label: 'Sole Type Preferred', type: 'select', options: ['Clay', 'Hard', 'Grass', 'All Court', 'Not Sure'] },
        { name: 'brand', label: 'Brand Preference', type: 'select', options: ['Nike', 'Adidas', 'Asics', 'Wilson', 'No Preference'] },
        { name: 'budget', label: 'Shoe Budget (INR)', type: 'select', options: ['< ₹2,000', '₹2,000–5,000', '₹5,000–₹8,000', '> ₹8,000'] },
      ],
      [
        { name: 'needHelpWith', label: 'Need Help With', type: 'checkbox', options: ['Shoes', 'Equipment Tips', 'Coaching', 'Sponsorship'] },
      ],
    ],
  },

  volleyball: {
    steps: [
      [
        { name: 'playingPosition', label: 'Playing Position', type: 'select', options: ['Setter', 'Outside Hitter', 'Middle Blocker', 'Opposite Hitter', 'Libero', 'All-Rounder'] },
        { name: 'courtType', label: 'Court Type', type: 'checkbox', options: ['Indoor', 'Outdoor', 'Beach'] },
        { name: 'playFrequency', label: 'Play Frequency', type: 'select', options: ['Daily', '3–4× / Week', 'Weekends', 'Occasionally'] },
      ],
      [
        { name: 'dominantHand', label: 'Dominant Hand', type: 'radio', options: ['Right', 'Left', 'Both'] },
        { name: 'playingStyle', label: 'Playing Style', type: 'select', options: ['Attacking / Power', 'Defensive / Reactive', 'Balanced / All-Round', 'Agility & Speed Based'] },
        { name: 'keyRequirements', label: 'Key Shoe Requirements', type: 'checkbox', options: ['Grip (non-slip indoor)', 'Shock Absorption (jumps)', 'Ankle Support', 'Lightweight for speed', 'Lateral Stability', 'Breathability'] },
      ],
      [
        { name: 'injuryHistory', label: 'Injury History', type: 'checkbox', options: ['Ankle', 'Knee', 'Heel / Achilles', 'Lower Back', 'None'] },
        { name: 'footType', label: 'Foot Type', type: 'select', options: ['Flat', 'Neutral', 'High Arch', 'Not Sure'] },
        { name: 'footWidth', label: 'Foot Width', type: 'select', options: ['Narrow', 'Regular', 'Wide'] },
        { name: 'customInsoles', label: 'Use Custom Insoles?', type: 'radio', options: ['Yes', 'No'] },
        { name: 'preferredSole', label: 'Preferred Sole Type', type: 'select', options: ['Indoor Court', 'Multi-Surface', 'Beach'] },
        { name: 'brand', label: 'Brand Preference', type: 'select', options: ['Mizuno', 'Asics', 'Nike', 'Adidas', 'No Preference'] },
        { name: 'budget', label: 'Budget for Volleyball Shoes (INR)', type: 'select', options: ['< ₹2,000', '₹2,000–5,000', '₹5,000–8,000', '> ₹8,000'] },
      ],
      [
        { name: 'interestedIn', label: 'Interested In', type: 'checkbox', options: ['Footwear Suggestion', 'Gear Tips', 'Coaching Guidance', 'Sponsorship Program'] },
      ],
    ],
  },

  running: {
    steps: [
      [
        { name: 'runningTypes', label: 'What type(s) of running do you do?', type: 'checkbox', options: ['Road Running', 'Jogging / Recreational', 'Trail Running', 'Track Running', 'Barefoot / Minimalist'] },
        { name: 'runningFrequency', label: 'Running Frequency', type: 'select', options: ['Daily', '3–4× / Week', 'Weekends', 'Occasionally'] },
        { name: 'usualDistance', label: 'Usual Distance Covered', type: 'select', options: ['Under 5K', '5K–10K', 'Half Marathon', 'Full Marathon', 'Ultra Distance (42K+)'] },
      ],
      [
        { name: 'preferredTerrain', label: 'Preferred Terrain', type: 'checkbox', options: ['Pavement', 'Asphalt', 'Forest / Hills', 'Synthetic Track', 'Grass', 'Concrete', 'Indoor / Treadmill'] },
        { name: 'runningPurpose', label: 'Running Purpose / Goal', type: 'select', options: ['Fitness', 'Weight Loss', 'Training for Race', 'Stress Relief', 'Speed & Performance', 'Endurance Building'] },
        { name: 'shoeFeatures', label: 'Shoe Features You Value', type: 'checkbox', options: ['Cushioning', 'Lightweight', 'Stability', 'Grip / Traction', 'Energy Return', 'Breathability', 'Waterproof / Trail Protection'] },
      ],
      [
        { name: 'footStrike', label: 'Foot Strike Pattern', type: 'radio', options: ['Heel Strike', 'Midfoot Strike', 'Forefoot Strike', 'Not Sure'] },
        { name: 'previousInjuries', label: 'Previous Injuries', type: 'checkbox', options: ['Ankle', 'Knee', 'Shin Splints', 'Heel Pain / Plantar Fasciitis', 'None'] },
        { name: 'footType', label: 'Foot Type', type: 'select', options: ['Flat', 'Neutral', 'High Arch', 'Not Sure'] },
        { name: 'footWidth', label: 'Foot Width', type: 'select', options: ['Narrow', 'Regular', 'Wide'] },
        { name: 'customInsoles', label: 'Use Orthotics or Insoles?', type: 'radio', options: ['Yes', 'No'] },
        { name: 'preferredStyle', label: 'Preferred Shoe Style', type: 'checkbox', options: ['Max Cushion', 'Barefoot / Minimalist', 'Trail-Specific', 'Racing Flat', 'Motion Control', 'No Preference'] },
        { name: 'brand', label: 'Brand Preference (Optional)', type: 'select', options: ['Nike', 'Adidas', 'Asics', 'Brooks', 'Hoka', 'New Balance', 'No Preference'] },
        { name: 'budget', label: 'Budget for Shoes (INR)', type: 'select', options: ['Under ₹2,000', '₹2,000–₹5,000', '₹5,000–₹8,000', 'Above ₹8,000'] },
      ],
      [
        { name: 'interestedIn', label: 'You’re Interested In', type: 'checkbox', options: ['Footwear Recommendation', 'Custom Running Plan', 'Technique / Injury Tips', 'Sponsorship Program'] },
      ],
    ],
  },

  basketball: {
    steps: [
      [
        { name: 'fullName', label: 'Full Name', type: 'text' },
        { name: 'email', label: 'Email Address', type: 'text' },
        { name: 'phone', label: 'Phone Number (with country code)', type: 'text' },
        { name: 'age', label: 'Age', type: 'number' },
        { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other', 'Prefer not to say'] },
        { name: 'countryCity', label: 'Country & City', type: 'text' },
        { name: 'primarySport', label: 'Primary Sport', type: 'text' },
        { name: 'playingFrequency', label: 'Playing Frequency', type: 'select', options: ['Daily', 'Weekly', 'Occasionally'] },
      ],
      [
        { name: 'footType', label: 'Foot Type', type: 'select', options: ['Neutral', 'Flat Foot', 'High Arch'] },
        { name: 'footWidth', label: 'Foot Width', type: 'select', options: ['Narrow', 'Regular', 'Wide'] },
        { name: 'injurySuitability', label: 'Injury History / Suitability', type: 'checkbox', options: ['Good for Ankle Support', 'Good for Knee Support', 'Basic Impact Protection', 'Not for Injury-Prone Athletes', 'Stability Support Available'] },
        { name: 'playingSurface', label: 'Playing Surface', type: 'checkbox', options: ['Indoor Court', 'Concrete', 'Clay', 'Multi-Surface', 'Synthetic'] },
        { name: 'playingStyle', label: 'Playing Style', type: 'select', options: ['Speed / Agility', 'Explosive / Vertical', 'All-Rounder', 'Power-Based'] },
        { name: 'position', label: 'Playing Position', type: 'select', options: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center', 'Versatile / Hybrid'] },
      ],
      [
        { name: 'shoePreference', label: 'Shoe Preference', type: 'checkbox', options: ['Lightweight', 'Cushioned', 'Traction-Focused', 'Supportive'] },
        { name: 'playerLevel', label: 'Player Level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'Training Only'] },
        { name: 'brand', label: 'Brand Preference (optional)', type: 'select', options: ['Nike', 'Adidas', 'Puma', 'Li-Ning', 'No Preference'] },
        { name: 'budget', label: 'Budget Range', type: 'select', options: ['Under ₹2000', '₹2000–₹5000', '₹5000–₹10000', 'Above ₹10000'] },
        { name: 'customInsoles', label: 'Do You Use Custom Insoles or Orthotics?', type: 'radio', options: ['Yes', 'No'] },
        { name: 'additionalNotes', label: 'Any additional notes or shoe history you\'d like to share?', type: 'textarea', placeholder: 'Share any past shoe experiences or notes...' },
      ],
      [
        { name: 'interestedIn', label: 'Are you interested in:', type: 'checkbox', options: ['Shoe Recommendation', 'Equipment Guidance', 'Coaching Tips', 'Sponsorship Opportunities'] },
      ],
    ],
  },

  // default fallback
  default: {
    steps: [
      [{ name: 'role', label: 'Playing Role', type: 'select', options: ['Player'] }, { name: 'experience', label: 'Experience Level', type: 'radio', options: ['Beginner', 'Intermediate', 'Advanced'] }],
      [{ name: 'preferredBrand', label: 'Preferred Brand', type: 'select', options: ['Any', 'Nike', 'Adidas'] }, { name: 'budget', label: 'Budget Range', type: 'select', options: ['Under ₹2000', '₹2000–₹5000'] }],
      [{ name: 'shoeSize', label: 'Shoe Size', type: 'select', options: Array.from({ length: 15 }, (_, i) => 4 + i) }, { name: 'footWidth', label: 'Foot Width', type: 'radio', options: ['Narrow', 'Normal', 'Wide'] }],
      [],
    ],
  },
};

const ShoeMatchingTool = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [showStepper, setShowStepper] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleSportSelect = (sportId) => {
    setSelectedSport(sportId);
    setShowStepper(true);
    setCurrentStep(0);
    setFormData(prev => ({ ...prev, [sportId]: prev[sportId] || {} }));
  };

  const handleBack = () => {
    setShowStepper(false);
    setSelectedSport(null);
  };

  const handleNext = () => {
    const steps = getConfigForSport(selectedSport).steps;
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const getConfigForSport = (sportId) => {
    return formConfigs[sportId] || formConfigs.default;
  };

  const getStepsForSport = (sportId) => {
    // Keep same labels for each step index
    const cfg = getConfigForSport(sportId);
    return ['Sport Details', 'Preferences', 'Personal Details', 'Results'].slice(0, cfg.steps.length);
  };

  // update handler supports checkbox toggles
  const updateField = (sportId, fieldName, value, type = 'text') => {
    setFormData(prev => {
      const sportForm = { ...(prev[sportId] || {}) };

      if (type === 'checkbox') {
        const existing = Array.isArray(sportForm[fieldName]) ? sportForm[fieldName] : [];
        if (existing.includes(value)) {
          sportForm[fieldName] = existing.filter(v => v !== value);
        } else {
          sportForm[fieldName] = [...existing, value];
        }
      } else {
        sportForm[fieldName] = value;
      }

      return { ...prev, [sportId]: sportForm };
    });
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

  const renderField = (sportId, field) => {
    const sportForm = formData[sportId] || {};
    const val = sportForm[field.name];

    if (field.type === 'select') {
      return (
        <select
          className="form-input"
          value={val ?? ''}
          onChange={(e) => updateField(sportId, field.name, e.target.value)}
        >
          <option value="">{field.placeholder ?? `Select ${field.label}`}</option>
          {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      );
    }

    if (field.type === 'radio') {
      return (
        <div className="radio-group">
          {field.options.map(opt => (
            <label key={opt} className="radio-label">
              <input
                type="radio"
                name={`${sportId}_${field.name}`}
                value={opt}
                checked={val === opt}
                onChange={() => updateField(sportId, field.name, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      );
    }

    if (field.type === 'checkbox') {
      return (
        <div className="checkbox-group">
          {field.options.map(opt => {
            const checked = Array.isArray(val) && val.includes(opt);
            return (
              <label key={opt} className="checkbox-label">
                <input
                  type="checkbox"
                  name={`${sportId}_${field.name}`}
                  value={opt}
                  checked={checked}
                  onChange={() => updateField(sportId, field.name, opt, 'checkbox')}
                />
                {opt}
              </label>
            );
          })}
        </div>
      );
    }

    if (field.type === 'number') {
      return (
        <input
          type="number"
          className="form-input"
          value={val ?? ''}
          onChange={(e) => updateField(sportId, field.name, e.target.value)}
        />
      );
    }

    if (field.type === 'textarea') {
      return (
        <textarea
          className="form-input"
          rows={4}
          value={val ?? ''}
          placeholder={field.placeholder ?? ''}
          onChange={(e) => updateField(sportId, field.name, e.target.value)}
        />
      );
    }

    // default text
    return (
      <input
        type="text"
        className="form-input"
        value={val ?? ''}
        onChange={(e) => updateField(sportId, field.name, e.target.value)}
      />
    );
  };

  const renderStepContent = () => {
    const cfg = getConfigForSport(selectedSport);
    const currentStepFields = cfg.steps[currentStep] || [];
    const currentStepName = ['Sport Details', 'Preferences', 'Personal Details', 'Results'][currentStep];
    const selectedSportData = sports.find(s => s.id === selectedSport);
    const athleteReview = getAthleteReview(selectedSport);

    if (currentStepName === 'Sport Details') {
      return (
        <div className="step-layout">
          <div className="form-section">
            <h3>Sport Details</h3>
            {currentStepFields.map(field => (
              <div className="form-group" key={field.name}>
                <label>{field.label}</label>
                {renderField(selectedSport, field)}
              </div>
            ))}
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

    if (currentStepName === 'Preferences' || currentStepName === 'Personal Details') {
      return (
        <div className="step-content">
          <h3>{currentStepName}</h3>
          {currentStepFields.map(field => (
            <div className="form-group" key={field.name}>
              <label>{field.label}</label>
              {renderField(selectedSport, field)}
            </div>
          ))}
        </div>
      );
    }

    if (currentStepName === 'Results') {
      const sportForm = formData[selectedSport] || {};
      return (
        <div className="step-content results-step">
          <h3>Recommendations (Preview)</h3>
          <p>Summary of your selections so far:</p>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: 12, borderRadius: 8 }}>
            {JSON.stringify(sportForm, null, 2)}
          </pre>

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

    return null;
  };

  if (showStepper) {
    const steps = getStepsForSport(selectedSport);
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
              {steps.map((_, index) => (
                <div key={index} className={`step ${index <= currentStep ? 'active' : ''}`}>
                  <div className="step-number">{index + 1}</div>
                  <div className="step-label">{['Sport Details','Preferences','Personal Details','Results'][index]}</div>
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
              disabled={currentStep === getConfigForSport(selectedSport).steps.length - 1}
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