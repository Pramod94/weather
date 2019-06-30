import React from 'react';
import weather from './weather_Json.json';
import Today from './Today/today';
import Nextdays from './Nextdays/nextdays';
import '/home/pramod/React/weather/src/Components/weather.css'

function Weather() {
    return (
        <div>
            <h2>Weather report</h2>
            <Today today={weather} /> <hr />
            <h3>Upcoming Days</h3>
            <div className="next" >
                <Nextdays nxt={weather.next} />
            </div>
        </div>
    )
}

export default Weather;