import React from 'react';
import './HopCard.css'





const HopCard = (props) => {
    return (
        <div id="cardoo">
            <div id="titleH">{props.name}</div>
            <div id="specialiteH">{props.ad}</div>
            {/* <div id="titleH"></div> */}
        </div>
    );
}

export default HopCard;
