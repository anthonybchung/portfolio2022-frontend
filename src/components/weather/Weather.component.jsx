import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { Card } from "react-bootstrap";

const Weather = () => {
  const WEATHER_URL = "api/v1/weather/";
  const [weather, setWeather] = useState("no data");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(WEATHER_URL);
        setWeather(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, []);

  return (
    <>
      <p>{weather?.data?.weather[0].main}</p>
      <p>{weather?.data?.weather[0].description}</p>
      <p>{weather?.data?.weather[0].icon}</p>
    </>
  );
};

export default Weather;
