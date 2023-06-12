import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"

export const getLoginUsername = (state: StateSchema) => {
	return state?.loginForm?.username || ""
}
