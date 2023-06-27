import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { Article } from "entities/Article"
import { getArticlesListLimit } from "../../selectors/articlesPageSelectors"

interface FetchArticlesListProps {
	page: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
	"articlesPage/fetchArticlesList",
	async (props, { extra, rejectWithValue, getState }) => {
		const { page = 1 } = props
		const limit = getArticlesListLimit(getState())
		try {
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_page: page,
					_limit: limit,
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
