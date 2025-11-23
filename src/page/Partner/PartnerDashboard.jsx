import React, { useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import './PartnerDashboard.css'; 

const PartnerDashboard = () => {
  const { currentUser } = useAuth();
  const [view, setView] = useState('campaigns');

  if (currentUser?.role !== 'partner' && currentUser?.role !== 'admin') {
     return <div className="access-denied">⛔ Partner Access Only</div>;
  }

  return (
    <div className="partner-container">
      <nav className="partner-nav">
        <div className="brand-name">🏢 {currentUser.displayName || "Brand Partner"}</div>
        <button onClick={() => setView('campaigns')}>📢 Campaigns</button>
        <button onClick={() => setView('create')}>➕ Create New</button>
        <button onClick={() => setView('stats')}>📈 Performance</button>
      </nav>

      <div className="partner-content">
        {view === 'campaigns' && <CampaignList />}
        {view === 'create' && <CreateCampaign />}
        {view === 'stats' && <BrandStats />}
      </div>
    </div>
  );
};

const CampaignList = () => (
  <div className="campaigns-grid">
    <div className="campaign-card">
      <h3>Summer Run 2025</h3>
      <span className="badge active">Active</span>
      <p>Looking for: 10 Female Runners in TX</p>
      <p>Reward: $500 + Gear</p>
      <button>View Applicants (4)</button>
    </div>
  </div>
);

const CreateCampaign = () => (
  <div className="create-form">
    <h2>Create New Campaign</h2>
    <div className="form-group">
      <label>Campaign Title</label>
      <input type="text" placeholder='e.g., "Marathon Prep Squad"' />
    </div>
    <div className="form-group">
      <label>Requirements</label>
      <textarea placeholder="e.g., Must run 20 miles/week, Instagram public..." />
    </div>
    <div className="form-group">
      <label>Rewards</label>
      <input type="text" placeholder="Cash, Gear, Discounts..." />
    </div>
    <button className="btn-primary">Submit Brief</button>
  </div>
);

const BrandStats = () => (
  <div className="stats-view">
    <h3>Campaign Performance</h3>
    <div className="chart-placeholder">[Chart: Impressions vs Applications]</div>
  </div>
);

export default PartnerDashboard;