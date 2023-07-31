import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const WeatherKey = process.env.WEATHER_KEY;//aqui a key
    const city = "Alfenas";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
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
          <h3 className="dark:text-white text-2xl font-bold">{weatherData.name}</h3>
          <img
            className="mx-auto"
            src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
            alt="Weather Icon"
          />
          <p className="dark:text-white">{weatherData.weather[0].description}</p>
          <p className="dark:text-white text-2xl font-bold">{temperature}°C</p>
          <p className="dark:text-white">Humidade: {humidity}%</p>
          <p className="dark:text-white">Powered by OpenweatherAPI</p>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
