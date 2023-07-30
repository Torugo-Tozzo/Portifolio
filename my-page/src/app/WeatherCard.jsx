import React, { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "YOUR_OPENWEATHER_API_KEY";
    const city = "Alfenas";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Simulate an API delay for demonstration purposes (remove this in the final code)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <ClimbingBoxLoader size={40} color={"white"} />
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <ClimbingBoxLoader size={40} color={"white"} />
      </div>
    );
  }

  const temperature = weatherData.main?.temp
    ? Math.round(weatherData.main.temp)
    : null;

  return (
    <div className="bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110 flex flex-col items-center justify-center">
      <p className="dark:text-white text-2xl font-bold">{temperature}°C</p>
    </div>
  );
};

export default WeatherCard;
