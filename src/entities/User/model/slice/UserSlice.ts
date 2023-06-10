import { createSlice } from "@reduxjs/toolkit"
import type { UserSchema } from "../types/user"

const initialState: UserSchema = {}

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState,
	reducers: {},
})

export const { actions: UserSliceActions } = UserSlice
export const { reducer: UserSliceReducer } = UserSlice
