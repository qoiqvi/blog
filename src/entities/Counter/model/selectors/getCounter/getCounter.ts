import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"

export const getCounter = (state: StateSchema) => state.counter
