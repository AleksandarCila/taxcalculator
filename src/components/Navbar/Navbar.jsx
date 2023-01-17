import React from 'react';
import { Input, Select } from '../generic';

const options = ['Weekly', 'Fortnightly', 'Monthly', 'Annual'];

export function Navbar() {
	return (
		<div className="container mx-auto p-5">
			<div className='flex items-center justify-center mx-auto width-[1100px] max-w-[100%]'>
				<Input />
				<Select options={options} />
			</div>
		</div>
	);
}
