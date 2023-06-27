import { type PayloadAction, createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { StateSchema } from "App/provider/StoreProvider"
import { Article, ArticleView } from "entities/Article"
import { ArticlesPageSchema } from "../types/articlesPageSchema"
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList"
import { VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage"

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articlesPage || articlesAdapter.getInitialState()
)

export const ArticlesPageSlice = createSlice({
	name: "ArticlesPageSlice",
	initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
		isLoading: false,
		error: undefined,
		entities: {},
		ids: [],
		view: ArticleView.LIST,
		page: 1,
		hasMore: true,
		_inited: false,
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload
			localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload)
		},
		initState: (state) => {
			const view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
			state.view = view
			state.limit = view === ArticleView.DETAIL ? 4 : 9
			state._inited = true
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false
				articlesAdapter.addMany(state, action.payload)
				// console.log(state.hasMore, action.payload)
				state.hasMore = action.payload.length > 0
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: ArticlesPageSliceActions } = ArticlesPageSlice
export const { reducer: ArticlesPageSliceReducer } = ArticlesPageSlice
