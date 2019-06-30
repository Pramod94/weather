import React from 'react';
import Display from '../display';
import './nextdays.css';

function Nextdays(props) {
    return props.nxt.map((res) => {
        return (
            <div className="block" key={res.day}>
                <p><label> Day :</label>{res.day}</p>
                <p><label> Location :</label>{res.location}</p>
                <p><label> Current :</label>{res.current}</p>
                <p><label> Maximum_temperature :</label> {res.maximum_temp}</p>
                <p><label> Minimum_temperature :</label>{res.minimum_temp}</p>
                <p><Display current={res.current} /></p>
            </div>
        )
    });
}

export default Nextdays;