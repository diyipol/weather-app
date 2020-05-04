import React from "react";
import WeatherLocation from "./WeatherLocation";
import { PropTypes } from "prop-types";

const getWeatherLocations = (cities) => {
  return cities.map((city) => (
    <WeatherLocation key={city} city={city}></WeatherLocation>
  ));
};

const LocationList = ({ cities }) => <div>{getWeatherLocations(cities)}</div>;

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default LocationList;
