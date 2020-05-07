import React from "react";
import { PropTypes } from "prop-types";
import WeatherData from "../WeatherLocation/WeatherData";

const data = {
  temperature: 10,
  weatherState: "normal",
  humidity: 10,
  wind: "normal",
};

const ForecastItem = ({ weekDay, hour }) => {
  return (
    <div>
      <div>
        {weekDay} Hora: {hour}
      </div>
      <WeatherData data={data}></WeatherData>
    </div>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
};

export default ForecastItem;
