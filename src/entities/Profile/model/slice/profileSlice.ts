import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ValidateProfileError, type Profile, type ProfileSchema } from "../types/profile"
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData"
import { updateProfileData } from "../services/updateProfileData/updateProfileData"

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	error: undefined,
	validateError: undefined,
	data: undefined,
	form: undefined,
}

export const profileSlice = createSlice({
	name: "profileSlice",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},
		cancelEdit: (state) => {
			state.readonly = true
			state.form = state.data
			state.validateError = undefined
		},
		updateProfileFormData: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload,
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined
				state.validateError = undefined
				state.isLoading = true
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.form = action.payload
				state.data = action.payload
				state.isLoading = false
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(updateProfileData.pending, (state) => {
				state.validateError = undefined
				state.isLoading = true
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.form = action.payload
				state.data = action.payload
				state.isLoading = false
				state.validateError = undefined
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.validateError = action.payload
			})
	},
})

export const { actions: profileSliceActions } = profileSlice
export const { reducer: profileSliceReducer } = profileSlice
