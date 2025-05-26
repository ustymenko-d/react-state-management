import { rootReducer } from './rootReducer'
import { store } from './store'

export interface IAction<T> {
	type: string
	payload?: T
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
