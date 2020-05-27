import transformForecast from "../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

const forecast_api_key = "90b5bb87e7e9a0242400de18fc23cb84";
const forecast_api_url_base = "http://api.openweathermap.org/data/2.5/forecast";

const setCity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = (payload) => {
  // este dispatch nos lo da el middleware thunk
  return (dispatch) => {
    const url = `${forecast_api_url_base}?q=${payload}&appid=${forecast_api_key}`;

    dispatch(setCity(payload));

    // acción inicial en el que ejecutamos la búsqueda de datos.
    // Activamos un indicador para que se sepa que los estamos buscando.
    return fetch(url)
      .then((response) => response.json())
      .then((weatherData) => {
        const forecastData = transformForecast(weatherData);
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};
