import { type StateSchema } from "App/provider/StoreProvider"
import { getProfileError } from "./getProfileError"

describe("getProfileError.test", () => {
	test("should ", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: "error",
			},
		}
		expect(getProfileError(state as StateSchema)).toBe("error")
	})
})
