import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import type { StateSchema, ThunkExtraArg } from "./stateSchema"
import { counterReducer } from "entities/Counter"
import { UserSliceReducer } from "entities/User"
import { createReducerManager } from "./reducerManager/reducerManager"
import { $api } from "shared/api/api"
import type { To, NavigateOptions } from "react-router-dom"

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: UserSliceReducer,
	}
	const reducerManager = createReducerManager(rootReducers)

	const extraArg: ThunkExtraArg = {
		api: $api,
		navigate,
	}

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: _IS_DEV_,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}),
	})
	//	@ts-expect-error dsada
	store.reducerManager = reducerManager
	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
