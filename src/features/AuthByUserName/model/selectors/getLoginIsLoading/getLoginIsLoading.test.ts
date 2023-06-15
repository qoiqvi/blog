import type { StateSchema } from "App/provider/StoreProvider"
import { getLoginIsLoading } from "./getLoginIsLoading"

describe("getLoginIsLoading.test", () => {
	test("with true state ", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true,
			},
		}
		expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
	})
	test("with empty state ", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
	})
})
// getLoginIsLoading.test.ts
