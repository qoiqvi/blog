import type { StateSchema } from "App/provider/StoreProvider"
import { loginSliceActions, loginSliceReducer } from "./loginSlice"
import type { LoginSchema } from "../types/LoginSchema"

describe("loginSlice.test", () => {
	test("should ", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(loginSliceReducer(state as LoginSchema, loginSliceActions.setUserName("dima"))).toEqual({
			username: "dima",
		})
	})
	test("should ", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(loginSliceReducer(state as LoginSchema, loginSliceActions.setPassword("dima"))).toEqual({
			password: "dima",
		})
	})
})
