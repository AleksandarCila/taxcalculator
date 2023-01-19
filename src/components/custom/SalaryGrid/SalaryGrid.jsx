import React, { useContext } from 'react';

import { TaxContext } from '../../../Context';
import { IncomeCalculator, TimeFrame } from '../../../Models';

import { GridItem } from './components';

export function SalaryGrid() {
	const { gross, timeFrame, salaryType } = useContext(TaxContext);

	const taxCalculator = new IncomeCalculator();

	const timeFrameEntries = Object.entries(TimeFrame);
	return (
		<div className="w-[100%] flex justify-center animate-scale-render">
			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
				{timeFrameEntries.map((timeFrameEntry) => (
					<GridItem
						key={timeFrameEntry[1]}
						title={timeFrameEntry[1]}
						data={taxCalculator.getResult(
							gross,
							timeFrame,
							timeFrameEntry[1],
							salaryType
						)}
					/>
				))}
			</div>
		</div>
	);
}
