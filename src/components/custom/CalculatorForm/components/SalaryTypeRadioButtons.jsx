import React from 'react';

import { useSalaryTypeValue } from '../hooks';

import { RadioButtonGroup } from '../../../generic';

export function SalaryTypeRadioButtons() {
	const { salaryTypes, selectedSalaryType, handleSalaryTypeChange } =
		useSalaryTypeValue();
	return (
		<>
			<div className="text-secondary-100 text-lg pt-5 pb-2">
				What is the type of your income?
			</div>
			<div className="w-[100%]">
				<RadioButtonGroup
					buttons={salaryTypes}
					selected={selectedSalaryType}
					onChange={handleSalaryTypeChange}
				/>
			</div>
		</>
	);
}
