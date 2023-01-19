import { TimeFrame } from './TimeFrame';
import { SalaryType } from './SalaryType';

export class IncomeCalculator {
	#weeksInMonth = 52 / 12;

	#weeksInYear = 52;

	#taxPercent = 20;

	constructor() {}

	#getWeeklySalary = (salary, timeFrame) => {
		const weeklySalaryCalculator = {
			[TimeFrame.WEEKLY]: (salary) => salary,
			[TimeFrame.FORTHNIGHTLY]: (salary) => salary / 2,
			[TimeFrame.MONTHLY]: (salary) => salary / this.#weeksInMonth,
			[TimeFrame.ANNUAL]: (salary) => salary / this.#weeksInYear,
		};

		return weeklySalaryCalculator[timeFrame](salary);
	};

	#getSalaries = (salary, salaryType) => {
		const calculateByType = {
			[SalaryType.NET]: (salary) => {
				const net = salary;
				const gross = net * ((100/(100-this.#taxPercent)));
				const tax = gross - net;
				return {
					gross: Math.floor(gross),
					tax: -Math.floor(tax),
					net: Math.floor(net),
				};
			},
			[SalaryType.GROSS]: (salary) => {
				const gross = salary;
				const tax = gross * (this.#taxPercent / 100);
				const net = gross - tax;
				return {
					gross: Math.floor(gross),
					tax: -Math.floor(tax),
					net: Math.floor(net),
				};
			},
		};

		return calculateByType[salaryType](salary);
	};

	getResult = (gross, timeFrame, selectedTimeFrame, salaryType) => {
		const salaryCalculator = {
			[TimeFrame.WEEKLY]: (gross) => gross,
			[TimeFrame.FORTHNIGHTLY]: (gross) => gross * 2,
			[TimeFrame.MONTHLY]: (gross) => gross * this.#weeksInMonth,
			[TimeFrame.ANNUAL]: (gross) => gross * this.#weeksInYear,
		};
		const salary = salaryCalculator[selectedTimeFrame](
			this.#getWeeklySalary(gross, timeFrame)
		);
		return this.#getSalaries(salary, salaryType);
	};
}
