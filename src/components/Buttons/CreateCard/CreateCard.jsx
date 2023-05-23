import React from 'react';

import './CreateCard.css';

function Button(data) {
	return (
		<button className="createCardButton">
			{data.children}
		</button>
	);
}

export default Button;
