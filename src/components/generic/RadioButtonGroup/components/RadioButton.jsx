import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { RadioButtonGroupContext } from '../context';

export function RadioButton({ title, index }) {
	const { selected, onChange } = useContext(RadioButtonGroupContext);

	const isSelected = selected === index;

    const handleClick = (e) => {
        onChange(index);
    }
	return (
		<button
            onClick={handleClick}
			className={`w-[50%]  ${
				isSelected ? 'bg-primary text-white' : 'bg-gray-50 text-primary'
			} border-primary border-1 hover:bg-primary-200 font-medium text-sm px-4 py-2.5 text-center hover:text-white`}
		>
			{title}
		</button>
	);
}

RadioButton.propTypes = {
	title: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};
