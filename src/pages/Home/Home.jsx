import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'

import { InfoBlock } from './components/InfoBlock/InfoBlock'
import { Actions } from './components/Actions/Actions'

import './Home.css'

const Home = () => {
	const {
		increment,
		decrement,
		resetCount,
		switchToDarkTheme,
		toggleTheme,
		fetchPosts,
		fetchPostsById,
		setSinglePost,
	} = useActions()

	const localDataRoot = JSON.parse(localStorage.getItem('persist:root'))
	const localDataPosts = JSON.parse(localStorage.getItem('persist:posts'))
	const count = useSelector((state) => state.count.count)
	const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
	const postsLoading = useSelector((state) => state.posts.postsLoading)
	const allPosts = useSelector((state) => state.posts.allPosts)
	const singlePost = useSelector((state) => state.posts.singlePost)

	const incrementCount = () => {
		increment()
	}

	const decrementCount = () => {
		decrement()
	}

	const resetCountHandler = () => {
		resetCount()
	}

	const toggleThemeHandler = () => {
		toggleTheme()
	}

	const switchToDarkThemeHandler = () => {
		switchToDarkTheme()
	}

	const fetchPostsByIdHandler = (id) => {
		fetchPostsById(id)
	}

	const setSinglePostHandler = (singlePost) => {
		setSinglePost(singlePost)
	}

	useEffect(() => {
		if (!localDataRoot) {
			const mq = window.matchMedia('(prefers-color-scheme: dark)')

			if (mq.matches && !isDarkTheme) {
				switchToDarkThemeHandler()
			}
		}
	}, [])

	useEffect(() => {
		if (!localDataPosts || !JSON.parse(localDataPosts.allPosts).length) {
			fetchPosts()
		}
	}, [])

	return (
		<div className={isDarkTheme ? 'home home_dark' : 'home home_light'}>
			<h1>React state management</h1>

			<InfoBlock
				count={count}
				isDarkTheme={isDarkTheme}
			/>

			<Actions
				incrementCount={incrementCount}
				decrementCount={decrementCount}
				resetCount={resetCountHandler}
				toggleTheme={toggleThemeHandler}
				allPosts={allPosts}
				fetchPostsByIdHandler={fetchPostsByIdHandler}
				setSinglePostHandler={setSinglePostHandler}
				singlePost={singlePost}
			/>

			{postsLoading && <p>loading...</p>}
			{singlePost.id && (
				<p>
					<b>Post id:</b> {singlePost.id}. <br /> <b>Titile:</b>{' '}
					{singlePost.title}
				</p>
			)}
		</div>
	)
}

export default Home
