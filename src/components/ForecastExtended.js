import React, { Component } from "react";
import { PropTypes } from "prop-types";
import ForecastItem from "./ForecastItem";
import "./style.css";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

class ForecastExtended extends Component {
  renderForecastItemDays = () => {
    return days.map((day) => (
      <ForecastItem
        key={`forecast-item-${day}`}
        weekDay={day}
        hour={16}
      ></ForecastItem>
    ));
  };

  render() {
    const { city } = this.props;
    return (
      <div>
        <h2 className="forecastTitle">Pronóstico extendido de {city} </h2>
        {this.renderForecastItemDays()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
