import { createContext } from 'react'

interface IContext {
	count: number
	setCount: React.Dispatch<React.SetStateAction<number>>

	isDarkTheme: boolean
	setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<IContext>({
	count: 0,
	setCount: () => {},
	isDarkTheme: false,
	setIsDarkTheme: () => {},
})
