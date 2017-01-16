const React = require('react');

const ForecastUnit = (props) => (
 //for each forecast data item
<div className="callout">
        <h3>At {props.item.hours}:00 on  the {props.item.day}/{props.item.month}/{props.item.year}</h3>
        <h4>Temperature</h4>
        <p>{props.item.temp} &#176;C</p>
        <h4>Forecast</h4>
        <p>{props.item.weather}</p>


        <p>&#8675;</p>

    </div>

)

module.exports = ForecastUnit;
