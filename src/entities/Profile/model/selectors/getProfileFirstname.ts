import { type StateSchema } from "App/provider/StoreProvider"

export const getProfileFirstname = (state: StateSchema) => state?.profile?.data?.first || ""
