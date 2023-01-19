import { useContext } from 'react';

import { TaxContext } from '../../../../Context';

import { SalaryType } from '../../../../Models';

export const useSalaryTypeValue = () => {
	const { salaryType, setSalaryType } = useContext(TaxContext);

	const salaryTypes = Object.values(SalaryType);
	const selectedSalaryType = salaryTypes.indexOf(salaryType);

	const handleSalaryTypeChange = (newSalaryTypeIndex) => {
		setSalaryType(SalaryType[Object.keys(SalaryType)[newSalaryTypeIndex]]);
	};

	return {
		salaryTypes,
		selectedSalaryType,
		handleSalaryTypeChange,
	};
};
