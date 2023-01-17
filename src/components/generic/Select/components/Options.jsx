import React,{useContext} from 'react';

import { Option } from './Option';

import { SelectContext } from '../Select';

export function Options() {
    const {options, isOptionsOpen} = useContext(SelectContext);
	return (
		<ul
			className={`${
				isOptionsOpen ? '' : 'hidden'
			} absolute z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 my-1 w-[150px]`}
		>
			{options.map((option, index) => (
				<Option option={option} index={index}/>
			))}
		</ul>
	);
}
