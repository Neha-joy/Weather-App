import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

export default function CityWeather() {
    const { cityName } = useParams(); 
    const [weather, setWeather] = useState(null);

    const fetchWeather = useCallback(async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4f32bc860ffb5f708663a47d3d9bf4dc`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setWeather({
                temperature: (data.main.temp - 273.15).toFixed(1) + '°C',
                condition: data.weather[0].description,
                humidity: data.main.humidity + '%',
            });
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    }, [cityName]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    if (!weather) return <p>Loading...</p>;

    return (
        <div>
            
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 mb-4 text-center max-w-xs mx-auto">
                <h2 className="text-2xl font-bold mb-2">{cityName}</h2>
                <p className="text-lg">Temperature: <span className="font-semibold">{weather.temperature}</span></p>
                <p className="text-lg">Condition: <span className="capitalize font-semibold">{weather.condition}</span></p>
                <p className="text-lg">Humidity: <span className="font-semibold">{weather.humidity}</span></p>
            </div>
        </div>

    );
}
