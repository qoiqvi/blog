import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import type { StateSchema } from "./stateSchema"
import { counterReducer } from "entities/Counter"
import { UserSliceReducer } from "entities/User"

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: UserSliceReducer,
	}
	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS__DEV__,
		preloadedState: initialState,
	})
}
