import { useAppContext } from '../../hooks/useAppContext'
import { useBreakpoints } from '../../hooks/useBreakpoints'
import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { Actions } from '../../components/Actions/Actions'

import './Home.css'

const Home = () => {
	const { isDarkTheme } = useAppContext()
	const breakpoints = useBreakpoints([768, 1024])

	return (
		<div className={isDarkTheme ? 'home home_dark' : 'home home_light'}>
			<h1>React state management</h1>

			{breakpoints === 0 && <h2>Small screen</h2>}
			{breakpoints === 1 && <h2>Medium screen</h2>}
			{breakpoints === 2 && <h2>Large screen</h2>}

			<InfoBlock />

			<Actions />
		</div>
	)
}

export default Home
