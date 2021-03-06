import React from "react";
import "./App.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

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

const App = () => {
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
          <LocationListContainer cities={cities} />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
              <ForecastExtendedContainer />
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
};

export default App;
