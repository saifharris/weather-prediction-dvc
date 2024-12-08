import React, { useState } from 'react';
import './styles/Dashboard.css';

const Dashboard = () => {
  const [features, setFeatures] = useState({ humidity: '', windSpeed: '' });
  const [temperature, setTemperature] = useState(null);

  const predictTemperature = () => {
    // Add logic for prediction (e.g., ML model API integration)
    setTemperature(Math.random() * 100); // Dummy prediction
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Weather Dashboard</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Humidity"
          value={features.humidity}
          onChange={(e) => setFeatures({ ...features, humidity: e.target.value })}
          className="dashboard-input"
        />
        <input
          type="text"
          placeholder="Wind Speed"
          value={features.windSpeed}
          onChange={(e) => setFeatures({ ...features, windSpeed: e.target.value })}
          className="dashboard-input"
        />
      </div>
      <button onClick={predictTemperature} className="dashboard-button">
        Predict Temperature
      </button>
      {temperature && (
        <div className="dashboard-result">
          <h2>Predicted Temperature: {temperature.toFixed(2)}°C</h2>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
