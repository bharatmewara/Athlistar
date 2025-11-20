import React from 'react';
import './CommunityAccess.css';
import { useNavigate } from 'react-router-dom';

const CommunityAccess = () => {
  const navigate = useNavigate();

  const handleRequestMyInvite = () => {
    navigate('/CommunityAccess');
  };
  return (
    <section className="community-section">
      <h2 className="community-heading">
        <span className="bold-text">EXCLUSIVE</span>{' '}
        <span className="outlined-text">COMMUNITY</span>{' '}
        <span className="bold-text">ACCESS</span>
      </h2>
      <p className="subheading">THE LOCKER ROOM THAT LEGENDS BUILD</p>
      <p className="description">
        A Private Network Of Elite Athlete Stars And Real Ones Access By Invite Only
      </p>
      <button className="invite-btn" onClick={handleRequestMyInvite}>
        REQUEST MY INVITE <span className="arrow">↗</span>
      </button>
    </section>
  );
};

export default CommunityAccess;
