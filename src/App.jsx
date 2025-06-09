// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AAUStudyAppLayout from './layouts/AAUStudyAppLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import News from './pages/News';
import Market from './pages/Market';
import GST101Page from './pages/gst101';
import GST102Page from './pages/gst102'
// src/App.js
import './App.css'; // ✅ This is enough
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import MorePage from './pages/MorePage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AAUStudyAppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/news" element={<News />} />
          <Route path="/market" element={<Market />} />
          <Route path="/gst101" element={<GST101Page />} />
          <Route path="/gst102" element={<GST102Page />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/more" element={<MorePage />} />

        </Route> 
      </Routes>
    </Router>
  );
};

export default App;
