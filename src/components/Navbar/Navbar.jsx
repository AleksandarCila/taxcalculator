import React, { useContext, useState } from 'react';

import { TaxContext } from '../../Context';

import { Input, Select } from '../generic';

import { TimeFrame } from '../../Models/IncomeCalculator';

// const options = ['Weekly', 'Fortnightly', 'Monthly', 'Annual'];

export function Navbar() {
	const { gross, setGross, timeFrame, setTimeFrame } = useContext(TaxContext);
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
		setTimeFrame(TimeFrame[Object.keys(TimeFrame)[newOptionIndex]])
	}
	
	return (
		<div className="container mx-auto p-5">
			<div className="flex items-center justify-center mx-auto width-[1100px] max-w-[100%]">
				<Input value={inputValue} onChange={handleInputValueChange} />
				<Select options={options} selected={selectedTimeFrame} onChange={handleSelectChange}/>
			</div>
		</div>
	);
}
