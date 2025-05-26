export interface ICounterSlice {
	count: number
	inc: () => void
	dec: () => void
	reset: () => void
}

export const createCounterSlice = (
	set: (
		partial:
			| ICounterSlice
			| Partial<ICounterSlice>
			| ((state: ICounterSlice) => ICounterSlice | Partial<ICounterSlice>),
		replace?: boolean
	) => void
): ICounterSlice => ({
	count: 0,
	inc: () => set((state) => ({ count: state.count + 1 })),
	dec: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 }),
})
