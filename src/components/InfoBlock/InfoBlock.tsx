import { useSelector } from 'react-redux'
import { RootState } from '../../redux/types'

export const InfoBlock = () => {
	const { count, isDarkTheme } = useSelector((state: RootState) => ({
		count: state.count.count,
		isDarkTheme: state.theme.isDarkTheme,
	}))

	return (
		<div>
			<h2>Count: {count}</h2>
			<h2>Current theme: {isDarkTheme ? 'dark' : 'light'}</h2>
		</div>
	)
}
