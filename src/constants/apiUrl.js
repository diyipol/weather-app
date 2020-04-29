const weather_api_key = "90b5bb87e7e9a0242400de18fc23cb84";
const weather_api_url_base = "http://api.openweathermap.org/data/2.5/weather";
const weather_api_location = "Santa Cruz de la Palma,es";

export const weather_api_url = `${weather_api_url_base}?q=${weather_api_location}&appid=${weather_api_key}`;
