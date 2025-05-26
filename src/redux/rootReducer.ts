import { combineSlices } from '@reduxjs/toolkit'
import countSlice from './slices/count.slice'
import themeSlice from './slices/theme.slice'
import postsSlice from './slices/posts.slice'
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
