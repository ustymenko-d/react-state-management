import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { countActions } from '../redux/slices/countSlice'
import { themeActions } from '../redux/slices/themeSlice'
import { fetchPosts, fetchPostsById } from '../redux/slices/postsSlice'

const allActions = {
	...countActions,
	...themeActions,
	fetchPosts,
	fetchPostsById,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(allActions, dispatch)
}
