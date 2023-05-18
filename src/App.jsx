import React, { useState } from 'react';

import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {

	const teams = [
		{ 
			id: 1,
			teamName: 'Developers',
			primaryColor: '#57C278',
			secundaryColor: '#D9F7E9'
		},
		{ 
			id: 2,
			teamName: 'Front-End',
			primaryColor: '#82CFFA',
			secundaryColor: '#E8F8FF'},
		{ 
			id: 3,
			teamName: 'Data Science',
			primaryColor: '#A6D157',
			secundaryColor: '#F0F8E2'},
		{ 
			id: 4,
			teamName: 'DevOps',
			primaryColor: '#E06B69',
			secundaryColor: '#FDE7E8'},
		{ 
			id: 5,
			teamName: 'UX and Design',
			primaryColor: '#DB6EBF',
			secundaryColor: '#FAE9F5'},
		{ 
			id: 6,
			teamName: 'Mobile',
			primaryColor: '#FFBA05',
			secundaryColor: '#FFF5D9'},
		{ 
			id: 7,
			teamName: 'Inovation and Management',
			primaryColor: '#FF8A29',
			secundaryColor: '#FFEEDF'
		}

	];

	const [persons, setPersons] = useState([]);

	function addNewPerson(person) {
		setPersons(prevPersons => [...prevPersons, person]);
	}

	return (
		<>
			<Banner />

			<Form
				teams={teams} 
				newPerson={person => addNewPerson(person)}
			/>

			{teams.map( team => 
				<Team 
					key={team.id}
					title={team.teamName}
					primaryColor={team.primaryColor}
					secundaryColor={team.secundaryColor}
					persons={persons}
				/>
			)}

		</>
	);
}

export default App;
