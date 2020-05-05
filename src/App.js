import React from "react";
import "./App.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import LocationList from "./components/LocationList";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const cities = [
  "Santa Cruz de la Palma,es",
  "Santa Cruz de Tenerife,es",
  "Las Palmas de Gran Canaria,es",
  "Madrid,es",
  "Barcelona,es",
  "Dublin,ie",
  "La Habana,cu",
];

const handleSelectedLocation = (city) => {
  console.log("handleSelectedLocation: ", city);
};

function App() {
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
            onSelectedLocation={handleSelectedLocation}
          />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details"></div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
