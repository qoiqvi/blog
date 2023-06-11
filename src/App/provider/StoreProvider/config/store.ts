import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import type { StateSchema } from "./stateSchema"
import { counterReducer } from "entities/Counter"
import { UserSliceReducer } from "entities/User"
import { loginSliceReducer } from "features/AuthByUserName/model/slice/loginSlice"

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: UserSliceReducer,
		loginForm: loginSliceReducer,
	}
	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS__DEV__,
		preloadedState: initialState,
	})
}
