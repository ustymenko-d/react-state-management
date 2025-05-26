import { useAppContext } from '../../hooks/useAppContext';

export const InfoBlock = () => {
	const { count, isDarkTheme } = useAppContext();

	return (
		<div>
			<h2>Count: {count}</h2>
			<h2>Current theme: {isDarkTheme ? 'dark' : 'light'}</h2>
		</div>
	)
}
