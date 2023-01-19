import React, { useState, useMemo } from 'react';

import { TaxContext } from './Context';

import { CalculatorForm, SalaryGrid, Navbar } from './components';

import './app.css';
import { SalaryType, TimeFrame } from './Models';

function App() {
	const [isInitial, setIsInitial] = useState(true);

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

	return (
		<TaxContext.Provider value={contextValue}>
			<Navbar />
			<div className="flex flex-col justify-center items-center">
				<CalculatorForm />
				<hr className="h-px bg-secondary-300 border-0 mt-2 mb-5 w-[100%]" />
				{isInitial ? (
					<button
						onClick={() => {
							setIsInitial(false);
						}}
						className="text-white bg-primary border-primary border-1 hover:bg-primary-200 font-medium text-sm px-4 py-2.5 text-center w-[200px] max-w-[100%]"
					>
						Calculate
					</button>
				) : (
					<SalaryGrid />
				)}
			</div>
		</TaxContext.Provider>
	);
}

export default App;
