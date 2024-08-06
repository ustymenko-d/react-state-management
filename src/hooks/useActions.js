import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { countActions } from '../redux/slices/countSlice'
import { themeActions } from '../redux/slices/themeSlice'

const allActions = {
	...countActions,
	...themeActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(allActions, dispatch)
}
