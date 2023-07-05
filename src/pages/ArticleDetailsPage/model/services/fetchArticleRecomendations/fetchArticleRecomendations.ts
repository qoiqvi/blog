import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { Article } from "entities/Article"

export const fetchArticlesRecomendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
	"articlesPage/fetchArticleRecomendations",
	async (_, { extra, rejectWithValue }) => {
		try {
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_limit: 4,
				},
			})

			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
