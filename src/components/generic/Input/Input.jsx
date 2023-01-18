import React from 'react';
import PropTypes from 'prop-types';

export function Input({ value, onChange }) {
	const handleOnChange = (e) => {
		onChange(e.target.value);
	};

	const handleKeyDown = (event) => {
		if (
			(event.keyCode < 48 || event.keyCode > 57) &&
			event.key !== 'Backspace'
		) {
			event.preventDefault();
		}
	};
	return (
		<div className="flex relative items-center">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary">
				$
			</div>
			<input
				type="number"
				min="0"
				step="1"
				onKeyDown={handleKeyDown}
				value={value}
				onChange={handleOnChange}
				className="outline-none pl-8 placeholder-secondary-200 bg-gray-50 border-none border-primary text-secondary-300 focus:ring-primary focus:border-primary block w-full p-2.5"
				placeholder="Gross income"
			/>
		</div>
	);
}

Input.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChange: PropTypes.func.isRequired,
};
