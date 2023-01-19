import React from 'react';

import { SalaryInput, SalaryTypeRadioButtons } from './components';

export function CalculatorForm() {
	return (
		<div className="w-[500px] max-w-[100%] mx-auto p-5 flex flex-col items-center ">
			<SalaryInput />
			<SalaryTypeRadioButtons />
		</div>
	);
}
