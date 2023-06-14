import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { type Profile } from "../../types/profile"

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	"profile/fetchProfileData",
	async (_, { extra, rejectWithValue, dispatch }) => {
		try {
			const response = await extra.api.get<Profile>("/profile")

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
