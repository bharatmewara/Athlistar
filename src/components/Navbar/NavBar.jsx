import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '/images/Athlistar_logo-white.png';
import { AppProvider } from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';
import { NavLink } from 'react-router-dom'; // ✅ Import NavLink from React Router

const demoSession = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://avatars.githubusercontent.com/u/19550456',
  },
};

function NavBar() {
  const [session, setSession] = React.useState(demoSession);

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

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
                to="/Community"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              <AppProvider authentication={authentication} session={session}>
                <Account />
              </AppProvider>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
