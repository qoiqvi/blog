import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { type Profile } from "../../types/profile"

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
	"profile/fetchProfileData",
	async (profilerId, { extra, rejectWithValue }) => {
		try {
			if (!profilerId) {
				return rejectWithValue("Пользователь не найден")
			}
			const response = await extra.api.get<Profile>(`/profile/${profilerId}`)

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue("error")
		}
	}
)
