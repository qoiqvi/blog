import axios from "axios"
import { loginByUsername } from "./LoginByUsername"
import type { Dispatch } from "@reduxjs/toolkit"
import type { StateSchema } from "App/provider/StoreProvider"

jest.mock("axios")

const mockedAxios = jest.mocked(axios, true)
describe("LoginByUsername.test", () => {
	let dispatch: Dispatch
	let getState: () => StateSchema
	beforeEach(() => {
		dispatch = jest.fn()
		getState = jest.fn()
	})
	test("should ", async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: "123", id: "1" } }))
		const action = loginByUsername({ username: "123", password: "123" })
		const result = await action(dispatch, getState, undefined)
		console.log(result)
		// expect().toEqual()
	})
})

// LoginByUsername.test.ts
