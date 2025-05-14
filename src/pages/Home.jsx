// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="content">
      <div className="title">Practice Questions</div>
      <div className="cards">
        <div className="card">
          <div className="icon math-icon"></div>
          <div className="label">GST 101</div>
          <div className="count">100 questions</div>
        </div>
        <div className="card">
          <div className="icon verbal-icon"></div>
          <div className="label">GST 102</div>
          <div className="count">100 questions</div>
        </div>
      </div>
    </div>
  );
};

export default Home;