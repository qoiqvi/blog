import { type ReducersMapObject } from "@reduxjs/toolkit"
import { StoreProvider } from "App/provider/StoreProvider"
import { type StateSchema } from "App/provider/StoreProvider/config/stateSchema"
import { profileSliceReducer } from "entities/Profile"
import { loginSliceReducer } from "features/AuthByUserName/model/slice/loginSlice"

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginSliceReducer,
	profile: profileSliceReducer,
}

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
	(StoryComponent: any) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<StoryComponent />
			</StoreProvider>
		)
