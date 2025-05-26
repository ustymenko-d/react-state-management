import ACTION_TYPES from '../actions/actionTypes'
import { IAction } from '../types'

interface IImage {
	userId: number
	id: number
	title: string
}

interface IGalleryState {
	gallery: IImage[]
}

const defaultState: IGalleryState = {
	gallery: [],
}

export const galleryReducer = (
	state = defaultState,
	action: IAction<IImage[]>
): IGalleryState => {
	if (action.type === ACTION_TYPES.FETCH_GALLERY && action.payload) {
		return { ...state, gallery: [...action.payload] }
	}

	return state
}

export const fetchGalleryAction = (payload: IImage[]) => ({
	type: ACTION_TYPES.FETCH_GALLERY,
	payload,
})
