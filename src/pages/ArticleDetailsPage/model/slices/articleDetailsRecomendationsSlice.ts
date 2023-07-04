import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { StateSchema } from "App/provider/StoreProvider"
import { ArticleDetailsRecomendationsSchema } from "../types/articleDetailsRecomendationsSchema"
import { Article } from "entities/Article"
import { fetchArticlesRecomendations } from "../services/fetchArticleRecomendations/fetchArticleRecomendations"

const recomandationsAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
})

export const getArticleRecomendations = recomandationsAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsPage?.recommendations || recomandationsAdapter.getInitialState()
)

const articleDetailsRecomendationsSlice = createSlice({
	name: "articleDetailsRecomendationsSlice",
	initialState: recomandationsAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesRecomendations.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchArticlesRecomendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false
				recomandationsAdapter.setAll(state, action.payload)
			})
			.addCase(fetchArticlesRecomendations.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { reducer: articleDetailsRecomendationsReducer } = articleDetailsRecomendationsSlice
