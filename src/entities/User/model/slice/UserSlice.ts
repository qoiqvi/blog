import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { User, UserSchema } from "../types/user"
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage"

const initialState: UserSchema = {
	_inited: false,
}

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.AuthData = action.payload
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
			if (user) {
				state.AuthData = JSON.parse(user)
			}
			state._inited = true
		},
		logout: (state) => {
			localStorage.removeItem(USER_LOCALSTORAGE_KEY)
			state.AuthData = null
		},
	},
})

export const { actions: UserSliceActions } = UserSlice
export const { reducer: UserSliceReducer } = UserSlice
