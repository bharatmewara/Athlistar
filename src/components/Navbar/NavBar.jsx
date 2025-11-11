import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '/images/Athlistar_logo-white.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

function NavBar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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
                <div className="d-flex align-items-center">
                  <img
                    src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.email}&background=667eea&color=fff`}
                    alt="User Avatar"
                    className="rounded-circle me-2"
                    style={{ width: '32px', height: '32px' }}
                  />
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <button className="btn btn-outline-light" onClick={handleLogin}>
                  Login/Signup
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
