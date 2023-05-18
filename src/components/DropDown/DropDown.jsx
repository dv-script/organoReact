import React from 'react';
import './DropDown.css';

function DropDown(data) { 
	
	function onWritten(event) {
		data.setValue(event.target.value);
	}

	return (
		
		<div className="dropdown">

			<label>{data.label}</label>
			<select
				onChange={onWritten}
				value={data.value}
				required={data.required}>

				<option defaultValue hidden>
					{data.optionText}
				</option>

				{data.teams.map((object) => (
					<option key={object.id}>{object.teamName}</option>
				))}

			</select>

		</div>

	);
}

export default DropDown;
