import type { StateSchema } from "App/provider/StoreProvider"
import { getLoginError } from "./getLoginError"

describe("getLoginError.test", () => {
	test("should error", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: "error",
			},
		}
		expect(getLoginError(state as StateSchema)).toEqual("error")
	})
	test("empty state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginError(state as StateSchema)).toEqual("")
	})
})
