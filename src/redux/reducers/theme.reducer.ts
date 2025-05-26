import ACTION_TYPES from '../actions/actionTypes'
import { IAction } from '../types'

interface IThemeState {
	isDarkTheme: boolean
}

const defaultState: IThemeState = {
	isDarkTheme: false,
}

export const themeReducer = (
	state = defaultState,
	action: IAction<boolean>
): IThemeState => {
	switch (action.type) {
		case ACTION_TYPES.TOGGLE_THEME:
			return { ...state, isDarkTheme: !state.isDarkTheme }

		case ACTION_TYPES.SWITCH_TO_DARK_THEME:
			return { ...state, isDarkTheme: action.payload ?? false }

		default:
			return state
	}
}

export const toggleThemeAction = () => ({ type: ACTION_TYPES.TOGGLE_THEME })
export const switchToDarkThemeAction = (payload: boolean) => ({
	type: ACTION_TYPES.SWITCH_TO_DARK_THEME,
	payload,
})
