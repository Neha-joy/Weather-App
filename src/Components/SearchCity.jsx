import React, { useState } from 'react';

export default function SearchCity({ onAddCity, cities }) {
  const [city, setCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddCity = () => {
    if (city) {
      onAddCity(city);
      setCity('');
    }
  };
  

  const filteredCities = cities.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="mb-6 flex flex-col items-center">
      <div className="flex mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddCity}
          className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-200"
        >
          Add City
        </button>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a city"
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
      />
      <ul className="mt-4 w-full max-w-md">
        {filteredCities.length === 0 ? (
          <li className="text-gray-500">No matching cities found.</li>
        ) : (
          filteredCities.map((cityObj, index) => (
            <li key={index} className="text-black border-b pb-2">
              <span className="font-semibold">{cityObj.name}</span>: {cityObj.weather}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
