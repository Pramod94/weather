import React from 'react';
import Display from '../display';
import './nextdays.css';

function Nextdays(props) {
    return props.nxt.map((res) => {
        return (
            <div className="block" key={res.day}>
                <p style={{fontSize:'30px',textAlign:'center'}}>{res.day}</p>
                <p>Location : {res.location}</p>
                <p><label> Current : </label>{res.current}</p>
                <p><label> Maximum_temperature : </label> {res.maximum_temp}</p>
                <p><label> Minimum_temperature : </label>{res.minimum_temp}</p>
                <div style={{textAlign:'center'}}>
                <Display current={res.current} />
                </div>
                
            </div>
        )
    });
}

export default Nextdays;