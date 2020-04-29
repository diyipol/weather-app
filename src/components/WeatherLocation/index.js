import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import transformWeather from "../../services/transformWeather";
import { SUN } from "../../constants/weather";
import { weather_api_url } from "../../constants/apiUrl";

class WeatherLocation extends Component {
  constructor() {
    super();

    this.state = {
      city: "S/C de La Palma",
      data: null,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.loadWeatherData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  loadWeatherData = () => {
    fetch(weather_api_url)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        this.setState({
          data: transformWeather(body),
        });
      });
  };

  render() {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> : "Cargando..."}
      </div>
    );
  }
}
export default WeatherLocation;
