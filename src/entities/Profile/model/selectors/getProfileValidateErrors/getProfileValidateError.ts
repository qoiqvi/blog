import type { StateSchema } from "App/provider/StoreProvider"

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateError
