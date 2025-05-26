import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export const InfoBlock = () => {
	const count = useSelector((state: RootState) => state.count.count)
	const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme)

	return (
		<div>
			<h2>Count: {count}</h2>
			<h2>Current theme: {isDarkTheme ? 'dark' : 'light'}</h2>
		</div>
	)
}
