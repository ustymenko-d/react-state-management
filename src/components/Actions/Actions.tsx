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

	const actions = {
		increment: () => dispatch(incrementAction()),
		decrement: () => dispatch(decrementAction()),
		reset: () => dispatch(resetCountAction()),
		toggleTheme: () => dispatch(toggleThemeAction()),
		fetchGallery: () => dispatch(fetchGallery()),
	}

	const handleResetCount = () => {
		setTimeout(actions.reset, 2000)
	}

	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={actions.increment}>Increment count</button>
				<button onClick={actions.decrement}>Decrement count</button>
				<button onClick={handleResetCount}>Reset count after 2 sec</button>
			</div>

			<button onClick={actions.toggleTheme}>Change theme</button>
			<button onClick={actions.fetchGallery}>Fetch gallery</button>
		</div>
	)
}
