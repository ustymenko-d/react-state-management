import ACTION_TYPES from '../actions/actionTypes';

const defaultState = {
	gallery: [],
};

export const galleryReducer = (state = defaultState, action) => {
	return action.type === ACTION_TYPES.FETCH_GALLERY
		? { ...state, gallery: [...action.payload] }
		: state;
};

export const fetchGalleryAction = (payload) => ({
	type: ACTION_TYPES.FETCH_GALLERY,
	payload,
});
