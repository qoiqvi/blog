import type { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import type { StateSchema } from "../config/stateSchema"
import type { DeepPartial } from "@reduxjs/toolkit"
// import { createReduxStore } from "../config/store"

export interface StoreProviderProps {
	children: ReactNode
	initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
	const store = createReduxStore(initialState as StateSchema)
	return <Provider store={store}>{children}</Provider>
}
