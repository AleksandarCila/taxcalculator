import { useState, useMemo } from 'react';

export const useSelectContext = (options) => {
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(0);

	const toggleOptions = (e) => {
		e.stopPropagation();
		setIsOptionsOpen((prev) => !prev);
	};

	const setSelectedThenCloseDropdown = (index) => {
		setSelectedOption(index);
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

    return {contextValue, setIsOptionsOpen};
};
