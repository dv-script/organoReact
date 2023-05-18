import React, { useState } from 'react';

import './Form.css';
import TextBox from '../TextBox/TextBox';
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';

function Form(data) {

	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [image, setImage] = useState('');
	const [team, setTeam] = useState('');

	function submitForm(event) {
		event.preventDefault();
		data.newPerson({
			name,
			position,
			image,
			team
		});
	}

	return (
		<section className="form">

			<form onSubmit={submitForm}>

				<h2 className="form__title">Fill in the following fields to create a new colaborator card</h2>

				<TextBox
					value={name}
					setValue={value => {setName(value);}}
					label="Name"
					placeholder="Type your name"
					required={true}
					type=""/>

				<TextBox
					value={position}
					setValue={value => {setPosition(value);}}
					label="Position"
					placeholder="Type your position"
					required={true}
					type=""/>

				<TextBox
					value={image}
					setValue={value => {setImage(value);}}
					label="Image"
					placeholder="Upload your image"
					required={true}
					type=""/>

				<DropDown
					value={team}
					setValue={value => {setTeam(value);}}
					label="Teams"
					optionText="Select your team"
					required={true}
					teams={data.teams}/>

				<Button>Create Card</Button>

			</form>

		</section>
	);
}

export default Form;
