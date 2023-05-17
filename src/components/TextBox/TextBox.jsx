import React from 'react';
import './TextBox.css';

function TextBox(data) {
	return (
		<section className="textbox">

			<label className="textbox__name">{data.label}</label>
			<input type="text" placeholder={data.placeholder}/>
		
		</section>
	);
}

export default TextBox;
