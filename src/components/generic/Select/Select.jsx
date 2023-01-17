import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { SelectButton, Options } from './components';

import { useSelectContext } from './hooks';

export const SelectContext = React.createContext({});

export function Select({ options }) {
	const { contextValue, setIsOptionsOpen } = useSelectContext(options);

	useEffect(() => {
		const clickHandler = () => {
			setIsOptionsOpen(false);
		};

		window.addEventListener('click', clickHandler);

		return () => window.removeEventListener('click', clickHandler);
	}, []);

	return (
		<SelectContext.Provider value={contextValue}>
			<div>
				<SelectButton />
				<Options />
			</div>
		</SelectContext.Provider>
	);
}

Select.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
