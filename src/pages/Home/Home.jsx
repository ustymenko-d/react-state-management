import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfoBlock } from "./components/InfoBlock/InfoBlock";
import { Actions } from "./components/Actions/Actions";
import "./Home.css";

const Home = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count.count);
	const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

	const incrementCount = () => {
		dispatch({ type: "INCREMENT" });
	};

	const decrementCount = () => {
		dispatch({ type: "DECREMENT" });
	};
	
	const resetCount = () => {
		dispatch({ type: "RESET_COUNT" });
	}

	const toggleTheme = () => {
		dispatch({ type: "TOGGLE_THEME" });
	};

	const switchToDarkTheme = () => {
		dispatch({ type: "SWITCH_TO_DARK_THEME", payload: true });
	};

	useEffect(() => {
		const mq = window.matchMedia("(prefers-color-scheme: dark)");

		if (mq.matches && !isDarkTheme) {
			switchToDarkTheme();
		}
	}, []);

	return (
		<div className={isDarkTheme ? "home home_dark" : "home home_light"}>
			<h1>React state management</h1>

			<InfoBlock count={count} isDarkTheme={isDarkTheme} />

			<Actions
				incrementCount={incrementCount}
				decrementCount={decrementCount}
				resetCount={resetCount}
				toggleTheme={toggleTheme}
			/>
		</div>
	);
};

export default Home;
