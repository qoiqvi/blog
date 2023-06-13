import axios from "axios"
import { loginByUsername } from "./LoginByUsername"
import { TestsAsyncThunk } from "shared/lib/tests/TestsAsyncThunk/TestsAsyncThunk"
import { UserSliceActions } from "entities/User"

jest.mock("axios")
const mockedAxios = jest.mocked(axios, true)

describe("LoginByUsername.test", () => {
	test("should ", async () => {
		const userValue = { username: "123", id: "1" }
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
		const thunk = new TestsAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({ username: "123", password: "123" })
		expect(thunk.dispatch).toHaveBeenCalledWith(UserSliceActions.setAuthData(userValue))
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(userValue)
	})
	test("error login", async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
		const thunk = new TestsAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({ username: "123", password: "123" })

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toBe("error")
	})
})

// LoginByUsername.test.ts
