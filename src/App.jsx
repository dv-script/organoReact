import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';

function App() {

	const teams = [
		{ id: 1, team: 'Developers' },
		{ id: 2, team: 'Front-End' },
		{ id: 3, team: 'Data Science' },
		{ id: 4, team: 'DevOps' },
		{ id: 5, team: 'UX and Design' },
		{ id: 6, team: 'Mobile' },
		{ id: 7, team: 'Inovation and Management' },
	];

	const [persons, setPersons] = useState([]);

	function addNewPerson(person) {
		console.log(person);
		setPersons({...persons, person});
	}

	return (
		<>
			<Banner />
			<Form
				teams={teams} 
				newPerson={person => addNewPerson(person)}/>
		</>
	);
}

export default App;
