import React, { useState,useMemo } from 'react';

import { TaxContext } from './Context';

import { Navbar,SalaryGrid } from './components';

import './app.css';
import { TimeFrame } from './Models/IncomeCalculator';

function App() {
	const [gross, setGross] = useState(15000);
	const [timeFrame, setTimeFrame] = useState(TimeFrame.MONTHLY);

	const contextValue = useMemo(
		() => ({ gross, timeFrame, setGross, setTimeFrame }),
		[gross, timeFrame, setGross, setTimeFrame]
	);

	return (
		<TaxContext.Provider value={contextValue}>
			<Navbar />
			{/* <hr className="h-px bg-secondary-300 border-0" /> */}
			<SalaryGrid />
		</TaxContext.Provider>
	);
}

export default App;
