import { useEffect } from 'react';
import { useStore } from '../../store';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Actions } from './components/Actions/Actions';
import './Home.css';

const Home = () => {
	const isDarkTheme = useStore((state) => state.isDarkTheme);
	const changeTheme = useStore((state) => state.changeTheme);

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');

		if (mq.matches && !isDarkTheme) {
			changeTheme(true);
		}
	}, []);

	return (
		<div className={isDarkTheme ? 'home home_dark' : 'home home_light'}>
			<h1>React state management</h1>

			<InfoBlock />

			<Actions />
		</div>
	);
};

export default Home;
