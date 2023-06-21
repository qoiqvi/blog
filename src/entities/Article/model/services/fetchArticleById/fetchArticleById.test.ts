import { TestsAsyncThunk } from "shared/lib/tests/TestsAsyncThunk/TestsAsyncThunk"
import { fetchArticleById } from "./fetchArticleById"

const data = {
	id: "1",
	title: "Javascript news",
	subtitle: "Что нового в JS за 2022 год?",
	img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
	views: 1022,
	createdAt: "26.02.2022",
	type: ["IT"],
}

describe("fetchArticleById", () => {
	test("should ", async () => {
		const thunk = new TestsAsyncThunk(fetchArticleById)
		thunk.api.get.mockReturnValue(Promise.resolve({ data }))
		const result = await thunk.callThunk("1")
		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(data)
	})
})
