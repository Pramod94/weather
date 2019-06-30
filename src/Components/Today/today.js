import React from 'react';
import Display from '../display';
import './today.css';

function Today(props) {
    return (
        <div className="today">
            <p>Day : {props.today.day}</p>
            <p>Location : {props.today.location}</p>
            <p>Current : {props.today.current}</p>
            <p>Temperature : {props.today.absolute_temp}</p>
            <p>Maximum_temperature : {props.today.maximum_temp}</p>
            <p>Minimum_temperature : {props.today.minimum_temp}</p>
            <Display current={props.today.current} />
        </div>
    )
}

export default Today;