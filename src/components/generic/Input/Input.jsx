import React from 'react';

export function Input() {
	return (
		<div className="flex relative items-center">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary">
				$
			</div>
			<input
				type="number"
				id="first_name"
				className="outline-none pl-8 placeholder-secondary-200 bg-gray-50 border-none border-primary text-secondary-300 focus:ring-primary focus:border-primary block w-full p-2.5"
				placeholder="Gross income"
			/>
		</div>
	);
}
