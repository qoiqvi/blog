import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { type Profile } from "../../types/profile"
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm"

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	"profile/updateProfileData",
	async (_, { extra, rejectWithValue, getState }) => {
		try {
			const formData = getProfileForm(getState())
			const response = await extra.api.put<Profile>("/profile", formData)
			if (!response.data) {
				throw new Error()
			}
			console.log(response)
			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue("error")
		}
	}
)
