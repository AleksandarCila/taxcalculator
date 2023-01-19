import React from 'react';

import { Input, Select } from '../../../generic';

import { useSalaryInputField, useTimeFrameInput } from '../hooks';

export function SalaryInput() {
	const { inputValue, handleInputValueChange } = useSalaryInputField();

	const { options, selectedTimeFrame, handleSelectChange } =
		useTimeFrameInput();

	return (
		<>
			<div className="text-secondary-100 text-lg pb-2 ">
				What is your total income?
			</div>
			<div className="flex items-center justify-center mx-auto w-[100%]">
				<Input value={inputValue} onChange={handleInputValueChange} />
				<Select
					options={options}
					selected={selectedTimeFrame}
					onChange={handleSelectChange}
				/>
			</div>
		</>
	);
}
