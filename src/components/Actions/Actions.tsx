import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/types'
import {
	decrementAction,
	incrementAction,
	resetCountAction,
} from '../../redux/reducers/count.reducer'
import { toggleThemeAction } from '../../redux/reducers/theme.reducer'
import { fetchGallery } from '../../redux/actions/asyncActions/gallery.actions'

import styles from './Actions.module.css'

export const Actions = () => {
	const dispatch = useDispatch<AppDispatch>()

	const incrementCount = () => dispatch(incrementAction())
	const decrementCount = () => dispatch(decrementAction())
	const resetCount = () => dispatch(resetCountAction())
	const toggleTheme = () => dispatch(toggleThemeAction())
	const addGallery = () => dispatch(fetchGallery())

	const handleResetCount = () => {
		setTimeout(() => {
			resetCount()
		}, 2000)
	}

	const handleAddGallery = () => {
		addGallery()
	}

	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={incrementCount}>Increment count</button>
				<button onClick={decrementCount}>Decrement count</button>
				<button onClick={handleResetCount}>Reset count after 2 sec</button>
			</div>

			<button onClick={toggleTheme}>Change theme</button>
			<button onClick={handleAddGallery}>Fetch gallery</button>
		</div>
	)
}
