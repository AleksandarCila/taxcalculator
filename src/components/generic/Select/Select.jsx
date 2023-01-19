import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { SelectButton, Options } from './components';

import { useSelectContext } from './hooks';

import { SelectContext } from './context';

export function Select({ options, selected, onChange }) {
	const { contextValue, setIsOptionsOpen } = useSelectContext(
		options,
		selected,
		onChange
	);

	useEffect(() => {
		const clickHandler = () => {
			setIsOptionsOpen(false);
		};

		window.addEventListener('click', clickHandler);

		return () => window.removeEventListener('click', clickHandler);
	}, []);

	return (
		<SelectContext.Provider value={contextValue}>
			<div className="w-[100%]">
				<SelectButton />
				<Options />
			</div>
		</SelectContext.Provider>
	);
}

Select.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	selected: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};
