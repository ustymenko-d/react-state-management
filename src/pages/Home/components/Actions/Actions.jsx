import { useStore } from '../../../../store';
import styles from './Actions.module.css';

export const Actions = () => {
	const inc = useStore((state) => state.inc);
	const dec = useStore((state) => state.dec);
	const reset = useStore((state) => state.reset);
	const isDarkTheme = useStore((state) => state.isDarkTheme);
	const changeTheme = useStore((state) => state.changeTheme);

	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={inc}>Increment count</button>
				<button onClick={dec}>Decrement count</button>
				<button
					onClick={() => {
						setTimeout(() => {
							reset();
						}, 2000);
					}}
				>
					Reset count after 2 sec
				</button>
			</div>

			<button onClick={() => changeTheme(!isDarkTheme)}>Change theme</button>
		</div>
	);
};
