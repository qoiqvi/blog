import { type StateSchema } from "App/provider/StoreProvider"
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetailsData"

describe("articleDetailsData.test", () => {
	test("should ", () => {
		const data = {
			id: "1",
			title: "dima",
		}
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data,
			},
		}
		expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
	})

	test("getArticleDetailsError ", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: "error",
			},
		}
		expect(getArticleDetailsError(state as StateSchema)).toEqual("error")
	})

	test("getArticleDetailsIsLoading ", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true,
			},
		}
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
	})
})
