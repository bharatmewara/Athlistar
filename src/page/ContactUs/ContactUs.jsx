import React from 'react';
import './ContactUs.css';
import { MdOutlineEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';


const ContactUs = () => {
  return <>
    <div className="contact-container">
      <header className="contact-header">
        <div className="contact-title-wrapper">
          <h1 className="contact-title">CONTACT <span>US</span></h1>
        </div>
      </header>

      <section className="contact-info-cards">
        <div className="info-card">
          <div className="info-icon-wrapper">
            <MdOutlineEmail />
          </div>
          <p>contact@athlistar.com</p>
        </div>
        <div className="info-card">
          <div className="info-icon-wrapper">
            <MdLocalPhone />
          </div>
          <p>+91 635087XXXX</p>
        </div>
        <div className="info-card">
          <div className="info-icon-wrapper">
            <MdLocationOn />
          </div>
          <p>Kota, Rajasthan (IN)</p>
        </div>
      </section>

      <main className="contact-main-content">
        <div className="contact-form-section">
          <h2>Have Questions?</h2>
          <h3>Let's Kickstart Your Journey</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="query-type">Query Type*</label>
              <select id="query-type" required>
                <option value="general">General Inquiry</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="coaching">Coaching</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea id="message" rows="5" placeholder="Type something..." required></textarea>
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="communication" />
              <label htmlFor="communication">I agree to receive other communication messages</label>
            </div>
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>

        <div className="contact-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.20108848418!2d75.75933394335938!3d25.1818299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f851950de0f0d%3A0x83952f4628f8f438!2sKota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1668158578910!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kota, Rajasthan Location"
          ></iframe>
        </div>
      </main>
    </div>
  </>;
};

export default ContactUs;