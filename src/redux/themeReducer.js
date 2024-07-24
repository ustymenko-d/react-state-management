const defaultState = {
	isDarkTheme: false,
};

export const themeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			return { ...state, isDarkTheme: !state.isDarkTheme };

		case 'SWITCH_TO_DARK_THEME':
			return { ...state, isDarkTheme: action.payload };

		default:
			return state;
	}
};
