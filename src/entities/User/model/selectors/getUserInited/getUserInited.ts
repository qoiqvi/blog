import type { StateSchema } from "App/provider/StoreProvider"

export const getUserInited = (state: StateSchema) => state.user._inited
