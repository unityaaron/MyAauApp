// src/components/BottomNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink exact to="/" activeClassName="active" className="nav-item">
        <span role="img" aria-label="Home">🏠</span>
        Home
      </NavLink>
      <NavLink to="/jobs" activeclassName="active" className="nav-item">
        <span role="img" aria-label="Jobs">🎓</span>
        Jobs & Scholarships
      </NavLink>
      <NavLink to="/news" activeclassName="active" className="nav-item">
        <span role="img" aria-label="News">📰</span>
        School News
      </NavLink>
      <NavLink to="/market" activeclassName="active" className="nav-item">
        <span role="img" aria-label="Market">🛍️</span>
        Buy & Sell
      </NavLink>
    </nav>
  );
};

export default BottomNav;