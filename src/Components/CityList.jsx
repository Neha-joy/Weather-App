const CityList = ({ cities }) => {
    return (
      <ul className="mt-4">
        {cities.map((city, index) => (
          <li key={index} className="mb-2 p-4 border border-blue-300 rounded-md">
            <h2 className="text-xl font-semibold">{city.name}</h2>
            <p>Temperature: {city.temp} °C</p>
            <p>Condition: {city.weather}</p>
            <p>Humidity: {city.humidity}%</p>
          </li>
        ))}
      </ul>
    );
  };
  
  export default CityList;
  