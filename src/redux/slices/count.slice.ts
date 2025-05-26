import { createSlice } from '@reduxjs/toolkit'

interface ICountState {
	count: number
}

const initialState: ICountState = {
	count: 0,
}

const countSlice = createSlice({
	name: 'Count',
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		},
		resetCount: () => initialState,
	},
})

export default countSlice.reducer
export const countActions = countSlice.actions
