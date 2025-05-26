import { Dispatch } from 'redux'
import { fetchGalleryAction } from '../../reducers/gallery.reducer'

export const fetchGallery = () => async (dispatch: Dispatch) => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/albums/1/photos'
	)
	const data = await res.json()
	dispatch(fetchGalleryAction(data))
}
