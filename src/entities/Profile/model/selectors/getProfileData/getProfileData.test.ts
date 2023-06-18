import { type StateSchema } from "App/provider/StoreProvider"
import { getProfileData } from "./getProfileData"

describe("getProfileData.test", () => {
	test("should return userData ", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					lastname: "Vaschen",
					first: "Dima",
				},
			},
		}
		expect(getProfileData(state as StateSchema)).toEqual({
			lastname: "Vaschen",
			first: "Dima",
		})
	})
	test("should return age ", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					age: 19,
				},
			},
		}
		expect(getProfileData(state as StateSchema)).toEqual({ age: 19 })
	})
})
