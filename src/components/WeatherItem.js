import React from "react";

const weatherItem = () => {
    return (
        <div className="weather-item">
            <img className="content-img" src="#"></img>
            <h2>status</h2>
            <h3>Temperature <span>high</span> &deg;C to <span>low</span>&deg;C</h3>
            <h3>Humidity <span>Percentage%</span> Pressure <span>1008.48</span></h3>
        </div>
    );
}
 
export default weatherItem;