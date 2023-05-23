import React from 'react';
import { MdLibraryAdd } from 'react-icons/md';

import './Header.css';
import ToggleForm from '../Buttons/ToggleForm/ToggleForm';

function Header(data) {

	return (
		<section className="teamContent">

			<h3 className="title">{data.children}</h3>
			<ToggleForm>
				<MdLibraryAdd />
			</ToggleForm>

		</section>
	);
}

export default Header;
