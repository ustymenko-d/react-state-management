import { useAppContext } from '../../hooks/useAppContext'
import styles from './Actions.module.css'

export const Actions = () => {
	const { setCount, setIsDarkTheme } = useAppContext()

	const handleChange = (delta: number) => {
		setCount((prev) => prev + delta)
	}

	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={() => handleChange(1)}>Increment count</button>
				<button onClick={() => handleChange(-1)}>Decrement count</button>
				<button
					onClick={() => {
						setTimeout(() => {
							setCount(0)
						}, 2000)
					}}>
					Reset count after 2 sec
				</button>
			</div>

			<button onClick={() => setIsDarkTheme((prev) => !prev)}>
				Change theme
			</button>
		</div>
	)
}
