import { weather_api_key, weather_api_url_base } from "../constants/apiUrl";

const getUrlWeatherByCity = (city) => {
  return `${weather_api_url_base}?q=${city}&appid=${weather_api_key}`;
};

export default getUrlWeatherByCity;
