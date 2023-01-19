import React from 'react';

import { CurrencyDollarIcon } from '@heroicons/react/20/solid';

export function Navbar() {
	return (
		<nav className="px-5 py-2 flex justify-start items-center gap-5 bg-gray-50">
			<CurrencyDollarIcon className="h-10 w-10 text-primary" />
			IncomeTaxCalculator
		</nav>
	);
}
