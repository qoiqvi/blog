import type { DeepPartial } from "@reduxjs/toolkit"
import type { StateSchema } from "App/provider/StoreProvider"
import { getLoginPassword } from "./getLoginPassword"

describe("getLoginPassword.test", () => {
	test("should return password ", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: "LopyShmopy1",
			},
		}
		expect(getLoginPassword(state as StateSchema)).toEqual("LopyShmopy1")
	})
	test("should return emty string ", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginPassword(state as StateSchema)).toEqual("")
	})
})
