import { useState, useContext } from 'react';

import { TaxContext } from '../../../../Context';

export const useSalaryInputField = () => {
	const { gross, setGross } = useContext(TaxContext);
	const [inputValue, setInputValue] = useState(gross);

	const handleGrossChange = (newGross) => {
		if (newGross === '') setGross(0);
		else setGross(newGross);
	};

	const handleInputValueChange = (newValue) => {
		setInputValue(newValue);
		handleGrossChange(newValue);
	};

	return {
		inputValue,
		handleInputValueChange,
	};
};
