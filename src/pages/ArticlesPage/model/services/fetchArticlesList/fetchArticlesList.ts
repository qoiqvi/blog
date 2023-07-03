import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { Article } from "entities/Article"
import {
	getArticlesListLimit,
	getArticlesListOrder,
	getArticlesListPage,
	getArticlesListSearch,
	getArticlesListSort,
	getArticlesListType,
} from "../../selectors/articlesPageSelectors"
import { getQueryParams } from "shared/lib/url/addQueryParams/addQueryParams"
import { ArticleType } from "entities/Article/model/types/article"

interface FetchArticlesListProps {
	replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
	"articlesPage/fetchArticlesList",
	async ({ replace = false }, { extra, rejectWithValue, getState }) => {
		const limit = getArticlesListLimit(getState())
		const sort = getArticlesListSort(getState())
		const order = getArticlesListOrder(getState())
		const search = getArticlesListSearch(getState())
		const page = getArticlesListPage(getState())
		const type = getArticlesListType(getState())

		try {
			getQueryParams({ sort, order, search, type })
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_page: page,
					_limit: limit,
					_sort: sort,
					_order: order,
					type: type === ArticleType.ALL ? undefined : type,
					q: search,
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
