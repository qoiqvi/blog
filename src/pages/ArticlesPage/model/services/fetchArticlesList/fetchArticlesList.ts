import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { Article } from "entities/Article"

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
	"articlesPage/fetchArticlesList",
	async (_, { extra, rejectWithValue }) => {
		try {
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
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
