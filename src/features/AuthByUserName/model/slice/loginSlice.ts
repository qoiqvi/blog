import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { LoginSchema } from "../types/LoginSchema"
import { loginByUsername } from "../services/LoginByUsername/LoginByUsername"

const initialState: LoginSchema = {
	isLoading: false,
	password: "",
	username: "",
}

export const loginSlice = createSlice({
	name: "loginSlice",
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state, action) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(loginByUsername.fulfilled, (state, action) => {
				state.isLoading = false
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: loginSliceActions } = loginSlice
export const { reducer: loginSliceReducer } = loginSlice
