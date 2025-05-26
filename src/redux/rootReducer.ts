import { combineReducers } from 'redux'
import { countReducer } from './reducers/count.reducer'
import { themeReducer } from './reducers/theme.reducer'
import { galleryReducer } from './reducers/gallery.reducer'

export const rootReducer = combineReducers({
	count: countReducer,
	theme: themeReducer,
	gallery: galleryReducer,
})
