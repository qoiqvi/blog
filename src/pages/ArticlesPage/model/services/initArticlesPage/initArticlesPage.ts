import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { ArticlesPageSliceActions } from "../../slice/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"
import { getArticlesListInited } from "../../selectors/articlesPageSelectors"
import { SortOrder } from "shared/types"
import { ArticleSortField } from "entities/Article"
import { ArticleType } from "entities/Article/model/types/article"

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
	"articlesPage/initArticlesList",
	async (searchParams, { dispatch, getState }) => {
		const inited = getArticlesListInited(getState())
		if (!inited) {
			const sortFromUrl = searchParams.get("sort")
			const orderFromUrl = searchParams.get("order")
			const searchFromUrl = searchParams.get("search")
			const typeFromUrl = searchParams.get("type")

			if (orderFromUrl) {
				dispatch(ArticlesPageSliceActions.setOrder(orderFromUrl as SortOrder))
			}

			if (sortFromUrl) {
				dispatch(ArticlesPageSliceActions.setSort(sortFromUrl as ArticleSortField))
			}

			if (searchFromUrl) {
				dispatch(ArticlesPageSliceActions.setSearch(searchFromUrl))
			}

			if (typeFromUrl) {
				dispatch(ArticlesPageSliceActions.setType(typeFromUrl as ArticleType))
			}

			dispatch(ArticlesPageSliceActions.initState())
			dispatch(fetchArticlesList({}))
		}
	}
)
