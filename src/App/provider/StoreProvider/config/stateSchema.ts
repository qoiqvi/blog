import type { ReducersMapObject, AnyAction, Reducer, CombinedState, EnhancedStore } from "@reduxjs/toolkit"
import type { CounterSchema } from "entities/Counter"
import type { UserSchema } from "entities/User"
import type { LoginSchema } from "features/AuthByUserName"

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema
	loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface reducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (state: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: reducerManager
}
