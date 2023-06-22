import { type ReducersMapObject } from "@reduxjs/toolkit"
import { StoreProvider } from "App/provider/StoreProvider"
import { type StateSchema } from "App/provider/StoreProvider/config/stateSchema"
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice"
import { profileSliceReducer } from "entities/Profile"
import { addNewCommentReducer } from "features/AddNewComment/model/slice/addNewCommentSlice"
import { loginSliceReducer } from "features/AuthByUserName/model/slice/loginSlice"

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginSliceReducer,
	profile: profileSliceReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsComments: articleDetailsReducer,
	addNewComment: addNewCommentReducer,
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
