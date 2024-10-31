import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityList from './CityList';
import SearchCity from './SearchCity';
import Header from './Header';
import DummyWeather from './DummyWeather';

export default function DashBoard() {
  const [cities, setCities] = useState([]);
  const API_KEY = '4f32bc860ffb5f708663a47d3d9bf4dc'; 

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem('cities')) || [];
    setCities(storedCities);
  }, []);

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const weatherDescription = response.data.weather[0].description;
      const temperature = response.data.main.temp;
      return { weatherDescription, temperature };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return { weatherDescription: 'Weather data not available', temperature: null };
    }
  };

  const addCity = async (city) => {
    if (!cities.find(c => c.name === city)) {
      const { weatherDescription, temperature } = await fetchWeatherData(city);
      const newCity = { name: city, weather: weatherDescription, temp: temperature };
      setCities((prevCities) => [...prevCities, newCity]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-blue-50 relative bg-cover" style={{ backgroundImage: `url('/public/Dashboard.jpg')` }}>
      <Header />
      <main className="relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-blue-900 bg-opacity-50 min-h-screen w-full">
        <div className="mb-8">
          <DummyWeather />
        </div>
        <div>
          <SearchCity onAddCity={addCity} cities={cities} />
        </div>
        <CityList cities={cities} />
      </main>
    </div>
  );
}
