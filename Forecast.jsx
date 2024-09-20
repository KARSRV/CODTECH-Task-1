import React, { useEffect, useState } from "react";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import snow_icon from "../assets/snow.png";
import rain_icon from "../assets/rain.png";

const getWeatherIcon = (iconCode) => {
  if (iconCode === "01d" || iconCode === "01n") return clear_icon;
  if (iconCode === "02d" || iconCode === "02n") return cloud_icon;
  if (iconCode === "03d" || iconCode === "03n") return cloud_icon;
  if (iconCode === "04d" || iconCode === "04n") return drizzle_icon;
  if (iconCode === "09d" || iconCode === "09n") return rain_icon;
  if (iconCode === "10d" || iconCode === "10n") return rain_icon;
  if (iconCode === "13d" || iconCode === "13n") return snow_icon;
  return clear_icon;
};

const Forecast = ({ city }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);
        const data = await response.json();

        const filteredData = [
          data.list[8],
          data.list[16],
          data.list[24],
          data.list[32],
        ];
        setForecastData(filteredData);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className=" text-white border-2 border-white rounded-md p-5">
      <div className="flex flex-row justify-between pl-2 pr-2">
        <p>
          {new Date(forecastData[0]?.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          })}
        </p>
        <p>
          {new Date(forecastData[1]?.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          })}
        </p>
        <p>
          {new Date(forecastData[2]?.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          })}
        </p>
        <p>
          {new Date(forecastData[3]?.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          })}
        </p>
      </div>

      <div className="flex flex-row justify-between space-x-16">
        <img
          src={getWeatherIcon(forecastData[0]?.weather[0].icon)}
          alt="Weather Icon"
          className="w-10 h-10"
        />
        <img
          src={getWeatherIcon(forecastData[1]?.weather[0].icon)}
          alt="Weather Icon"
          className="w-10 h-10"
        />
        <img
          src={getWeatherIcon(forecastData[2]?.weather[0].icon)}
          alt="Weather Icon"
          className="w-10 h-10"
        />
        <img
          src={getWeatherIcon(forecastData[3]?.weather[0].icon)}
          alt="Weather Icon"
          className="w-10 h-10"
        />
      </div>

      <div className="flex flex-row justify-between pl-1">
        <p>{Math.round(forecastData[0]?.main.temp)}°C</p>
        <p>{Math.round(forecastData[1]?.main.temp)}°C</p>
        <p>{Math.round(forecastData[2]?.main.temp)}°C</p>
        <p>{Math.round(forecastData[3]?.main.temp)}°C</p>
      </div>
    </div>
  );
};

export default Forecast;
