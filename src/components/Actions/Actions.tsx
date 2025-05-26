import { useAppStore } from '../../store/useAppStore'
import styles from './Actions.module.css'

export const Actions = () => {
	const inc = useAppStore((state) => state.inc)
	const dec = useAppStore((state) => state.dec)
	const reset = useAppStore((state) => state.reset)
	const isDarkTheme = useAppStore((state) => state.isDarkTheme)
	const setDarkTheme = useAppStore((state) => state.setDarkTheme)

	const handleReset = () => {
		setTimeout(() => {
			reset()
		}, 2000)
	}

	const handleTheneChange = () => {
		setDarkTheme(!isDarkTheme)
	}

	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={inc}>Increment count</button>
				<button onClick={dec}>Decrement count</button>
				<button onClick={handleReset}>Reset count after 2 sec</button>
			</div>

			<button onClick={handleTheneChange}>Change theme</button>
		</div>
	)
}
