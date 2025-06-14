// src/pages/SettingsPage.js
import React, { useState, useEffect } from 'react';

const SETTINGS_KEY = 'myAppSettings'; // A unique key for your app's settings in local storage

const SettingsPage = () => {
  // Initialize state based on local storage or defaults
  const [settings, setSettings] = useState(() => {
    try {
      const storedSettings = localStorage.getItem(SETTINGS_KEY);
      return storedSettings ? JSON.parse(storedSettings) : {
        notificationsEnabled: true,
        currentTheme: 'Light',
      };
    } catch (error) {
      console.error("Error parsing settings from local storage:", error);
      // Fallback to default settings if there's an error parsing
      return {
        notificationsEnabled: true,
        currentTheme: 'Light',
      };
    }
  });

  // Use useEffect to save settings to local storage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      console.log("Settings saved to local storage:", settings);
    } catch (error) {
      console.error("Error saving settings to local storage:", error);
    }
  }, [settings]); // This effect runs whenever the 'settings' state object changes

  // Event Handlers to update state and trigger save (via useEffect)
  const handleNotificationsToggle = () => {
    setSettings(prevSettings => ({
      ...prevSettings,
      notificationsEnabled: !prevSettings.notificationsEnabled,
    }));
  };

  const handleThemeToggle = () => {
    setSettings(prevSettings => ({
      ...prevSettings,
      currentTheme: prevSettings.currentTheme === 'Light' ? 'Dark' : 'Light',
    }));
  };

  return (
    <div className="content">
      <h2>Settings</h2>

      {/* Notifications Setting */}
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            checked={settings.notificationsEnabled}
            onChange={handleNotificationsToggle}
          />
          Notifications: {settings.notificationsEnabled ? 'ON' : 'OFF'}
        </label>
      </div>

      {/* Theme Setting */}
      <div style={{ marginBottom: '15px' }}>
        <p>
          Theme: {settings.currentTheme}
          <button
            onClick={handleThemeToggle}
            style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
          >
            Toggle Theme
          </button>
        </p>
      </div>

      <p style={{ marginTop: '30px', fontStyle: 'italic', color: '#888' }}>
        (Settings are now saved automatically to your browser's local storage!)
      </p>
    </div>
  );
};

export default SettingsPage;