import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"

export const getLoginState = (state: StateSchema) => {
	return state?.loginForm
}
