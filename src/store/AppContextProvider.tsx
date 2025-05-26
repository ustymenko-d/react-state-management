import { useState, useEffect } from 'react'
import { AppContext } from './AppContext'

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [count, setCount] = useState(0)
	const [isDarkTheme, setIsDarkTheme] = useState(false)

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)')
		if (mq.matches) setIsDarkTheme(true)
		mq.addEventListener('change', (e) => setIsDarkTheme(e.matches))
		return () =>
			mq.removeEventListener('change', (e) => setIsDarkTheme(e.matches))
	}, [])

	return (
		<AppContext.Provider
			value={{ count, setCount, isDarkTheme, setIsDarkTheme }}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider
