import { combineSlices } from '@reduxjs/toolkit'
import countSlice from '../slices/countSlice'
import themeSlice from '../slices/themeSlice'

export const rootReducer = combineSlices({
	count: countSlice,
	theme: themeSlice,
})
