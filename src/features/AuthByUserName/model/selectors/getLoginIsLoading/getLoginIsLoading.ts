import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"

export const getLoginIsLoading = (state: StateSchema) => {
	return state?.loginForm?.isLoading || false
}
