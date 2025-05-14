// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar}>×</span>
        <h3>Menu</h3>
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>More</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;