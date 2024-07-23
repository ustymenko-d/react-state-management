const defaultState = {
	count: 0,
	isDarkTheme: false,
};

export const rootReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, count: state.count + 1 };

		case "DECREMENT":
			return { ...state, count: state.count - 1 };

		case "RESET_COUNT":
			return { ...state, count: defaultState.count };

		case "TOGGLE_THEME":
			return { ...state, isDarkTheme: !state.isDarkTheme };

		case "SWITCH_TO_DARK_THEME":
			return { ...state, isDarkTheme: action.payload };

		default:
			return state;
	}
};
