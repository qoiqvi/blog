import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import {
	getArticlesListHasMore,
	getArticlesListIsLoading,
	getArticlesListPage,
} from "../../selectors/articlesPageSelectors"
import { ArticlesPageSliceActions } from "../../slice/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
	"articlesPage/fetchNextArticles",
	async (_, { getState, dispatch }) => {
		const hasMore = getArticlesListHasMore(getState())
		const page = getArticlesListPage(getState())
		const isLoading = getArticlesListIsLoading(getState())

		if (hasMore && !isLoading) {
			dispatch(ArticlesPageSliceActions.setPage(page + 1))
			dispatch(fetchArticlesList({}))
		}
	}
)
