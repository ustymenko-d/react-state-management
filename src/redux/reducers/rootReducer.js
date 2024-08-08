import { combineSlices } from '@reduxjs/toolkit'
import countSlice from '../slices/countSlice'
import themeSlice from '../slices/themeSlice'
import postsSlice from '../slices/postsSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const postsPersistConfig = {
	key: 'posts',
	storage,
	blacklist: ['singlePost'],
}

export const rootReducer = combineSlices({
	count: countSlice,
	theme: themeSlice,
	posts: persistReducer(postsPersistConfig, postsSlice),
})
