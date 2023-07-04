import { StateSchema } from "App/provider/StoreProvider"

export const getArticleDetailsPageCommentErorr = (state: StateSchema) => state.articleDetailsPage?.comments.error

export const getArticleDetailsPageCommentIsLoading = (state: StateSchema) =>
	state.articleDetailsPage?.comments.isLoading
