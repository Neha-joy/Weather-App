import React from 'react';

export default function DummyWeather() {

  const dummyData = {
    city: 'New York',
    temperature: 22,
    description: 'Sunny',
    humidity: 60, 
    windSpeed: 10, 
  };

  return (
    <div className="bg-blue-200 rounded-lg p-4 shadow-md w-80 text-center">
      <h2 className="text-xl font-semibold">{dummyData.city}</h2>
      <p className="text-gray-700 text-lg">{dummyData.description}</p>
      <p className="text-2xl font-bold">{dummyData.temperature}°C</p>
      <div className="flex justify-around mt-4 text-sm text-gray-600">
        <p>Humidity: {dummyData.humidity}%</p>
        <p>Wind: {dummyData.windSpeed} km/h</p>
      </div>
    </div>
  );
}
