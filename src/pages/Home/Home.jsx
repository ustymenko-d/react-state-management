import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'

import { InfoBlock } from './components/InfoBlock/InfoBlock'
import { Actions } from './components/Actions/Actions'

import './Home.css'

const Home = () => {
	const { increment, decrement, resetCount, switchToDarkTheme, toggleTheme } =
		useActions()

	const count = useSelector((state) => state.count.count)
	const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)

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

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)')

		if (mq.matches && !isDarkTheme) {
			switchToDarkThemeHandler()
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
			/>
		</div>
	)
}

export default Home
