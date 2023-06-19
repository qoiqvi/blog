import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { type Article } from "../../types/article"

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
	"article/fetchArticleById",
	async (articleId, { extra, rejectWithValue }) => {
		try {
			const response = await extra.api.get<Article>(`/articles/${articleId}`)

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue("error")
		}
	}
)
