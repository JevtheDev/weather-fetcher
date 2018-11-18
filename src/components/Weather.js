import React from "react";

const Weather = (props) => {

		return(

			<div className = "weather__info"> 

			{

			 props.city && props.country && <p className = "weather__key"> The temperature in {props.city}, {props.country} is 
			 	
			 	<span className = "weather__value"> {props.temperature} </span>

			 degrees.</p>

			}

			{

			 props.temperature_min && props.temperature_max && <p className = "weather__key"> The high is 

					<span className = "weather__value"> {props.temperature_max} degrees and the low is {props.temperature_min} degrees.</span>

				 </p>

			}

			{

			 props.humidity && <p className = "weather__key"> The humidity is  
			 	
			 	<span className = "weather__value"> {props.humidity} %</span>

			 </p>

			}

			{
			 props.description && props.wind && <p className = "weather__key"> You can expect a {props.description} and wind speeds of
			 	
			 	<span className = "weather__value"> {props.wind} mph. </span>

			 </p>

			}

			{

			 props.error && <p> {props.error}

			 </p>

			}

			</div>

		);

};

export default Weather;

