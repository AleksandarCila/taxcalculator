import React, { useContext } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { SelectContext } from '../Select';

export function SelectButton() {
	const { options, toggleOptions, selectedOption } = useContext(SelectContext);

	return (
		<button
			type="button"
			className="text-white bg-primary border-primary border-1 hover:bg-primary-200 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center w-[150px] flex justify-between"
			onClick={toggleOptions}
		>
			{options[selectedOption]}
			<ChevronDownIcon className="h-6 w-6 text-sm text-white" />
		</button>
	);
}