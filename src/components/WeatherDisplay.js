import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { location, current } = weather;
  const { name, region, country } = location;
  const { temp_c, condition, humidity } = current;

  return (
    <div className="weather-display">
      <h2>{`${name}, ${region}, ${country}`}</h2>
      <img
        src={condition.icon}
        alt={condition.text}
      />
      <p>Temperature: {temp_c}°C</p>
      <p>Condition: {condition.text}</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;