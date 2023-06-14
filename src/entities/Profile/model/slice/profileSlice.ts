import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { type ProfileSchema } from "../types/profile"

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	error: undefined,
	data: undefined,
}

export const profileSlice = createSlice({
	name: "profileSlice",
	initialState,
	reducers: {
		addProfile(state, action: PayloadAction) {},
	},
})

export const { actions: profileSliceActions } = profileSlice
export const { reducer: profileSliceReducer } = profileSlice
