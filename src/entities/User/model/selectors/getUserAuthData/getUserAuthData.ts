import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"

export const getUserAuthData = (state: StateSchema) => {
	return state.user.AuthData
}
