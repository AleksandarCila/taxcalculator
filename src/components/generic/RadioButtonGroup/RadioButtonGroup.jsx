import React from 'react';
import PropTypes from 'prop-types';

import { RadioButtonGroupContext } from './context';
import { RadioButton } from './components';

export function RadioButtonGroup({ buttons, selected, onChange }) {
	const contextValue = { selected, onChange };
	return (
		<RadioButtonGroupContext.Provider value={contextValue}>
			<div className="flex justify-center items-center w-[100%]">
				{buttons.map((button, index) => (
					<RadioButton key={button} title={button} index={index} />
				))}
			</div>
		</RadioButtonGroupContext.Provider>
	);
}

RadioButtonGroup.propTypes = {
	buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
	selected: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};
