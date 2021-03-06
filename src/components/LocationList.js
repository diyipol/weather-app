import React from "react";
import WeatherLocation from "./WeatherLocation";
import { PropTypes } from "prop-types";
import "./style.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = (city) => {
    onSelectedLocation(city);
  };

  const getWeatherLocations = (cities) => {
    return cities.map((city) => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}
      />
    ));
  };

  return <div className="locationList">{getWeatherLocations(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
};

export default LocationList;
