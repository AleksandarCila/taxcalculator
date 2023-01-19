import React from 'react';
import PropTypes from 'prop-types';

const GridItemEntry = ({ name, value }) => {
	const isNegativeValue = value < 0;
	return (
		<>
			<div className="flex space-between w-[100%] align-end">
				<div className="w-[30%] text-end  text-secondary-300 font-light items-end flex justify-start">
					<span>{name}</span>
				</div>
				<div
					className={`w-[70%] text-end text-lg ${
						isNegativeValue ? 'text-warning' : 'text-secondary-100'
					} items-end flex justify-end`}
				>
					<span>$ {value.toLocaleString("en-US")}</span>
				</div>
			</div>
			<hr className="h-px bg-secondary-300 border-0 mt-2 mb-5" />
		</>
	);
};

export function GridItem({ title, data }) {
	const salaries = Object.entries(data);
	
	return (
		<div className="flex flex-col p-5">
			<div className="w-[100%] text-end text-lg my-5 font-light text-primary">
				{title}
			</div>
			<hr className="h-px bg-secondary-300 border-0 mb-5" />
			{salaries.map((salary) => (
				<GridItemEntry
					key={`${salary[0]}${salary[1]}`}
					name={salary[0]}
					value={salary[1]}
				/>
			))}
		</div>
	);
}

GridItem.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
};
