import { useEffect, useState } from 'react'
import { Context } from '../../store/Context'
import { useResponsiveJSX } from '../../hooks/useResponsiveJSX'
import { InfoBlock } from './components/InfoBlock/InfoBlock'
import { Actions } from './components/Actions/Actions'
import './Home.css'

const Home = () => {
	const [count, setCount] = useState(0)
	const [isDarkTheme, setIsDarkTheme] = useState(false)
	const breakpoints = useResponsiveJSX([768, 1024])

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)')

		if (mq.matches) {
			setIsDarkTheme(true)
		}

		mq.addEventListener('change', (evt) => setIsDarkTheme(evt.matches))
	}, [])

	return (
		<Context.Provider value={{ count, setCount, isDarkTheme, setIsDarkTheme }}>
			<div className={isDarkTheme ? 'home home_dark' : 'home home_light'}>
				<h1>React state management</h1>

				{breakpoints === 0 && <h2>Small screen</h2>}
				{breakpoints === 1 && <h2>Medium screen</h2>}
				{breakpoints === 2 && <h2>Large screen</h2>}

				<InfoBlock />

				<Actions />
			</div>
		</Context.Provider>
	)
}

export default Home
