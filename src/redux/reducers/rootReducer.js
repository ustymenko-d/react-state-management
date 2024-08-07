import { combineSlices } from '@reduxjs/toolkit'
import countSlice from '../slices/countSlice'
import themeSlice from '../slices/themeSlice'
import postsSlice from '../slices/postsSlice'

export const rootReducer = combineSlices({
	count: countSlice,
	theme: themeSlice,
	posts: postsSlice,
})
