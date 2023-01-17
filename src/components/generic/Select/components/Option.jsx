import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { SelectContext } from '../Select';

export function Option({ option, index }) {
	const { selectedOption, setSelectedThenCloseDropdown } =
		useContext(SelectContext);

	return (
		<li
			onClick={() => {
				setSelectedThenCloseDropdown(index);
			}}
			className={`hover:cursor-pointer block px-4 py-2 hover:bg-gray-100 ${
				selectedOption === index ? 'text-primary' : ''
			}`}
		>
			{option}
		</li>
	);
}

Option.propTypes = {
	option: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};
