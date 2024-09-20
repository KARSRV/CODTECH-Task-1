import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import rain_icon from "../assets/rain.png";
import humidity_icon from "../assets/humidity.png";
import Forecast from "./Forecast";

const Box = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [city, setCity] = useState("Bangalore");
  const [error, setError] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCity(inputRef.current.value);
    }
  };

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    "50d": wind_icon,
    "50n": wind_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name Properly");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      console.log(data);

      if (data.weather && data.weather[0] && data.weather[0].icon) {
        const icon = allIcons[data.weather[0].icon] || clear_icon;

        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon,
        });
        setError(null);
      } else {
        throw new Error("Weather data not available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Could not fetch weather data. Please try again.");
    }
  };

  useEffect(() => {
    search(city);
  }, [city]);

  return (
    <div>
      <div className="w-96 justify-center items-center text-white flex flex-col border-2 border-white rounded-lg">
        <div className="flex text-2xl font-bold p-5">WEATHER-X</div>

        <div className="flex border-2 border-gray-500 rounded-lg place-items-center mb-5">
          <input
            className="text-white p-2 outline-none bg-transparent"
            type="text"
            placeholder="Search"
            ref={inputRef}
            spellCheck="false"
            onKeyDown={handleKeyDown}
          />
          <CiSearch
            color="white"
            size={28}
            onClick={() => setCity(inputRef.current.value)}
          />
        </div>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : weatherData ? (
          <>
            <img src={weatherData.icon} alt="Weather Icon" className="mb-4" />
            <div className="items-center justify-center flex flex-col pb-10">
              <p className="text-4xl font-semibold">
                {weatherData.temperature}°C
              </p>
              <p className="text-xl">{weatherData.location}</p>
            </div>
            <div className="flex space-x-[11rem]">
              <img src={humidity_icon} className="pl-4" alt="Humidity Icon" />
              <img src={wind_icon} className="pl-4" alt="Wind Icon" />
            </div>
            <div className="flex space-x-[11rem] pt-2">
              <p>Humidity</p>
              <p>Wind</p>
            </div>
            <div className="flex space-x-[11rem] pb-5">
              <p className="pl-8">{weatherData.humidity}%</p>
              <p>{weatherData.windSpeed} m/s</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="pt-5">
        <Forecast city={city} />
      </div>
    </div>
  );
};

export default Box;
