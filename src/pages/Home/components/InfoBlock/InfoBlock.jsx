import { useContext } from 'react';
import { Context } from '../../../../store/Context';

export const InfoBlock = () => {
	const { count, isDarkTheme } = useContext(Context);

	return (
		<div>
			<h2>Count: {count}</h2>
			<h2>Current theme: {isDarkTheme ? 'dark' : 'light'}</h2>
		</div>
	);
};
