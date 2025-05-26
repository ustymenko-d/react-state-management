export interface IThemeSlice {
	isDarkTheme: boolean
	setDarkTheme: (value: boolean) => void
}

export const createIThemeSlice = (
	set: (
		partial:
			| IThemeSlice
			| Partial<IThemeSlice>
			| ((state: IThemeSlice) => IThemeSlice | Partial<IThemeSlice>),
		replace?: boolean
	) => void
): IThemeSlice => ({
	isDarkTheme: false,
	setDarkTheme: (isDarkTheme) => set({ isDarkTheme }),
})
