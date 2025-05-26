import { createSlice } from '@reduxjs/toolkit'

interface IThemeState {
	isDarkTheme: boolean
}

const initialState: IThemeState = {
	isDarkTheme: false,
}

const themeSlice = createSlice({
	name: 'Theme',
	initialState,
	reducers: {
		toggleTheme(state) {
			state.isDarkTheme = !state.isDarkTheme
		},
		switchToDarkTheme(state) {
			state.isDarkTheme = true
		},
	},
})

export default themeSlice.reducer
export const themeActions = themeSlice.actions
