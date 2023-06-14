import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import type { StateSchema } from "./stateSchema"
import { counterReducer } from "entities/Counter"
import { UserSliceReducer } from "entities/User"
import { createReducerManager } from "./reducerManager/reducerManager"

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: UserSliceReducer,
	}
	const reducerManager = createReducerManager(rootReducers)
	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS__DEV__,
		preloadedState: initialState,
	})
	//	@ts-expect-error dsada
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
