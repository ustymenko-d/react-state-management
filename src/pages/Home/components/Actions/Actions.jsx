import PropTypes from 'prop-types';
import styles from './Actions.module.css';

export const Actions = ({
	incrementCount,
	decrementCount,
	resetCount,
	toggleTheme,
	addGallery,
}) => {
	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={incrementCount}>Increment count</button>
				<button onClick={decrementCount}>Decrement count</button>
				<button
					onClick={() => {
						setTimeout(() => {
							resetCount();
						}, 2000);
					}}
				>
					Recent count after 2 sec
				</button>
			</div>

			<button onClick={toggleTheme}>Change theme</button>
			<button
				onClick={() => {
					addGallery();
				}}
			>
				Fetch gallery
			</button>
		</div>
	);
};

Actions.propTypes = {
	incrementCount: PropTypes.func,
	decrementCount: PropTypes.func,
	resetCount: PropTypes.func,
	toggleTheme: PropTypes.func,
	addGallery: PropTypes.func,
};
