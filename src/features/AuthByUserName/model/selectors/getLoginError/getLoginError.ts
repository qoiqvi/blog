import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"

export const getLoginError = (state: StateSchema) => {
	return state?.loginForm?.error || ""
}
