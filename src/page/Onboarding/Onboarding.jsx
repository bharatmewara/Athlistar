import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Onboarding.css';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    avatar: null,
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const steps = ['Avatar & Basic Info', 'Address Details', 'Complete Setup'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, avatar: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Save user data to database here
    navigate('/');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="step-content">
            <h3>Upload Your Avatar & Basic Info</h3>
            <div className="avatar-upload">
              <div className="avatar-preview">
                <img 
                  src={formData.avatar || currentUser?.photoURL || `https://ui-avatars.com/api/?name=${currentUser?.email}&background=d0ff00&color=000`}
                  alt="Avatar"
                />
              </div>
              <input 
                type="file" 
                id="avatar" 
                accept="image/*" 
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="avatar" className="upload-btn">Choose Photo</label>
            </div>
            <div className="form-group">
              <label>Phone Number*</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth*</label>
              <input 
                type="date" 
                name="dateOfBirth" 
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender*</label>
              <select 
                name="gender" 
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className="step-content">
            <h3>Address Details</h3>
            <div className="form-group">
              <label>Address*</label>
              <textarea 
                name="address" 
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your full address"
                rows="3"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City*</label>
                <input 
                  type="text" 
                  name="city" 
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                />
              </div>
              <div className="form-group">
                <label>State*</label>
                <input 
                  type="text" 
                  name="state" 
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>ZIP Code*</label>
              <input 
                type="text" 
                name="zipCode" 
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="ZIP Code"
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="step-content completion-step">
            <div className="completion-icon">✅</div>
            <h3>Setup Complete!</h3>
            <p>Your profile has been successfully created. Welcome to Athlistar!</p>
            <div className="profile-summary">
              <img 
                src={formData.avatar || currentUser?.photoURL || `https://ui-avatars.com/api/?name=${currentUser?.email}&background=d0ff00&color=000`}
                alt="Profile"
                className="summary-avatar"
              />
              <div className="summary-info">
                <h4>{currentUser?.displayName || currentUser?.email}</h4>
                <p>{formData.city}, {formData.state}</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-header">
        <h1>Complete Your Profile</h1>
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div key={index} className={`progress-step ${index <= currentStep ? 'active' : ''}`}>
              <div className="step-number">{index + 1}</div>
              <span className="step-label">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="onboarding-content">
        {renderStep()}
      </div>

      <div className="onboarding-actions">
        {currentStep > 0 && (
          <button className="btn-secondary" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button className="btn-primary" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className="btn-primary" onClick={handleComplete}>
            Complete Setup
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;