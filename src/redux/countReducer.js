const defaultState = {
	count: 0,
};

export const countReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, count: state.count + 1 };

		case 'DECREMENT':
			return { ...state, count: state.count - 1 };

		case 'RESET_COUNT':
			return { ...state, count: defaultState.count };

		default:
			return state;
	}
};
