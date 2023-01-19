import React, { useContext, useState } from 'react';

import { TaxContext } from '../../../Context';

import { Input, RadioButtonGroup, Select } from '../../generic';

import { SalaryType, TimeFrame } from '../../../Models';

export function CalculatorForm() {
	const {
		gross,
		setGross,
		timeFrame,
		setTimeFrame,
		salaryType,
		setSalaryType,
	} = useContext(TaxContext);
	const [inputValue, setInputValue] = useState(gross);

	const handleGrossChange = (newGross) => {
		if (newGross === '') setGross(0);
		else setGross(newGross);
	};

	const handleInputValueChange = (newValue) => {
		setInputValue(newValue);
		handleGrossChange(newValue);
	};

	const options = Object.values(TimeFrame);
	const selectedTimeFrame = options.indexOf(timeFrame);

	const handleSelectChange = (newOptionIndex) => {
		setTimeFrame(TimeFrame[Object.keys(TimeFrame)[newOptionIndex]]);
	};

	const salaryTypes = Object.values(SalaryType);
	const selectedSalaryType = salaryTypes.indexOf(salaryType);

	const handleSalaryTypeChange = (newSalaryTypeIndex) => {
		setSalaryType(SalaryType[Object.keys(SalaryType)[newSalaryTypeIndex]]);
	};

	return (
		<div className="w-[500px] max-w-[100%] mx-auto p-5 flex flex-col items-center ">
			<div className="text-secondary-100 text-lg pt-5 pb-2 ">
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

			<div className="text-secondary-100 text-lg pt-5 pb-2">
				What is the type of your income?
			</div>
			<div className='w-[100%]'>
				<RadioButtonGroup
					buttons={salaryTypes}
					selected={selectedSalaryType}
					onChange={handleSalaryTypeChange}
				/>
			</div>
		</div>
	);
}
