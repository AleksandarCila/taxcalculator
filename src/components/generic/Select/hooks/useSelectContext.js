import { useState, useMemo } from 'react';

export const useSelectContext = (options, selectedOption, onChange) => {
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);

	const toggleOptions = (e) => {
		e.stopPropagation();
		setIsOptionsOpen((prev) => !prev);
	};

	const setSelectedThenCloseDropdown = (index) => {
		onChange(index);
		setIsOptionsOpen(false);
	};

	const contextValue = useMemo(
		() => ({
			isOptionsOpen,
			toggleOptions,
			selectedOption,
			setSelectedThenCloseDropdown,
			options,
		}),
		[
			isOptionsOpen,
			toggleOptions,
			selectedOption,
			setSelectedThenCloseDropdown,
			options,
		]
	);

	return { contextValue, setIsOptionsOpen };
};
