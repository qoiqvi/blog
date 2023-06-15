import type { StateSchema } from "App/provider/StoreProvider"

export const getProfileForm = (state: StateSchema) => state.profile?.form
