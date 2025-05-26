import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { countActions } from '../redux/slices/count.slice'
import { themeActions } from '../redux/slices/theme.slice'
import {
	fetchPosts,
	fetchPostsById,
	postsActions,
} from '../redux/slices/posts.slice'

const allActions = {
	...countActions,
	...themeActions,
	...postsActions,
	fetchPosts,
	fetchPostsById,
}

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators(allActions, dispatch)
}
