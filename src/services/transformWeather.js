import convert from "convert-units";
import { SUN, CLOUD, RAIN, SNOW, THUNDER, DRIZZLE } from "../constants/weather";

const getWeatherState = (weather) => {
  const { id } = weather;

  if (id < 300) {
    return THUNDER;
  }

  if (id < 400) {
    return DRIZZLE;
  }

  if (id < 600) {
    return RAIN;
  }

  if (id < 700) {
    return SNOW;
  }

  if (id === 800) {
    return SUN;
  }

  return CLOUD;
};

const getCelsius = (kelvin) => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2));
};

const transformWeather = (weatherData) => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weatherData.weather[0]);
  const temperature = getCelsius(temp);

  return {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  };
};

export default transformWeather;
