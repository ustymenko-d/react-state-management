import PropTypes from 'prop-types';
import styles from './Actions.module.css'

export const Actions = ({ setCount, setIsDarkTheme }) => {
	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={() => setCount((count) => count + 1)}>
					Increment count
				</button>
				<button onClick={() => setCount((count) => count - 1)}>
					Decrement count
				</button>
				<button
					onClick={() => {
						setTimeout(() => {
							setCount(0);
						}, 2000);
					}}
				>
					Recent count after 2 sec
				</button>
			</div>

			<button
				onClick={() =>
					setIsDarkTheme((oldVal) => !oldVal)
				}
			>
				Change theme
			</button>
		</div>
	);
};

Actions.propTypes = {
	setCount: PropTypes.func,
	setIsDarkTheme: PropTypes.func,
}