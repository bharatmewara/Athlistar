import React from "react";
import "./Footer.css";
import Logo from '/images/Athlistar_logo-white.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="athlistar-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={Logo} alt="Athlistar Logo" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">
            You Bring The Fire. We Bring The Fit.<br />
            Together, We Build Legends.
          </p>
          <div className="footer-newsletter">
            <span className="newsletter-label">Subscribe To Our Newsletter</span>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <span className="newsletter-arrow">↗</span>
              </button>
            </form>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>EXPLORE</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ShoeMatchTool">Shoe Match Tool</Link></li>
              <li><Link to="/Coaching">Coaching</Link></li>
              <li><Link to="/Shop">Shop</Link></li>
              <li><Link to="/Sponsorship">Sponsorship</Link></li>
              <li><Link to="/AboutAthlistar">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <ul>
              <li><Link to="/FAQ">FAQ</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
              <li><Link to="/HelpCenter">Help Center</Link></li>
              <li><Link to="/Shipping&Delivery">Shipping & Delivery</Link></li>
              <li><Link to="/Returns&Refunds">Returns & Refunds</Link></li>
              <li><Link to="/Community">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4>LEGAL</h4>
            <ul>
              <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
              <li><Link to="/TermsOfService">Terms Of Service</Link></li>
              <li><Link to="/CookiePolicy">Cookie Policy</Link></li>
              <li><Link to="/Disclaimer">Disclaimer</Link></li>
              <li><Link to="/SecurityPolicy">Security Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span className="footer-copyright">
          COPYRIGHT ©2025 ATHLISTAR | ALL RIGHTS RESERVED
        </span>
        <div className="footer-socials">
          <a href="#" aria-label="Twitter" className="footer-social twitter">
            <svg width="24" height="24" fill="#c6ff00" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.924 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="footer-social instagram">
            <svg width="24" height="24" fill="#c6ff00" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.401 3.635 1.368c-.967.967-1.237 2.14-1.296 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.277.329 2.45 1.296 3.417.967.967 2.14 1.237 3.417 1.296C8.332 21.987 8.741 22 12 22s3.668-.013 4.948-.072c1.277-.059 2.45-.329 3.417-1.296.967-.967 1.237-2.14 1.296-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.329-2.45-1.296-3.417-.967-.967-2.14-1.237-3.417-1.296C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="footer-social facebook">
            <svg width="24" height="24" fill="#c6ff00" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;