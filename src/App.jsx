// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AAUStudyAppLayout from './layouts/AAUStudyAppLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import News from './pages/News';
import Market from './pages/Market';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AAUStudyAppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/news" element={<News />} />
          <Route path="/market" element={<Market />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
