import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGallery } from '../../redux/actions/asyncActions/gallery';
import {
	switchToDarkThemeAction,
	toggleThemeAction,
} from '../../redux/reducers/themeReducer';
import {
	decrementAction,
	incrementAction,
	resetCountAction,
} from '../../redux/reducers/countReducer';

import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Actions } from './components/Actions/Actions';
import { Gallery } from './components/Gallery/Gallery';

import './Home.css';

const Home = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count.count);
	const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
	const gallery = useSelector((state) => state.gallery.gallery);

	const incrementCount = () => {
		dispatch(incrementAction());
	};

	const decrementCount = () => {
		dispatch(decrementAction());
	};

	const resetCount = () => {
		dispatch(resetCountAction());
	};

	const toggleTheme = () => {
		dispatch(toggleThemeAction());
	};

	const switchToDarkTheme = () => {
		dispatch(switchToDarkThemeAction(true));
	};

	const addGallery = () => {
		dispatch(fetchGallery());
	};

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');

		if (mq.matches && !isDarkTheme) {
			switchToDarkTheme();
		}
	}, []);

	return (
		<div className={isDarkTheme ? 'home home_dark' : 'home home_light'}>
			<h1>React state management</h1>

			<InfoBlock
				count={count}
				isDarkTheme={isDarkTheme}
			/>

			<Actions
				incrementCount={incrementCount}
				decrementCount={decrementCount}
				resetCount={resetCount}
				toggleTheme={toggleTheme}
				addGallery={addGallery}
			/>

			{gallery.length > 0 && <Gallery gallery={gallery} />}
		</div>
	);
};

export default Home;
