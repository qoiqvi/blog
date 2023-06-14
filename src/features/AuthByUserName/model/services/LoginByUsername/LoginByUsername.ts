import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { UserSliceActions, type User } from "entities/User"
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage"
// First, create the thunk

interface LoginByUsernameProps {
	username: string
	password: string
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	"login/loginByUsername",
	async (authData, { extra, rejectWithValue, dispatch }) => {
		try {
			const response = await extra.api.post("/login", authData)

			if (!response.data) {
				throw new Error()
			}

			dispatch(UserSliceActions.setAuthData(response.data))
			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
			extra.navigate("/profile")
			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue("error")
		}
	}
)
