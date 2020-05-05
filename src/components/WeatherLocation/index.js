import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./styles.css";
import transformWeather from "../../services/transformWeather";
import { PropTypes } from "prop-types";
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);

    const { city } = props;

    this.state = {
      city,
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
    const weatherApiUrl = getUrlWeatherByCity(this.state.city);

    fetch(weatherApiUrl)
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
    const { city, data } = this.state;
    const { onWeatherLocationClick } = this.props;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? (
          <WeatherData data={data}></WeatherData>
        ) : (
          <CircularProgress size={50} />
        )}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;
