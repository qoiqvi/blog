import type { StateSchema } from "App/provider/StoreProvider"
import { getProfileReadonly } from "./getProfileReadonly"

describe("getProfileReadonly.test", () => {
	test("should ", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true,
			},
		}
		expect(getProfileReadonly(state as StateSchema)).toEqual(true)
	})
	test("empty state ", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
	})
})
