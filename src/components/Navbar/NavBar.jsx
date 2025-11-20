import React, { useState } from 'react';
import './NavBar.css';
import './ProfileDropdown.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '/images/Athlistar_logo-white.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

function NavBar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown-container')) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showDropdown]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={Logo}
            alt="Athlistar Logo"
            style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ShoeMatchingTool"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Shoe Match Tool
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Coaching"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Coaching
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Shop"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Sponsorship"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Sponsorship
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/CommunityAccess"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              {currentUser ? (
                <div className="profile-dropdown-container">
                  <img
                    src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.email}&background=d0ff00&color=000`}
                    alt="User Avatar"
                    className="rounded-circle profile-avatar"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDropdown(!showDropdown);
                    }}
                  />
                  {showDropdown && (
                    <div className="profile-popup-overlay">
                      <div className="profile-popup">
                        <div className="popup-header">
                          <img 
                            src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.email}&background=d0ff00&color=000`}
                            alt="Profile"
                            className="popup-avatar"
                          />
                          <div className="popup-user-info">
                            <h4>{currentUser.displayName || 'User'}</h4>
                            <p>{currentUser.email}</p>
                          </div>
                        </div>
                        <div className="popup-menu">
                          <div className="popup-item" onClick={() => { navigate('/profile'); setShowDropdown(false); }}>
                            <span className="popup-icon">👤</span>
                            <span>Profile</span>
                          </div>
                          <div className="popup-item" onClick={() => { navigate('/orders'); setShowDropdown(false); }}>
                            <span className="popup-icon">📦</span>
                            <span>Orders</span>
                          </div>
                          <div className="popup-item" onClick={() => { navigate('/wishlist'); setShowDropdown(false); }}>
                            <span className="popup-icon">❤️</span>
                            <span>Wishlist</span>
                          </div>
                          <div className="popup-item logout" onClick={() => { handleLogout(); setShowDropdown(false); }}>
                            <span className="popup-icon">🚪</span>
                            <span>Logout</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-light" onClick={() => navigate('/login?mode=signin')}>
                    Sign In
                  </button>
                  <button className="btn btn-light" onClick={() => navigate('/login?mode=signup')}>
                    Sign Up
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
