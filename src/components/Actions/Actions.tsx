import { useSelector } from 'react-redux'
import styles from './Actions.module.css'
import { RootState } from '../../redux/store'
import { useActions } from '../../hooks/useActions'

export const Actions = () => {
	const {
		increment,
		decrement,
		resetCount,
		toggleTheme,
		fetchPostsById,
		setSinglePost,
	} = useActions()

	const allPosts = useSelector((state: RootState) => state.posts.allPosts)

	const handleIncrement = () => increment()
	const handleDecrement = () => decrement()
	const handleResetCount = () => setTimeout(() => resetCount(), 2000)
	const handleToggleTheme = () => toggleTheme()

	const handleFetchById = () => {
		const value = prompt('Enter post id (1-200):', '1')
		if (value === null) return

		const id = +value
		if (id > 0 && id <= 200) {
			const existingPost = allPosts.find((elem) => elem.id === id)

			existingPost ? setSinglePost(existingPost) : fetchPostsById(id)
		} else {
			alert('Post id must be from 1 to 200!')
		}
	}

	return (
		<div className={styles.actions}>
			<div className={styles.actions__counter}>
				<button onClick={handleIncrement}>Increment count</button>
				<button onClick={handleDecrement}>Decrement count</button>
				<button onClick={handleResetCount}>Reset count after 2 sec</button>
			</div>

			<button onClick={handleToggleTheme}>Change theme</button>
			<button onClick={handleFetchById}>Fetch posts by id</button>
		</div>
	)
}
