import React, { useState } from 'react';

import { CalculatorForm } from '../CalculatorForm';
import { SalaryGrid } from '../SalaryGrid';

export function MainBoard() {
	const [isInitial, setIsInitial] = useState(true);

	return (
		<div className="flex flex-col justify-center items-center">
			<CalculatorForm />
			<hr className="h-px bg-secondary-300 border-0 mt-2 mb-5 w-[100%]" />
			{isInitial ? (
				<button
					onClick={() => {
						setIsInitial(false);
					}}
					className="text-white bg-primary border-primary border-1 hover:bg-primary-200 font-medium text-sm px-4 py-2.5 text-center w-[200px] max-w-[100%]"
				>
					Calculate
				</button>
			) : (
				<SalaryGrid />
			)}
		</div>
	);
}
