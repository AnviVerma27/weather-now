import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const API_KEY = '563a11562f9b4717af7173231241911'; // Replace with your WeatherAPI key
    const API_URL = `/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
      const response = await axios.get(API_URL);
      setWeatherData(response.data);
      setError(''); // Clear previous errors
    } catch (err) {
      setWeatherData(null);
      setError('City not found or API issue. Please try again.');
    }
  };

  return (
    <div className="app">
      <h1>Weather Now</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay weather={weatherData} />}
    </div>
  );
};

export default App;