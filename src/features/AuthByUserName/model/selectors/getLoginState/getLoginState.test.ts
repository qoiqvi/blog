import type { StateSchema } from "App/provider/StoreProvider"
import { getLoginState } from "./getLoginState"

describe("getLoginState.test", () => {
	test("should ", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {},
		}
		expect(getLoginState(state as StateSchema)).toEqual({})
	})
	test("with username and password ", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "admin",
				password: "123",
			},
		}
		expect(getLoginState(state as StateSchema)).toEqual({
			username: "admin",
			password: "123",
		})
	})
	test("with all data ", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "admin",
				password: "123",
				error: "",
				isLoading: true,
			},
		}
		expect(getLoginState(state as StateSchema)).toEqual({
			username: "admin",
			password: "123",
			error: "",
			isLoading: true,
		})
	})
})

// getLoginState.test.ts
