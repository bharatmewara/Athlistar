import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FaBoxOpen, FaHeart, FaTicketAlt, FaUserCircle, FaMapMarkerAlt, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");

  // Helper to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div className="profile-section">
            <h2>My Orders</h2>
            <div className="order-list">
              <div className="empty-state">No orders found. Start shopping!</div>
              {/* Example Order Item */}
              {/* <div className="order-item">
                  <div className="order-header">Order #12345 - <span className="status-shipped">Shipped</span></div>
                  <div className="order-details">2 items | Total: $120.00</div>
              </div> */}
            </div>
          </div>
        );
      case "wishlist":
        return (
          <div className="profile-section">
            <h2>My Wishlist</h2>
            <div className="wishlist-grid">
               <div className="empty-state">Your wishlist is empty.</div>
            </div>
          </div>
        );
      case "account":
        return (
          <div className="profile-section">
            <h2>Account Information</h2>
            <form className="profile-form">
              <div className="form-group">
                <label>Display Name</label>
                <input type="text" defaultValue={currentUser?.displayName} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue={currentUser?.email} disabled />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <button type="submit" className="save-btn">Save Changes</button>
            </form>
          </div>
        );
      case "addresses":
        return (
          <div className="profile-section">
            <h2>Saved Addresses</h2>
            <button className="add-address-btn">+ Add New Address</button>
            <div className="address-list">
              <p>No addresses saved.</p>
            </div>
          </div>
        );
      default: // Dashboard
        return (
          <div className="dashboard-home">
            <div className="welcome-banner">
              <h2>Welcome, {currentUser?.displayName || "Athlete"}!</h2>
              <p>Track your performance, manage your orders, and update your profile.</p>
            </div>
            <div className="quick-stats">
              <div className="q-stat"><span>0</span> Orders</div>
              <div className="q-stat"><span>0</span> Wishlist</div>
              <div className="q-stat"><span>0</span> Coupons</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="user-brief">
          <div className="avatar-circle">
             {currentUser?.photoURL ? <img src={currentUser.photoURL} alt="User" /> : (currentUser?.displayName?.charAt(0) || "U")}
          </div>
          <div className="brief-info">
            <h3>{currentUser?.displayName || "User"}</h3>
            <span>{currentUser?.email}</span>
          </div>
        </div>

        <nav className="profile-nav">
          <button className={activeTab === "dashboard" ? "active" : ""} onClick={() => setActiveTab("dashboard")}>
            <FaUserCircle /> Dashboard
          </button>
          <button className={activeTab === "orders" ? "active" : ""} onClick={() => setActiveTab("orders")}>
            <FaBoxOpen /> My Orders
          </button>
          <button className={activeTab === "wishlist" ? "active" : ""} onClick={() => setActiveTab("wishlist")}>
            <FaHeart /> Wishlist
          </button>
          <button className={activeTab === "coupons" ? "active" : ""} onClick={() => setActiveTab("coupons")}>
            <FaTicketAlt /> Coupons
          </button>
          <button className={activeTab === "account" ? "active" : ""} onClick={() => setActiveTab("account")}>
            <FaUserCircle /> Account Info
          </button>
          <button className={activeTab === "addresses" ? "active" : ""} onClick={() => setActiveTab("addresses")}>
            <FaMapMarkerAlt /> Addresses
          </button>
          <button className="logout-btn" onClick={() => {/* Add logout logic */}}>
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>

      <div className="profile-content-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;