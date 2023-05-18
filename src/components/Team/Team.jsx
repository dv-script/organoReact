import React from 'react';

import './Team.css';
import Card from '../Card/Card';

function Team(data) {
	return (
    
		<section className="team" style={{ backgroundColor: data.secundaryColor }}>

			<h3 style={{ borderColor: data.primaryColor }}>{data.title}</h3>

			<div className="persons">
				{data.persons.map( person =>
					<Card
						key={data.id}
						name={person.name}
						position={person.position}
						image={person.image}
					/>)}
			</div>
			
		</section>

	);
}

export default Team;
