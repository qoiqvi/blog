import type { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import type { StateSchema } from "../config/stateSchema"
import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
// import { createReduxStore } from "../config/store"

export interface StoreProviderProps {
	children: ReactNode
	initialState?: DeepPartial<StateSchema>
	asyncReducers?: any
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
	const navigate = useNavigate()
	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
		navigate
	)
	return <Provider store={store}>{children}</Provider>
}
