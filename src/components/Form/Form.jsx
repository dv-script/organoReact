import React from 'react';
import './Form.css';
import TextBox from '../TextBox/TextBox';

function Form() {
	return (
		<section className="form">

			<h2 className="form__title">Fill in the following fields to create a new colaborator card</h2>

			<TextBox
				label="Name"
				placeholder="Type your name"/>

			<TextBox
				label="Position"
				placeholder="Type your position"/>

			<TextBox 
				label="Image"
				placeholder="Upload your image"/>

			<TextBox
				label="Team"/>

		</section>
	);
}

export default Form;
