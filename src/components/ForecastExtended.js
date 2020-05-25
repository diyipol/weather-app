import React, { Component } from "react";
import { PropTypes } from "prop-types";
import ForecastItem from "./ForecastItem";
import "./style.css";
import transformForecast from "../services/transformForecast";

const forecast_api_key = "90b5bb87e7e9a0242400de18fc23cb84";
export const forecast_api_url_base =
  "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor() {
    super();

    this.state = {
      forecastData: null,
    };
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(this.props.city);
    }
  }

  updateCity = (city) => {
    const url = `${forecast_api_url_base}?q=${city}&appid=${forecast_api_key}`;

    fetch(url)
      .then((response) => response.json())
      .then((weatherData) => {
        const forecastData = transformForecast(weatherData);
        this.setState({ forecastData });
      });
  };

  renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast) => (
      <ForecastItem
        key={`forecast-item-${forecast.weekDay}-${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      ></ForecastItem>
    ));
  };

  renderProgress = () => {
    return <h3>"Cargando pronóstico extendido"</h3>;
  };

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecastTitle">Pronóstico extendido de {city} </h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
