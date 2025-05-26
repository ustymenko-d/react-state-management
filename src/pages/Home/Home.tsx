import { useEffect } from 'react'
import { useAppStore } from '../../store/useAppStore'

import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { Actions } from '../../components/Actions/Actions'

import './Home.css'

const Home = () => {
	const isDarkTheme = useAppStore((state) => state.isDarkTheme)
	const setDarkTheme = useAppStore((state) => state.setDarkTheme)

	useEffect(() => {
		const sessionState = sessionStorage.getItem('appState')

		if (sessionState) {
			try {
				const parsed = JSON.parse(sessionState)
				const sessionDarkTheme = parsed?.state?.isDarkTheme
				setDarkTheme(!!sessionDarkTheme)
			} catch (error) {
				console.error('Failed to parse session state', error)
			}
		}
	}, [])

	return (
		<div className={isDarkTheme ? 'home home_dark' : 'home home_light'}>
			<h1>React state management</h1>
			<InfoBlock />
			<Actions />
		</div>
	)
}

export default Home
