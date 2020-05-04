import React from "react";
import "./App.css";
import LocationList from "./components/LocationList";

const cities = [
  "Santa Cruz de la Palma,es",
  "Santa Cruz de Tenerife,es",
  "Las Palmas de Gran Canaria,es",
  "Madrid,es",
  "Barcelona,es",
  "Dublin,ie",
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
