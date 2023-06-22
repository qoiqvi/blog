import type { Reducer } from "@reduxjs/toolkit"
import { type ReduxStoreWithManager } from "App/provider/StoreProvider"
import type { StateSchemaKey } from "App/provider/StoreProvider/config/stateSchema"
import { type ReactNode, useEffect } from "react"
import { useStore } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer
}

export interface DynamicModuleLoaderProps {
	children: ReactNode
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const { children, reducers, removeAfterUnmount = true } = props
	const dispatch = useAppDispatch()
	const store = useStore() as ReduxStoreWithManager
	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			store.reducerManager.add(name as StateSchemaKey, reducer)
			dispatch({ type: `@INIT ${name as StateSchemaKey} reducer` })
		})
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, reducer]) => {
					dispatch({ type: `@DESTROY ${name as StateSchemaKey} reducer` })
					store.reducerManager.remove(name as StateSchemaKey)
				})
			}
		}
		// eslint-disable-next-line
	}, [])
	return <>{children}</>
}
