import { create } from 'zustand';

export const useStore = create((set) => ({
	count: 0,
	inc: () => set((state) => ({ count: state.count + 1 })),
	dec: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 }),

	isDarkTheme: false,
	changeTheme: (newVal) => set({ isDarkTheme: newVal }),
}));
