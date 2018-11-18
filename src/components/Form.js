import React from "react";

const Form = (props) => (

			<form onSubmit={props.weatherFetch}>
				
			<input type = "text" name = "city" placeholder = "What is your city?"/>

			<input type = "text" name = "country" placeholder = "What is your country?"/>

			<button> Fetch Weather </button>

			</form>

);

export default Form;