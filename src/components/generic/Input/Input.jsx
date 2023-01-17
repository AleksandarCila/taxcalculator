import React from 'react';

export function Input() {
	return (
		<div className="flex w-[500px]">
            <span className='text-sm'>First Name</span>
			<input
				type="text"
				id="first_name"
				className="outline-primary placeholder-secondary-200 bg-gray-50 border border-primary text-secondary-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-primary dark:border-primary dark:placeholder-secondary-200 dark:text-secondary-300 dark:focus:ring-primary dark:focus:border-primary"
				placeholder="John"
			/>
		</div>
	);
}
