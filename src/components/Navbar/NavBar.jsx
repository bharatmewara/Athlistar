import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../public/images/Logo.png'


function NavBar() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={Logo} alt="Athlistar Logo" className="logo-img" />
        </a>
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
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shoe Match Tool</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Coaching</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sponsorship</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default NavBar;
