import { useAppStore } from '../../store/useAppStore'

export const InfoBlock = () => {
	const count = useAppStore((state) => state.count)
	const isDarkTheme = useAppStore((state) => state.isDarkTheme)

	return (
		<div>
			<h2>Count: {count}</h2>
			<h2>Current theme: {isDarkTheme ? 'dark' : 'light'}</h2>
		</div>
	)
}
