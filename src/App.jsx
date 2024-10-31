import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import CityList from './Components/CityList';
import CityWeather from './Components/CityWeather';


export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/cities" element={<CityList />} />
          <Route path="/city/:cityName" element={<CityWeather />} />
        </Routes>
    </Router>
  );
}
