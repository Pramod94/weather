import React from 'react';
import image from '/home/pramod/React/weather/src/Components/Images/sun.png';
import image1 from '/home/pramod/React/weather/src/Components/Images/cloud.png';
import image2 from '/home/pramod/React/weather/src/Components/Images/thunderstorm.png';

function Display(props) {

    switch (props.current) {
        case 'Clear':
            return <img src={image} alt="img" width="70px" />
        case 'Cloudy':
            return <img src={image1} alt="img" width="70px" />
        case 'Thurderstorm':
            return <img src={image2} alt="img" width="70px" />
        default:
            return <p>No data</p>
    }

}

export default Display;