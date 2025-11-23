import React, { useState } from "react";
import { FaBullhorn, FaPlusCircle, FaList, FaChartBar } from "react-icons/fa";
import "./BrandDashboard.css";

const BrandDashboard = () => {
  const [view, setView] = useState("campaigns");

  return (
    <div className="brand-dashboard">
      <div className="brand-header">
        <h1>Partner Dashboard</h1>
        <button className="create-btn"><FaPlusCircle /> Create Campaign</button>
      </div>

      <div className="brand-grid">
        {/* Summary Cards */}
        <div className="b-card">
          <h3>Active Campaigns</h3>
          <div className="b-number">3</div>
        </div>
        <div className="b-card">
          <h3>Total Applicants</h3>
          <div className="b-number">128</div>
        </div>
        <div className="b-card">
          <h3>Budget Spent</h3>
          <div className="b-number">$4,200</div>
        </div>
      </div>

      <div className="campaign-list">
        <h2>Your Campaigns</h2>
        <div className="campaign-item">
          <div className="camp-info">
            <h4>Summer Run Challenge 2024</h4>
            <p>Looking for 10 female runners in TX</p>
            <span className="badge active">Active</span>
          </div>
          <div className="camp-stats">
             <span>45 Applicants</span>
             <button>Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;