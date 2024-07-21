import { useStore } from '../../../../store';

export const InfoBlock = () => {
	const count = useStore((state) => state.count);
	const isDarkTheme = useStore((state) => state.isDarkTheme);

	return (
		<div>
			<h2>Count: {count}</h2>
			<h2>Current theme: {isDarkTheme ? 'dark' : 'light'}</h2>
		</div>
	);
};
