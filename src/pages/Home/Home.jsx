import { useEffect } from 'react';
import { useStore } from '../../store';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Actions } from './components/Actions/Actions';
import './Home.css';

const Home = () => {
	const isDarkTheme = useStore((state) => state.isDarkTheme);
	const setDarkTheme = useStore((state) => state.setDarkTheme);

	useEffect(() => {
		const sessionState = sessionStorage.getItem('appState');
		const sessionDarkTheme = JSON.parse(sessionState).state.isDarkTheme;

		sessionDarkTheme ? setDarkTheme(true) : setDarkTheme(false);
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
