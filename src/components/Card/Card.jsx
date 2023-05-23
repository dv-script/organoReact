import React from 'react';

import './Card.css';

function Card(data) {
	return (
		<section className="card">

			<div className="card__top" style={{ backgroundColor: data.primaryColor}}>
				<img src={data.image} alt={data.name} />
			</div>

			<div className="card__bottom">
				<h4>{data.name}</h4>
				<h5>{data.position}</h5>
			</div>

		</section>
	);
}

export default Card;
