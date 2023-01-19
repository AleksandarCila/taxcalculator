import { useState, useMemo } from 'react';

import { SalaryType, TimeFrame } from '../../Models';

export const useTaxContext = () => {
	const [gross, setGross] = useState(15000);
	const [timeFrame, setTimeFrame] = useState(TimeFrame.MONTHLY);
	const [salaryType, setSalaryType] = useState(SalaryType.GROSS);

	const contextValue = useMemo(
		() => ({
			gross,
			timeFrame,
			salaryType,
			setGross,
			setTimeFrame,
			setSalaryType,
		}),
		[gross, timeFrame, salaryType, setGross, setTimeFrame, setSalaryType]
	);

	return contextValue;
};
