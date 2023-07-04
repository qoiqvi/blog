import { combineReducers } from "@reduxjs/toolkit"
import { ArticleDetailsPageSchema } from "../types"
import { articleDetailsRecomendationsReducer } from "./articleDetailsRecomendationsSlice"
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice"

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
	recommendations: articleDetailsRecomendationsReducer,
	comments: articleDetailsCommentsReducer,
})
