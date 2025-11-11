import React, { useState } from 'react';
import './CommunityAccess.css';

const CommunityAccess = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
    primarySport: '',
    skillLevel: '',
    joinReasons: [],
    additionalInfo: '',
    socialHandle: '',
    agreeGuidelines: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxChange = (reason) => {
    setFormData(prev => ({
      ...prev,
      joinReasons: prev.joinReasons.includes(reason)
        ? prev.joinReasons.filter(r => r !== reason)
        : [...prev.joinReasons, reason]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="community-access">
        <div className="success-message">
          <h2>Thank you for applying! We'll get back to you soon.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="community-access">
      <div className="banner">
        <h1>🚀 Join the <span>Athlistar</span> Community</h1>
        <p>Be part of an exclusive network of athletes. Learn, grow, and connect.</p>
      </div>

      <div className="content-container">
        <div className="form-section">
          <h2>Community Access Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number (with country code)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>City & Country</label>
              <input
                type="text"
                name="cityCountry"
                value={formData.cityCountry}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Your Primary Sport</label>
              <select
                name="primarySport"
                value={formData.primarySport}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a sport</option>
                <option value="Basketball">Basketball</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Tennis">Tennis</option>
                <option value="CrossFit">CrossFit</option>
                <option value="Running">Running</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Skill Level</label>
              <select
                name="skillLevel"
                value={formData.skillLevel}
                onChange={handleInputChange}
                required
              >
                <option value="">Select skill level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Professional">Professional</option>
              </select>
            </div>

            <div className="form-group">
              <label>✅ Why Do You Want to Join the Community?</label>
              <p>Select all that apply:</p>
              <div className="checkbox-group">
                {[
                  'To connect with athletes in my sport',
                  'To get training and fitness tips',
                  'To learn about sponsorship opportunities',
                  'To stay motivated and inspired',
                  'To share my journey and get feedback',
                  'To access exclusive content and perks'
                ].map(reason => (
                  <label key={reason} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.joinReasons.includes(reason)}
                      onChange={() => handleCheckboxChange(reason)}
                    />
                    {reason}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Anything else you'd like us to know? (Optional)</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                maxLength="250"
                rows="4"
                placeholder="Max 250 characters"
              />
            </div>

            <div className="form-group">
              <label>Social Media Handle (optional)</label>
              <p>(Instagram, YouTube, etc.)</p>
              <input
                type="text"
                name="socialHandle"
                value={formData.socialHandle}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeGuidelines"
                  checked={formData.agreeGuidelines}
                  onChange={handleInputChange}
                  required
                />
                I agree to follow the rules and respectful behavior expected in the Athlistar Community.
              </label>
            </div>

            <button type="submit" className="submit-btn">Submit Request</button>
          </form>
        </div>

        <div className="sponsorship-card">
          <h3>Athlete <span>Sponsorship</span> Program</h3>
          <p>Join our exclusive sponsorship program and get access to premium gear, training resources, and financial support to fuel your athletic journey.</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityAccess;