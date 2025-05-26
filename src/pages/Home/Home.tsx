import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../redux/types'
import { switchToDarkThemeAction } from '../../redux/reducers/theme.reducer'

import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { Actions } from '../../components/Actions/Actions'
import { Gallery } from '../../components/Gallery/Gallery'

import './Home.css'

const Home = () => {
	const dispatch = useDispatch<AppDispatch>()

	const { gallery, isDarkTheme } = useSelector((state: RootState) => ({
		gallery: state.gallery.gallery,
		isDarkTheme: state.theme.isDarkTheme,
	}))

	const switchToDarkTheme = () => dispatch(switchToDarkThemeAction(true))

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)')

		if (mq.matches && !isDarkTheme) {
			switchToDarkTheme()
		}
	}, [])

	return (
		<div className={isDarkTheme ? 'home home_dark' : 'home home_light'}>
			<h1>React state management</h1>
			<InfoBlock />
			<Actions />
			{gallery.length > 0 && <Gallery />}
		</div>
	)
}

export default Home
