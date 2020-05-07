import React, { Component } from "react";
import "./App.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import LocationList from "./components/LocationList";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ForecastExtended from "./components/ForecastExtended";

const cities = [
  "Santa Cruz de la Palma,es",
  "Santa Cruz de Tenerife,es",
  "Las Palmas de Gran Canaria,es",
  "Madrid,es",
  "Barcelona,es",
  "Dublin,ie",
  "Urubici,br",
  "Villa La Angostura,ar",
];

class App extends Component {
  constructor() {
    super();

    this.state = { city: null };
  }

  handleSelectedLocation = (city) => {
    this.setState({ city });
  };

  render() {
    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h3" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {city ? (
                  <ForecastExtended city={city}></ForecastExtended>
                ) : (
                  <h1>No se ha seleccionado ciudad</h1>
                )}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
