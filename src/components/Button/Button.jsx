import React from 'react';

import './Button.css';

function Button(data) {
	return (
		<button className="button">
			{data.children}
		</button>
	);
}

export default Button;
