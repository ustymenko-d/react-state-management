const ACTION_TYPES = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	RESET_COUNT: 'RESET_COUNT',

	TOGGLE_THEME: 'TOGGLE_THEME',
	SWITCH_TO_DARK_THEME: 'SWITCH_TO_DARK_THEME',

	FETCH_GALLERY: 'FETCH_GALLERY',
} as const

export default ACTION_TYPES
export type ActionTypeKeys = keyof typeof ACTION_TYPES;
export type ActionTypeValues = (typeof ACTION_TYPES)[ActionTypeKeys];