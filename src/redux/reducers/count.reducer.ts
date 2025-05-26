import ACTION_TYPES from '../actions/actionTypes'
import { IAction } from '../types'

interface ICountState {
	count: number
}

const defaultState: ICountState = {
	count: 0,
}

export const countReducer = (
	state = defaultState,
	action: IAction<boolean>
): ICountState => {
	switch (action.type) {
		case ACTION_TYPES.INCREMENT:
			return { ...state, count: state.count + 1 }

		case ACTION_TYPES.DECREMENT:
			return { ...state, count: state.count - 1 }

		case ACTION_TYPES.RESET_COUNT:
			return { ...state, count: defaultState.count }

		default:
			return state
	}
}

export const incrementAction = () => ({ type: ACTION_TYPES.INCREMENT })
export const decrementAction = () => ({ type: ACTION_TYPES.DECREMENT })
export const resetCountAction = () => ({ type: ACTION_TYPES.RESET_COUNT })
