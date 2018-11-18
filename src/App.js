import React from "react";

import Titles from "./components/Titles";

import Form from "./components/Form";

import Weather from "./components/Weather";

const apikey = "e8c18b5b953ba1de2e75fbacc9c226fc";


class App extends React.Component {

	state = {

		temperature: undefined,

		temperature_min: undefined,

		temperature_max: undefined,

		city: undefined,

		country: undefined,

		humidity: undefined,

		description: undefined,

		error: undefined


	}

	weatherFetch = async (e) => {

		e.preventDefault();

		const city = e.target.elements.city.value;

		const country = e.target.elements.country.value;

		const call_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=imperial`);

		const data = await call_api.json();

		if (city && country) {

			this.setState({

				temperature: data.main.temp,

				temperature_min: data.main.temp_min,

				temperature_max:data.main.temp_max,

				city: data.name,

				country: data.sys.country,

				humidity: data.main.humidity,

				wind: data.wind.speed,

				description:data.weather[0].description,

				error: ""

			});

		} else {

			this.setState({

				temperature: undefined,

				temperature_min: undefined,

				temperature_max: undefined,

				city: undefined,

				country: undefined,

				humidity: undefined,

				wind: undefined,

				description: undefined,

				error: "Please enter valid values."

			});
		}
	}

	render() {

		return (

			<div>				

				<div className="wrapper">

					<div className="main">

						<div className="container">

							<div className="row">

							<div className="col-xs-5 title-container">

								<Titles/>

							</div>

							<div className="col-xs-7 form-container">

								<Form weatherFetch = {this.weatherFetch} />

								<Weather 

									temperature = {this.state.temperature}

									temperature_min = {this.state.temperature_min}

									temperature_max = {this.state.temperature_max}

									city = {this.state.city}

									country = {this.state.country}

									humidity = {this.state.humidity}

									wind = {this.state.wind}

									description = {this.state.description}

									error = {this.state.error}

								/>

							</div>

							</div>

						</div>

					</div>

				</div>
				

			</div>

			);

	}

};



				

export default App;


