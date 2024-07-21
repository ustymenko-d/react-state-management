import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

export const useStore = create(
	devtools(
		persist(
			(set) => ({
				count: 0,
				inc: () => set((state) => ({ count: state.count + 1 })),
				dec: () => set((state) => ({ count: state.count - 1 })),
				reset: () => set({ count: 0 }),

				isDarkTheme: false,
				setDarkTheme: (newVal) => set({ isDarkTheme: newVal }),
			}),
			{
				name: 'appState',
				storage: createJSONStorage(() => sessionStorage),
			}
		)
	)
);
