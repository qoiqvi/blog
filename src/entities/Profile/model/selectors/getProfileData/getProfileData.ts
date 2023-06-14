import { type StateSchema } from "App/provider/StoreProvider"

export const getProfileData = (state: StateSchema) => state.profile?.data
