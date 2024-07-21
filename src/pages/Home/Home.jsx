import { useEffect, useState } from 'react';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Actions } from './components/Actions/Actions';
import './Home.css';

const Home = () => {
	const [count, setCount] = useState(0);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');

		if (mq.matches) {
			setIsDarkTheme(true);
		}

		mq.addEventListener('change', (evt) => setIsDarkTheme(evt.matches));
	}, []);

	return (
		<div className={isDarkTheme ? 'home home_dark' : 'home home_light'}>
			<h1>React state management</h1>

			<InfoBlock
				count={count}
				isDarkTheme={isDarkTheme}
			/>

			<Actions
				setCount={setCount}
				setIsDarkTheme={setIsDarkTheme}
			/>
		</div>
	);
};

export default Home;
