import React from "react";
import WeatherLocation from "./WeatherLocation";

const LocationList = () => (
  <div>
    <WeatherLocation city="Santa Cruz de la Palma,es"></WeatherLocation>
    <WeatherLocation city="Santa Cruz de Tenerife,es"></WeatherLocation>
    <WeatherLocation city="Las Palmas de Gran Canaria,es"></WeatherLocation>
    <WeatherLocation city="Madrid,es"></WeatherLocation>
    <WeatherLocation city="Barcelona,es"></WeatherLocation>
  </div>
);

export default LocationList;
