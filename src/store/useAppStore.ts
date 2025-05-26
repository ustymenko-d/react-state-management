import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { createCounterSlice, ICounterSlice } from './slices/counter.slice'
import { createIThemeSlice, IThemeSlice } from './slices/theme.slice'

type StoreState = ICounterSlice & IThemeSlice

export const useAppStore = create<StoreState>()(
	devtools(
		persist(
			(set) => ({
				...createCounterSlice(set),
				...createIThemeSlice(set),
			}),
			{
				name: 'appState',
				storage: createJSONStorage(() => sessionStorage),
			}
		)
	)
)
