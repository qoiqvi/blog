import { type ReducersMapObject, configureStore, type Reducer, type CombinedState } from "@reduxjs/toolkit"
import type { StateSchema, ThunkExtraArg } from "./stateSchema"
import { counterReducer } from "entities/Counter"
import { UserSliceReducer } from "entities/User"
import { createReducerManager } from "./reducerManager/reducerManager"
import { $api } from "shared/api/api"
import { SaveScrollSliceReducer } from "widgets/Page"

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: UserSliceReducer,
		saveScroll: SaveScrollSliceReducer,
	}
	const reducerManager = createReducerManager(rootReducers)

	const extraArg: ThunkExtraArg = {
		api: $api,
	}

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: _IS_DEV_,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}),
	})
	// @ts-expect-error dasda
	store.reducerManager = reducerManager
	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
