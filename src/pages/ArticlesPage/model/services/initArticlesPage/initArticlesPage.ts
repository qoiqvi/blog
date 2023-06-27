import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { ArticlesPageSliceActions } from "../../slice/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"
import { getArticlesListInited } from "../../selectors/articlesPageSelectors"

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	"articlesPage/fetchArticlesList",
	async (_, { dispatch, getState }) => {
		const inited = getArticlesListInited(getState())

		if (!inited) {
			dispatch(ArticlesPageSliceActions.initState())
			dispatch(fetchArticlesList({ page: 1 }))
		}
	}
)
