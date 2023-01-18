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

	gross = 0;

	timeFrame = TimeFrame.MONTHLY;

	constructor(gross, timeFrame) {
		this.gross = gross;
		this.timeFrame = timeFrame;
	}

	setGross = (gross) => {
		this.gross = gross;
	};

	setTimeFrame = (timeFrame) => {
		this.timeFrame = timeFrame;
	};

	#getWeeklyGross = () => {
		const weeklyGrossCalculator = {
			[TimeFrame.WEEKLY]: (gross) => gross,
			[TimeFrame.FORTHNIGHTLY]: (gross) => gross / 2,
			[TimeFrame.MONTHLY]: (gross) => gross / this.#weeksInMonth,
			[TimeFrame.ANNUAL]: (gross) => gross / this.#weeksInYear,
		};

		return weeklyGrossCalculator[this.timeFrame](this.gross);
	};

	getResult = (timeFrame) => {
		const grossCalculator = {
			[TimeFrame.WEEKLY]: (gross) => gross,
			[TimeFrame.FORTHNIGHTLY]: (gross) => gross * 2,
			[TimeFrame.MONTHLY]: (gross) => gross * this.#weeksInMonth,
			[TimeFrame.ANNUAL]: (gross) => gross * this.#weeksInYear,
		};
		const gross = grossCalculator[timeFrame](this.#getWeeklyGross());
		const tax = gross * (this.#taxPercent / 100);
		const net = gross - tax;
		return {
			gross,
			tax,
			net,
		};
	};
}
