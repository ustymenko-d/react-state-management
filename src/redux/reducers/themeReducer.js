import ACTION_TYPES from '../actions/actionTypes';

const defaultState = {
	isDarkTheme: false,
};

export const themeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTION_TYPES.TOGGLE_THEME:
			return { ...state, isDarkTheme: !state.isDarkTheme };

		case ACTION_TYPES.SWITCH_TO_DARK_THEME:
			return { ...state, isDarkTheme: action.payload };

		default:
			return state;
	}
};

export const toggleThemeAction = (payload) => ({
	type: ACTION_TYPES.TOGGLE_THEME,
	payload,
});

export const switchToDarkThemeAction = (payload) => ({
	type: ACTION_TYPES.SWITCH_TO_DARK_THEME,
	payload,
});
