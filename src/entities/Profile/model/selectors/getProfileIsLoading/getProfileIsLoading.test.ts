import { type StateSchema } from "App/provider/StoreProvider"
import { getProfileIsLoading } from "./getProfileIsLoading"

describe("getProfileIsLoading.test", () => {
	test("should ", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true,
			},
		}
		expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
	})
	test("empty state ", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
	})
})
