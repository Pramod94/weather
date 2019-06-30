import React from 'react';
import weather from './weather_Json.json';
import image from '/home/pramod/React/weather/src/Components/sun.png';
import image1 from '/home/pramod/React/weather/src/Components/cloud.png';
import image2 from '/home/pramod/React/weather/src/Components/thunderstorm.png';

function Display(props){

    if(props.current === 'Clear'){
      return  <img src={image} alt="img" width="70px" />
    } else if(props.current === 'Cloudy'){
       return <img src={image1} alt="img" width="70px"  />
    } else return  <img src={image2} alt="img" width="70px" />

}

function Today(props) {
    return (
        <div>
            <p>Day : {props.today.day}</p>
            <p>Location : {props.today.location}</p>
            <p>Current : {props.today.current[0]}</p>
            <Display current={props.today.current[0]} />
        </div>
    )
}

function Nextdays(props) {
    let i = 0;
    var a = props.nxt.map((res) => {
        i++;
        return (
            <div key={res.day}>
                <p>Day : {res.day}</p>
                <p>Location : {res.location}</p>
                <p>Current : {res.current[i]}</p>
                <Display current={res.current[i]} />
            </div>

        )
    });

    return a;
}


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