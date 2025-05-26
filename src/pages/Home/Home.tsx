import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { RootState } from '../../redux/store'

import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { Actions } from '../../components/Actions/Actions'

import './Home.css'

const Home = () => {
	const { switchToDarkTheme, fetchPosts, fetchPostsById, setSinglePost } =
		useActions()

	const localDataRoot = JSON.parse(
		localStorage.getItem('persist:root') || 'null'
	)
	const localDataPosts = JSON.parse(
		localStorage.getItem('persist:posts') || 'null'
	)

	const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme)
	const postsLoading = useSelector(
		(state: RootState) => state.posts.postsLoading
	)
	const singlePost = useSelector((state: RootState) => state.posts.singlePost)

	const handleSwitchToDarkTheme = () => switchToDarkTheme()

	useEffect(() => {
		if (!localDataRoot) {
			const mq = window.matchMedia('(prefers-color-scheme: dark)')

			if (mq.matches && !isDarkTheme) {
				handleSwitchToDarkTheme()
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
			<InfoBlock />
			<Actions />
			{postsLoading && <p>loading...</p>}
			{singlePost?.id && (
				<p>
					<b>Post id:</b> {singlePost.id}. <br /> <b>Titile:</b>{' '}
					{singlePost.title}
				</p>
			)}
		</div>
	)
}

export default Home
