import PropTypes from 'prop-types'
import styles from './Actions.module.css'

export const Actions = ({
	incrementCount,
	decrementCount,
	resetCount,
	toggleTheme,
	allPosts,
	fetchPostsByIdHandler,
	setSinglePostHandler,
}) => {
	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={incrementCount}>Increment count</button>
				<button onClick={decrementCount}>Decrement count</button>
				<button
					onClick={() => {
						setTimeout(() => {
							resetCount()
						}, 2000)
					}}>
					Recent count after 2 sec
				</button>
			</div>

			<button onClick={toggleTheme}>Change theme</button>
			<button
				onClick={() => {
					const id = +prompt('Enter post id (1-200):', 1)

					if (0 < id && id < 201) {
						const existingPost = allPosts.find((elem) => elem.id === id)

						existingPost
							? setSinglePostHandler(existingPost)
							: fetchPostsByIdHandler(id)
					} else {
						alert('Post id must be from 1 to 200!')
					}
				}}>
				Fetch posts by id
			</button>
		</div>
	)
}

Actions.propTypes = {
	incrementCount: PropTypes.func,
	decrementCount: PropTypes.func,
	resetCount: PropTypes.func,
	toggleTheme: PropTypes.func,
	allPosts: PropTypes.array,
	fetchPostsByIdHandler: PropTypes.func,
	setSinglePostHandler: PropTypes.func,
}
