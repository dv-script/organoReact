import React from 'react';
import './TextBox.css';

function TextBox(data) {

	function onWritten(event) {
		data.setValue(event.target.value);
	}

	return (
		<section className="textbox">

			<label className="textbox__name">{data.label}</label>
			<input
				value={data.value}
				onChange={onWritten}
				type={data.type} 
				placeholder={data.placeholder} 
				required={data.required}/>
		
		</section>
	);
}

export default TextBox;
