import React from 'react';

import { TaxContext, useTaxContext } from './Context';

import { Navbar, MainBoard } from './components';

import './app.css';

function App() {
	const contextValue = useTaxContext();

	return (
		<TaxContext.Provider value={contextValue}>
			<Navbar />
			<MainBoard />
		</TaxContext.Provider>
	);
}

export default App;
