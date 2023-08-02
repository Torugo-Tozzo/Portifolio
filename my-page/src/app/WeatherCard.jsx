import { useState, useEffect } from "react";
import dotenv from "dotenv";

dotenv.config();

const city = "Alfenas";
const WeatherKey = CLIMA_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherKey}&units=metric`;

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data from api.");
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data from api:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return null; // You can return a loading spinner or any other UI here if needed
  }

  if (!weatherData) {
    return <div>Failed to fetch weather data.</div>;
  }

  const temperature = weatherData.main?.temp
    ? Math.round(weatherData.main.temp)
    : null;
  const weatherIcon = weatherData.weather && weatherData.weather[0]?.icon;
  const humidity = weatherData.main?.humidity;

  return (
    <div className="my-4">
      {temperature && (
        <>
          <h3 className="dark:text-white text-2xl font-bold">
            {weatherData.name}
          </h3>
          <img
            className="mx-auto"
            src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
            alt="Weather Icon"
          />
          <p className="dark:text-white">
            {weatherData.weather[0].description}
          </p>
          <p className="dark:text-white text-2xl font-bold">{temperature}°C</p>
          <p className="dark:text-white">Humidity: {humidity}%</p>
          <p className="dark:text-white">Powered by OpenWeatherAPI</p>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
