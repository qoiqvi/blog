import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"

export const getLoginPassword = (state: StateSchema) => {
	return state?.loginForm?.password || ""
}
