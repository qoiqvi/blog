import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData"
import { ValidateProfileError, type ProfileSchema } from "../types/profile"
import { profileSliceActions, profileSliceReducer } from "./profileSlice"

describe("profileSlice.test", () => {
	test("setReadonly ", () => {
		const state: DeepPartial<ProfileSchema> = { readonly: false }
		expect(profileSliceReducer(state as ProfileSchema, profileSliceActions.setReadonly(true))).toEqual({
			readonly: true,
		})
	})

	test("CancelEdit ", () => {
		const state: DeepPartial<ProfileSchema> = {}
		expect(profileSliceReducer(state as ProfileSchema, profileSliceActions.cancelEdit())).toEqual({
			readonly: true,
			validateError: undefined,
		})
	})

	test("updateProfileFormdata ", () => {
		const state: DeepPartial<ProfileSchema> = { form: { age: 19 } }
		expect(
			profileSliceReducer(state as ProfileSchema, profileSliceActions.updateProfileFormData({ age: 40 }))
		).toEqual({ form: { age: 40 } })
	})

	test("fetchProfileData pending ", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateError: [ValidateProfileError.INCORECT_AGE],
		}
		expect(profileSliceReducer(state as ProfileSchema, fetchProfileData.pending)).toEqual({
			isLoading: true,
			validateError: undefined,
		})
	})
})
