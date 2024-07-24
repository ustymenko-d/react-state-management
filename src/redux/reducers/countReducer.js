import ACTION_TYPES from '../actions/actionTypes';

const defaultState = {
	count: 0,
};

export const countReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTION_TYPES.INCREMENT:
			return { ...state, count: state.count + 1 };

		case ACTION_TYPES.DECREMENT:
			return { ...state, count: state.count - 1 };

		case ACTION_TYPES.RESET_COUNT:
			return { ...state, count: defaultState.count };

		default:
			return state;
	}
};
