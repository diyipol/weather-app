import convert from "convert-units";
import { SUN } from "../constants/weather";

const getWeatherState = (weatherData) => {
  return SUN;
};

const getCelsius = (kelvin) => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2));
};

const transformWeather = (weatherData) => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weatherData);
  const temperature = getCelsius(temp);

  return {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  };
};

export default transformWeather;
