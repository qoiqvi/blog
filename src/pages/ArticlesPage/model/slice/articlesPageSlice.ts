import { type PayloadAction, createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { StateSchema } from "App/provider/StoreProvider"
import { Article, ArticleView } from "entities/Article"
import { ArticlesPageSchema } from "../types/articlesPageSchema"
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList"
import { VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage"
import { ArticleSortField } from "entities/Article/model/types/article"
import { SortOrder } from "shared/types"

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
		limit: 9,
		ids: [],
		view: ArticleView.LIST,
		page: 1,
		hasMore: true,
		_inited: false,
		search: "",
		order: "asc",
		sort: ArticleSortField.CREATED,
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
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		setSort: (state, action: PayloadAction<ArticleSortField>) => {
			state.sort = action.payload
		},
		setOrder: (state, action: PayloadAction<SortOrder>) => {
			state.order = action.payload
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
				state.hasMore = action.payload.length > 1
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: ArticlesPageSliceActions } = ArticlesPageSlice
export const { reducer: ArticlesPageSliceReducer } = ArticlesPageSlice
