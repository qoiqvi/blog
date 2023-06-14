import { type StateSchema } from "App/provider/StoreProvider"

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading
