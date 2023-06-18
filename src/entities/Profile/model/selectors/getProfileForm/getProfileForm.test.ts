import { type StateSchema } from "App/provider/StoreProvider"
import { Country } from "entities/Country"
import { getProfileForm } from "./getProfileForm"

describe("getProfileForm.test", () => {
	test("should ", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				form: {
					age: 19,
					country: Country.Kazakhstan,
					username: "citraqs",
				},
			},
		}
		expect(getProfileForm(state as StateSchema)).toEqual({
			age: 19,
			country: Country.Kazakhstan,
			username: "citraqs",
		})
	})
	test("empty state ", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				form: {},
			},
		}
		expect(getProfileForm(state as StateSchema)).toEqual({})
	})
})
