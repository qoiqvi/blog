import type { DeepPartial } from "@reduxjs/toolkit"
import type { StateSchema } from "App/provider/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"

describe("getLoginUsername.test", () => {
	test("should return username", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "qoiqvi",
			},
		}
		expect(getLoginUsername(state as StateSchema)).toEqual("qoiqvi")
	})
	test("should return emty string", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginUsername(state as StateSchema)).toEqual("")
	})
})

// getLoginUsername.test.ts
