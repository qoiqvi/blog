import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { ArticleDetailsSchema } from "../types/articleDetailsSchema"
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById"
import type { Article } from "../types/article"

const initialState: ArticleDetailsSchema = {
	isLoading: false,
	error: undefined,
	data: undefined,
}

export const ArticleDetailsSlice = createSlice({
	name: "ArticleDetails",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleById.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
				state.data = action.payload
				state.isLoading = false
			})
			.addCase(fetchArticleById.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: articleDetailsActions } = ArticleDetailsSlice
export const { reducer: articleDetailsReducer } = ArticleDetailsSlice
