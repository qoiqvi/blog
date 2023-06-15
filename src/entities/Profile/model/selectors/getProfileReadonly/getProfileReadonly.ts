import { type StateSchema } from "App/provider/StoreProvider"

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly
