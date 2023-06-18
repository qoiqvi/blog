import { type StateSchema } from "App/provider/StoreProvider"
import { ValidateProfileError } from "../../types/profile"
import { getProfileValidateErrors } from "./getProfileValidateError"

const validateErrors = [ValidateProfileError.INCORECT_USERNAME, ValidateProfileError.INCORECT_USER_DATA]

describe("getProfileValidateError.test", () => {
	test("should ", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateError: validateErrors,
			},
		}
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
	})
	test("empty state ", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
	})
})
