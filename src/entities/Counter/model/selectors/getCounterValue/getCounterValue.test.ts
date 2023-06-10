import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"
import { getCounterValue } from "./getCounterValue"
import type { DeepPartial } from "@reduxjs/toolkit"

describe("getCounterValue", () => {
	test("getValue", () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10,
			},
		}
		expect(getCounterValue(state as StateSchema)).toBe(10)
	})
})
