import React from 'react';
import Display from '../display';
import './today.css';
import '/home/pramod/React/weather/src/Components/Images/sky.jpg';

function Today(props) {
    return (
        <div className="today">
            <p className="day">{props.today.day}</p>
            <p className="temp">{props.today.absolute_temp}</p>
            <p className="tempdetails">{props.today.location}</p>
            <p className="tempdetails">{props.today.current}</p>
            <div className="otherdetails">
            <p>Maximum_temperature : {props.today.maximum_temp}</p>
            <p>Minimum_temperature : {props.today.minimum_temp}</p>
            </div>
            <Display current={props.today.current} />
        </div>
    )
}

export default Today;