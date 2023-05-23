import React from 'react';

import './ToggleForm.css';

function ToggleForm(data) {
	return (
		<button className="toggleFormButton">{data.children}</button>
	);
}

export default ToggleForm;
