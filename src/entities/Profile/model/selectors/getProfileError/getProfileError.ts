import { type StateSchema } from "App/provider/StoreProvider"

export const getProfileError = (state: StateSchema) => state.profile?.error
