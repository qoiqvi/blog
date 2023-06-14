import type { ReducersMapObject, AnyAction, Reducer, CombinedState, EnhancedStore } from "@reduxjs/toolkit"
import type { AxiosInstance } from "axios"
import type { CounterSchema } from "entities/Counter"
import type { ProfileSchema } from "entities/Profile"
import type { UserSchema } from "entities/User"
import type { LoginSchema } from "features/AuthByUserName"
import type { To, NavigateOptions } from "react-router-dom"

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema

	loginForm?: LoginSchema
	profile?: ProfileSchema
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

export interface ThunkExtraArg {
	api: AxiosInstance
	navigate: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
}
