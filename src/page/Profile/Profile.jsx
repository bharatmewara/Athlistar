import React from "react";
import { useAuth } from "../../context/AuthContext";
import {
  FaBoxOpen,
  FaHeart,
  FaTicketAlt,
  FaUserCircle,
  FaMapMarkerAlt,
  FaShoppingBag,
} from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const { currentUser } = useAuth();

  const avatarUrl =
    currentUser?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      currentUser?.displayName || currentUser?.email || "User"
    )}&background=d0ff00&color=000&size=128`;

  return (
    <div className="profile-page">
      <div className="profile-left">
        <div className="left-top">
          <div className="avatar-wrap">
            <img src={avatarUrl} alt="avatar" className="avatar-img" />
          </div>
          <div className="user-info">
            <div className="user-name">
              {currentUser?.displayName || currentUser?.email?.split("@")[0]}
            </div>
            <div className="user-email">{currentUser?.email}</div>
            <a className="small-link" href="/account">Logout</a>
          </div>
        </div>

        <nav className="profile-nav">
          <button className="nav-item active">
            <span className="nav-left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z" fill="#000"/>
              </svg>
            </span>
            <span className="nav-text">Dashboard</span>
          </button>

          <button className="nav-item">
            <span className="nav-left">📦</span>
            <span className="nav-text">My Orders</span>
          </button>

          <button className="nav-item">
            <span className="nav-left">💖</span>
            <span className="nav-text">My Wishlist</span>
          </button>

          <button className="nav-item">
            <span className="nav-left">🎟️</span>
            <span className="nav-text">Coupons</span>
          </button>

          <button className="nav-item">
            <span className="nav-left">⚙️</span>
            <span className="nav-text">Account Info</span>
          </button>

          <button className="nav-item">
            <span className="nav-left">📍</span>
            <span className="nav-text">Addresses</span>
          </button>

          <button className="nav-item">
            <span className="nav-left">🛒</span>
            <span className="nav-text">Shop</span>
          </button>
        </nav>
      </div>

      <div className="profile-right">
        <div className="welcome-row">
          <div className="welcome-left">
            <h2 className="welcome-title">Welcome!</h2>
            <p className="welcome-sub">
              Hi <strong>{currentUser?.displayName || currentUser?.email}</strong> — today is a great day to
              check your account. You can check your <a href="/orders">orders</a> or have a look at your <a href="/wishlist">wishlist</a>.
            </p>
          </div>
          <div className="welcome-right">
            <div className="mini-stats">
              <div className="stat">
                <div className="stat-icon">📦</div>
                <div className="stat-label">2 Orders</div>
              </div>
              <div className="stat">
                <div className="stat-icon">💝</div>
                <div className="stat-label">5 Wishlist</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cards-grid">
          <div className="card" onClick={() => window.location.href = "/orders"}>
            <div className="card-icon"><FaBoxOpen /></div>
            <div className="card-title">MY ORDERS</div>
          </div>

          <div className="card" onClick={() => window.location.href = "/wishlist"}>
            <div className="card-icon"><FaHeart /></div>
            <div className="card-title">WISHLIST</div>
          </div>

          <div className="card" onClick={() => window.location.href = "/coupons"}>
            <div className="card-icon"><FaTicketAlt /></div>
            <div className="card-title">COUPONS</div>
          </div>

          <div className="card" onClick={() => window.location.href = "/account"}>
            <div className="card-icon"><FaUserCircle /></div>
            <div className="card-title">ACCOUNT</div>
          </div>

          <div className="card" onClick={() => window.location.href = "/addresses"}>
            <div className="card-icon"><FaMapMarkerAlt /></div>
            <div className="card-title">ADDRESSES</div>
          </div>

          <div className="card" onClick={() => window.location.href = "/shop"}>
            <div className="card-icon"><FaShoppingBag /></div>
            <div className="card-title">SHOP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;