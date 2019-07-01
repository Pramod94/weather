import React from 'react';
import weather from './weather_Json.json';
import Today from './Today/today';
import Nextdays from './Nextdays/nextdays';

function Weather() {
    return (
        <div>
            <div>
            <h2 style={{textAlign:'center'}}>Weather report</h2>
            </div>
            
            <Today today={weather} /> <br /><br /><br /><br /> <hr />
            <div>
            <h3 style={{textAlign:'center'}}>Upcoming Days</h3>
                <Nextdays nxt={weather.next} />
            </div>
        </div>
    )
}

export default Weather;