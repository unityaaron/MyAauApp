// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import News from './pages/News';
import Market from './pages/Market';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/news" component={News} />
          <Route path="/market" component={Market} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;