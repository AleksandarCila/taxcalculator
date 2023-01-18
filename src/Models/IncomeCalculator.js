export const TimeFrame = {
	WEEKLY: 'Weekly',
	FORTHNIGHTLY: 'Fortnightly',
	MONTHLY: 'Monthly',
	ANNUAL: 'Annual',
};

export class IncomeCalculator {
	#weeksInMonth = 52 / 12;

	#weeksInYear = 52;

	#taxPercent = 20;

	// gross = 0;

	// timeFrame = TimeFrame.MONTHLY;

	constructor() {}

	// setGross = (gross) => {
	// 	this.gross = gross;
	// };

	// setTimeFrame = (timeFrame) => {
	// 	this.timeFrame = timeFrame;
	// };

	#getWeeklyGross = (gross, timeFrame) => {
		const weeklyGrossCalculator = {
			[TimeFrame.WEEKLY]: (gross) => gross,
			[TimeFrame.FORTHNIGHTLY]: (gross) => gross / 2,
			[TimeFrame.MONTHLY]: (gross) => gross / this.#weeksInMonth,
			[TimeFrame.ANNUAL]: (gross) => gross / this.#weeksInYear,
		};

		return weeklyGrossCalculator[timeFrame](gross);
	};

	getResult = (gross, timeFrame, selectedTimeFrame) => {
		const grossCalculator = {
			[TimeFrame.WEEKLY]: (gross) => gross,
			[TimeFrame.FORTHNIGHTLY]: (gross) => gross * 2,
			[TimeFrame.MONTHLY]: (gross) => gross * this.#weeksInMonth,
			[TimeFrame.ANNUAL]: (gross) => gross * this.#weeksInYear,
		};
		const grossValue = grossCalculator[selectedTimeFrame](
			this.#getWeeklyGross(gross, timeFrame)
		);
		const tax = grossValue * (this.#taxPercent / 100);
		const net = grossValue - tax;
		return {
			gross: Math.floor(grossValue),
			tax: -Math.floor(tax),
			net: Math.floor(net),
		};
	};
}
