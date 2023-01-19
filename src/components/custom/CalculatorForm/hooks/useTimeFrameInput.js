import { useContext } from 'react';

import { TaxContext } from '../../../../Context';

import { TimeFrame } from '../../../../Models';

export const useTimeFrameInput = () => {
	const { timeFrame, setTimeFrame } = useContext(TaxContext);
	const options = Object.values(TimeFrame);
	const selectedTimeFrame = options.indexOf(timeFrame);

	const handleSelectChange = (newOptionIndex) => {
		setTimeFrame(TimeFrame[Object.keys(TimeFrame)[newOptionIndex]]);
	};

	return {
		options,
		selectedTimeFrame,
		handleSelectChange,
	};
};
