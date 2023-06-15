import { loginByUsername } from "./LoginByUsername"
import { TestsAsyncThunk } from "shared/lib/tests/TestsAsyncThunk/TestsAsyncThunk"
import { UserSliceActions } from "entities/User"

describe("LoginByUsername.test", () => {
	test("should ", async () => {
		const userValue = { username: "123", id: "1" }
		const thunk = new TestsAsyncThunk(loginByUsername)
		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
		const result = await thunk.callThunk({ username: "123", password: "123" })
		expect(thunk.dispatch).toHaveBeenCalledWith(UserSliceActions.setAuthData(userValue))
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(thunk.api.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(userValue)
	})
	test("error login", async () => {
		const thunk = new TestsAsyncThunk(loginByUsername)
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
		const result = await thunk.callThunk({ username: "123", password: "123" })
		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(thunk.api.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toBe("error")
	})
})
