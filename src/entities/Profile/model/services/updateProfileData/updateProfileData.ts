import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { ValidateProfileError, type Profile } from "../../types/profile"
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm"
import { validateProfileData } from "../validateProfileData/validateProfileData"

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	"profile/updateProfileData",
	async (_, { extra, rejectWithValue, getState }) => {
		try {
			const formData = getProfileForm(getState())

			const response = await extra.api.put<Profile>("/profile", formData)

			const validateErrors = validateProfileData(formData)

			if (validateErrors.length) {
				return rejectWithValue(validateErrors)
			}

			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue([ValidateProfileError.NO_DATA])
		}
	}
)
