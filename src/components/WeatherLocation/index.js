import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={"S/C de La Palma"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;